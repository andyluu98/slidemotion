# SlideMotion

**Gõ chủ đề, AI làm đạo diễn, ra deck có hồn.** Không khung dựng sẵn, không slide nào giống slide nào.

SlideMotion là một skill cho Claude Code (và các agent đọc được SKILL.md): thay vì ép AI điền nội dung vào khuôn, nó đưa cho AI một cuốn sách phong cách gồm 85 style, một từ điển chuyển động, và một runtime nhỏ để chiếu. AI tự thiết kế từng slide: hình ẩn dụ đúng chủ đề, chuyển động đúng động từ của câu.

## Có gì trong repo

| Thư mục | Nội dung |
|---|---|
| `SKILL.md` | Tinh thần, quy trình (chọn chế độ, ý tưởng lớn, kịch bản đạo diễn, dựng, tự soát, bàn giao) |
| `modes/` | Ba chế độ: `giang-day` (dạy lý thuyết), `bao-cao` (trình bày kết quả), `su-kien` (ra mắt, pitch) |
| `scenes/cong-thuc.md` | 13 công thức cơ chế (bấm từng bước, câu hỏi kiểm tra, toàn cảnh lia, vật xuyên suốt, đo chữ để khoanh, bản phát tay...), cố ý không có bố cục để AI không chép |
| `tests/kiem-thu-runtime.html` | Tệp kiểm thử runtime, không dùng làm mẫu thiết kế |
| `styles/` | `INDEX.md` để chọn style, mỗi style một thẻ gợi ý (màu, chữ, ngôn ngữ minh họa, chữ ký chuyển động, khoảnh khắc đáng nhớ) |
| `motion/tu-dien.md` | Động từ của ý, hiệu ứng HTML tương ứng, hiệu ứng PowerPoint tương ứng |
| `runtime/deck.js` | Co khung 16:9, điều hướng, `data-anim`, `data-loop`, `data-step`, `data-morph`, `data-count`, toàn cảnh lia (`data-cam`, `data-parallax`), in bản phát tay (Ctrl+P) |
| `examples/` | Cùng chủ đề AI trong xây dựng, dựng theo ba cách khác hẳn nhau (blueprint, bảng trắng, "một ngày ở công trường") |

## Cài vào Claude Code

Chép thư mục repo vào `~/.claude/skills/slidemotion`, rồi nói: "làm slide về ... theo style blueprint".

## Trạng thái

- [x] Giai đoạn 1: runtime, SKILL.md, từ điển chuyển động, 5 thẻ style thử, 2 deck mẫu
- [x] Giai đoạn 2: đủ 85 thẻ style
- [x] Ba chế độ: giảng dạy, báo cáo, sự kiện; công thức cơ chế; in bản phát tay
- [ ] Giai đoạn 3: xuất PowerPoint giữ hiệu ứng tương ứng
- [ ] Giai đoạn 4: GIF demo, trang giới thiệu

## Ghi công

Nhiều style phỏng theo MotionFly / lemo-opuscar (MIT) và frontend-slides (MIT), qua SlideFly. Ghi công cụ thể ở cuối từng thẻ style.
