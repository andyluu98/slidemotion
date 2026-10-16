# SlideMotion

**Gõ chủ đề, AI làm đạo diễn, ra deck có hồn.** Không khung dựng sẵn, không slide nào giống slide nào.

SlideMotion là một skill cho Claude Code (và các agent đọc được SKILL.md): thay vì ép AI điền nội dung vào khuôn, nó đưa cho AI một cuốn sách phong cách gồm 85 style, một từ điển chuyển động, và một runtime nhỏ để chiếu. AI tự thiết kế từng slide: hình ẩn dụ đúng chủ đề, chuyển động đúng động từ của câu.

## Có gì trong repo

| Thư mục | Nội dung |
|---|---|
| `SKILL.md` | Tinh thần, quy trình 6 bước, bảng tự soát |
| `styles/` | `INDEX.md` để chọn style, mỗi style một thẻ gợi ý (màu, chữ, ngôn ngữ minh họa, chữ ký chuyển động, khoảnh khắc đáng nhớ) |
| `motion/tu-dien.md` | Động từ của ý, hiệu ứng HTML tương ứng, hiệu ứng PowerPoint tương ứng |
| `runtime/deck.js` | Co khung 16:9, điều hướng, `data-anim`, `data-loop`, `data-step`, `data-morph`, `data-count` |
| `examples/` | Cùng một nội dung "AI Agent cho xây dựng" dựng ở hai style khác hẳn nhau |

## Cài vào Claude Code

Chép thư mục repo vào `~/.claude/skills/slidemotion`, rồi nói: "làm slide về ... theo style blueprint".

## Trạng thái

- [x] Giai đoạn 1: runtime, SKILL.md, từ điển chuyển động, 5 thẻ style thử, 2 deck mẫu
- [ ] Giai đoạn 2: đủ 85 thẻ style
- [ ] Giai đoạn 3: xuất PowerPoint giữ hiệu ứng tương ứng
- [ ] Giai đoạn 4: GIF demo, trang giới thiệu

## Ghi công

Nhiều style phỏng theo MotionFly / lemo-opuscar (MIT) và frontend-slides (MIT), qua SlideFly. Ghi công cụ thể ở cuối từng thẻ style.
