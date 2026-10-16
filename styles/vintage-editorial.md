# Vintage Editorial (tạp chí cổ điển)

> Giấy kem, mực đen, một mảng nâu đất in lệch. Như trang tạp chí có chính kiến: chữ serif lớn, hình học trừu tượng, câu nói sắc.

**Hợp:** bài nói có chính kiến, chia sẻ góc nhìn, thương hiệu sáng tạo, câu chuyện doanh nghiệp, bài viết dài thành slide.
**Không hợp:** số liệu dày đặc, demo phần mềm, trẻ em.
**Cảm xúc:** tạp chí cổ điển, dí dỏm, tự tin, có cá tính.

## Hình dung
Mỗi slide là một trang tạp chí in: lề rộng, tiêu đề serif đậm chiếm nửa trang, câu trích to như pull-quote, khung viền đen dày có mảng màu nâu in lệch phía sau như bản in hai lớp bị trượt.

## Bảng màu
```css
--bg: #f5f3ee;     /* giấy kem */
--card: #fbfaf6;   /* giấy sáng hơn cho khung */
--fg: #1a1a1a;     /* mực */
--muted: #555555;
--accent: #9c5b3a; /* nâu đất, chữ nhấn */
--warm: #e8d4c0;   /* mảng in lệch phía sau khung */
```

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,500;1,9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Fraunces 700 đến 900, có thể nghiêng một chữ để nhấn ("*thật sự*").
- Thân: Work Sans 400 đến 500.
- Số trang, mục: Work Sans 600 IN HOA giãn rộng, như đầu trang tạp chí.

## Bề mặt
Giấy phẳng, hạt rất nhẹ. Đường kẻ mực ngang 3px làm nhịp. Không lưới.

## Ngôn ngữ minh họa
- Chỉ hình học trừu tượng: vòng tròn viền mực, đường kẻ, chấm đặc, khung viền dày 4px.
- **Bản in lệch:** khung viền đen, phía sau là mảng `--warm` trượt 14 đến 20px chéo xuống.
- Ảnh (nếu có) cắt chữ nhật, đen trắng hoặc ngả ấm, có chú thích nhỏ in nghiêng.
- Số lớn kiểu "No. 03" thay cho icon.

## Chữ ký chuyển động
- **Trang lật:** slide vào bằng `data-transition="wipe"` như lật trang.
- **Mực thấm:** tiêu đề hiện bằng `blur` nhẹ rồi sắc nét.
- **Bản in trượt khớp:** mảng nâu phía sau khung trượt vào chỗ lệch của nó sau khi khung đã hiện (`left` trễ 300ms).
- **Đường kẻ chạy** (`wipe`) dưới tiêu đề.
- **Vòng tròn khoanh** quanh một chữ bằng nét vẽ (`draw`).
- Nhịp: thong thả, như đọc báo, không nảy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tên deck như măng-sét tạp chí, số kỳ, ngày, một vòng tròn lớn cắt mép.
- **Câu trích:** một câu chiếm cả trang, dấu ngoặc kép khổng lồ màu nâu.
- **Lập luận:** hai cột như bài báo, cột phải có pull-quote lớn.
- **Kết:** một chữ ký tay và dòng "Hết."

## Nên tránh
Màu tươi, gradient, bóng đổ mềm kiểu app, icon phẳng, bố cục bento.

## Họ hàng
`soft-editorial` (mềm và tĩnh hơn), `paper-ink` (giấy mực, kể chuyện), `broadside` (áp phích báo chí dõng dạc).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
