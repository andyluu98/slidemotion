# Bento Light (hộp bento sáng kiểu keynote sản phẩm)

> Nền xám nhạt, các ô thẻ trắng bo tròn xếp khít như hộp cơm bento; mỗi slide là một cách xếp hộp mới, một ô xanh chỉ vào điều đáng nhớ.

**Hợp:** báo cáo sản phẩm, startup, tổng kết quý, demo phần mềm, giới thiệu tính năng.
**Không hợp:** văn hóa truyền thống, kể chuyện cảm xúc, nội dung trẻ em, lễ hội.
**Cảm xúc:** tối giản, sạch, hiện đại, chuyên nghiệp.

## Hình dung
Như trang giới thiệu sản phẩm của một hãng công nghệ: mọi thông tin được đóng gói gọn trong từng ô, ô to cho ý lớn, ô nhỏ cho chi tiết. Người xem có cảm giác mọi thứ đã được sắp sẵn, không có gì thừa. Giữa các slide, chính những chiếc hộp tự xếp lại thành bố cục mới.

## Bảng màu
```css
--bg: #F5F5F7;      /* nền xám sáng */
--card: #FFFFFF;    /* ô thẻ */
--fg: #1D1D1F;      /* chữ chính */
--muted: #6E6E73;   /* chữ phụ, chú thích */
--accent: #0071E3;  /* xanh nhấn: một ô, một chấm, một con số */
--soft: #E8F1FD;    /* nền xanh rất nhạt cho ô phụ liên quan đến nhấn */
--hair: #D2D2D7;    /* đường chỉ mảnh */
```
- Mỗi slide chỉ một thứ màu xanh: hoặc một ô xanh đặc chữ trắng, hoặc một chấm, hoặc một con số. Phần còn lại trắng, đen, xám.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```
- Một họ chữ Inter (có tiếng Việt) cho tất cả.
- Tiêu đề: Inter 800, giãn âm -0,02em, dòng sát 1,08; tiêu đề slide kết có thể giãn âm tới -0,04em.
- Thân: Inter 400 đến 500. Nhãn nhỏ: Inter 600, giãn 0,08em.
- Con số lớn: Inter 700 đến 800, rất to, đặt một mình trong ô.

## Bề mặt
Nền xám phẳng. Ô thẻ trắng bo 32px, bóng rất nhẹ như tờ giấy nổi lên một milimét.
```css
.o { background: #fff; border-radius: 32px; box-shadow: 0 2px 12px rgba(0,0,0,.05); }
```
Ô vuông nhỏ bo 22px (cỡ khoảng 72px) dùng như biểu tượng ứng dụng đặt cạnh hàng tiêu đề.

## Ngôn ngữ minh họa
- **Lưới bento:** 3 đến 6 ô, kích thước khác nhau, khe đều (khoảng 24px). Ô lớn chứa ý chính, ô nhỏ chứa số, biểu tượng, nhãn.
- Trong ô: ảnh chụp màn hình sản phẩm bo góc, biểu đồ đơn giản một màu, biểu tượng nét 2px, con số.
- Biểu đồ: cột xám nhạt, một cột xanh là cột quan trọng; không lưới dày, không chú giải rối.
- Đường chỉ 1px `#D2D2D7` ngăn tiêu đề với vùng nội dung.

## Chữ ký chuyển động
- **Xếp lại hộp:** các ô trắng là cùng một bộ, giữa các slide chúng đổi vị trí và kích thước để thành lưới mới (`data-morph="o1"` đến `"o5"`). Đây là động tác đặc trưng nhất.
- **Ô xanh nhảy chỗ:** ô hoặc chấm xanh di chuyển tới đúng ý quan trọng của slide mới (`data-morph="xanh"`).
- **Ô hiện lần lượt:** lần đầu xuất hiện, các ô `rise` ngắn với `data-stagger="70"`, theo thứ tự đọc từ trái trên xuống phải dưới.
- **Số đếm trong ô:** con số lớn đếm lên (`data-count`), nhãn dưới số `fade`.
- **Đường chỉ kéo ra** từ giữa (`wipe`) khi có tiêu đề mới.
- Nhịp: nhanh, gọn, êm như giao diện; không nảy, không lặp.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tên sản phẩm lớn bên trái, bên phải ba bốn ô xếp chồng có ảnh sản phẩm, một ô xanh nhỏ ghi phiên bản.
- **Tổng kết quý:** lưới sáu ô, ô lớn là con số chính đếm lên, các ô nhỏ là chỉ số phụ, ô xanh là chỉ số vượt mục tiêu.
- **Demo tính năng:** một ô to chứa ảnh màn hình, các ô nhỏ bên cạnh lần lượt chỉ ra từng điểm theo cú bấm (`data-step`).
- **Kết:** các ô thu về thành một ô trắng duy nhất giữa khung, lời kêu gọi hành động trong ô xanh bên dưới.

## Nên tránh
Bóng đổ đậm, gradient, nhiều màu nhấn, ô không thẳng hàng, khe ô không đều, chữ trang trí, biểu tượng nhiều màu, hiệu ứng xoay hay nảy.

## Họ hàng
`dark-keynote` (cùng tinh thần keynote nhưng nền tối và kính), `swiss-modern` (lưới Thụy Sĩ, chữ là trọng tâm, ít ô thẻ), `neo-grid-bold` (lưới đậm, viền dày, mạnh và biên tập hơn).

*Style gốc của SlideFly.*
