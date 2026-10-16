# Soft Editorial (tạp chí phong cách sống, giấy kem và năm màu phấn)

> Giấy kem ấm, chữ Garamond nghiêng thanh, năm mảng màu phấn bo tròn đi từ chấm mẫu màu thành thẻ, thành tấm, thành trang. Văn chương mà dịu.

**Hợp:** tạp chí, câu chuyện thương hiệu, tư vấn, triển lãm, lookbook, giới thiệu dịch vụ cao cấp nhẹ nhàng.
**Không hợp:** công nghệ kỹ thuật dày số liệu, cảnh báo rủi ro, sự kiện thể thao, chủ đề cần năng lượng mạnh.
**Cảm xúc:** văn chương, thanh lịch, tĩnh lặng, ấm áp.

## Hình dung
Như lật một tạp chí phong cách sống in giấy mờ: trang kem, chữ serif to và thoáng, bên lề là hàng chấm mẫu màu như bảng phối của nhà thiết kế. Các mảng màu phấn lớn bo góc mềm đóng vai trang ảnh, khung trích dẫn, thẻ chỉ số. Người xem thấy thư thái, như đang đọc chứ không phải đang bị thuyết phục.

## Bảng màu
```css
--bg: #F2EEDF;        /* giấy kem */
--ink: #2A241B;       /* mực nâu đen: chữ, viền */
--muted: #5C5345;
--pink: #E1A4C2;      /* hồng: thẻ chính, trang kết */
--lemon: #D6DD63;     /* vàng chanh: thẻ nổi bật, thanh hành động */
--sage: #B7C7A8;      /* xanh xô thơm */
--blush: #E8C9B6;     /* hồng đào, dấu ngoặc kép */
--lilac: #C9BEDC;     /* tím oải hương */
--soft: rgba(255,255,255,.55);  /* thẻ trắng trong mờ chứa chữ */
```
Màu phấn là mặt nền cho chữ mực, không phải màu chữ. Mỗi slide một mảng lớn, các màu còn lại thu về chấm mẫu 40 đến 56px.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```
- Tiêu đề: Cormorant Garamond 500 đến 600, cỡ rất lớn ở bìa và kết (100 đến 170px), dòng sát 1,0.
- Kicker: Cormorant Garamond nghiêng 500, viết thường, không giãn chữ; số chương nghiêng rất lớn.
- Thân: Work Sans 400 đến 500, nhỏ gọn, sạch.
- Hai font đã kiểm có khối tiếng Việt.

## Bề mặt
Giấy kem phẳng, không lưới. Thẻ trắng trong mờ 55% bo 36px chứa chữ. Một đường kẻ ngang nét đứt mảnh (mực 40%) làm vạch phân đoạn.

## Ngôn ngữ minh họa
- **Mảng màu phấn bo 24 đến 36px**, phẳng, không bóng, không viền.
- **Hàng chấm mẫu màu** (ba đến năm chấm tròn) ở góc trên phải như chữ ký thị giác.
- **Dấu ngoặc kép Garamond nghiêng** khổng lồ màu hồng đào cho trích dẫn.
- **Vầng trăng tím** (đĩa tròn lớn tràn ra mép) cho slide lắng đọng.
- Đầu dòng là viên thuốc màu nhỏ, đổi màu lần lượt hồng, xô thơm, tím, đào.
- Ảnh (nếu có) cắt bo góc như mảng màu, màu ấm, không lọc lạnh.

## Chữ ký chuyển động
- **Chấm nở thành trang:** một chấm mẫu màu ở slide trước `data-morph` thành thẻ lớn ở slide sau; màu đó trở thành chủ đề của slide.
- **Đường nét đứt trải ra** (`wipe`) như kéo thước, trước khi tiêu đề hiện.
- **Chữ hiện như mực thấm:** tiêu đề Garamond `blur` chậm, kicker nghiêng `fade` trễ hơn một nhịp.
- **Thẻ phấn nổi lên** (`rise` khoảng cách ngắn, không nảy), mỗi thẻ trễ 120ms.
- **Vầng trăng tím trôi** rất chậm (`data-loop="float"`) ở slide trích dẫn.
- Nhịp: chậm, êm, nhiều khoảng lặng; chuyển cảnh hòa dần mặc định.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** thẻ trắng mờ chứa tên số tạp chí, một tấm hồng đào bên phải, hàng ba chấm mẫu màu góc trên `pop` lần lượt.
- **Mục lục:** bốn chấm mẫu màu bay ra thành bốn ô màu, mỗi ô một chương.
- **Trích dẫn:** dấu ngoặc kép hồng đào rơi nhẹ vào, câu nghiêng lớn, trăng tím lấp ló góc dưới trái.
- **Kết:** màu hồng tràn kín trang (lớp cố định nở theo `data-scene`), lời cảm ơn Garamond rất lớn.

## Nên tránh
Màu bão hòa mạnh, đen tuyền, góc vuông sắc, bóng đổ đậm, chuyển động nảy hoặc nhanh, biểu đồ dày, chữ in hoa giãn rộng.

## Họ hàng
`split-pastel` (cũng màu phấn nhưng sans hiện đại, vui trẻ hơn, không giọng văn chương), `editorial-tri-tone` (tạp chí thời trang ba tông, tương phản mạnh hơn), `restorative` (dịu và chữa lành, hợp sức khỏe tâm lý hơn thương hiệu).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
