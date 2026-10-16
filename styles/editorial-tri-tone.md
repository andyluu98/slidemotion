# Editorial Tri-Tone (trang tạp chí ba màu)

> Đúng ba màu: hồng phấn, vàng bơ, đỏ rượu vang. Như trang đôi của một tạp chí văn chương: mặt phẳng chia đôi, dấu đoạn "§" serif nghiêng, viên kẹo, thẻ bo mềm và hàng chấm chân trang.

**Hợp:** tạp chí, thời trang, phong cách sống, pitch sáng tạo, thương hiệu mỹ phẩm, ẩm thực tinh tế, giới thiệu bộ sưu tập.
**Không hợp:** kỹ thuật, số liệu dày, sự kiện nghiêm trang, nội dung cần nhiều màu phân loại.
**Cảm xúc:** biên tập, ấm áp, chỉn chu, sang.

## Hình dung
Một trang đôi tạp chí mở ra: một bên vàng bơ, một bên đỏ rượu vang, mép dưới hồng phấn. Ký hiệu "§" khổng lồ, serif nghiêng, đứng trên mảng vang như chữ cái đầu đoạn. Ở chân trang, hàng chấm nhỏ cho biết đang ở trang nào. Người xem thấy sự chăm chút: màu ít nhưng phối có chủ đích.

## Bảng màu
```css
--butter: #F2D86A;               /* vàng bơ: nền chính */
--wine: #7A1F35;                 /* đỏ vang: chữ, mảng sâu, thẻ */
--pink: #F2B6C6;                 /* hồng phấn: mảng, đĩa, chữ trên nền vang */
--muted: rgba(122,31,53,.78);    /* chữ phụ */
```
Luật màu: chỉ ba màu, không thêm trắng hay đen. Mỗi màu có thể làm nền cho hai màu kia. Trên nền vang: tiêu đề hồng, thân vàng bơ. Trên nền vàng hoặc hồng: chữ vang.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Playfair+Display:ital,wght@0,400;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- Tiêu đề và thân: Bricolage Grotesque; tiêu đề 700 giãn -0,02em, bìa 800 giãn -0,04em.
- Số, mốc thời gian, trích dẫn, chữ nhấn `<em>`: Playfair Display nghiêng 400, đây là "giọng thứ hai" của style.
- Nhãn, meta: JetBrains Mono 500 IN HOA, giãn 0,15em, 22px.
- Cả ba font có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Mặt phẳng màu đặc chia trang theo tấm (trái, phải, dải dưới). Không hạt, không bóng. Một hairline vang mờ 25% làm đường gạch dưới tiêu đề.

## Ngôn ngữ minh họa
- **Dấu "§"** Playfair nghiêng khổng lồ (khoảng 460px) màu hồng trên nền vang; ở slide trích dẫn đổi thành dấu ngoặc kép.
- **Viên kẹo** vang bo tròn làm nhãn đầu trang hoặc dải ruy băng.
- **Thẻ bo 28px** màu vang, có thể cuộn thành đĩa tròn.
- **Đĩa màu** tròn đặc (hồng hoặc vàng bơ) như mẫu màu.
- **Hàng chấm chân trang:** một chấm đậm, các chấm sau mờ 30%, như chỉ số trang.
- Mốc thời gian: vòng vang viền vàng bơ 5px trên dải ruy băng vang.

## Chữ ký chuyển động
- **Thẻ cuộn thành đĩa:** thẻ bo góc vang ở slide trước cuộn tròn thành đĩa ở slide sau (`data-morph="card"`, bo góc tăng tới 50%).
- **Dấu § nổi lên:** "§" hiện bằng `blur` chậm kèm xoay nhẹ 6 độ về 0, như mực vừa thấm giấy.
- **Chấm trang chạy:** chấm đậm ở hàng chân trang dịch sang vị trí mới theo từng slide (lớp cố định theo `data-scene`), người xem luôn biết mình đang ở đâu.
- **Kẹo duỗi thành ruy băng:** viên kẹo nhãn kéo dài thành trục thời gian (`data-morph="pill"`), các mốc `pop` lần lượt.
- **Trăng hồng mọc** ở slide kết: đĩa hồng `rise` chậm từ mép dưới nền vang.
- Nhịp: mềm, sang, ease-in-out dài, không nảy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** trang vàng bơ, tiêu đề vang 800 bên trái, mảng vang bên phải với "§" hồng nổi lên, đĩa vàng bơ ở chân mảng.
- **Chương:** trang đôi vang và hồng, số chương Playfair nghiêng 260px.
- **Số liệu:** vang phủ trang, các con số hồng serif nghiêng `data-count`.
- **Kết:** vang phủ trang, trăng hồng mọc, lời cảm ơn 200px.

## Nên tránh
Màu thứ tư (kể cả trắng, đen, xám), bóng đổ, gradient, số liệu bằng font không chân (mất giọng thứ hai), chữ vàng bơ trên nền hồng (thiếu tương phản).

## Họ hàng
`emerald-editorial` (bìa tạp chí xanh ngọc và xanh navy, didone đậm, khung cứng), `soft-editorial` (tạp chí văn chương nền sáng tĩnh lặng, ít mảng màu), `pink-script` (tạp chí thời trang đêm muộn nền tối).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
