# Pink Script (sau nửa đêm, tạp chí thời trang)

> Trang đen ấm được rọi từ một góc, hạt phim mịn, khung tóc mảnh, và chữ serif hồng fuchsia tỏa quầng sáng nhẹ như đèn neon sau cửa kính.

**Hợp:** ra mắt thương hiệu thời trang, mỹ phẩm, nước hoa, sản phẩm cao cấp, sự kiện buổi tối, tiệc ra mắt, lookbook.
**Không hợp:** đào tạo kỹ thuật, số liệu dày, trẻ em, nội dung ban ngày tươi sáng.
**Cảm xúc:** đêm muộn, sang trọng, quyến rũ, tạp chí thời trang.

## Hình dung
Như trang quảng cáo nước hoa trong tạp chí thời trang số tháng mười hai: căn phòng tối, một chiếc đèn softbox hắt từ góc trên trái, dấu "&" hồng khổng lồ đứng trong khung như chai nước hoa trên bệ. Mọi thứ còn lại im lặng, chỉ có màu hồng là được lên tiếng.

## Bảng màu
```css
--bg: #060507;        /* đen ấm */
--paper: #f5edf1;     /* chữ chính, khung tóc */
--muted: rgba(245, 237, 241, 0.62);
--hair: rgba(245, 237, 241, 0.18);   /* khung trang, đường kẻ phụ */
--pink: #ed3d8c;      /* fuchsia: tiêu đề bìa, chữ nhấn, khung, chấm */
--glow: 0 0 80px rgba(237, 61, 140, 0.38);  /* quầng hồng */
```
Luật màu: hồng là ánh đèn duy nhất trong phòng. Mỗi slide một vùng hồng sáng (một chữ, một khung hoặc một chấm), phần còn lại là đen và trắng hồng nhạt.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- Tiêu đề: Playfair Display 400, giãn âm nhẹ; tiêu đề bìa và kết màu hồng có quầng sáng.
- Thân: Inter 300, mảnh và thoáng; chữ đậm trong câu đổi sang màu hồng thay vì tăng độ đậm.
- Nhãn, ngày, tên bộ sưu tập: JetBrains Mono 400 IN HOA, giãn 0,16em.
- Bản gốc dùng DM Serif Display; SlideFly đổi sang Playfair Display vì có tiếng Việt.

## Bề mặt
Nền đen ấm, một vùng sáng tỏa tròn ở góc như đèn softbox, quầng hồng mờ sau chữ chính, hạt phim phủ toàn trang (nhiễu fractal trắng 16%, hòa trộn `screen`). Khung tóc 2px lùi vào 36px quanh trang.
```css
background: radial-gradient(closest-side, rgba(38,24,33,.95), rgba(26,18,24,.6) 50%, transparent) -400px -400px / 1800px 1300px no-repeat, #060507;
```

## Ngôn ngữ minh họa
- **Dấu "&" khổng lồ** Playfair màu hồng có quầng, là "sản phẩm" của trang.
- **Khung hồng mảnh 2px:** lúc là bệ quảng cáo quanh "&", lúc khoanh điểm nhấn, lúc thành dải ma trận số liệu.
- **Đường kẻ hồng** 2px và **đường tóc** trắng hồng 18% làm nhịp.
- **Chấm hồng có vòng** (chấm 18px, vòng 2px cách 9px) để đánh dấu điểm trên biểu đồ.
- Ảnh (nếu có): chân dung hoặc sản phẩm trên nền tối, ánh sáng gắt một phía, có thể phủ hồng nhẹ.
- Biểu đồ: nét tóc mảnh, một đường duy nhất màu hồng.

## Chữ ký chuyển động
- **Bật đèn:** vùng sáng softbox hiện dần từ góc (`fade` dài 1200ms) trước mọi thứ khác, như đèn studio vừa bật.
- **Lấy nét ống kính:** tiêu đề hồng hiện bằng `blur`, quầng sáng đến sau chữ một nhịp.
- **Khung tự viền:** khung hồng `draw` một vòng quanh "&" hoặc quanh con số.
- **Dấu "&" thở:** quầng hồng sáng tối rất chậm (`pulse` trên lớp quầng, không trên chữ).
- **Đèn lia:** sang slide mới, vùng sáng trượt từ góc này sang góc khác (lớp cố định theo `data-scene`), "&" đổi vai qua `data-morph="amp"`.
- Nhịp: chậm, mượt, gợi cảm. Không nảy, không bật.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** đèn bật, khung hồng viền quanh dấu "&" bên phải như bệ nước hoa, tên thương hiệu hồng bên trái, một vạch hồng dọc.
- **Mở chương:** "&" khổng lồ chiếm nửa phải, khung ôm số chương.
- **Con số:** khung hồng kéo thành dải ngang, đường tóc chia ba ô, mỗi số có quầng nhẹ.
- **Kết:** khung siết lại quanh lời cảm ơn, "&" nhỏ ký tên ở góc như chữ ký nhà mốt.

## Nên tránh
Nhiều màu nhấn, nền sáng, chữ đậm nặng, icon phẳng, bóng đổ kiểu app, quầng hồng dày quanh mọi thứ, nhịp nhanh.

## Họ hàng
`dark-botanical` (cũng tối và sang nhưng mềm, thực vật, không có neon), `art-deco` (sang trọng lễ hội phương Tây, vàng kim và hình học), `emerald-editorial` (bìa tạp chí ban ngày, xanh lục bảo).

*Ý tưởng gốc: frontend-slides (MIT), mẫu "pink-script", qua SlideFly.*
