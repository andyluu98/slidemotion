"""Gom 86 thẻ style thành docs/styles.json và docs/styles.js cho trang giới thiệu.
Mỗi style có thêm vai màu (nền, chữ, nhấn) để vẽ slide thu nhỏ đúng chất style.
Chạy từ gốc repo: python tools/build-gallery.py"""
import json, re, pathlib, colorsys

root = pathlib.Path(__file__).resolve().parent.parent


def lum(h):
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (1, 3, 5))
    f = lambda c: c / 12.92 if c <= .03928 else ((c + .055) / 1.055) ** 2.4
    return .2126 * f(r) + .7152 * f(g) + .0722 * f(b)


def contrast(a, b):
    x, y = sorted((lum(a), lum(b)), reverse=True)
    return (x + .05) / (y + .05)


def sat(h):
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (1, 3, 5))
    _, l, s = colorsys.rgb_to_hls(r, g, b)
    return s * (1 - abs(2 * l - 1))  # màu rực, không quá sáng hay quá tối


def roles(pairs, group):
    """pairs: [(tên biến, #hex)] theo thứ tự trong thẻ. Trả về nền, chữ, nhấn, nhấn phụ."""
    named = lambda keys: next((h for n, h in pairs if n in keys), None)
    hexes = [h for _, h in pairs]
    bg = named(('bg', 'paper', 'ivory', 'background', 'base', 'canvas', 'night', 'sky-night')) or hexes[0]
    # nhóm trong INDEX nói rõ nền sáng hay tối; màu "giấy" của style tối chỉ là màu chữ
    if group == 'Nền tối' and lum(bg) > .25:
        bg = min(hexes, key=lum)
    elif group == 'Nền sáng' and lum(bg) < .4:
        bg = max(hexes, key=lum)
    fg = named(('ink', 'fg', 'text', 'slate', 'foreground', 'chalk'))
    if not fg or contrast(fg, bg) < 4:
        fg = max(hexes, key=lambda h: contrast(h, bg))
    rest = [h for h in hexes if h not in (bg, fg)]
    ac = named(('accent', 'primary', 'brand', 'hot'))
    if not ac or ac in (bg, fg) or contrast(ac, bg) < 1.6:
        cands = [h for h in rest if contrast(h, bg) >= 1.6] or rest or [fg]
        ac = max(cands, key=sat)
    rest2 = [h for h in rest if h != ac and contrast(h, bg) >= 1.4]
    ac2 = max(rest2, key=sat) if rest2 else ac
    return bg, fg, ac, ac2


index = (root / 'styles' / 'INDEX.md').read_text(encoding='utf8')
out, group = [], ''
for line in index.splitlines():
    m = re.match(r'## (.+?) \(\d+\)', line)
    if m:
        group = m.group(1)
        continue
    cells = [c.strip() for c in line.strip().strip('|').split('|')]
    if len(cells) < 6 or not cells[1].startswith('`'):
        continue
    slug = cells[1].strip('`')
    card = (root / 'styles' / f'{slug}.md').read_text(encoding='utf8')
    quote = re.search(r'^> (.+)$', card, re.M)
    css = re.search(r'## Bảng màu\s*```css(.*?)```', card, re.S)
    block = css.group(1) if css else card
    pairs, seen = [], set()
    for n, h in re.findall(r'--([a-z0-9-]+)\s*:\s*(#[0-9A-Fa-f]{6})\b', block):
        if h.upper() not in seen:
            seen.add(h.upper())
            pairs.append((n, h.upper()))
    if not pairs:
        pairs = [(f'c{i}', h.upper()) for i, h in enumerate(dict.fromkeys(re.findall(r'#[0-9A-Fa-f]{6}\b', block)))]
    bg, fg, ac, ac2 = roles(pairs, group)
    fonts = [f.strip() for f in cells[4].split('+')]
    out.append({'name': cells[0], 'slug': slug, 'group': group, 'mood': cells[2], 'use': cells[3],
                'fonts': cells[4], 'display': fonts[0], 'body': fonts[1] if len(fonts) > 1 else fonts[0],
                'quote': quote.group(1) if quote else '', 'colors': [h for _, h in pairs][:6],
                'bg': bg, 'fg': fg, 'accent': ac, 'accent2': ac2})

(root / 'docs').mkdir(exist_ok=True)
(root / 'docs' / 'styles.json').write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding='utf8')
# styles.js: cùng dữ liệu, nạp được cả khi mở index.html trực tiếp từ ổ đĩa (file://)
(root / 'docs' / 'styles.js').write_text('window.STYLES=' + json.dumps(out, ensure_ascii=False) + ';', encoding='utf8')
low = [s['slug'] for s in out if contrast(s['fg'], s['bg']) < 4.5]
print(len(out), 'style; chữ trên nền dưới 4,5:1:', low)
