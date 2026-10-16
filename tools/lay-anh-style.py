"""Lấy ảnh chụp slide mẫu của từng style từ repo SlideFly (cùng tác giả, cùng bộ style)
về docs/assets/styles/<slug>-1.jpg, <slug>-2.jpg (ảnh thứ hai hiện khi rê chuột),
kèm docs/assets/styles/demo.json: slug -> tên file deck demo trên trang SlideFly.
Chạy từ gốc repo: python tools/lay-anh-style.py F:/Ck16/06-ma-nguon/slidefly"""
import json, re, sys, pathlib
from PIL import Image

root = pathlib.Path(__file__).resolve().parent.parent
sf = pathlib.Path(sys.argv[1])
gal = (sf / 'gallery' / '00-gallery.html').read_text(encoding='utf8')
out = root / 'docs' / 'assets' / 'styles'
out.mkdir(parents=True, exist_ok=True)
slugs = [p.stem for p in (root / 'styles').glob('*.md') if p.stem != 'INDEX']
demo = {}
for slug in slugs:
    m = re.search(r'<a class="thumb" href="([^"]+)"><img src="anh/([^"]+)"[^>]*>(?:<img class="alt" src="anh/([^"]+)")?', gal[gal.find(f'<code>{slug}</code>') - 600:gal.find(f'<code>{slug}</code>')]) if f'<code>{slug}</code>' in gal else None
    if not m:
        print('không có ảnh:', slug)
        continue
    demo[slug] = m.group(1)
    for i, name in enumerate(filter(None, m.groups()[1:]), 1):
        im = Image.open(sf / 'gallery' / 'anh' / name).convert('RGB')
        im.thumbnail((800, 450))
        im.save(out / f'{slug}-{i}.jpg', quality=80, optimize=True, progressive=True)
(out / 'demo.json').write_text(json.dumps(demo, ensure_ascii=False, indent=1), encoding='utf8')
print(len(demo), 'style có ảnh')
