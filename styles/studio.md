# Studio (deck agency, vàng axit và đen nhị phân)

> Chỉ hai màu: vàng axit trên đen, hoặc đen trên vàng. Chữ Barlow 900 in hoa là khối đồ họa, dấu "+" xoay thành "x". Điện năng, táo bạo.

**Hợp:** pitch agency sáng tạo, giới thiệu studio, tuyên ngôn thương hiệu, hồ sơ năng lực thiết kế, ra mắt chiến dịch.
**Không hợp:** báo cáo số liệu dày, y tế, giáo dục trẻ em, văn hóa truyền thống, nội dung cần dịu dàng.
**Cảm xúc:** điện năng, táo bạo, đồ họa, chất agency.

## Hình dung
Như bộ hồ sơ của một studio thiết kế tự tin: màn đen gần tuyệt đối, chữ vàng chói to như biển hiệu, và mỗi khi đổi phần thì mặt vàng tràn qua lật ngược mọi thứ. Không minh họa trang trí; chữ chính là hình. Người xem có cảm giác đang xem một đoạn showreel cắt theo nhịp nhạc.

## Bảng màu
```css
--ink: #1c1c1c;       /* nền gần đen */
--ink-2: #242422;     /* tấm đen nổi nhẹ trên nền đen */
--yellow: #f5d200;    /* vàng axit: chữ, mặt lật */
--muted: rgba(245,210,0,.64);   /* chữ phụ trên nền đen */
--line: rgba(245,210,0,.28);    /* đường kẻ 1px */
/* khi mặt vàng lật lên: chữ #1c1c1c, phụ rgba(28,28,28,.7), kẻ rgba(28,28,28,.3) */
```
Luật nhị phân: một slide chỉ có vàng và đen. Không có màu thứ ba, kể cả trong biểu đồ (dùng độ đậm và nét kẻ để phân biệt).

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700;900&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- Tiêu đề: Barlow 900 IN HOA, giãn âm -0,02em, cỡ 72 đến 130px, chữ như khối đặc.
- Thân: Barlow 400 đến 500.
- Siêu dữ liệu (tên khách, năm, vai trò, số dự án): IBM Plex Mono 500 IN HOA, giãn 0,06 đến 0,08em, chỉ dùng cho siêu dữ liệu.
- Hai font đã kiểm có khối tiếng Việt. Lưu ý chữ in hoa có dấu cần dòng cao hơn 1,08 để dấu không chạm dòng trên.

## Bề mặt
Đen phẳng, không lưới, không hạt. Hai đường kẻ 1px khung trên và dưới, một thanh dày 4px đè lên đường kẻ trên. Mặt vàng là lớp đặc phủ toàn trang hoặc một nửa.

## Ngôn ngữ minh họa
- **Dấu "+" dày** (hai thanh chéo nhau dày 24%): ở góc trên phải như logo; xoay 45 độ thành "x" khổng lồ ở slide chương và kết.
- **Khối chữ làm hình:** một từ in hoa cỡ 300px tràn mép, cắt bớt cũng được.
- **Bố cục chữ ký ba cột đơn cách** dưới tiêu đề bìa: trái kicker, giữa mô tả, phải năm.
- Ảnh (nếu có) chuyển đen trắng tương phản cao, đặt trong tấm đen nổi; không ảnh màu.
- Biểu đồ: thanh đặc vàng trên đen, nhãn mono.

## Chữ ký chuyển động
- **Lật nhị phân:** mặt vàng là lớp cố định, quét ngang toàn sân khấu khi đổi phần (`data-scene` hoặc `data-transition="wipe"`), mọi chữ đổi màu ngược theo.
- **Cộng thành nhân:** dấu "+" ở góc `data-morph` thành "x" khổng lồ ở slide sau (bọc một lớp để xoay 45 độ).
- **Chữ đập:** tiêu đề in hoa vào bằng `zoom` ngắn hoặc `left` thật nhanh, không mờ dần.
- **Cắt theo nhịp:** giữa các slide cùng phần dùng `data-transition="cut"`, như dựng phim theo beat.
- **Thanh kéo:** thanh dày 4px `wipe` ra trước, chữ theo sau.
- Nhịp: nhanh, dứt, theo phách; không lơ lửng, không lặp nhẹ nhàng.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tấm đen chiếm bốn phần năm trên, tên studio Barlow 900 khổng lồ, dấu "+" vàng góc phải; ba cột mono bên dưới hiện lần lượt.
- **Tuyên ngôn:** mặt vàng quét kín, một câu in hoa đen chiếm cả trang, từng dòng `cut` vào.
- **Dự án tiêu biểu:** cửa sổ đen nổi chứa ảnh đen trắng, tên khách và năm bằng mono.
- **Kết:** nền vàng, "x" đen khổng lồ xoay về chỗ, "CẢM ƠN" in hoa.

## Nên tránh
Màu thứ ba, gradient, bóng, bo góc lớn, font serif, icon trang trí, chuyển động chậm mềm, chữ thường cho tiêu đề.

## Họ hàng
`broadside` (cùng bộ font Barlow và Plex Mono nhưng giọng báo chí áp phích, giấy sáng), `neo-grid-bold` (đậm và lưới biên tập, nhiều màu hơn), `creative-voltage` (sôi động retro, nhiều màu và chữ tay).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
