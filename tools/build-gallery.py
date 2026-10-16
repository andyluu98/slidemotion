"""Gom 86 thẻ style thành docs/styles.json cho trang giới thiệu.
Chạy từ gốc repo: python tools/build-gallery.py"""
import json, re, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
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
    colors = []
    for c in re.findall(r'#[0-9A-Fa-f]{6}\b', css.group(1) if css else card):
        if c.upper() not in colors:
            colors.append(c.upper())
    out.append({'name': cells[0], 'slug': slug, 'group': group, 'mood': cells[2], 'use': cells[3],
                'fonts': cells[4], 'quote': quote.group(1) if quote else '', 'colors': colors[:6]})

(root / 'docs').mkdir(exist_ok=True)
(root / 'docs' / 'styles.json').write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding='utf8')
# styles.js: cùng dữ liệu, nạp được cả khi mở index.html trực tiếp từ ổ đĩa (file://)
(root / 'docs' / 'styles.js').write_text('window.STYLES=' + json.dumps(out, ensure_ascii=False) + ';', encoding='utf8')
print(len(out), 'style', sum(1 for s in out if len(s['colors']) < 3), 'thẻ có dưới 3 màu')
