# Stencil & Tablet (poster lưu trữ, thẻ đất màu và số khuôn tô)

> Giấy xương bò, mảng đen đặc, những "phiến" bo góc màu đất nung xếp như thẻ hiện vật, con số phun qua khuôn tô. Mộc, dày dặn, đậm chất poster.

**Hợp:** bảo tàng, văn hóa, kiến trúc, tuyên ngôn, sổ tay hiện trường, triển lãm, chương trình lễ hội có lịch diễn.
**Không hợp:** công nghệ bóng bẩy, sản phẩm sang trọng tối giản, sức khỏe dịu nhẹ, tài liệu cần nhiều chữ nhỏ.
**Cảm xúc:** lưu trữ, mộc, dày dặn, poster.

## Hình dung
Như bức tường của một bảo tàng nhỏ hoặc tấm poster liên hoan in lụa: nền giấy bò ngà, các phiến màu cam, xanh két, mù tạt, hồng sen xếp khít như gạch, một vệt đất nâu hình hữu cơ tràn từ góc. Con số in khuôn tô to bản có khe hở đặc trưng. Người xem cảm thấy vật chất, sức nặng, như cầm được từng tấm thẻ.

## Bảng màu
```css
--bone: #E2DCC9;      /* giấy xương bò: nền chính */
--black: #000000;     /* mảng đen đặc: nền chương, chỉ số */
--ink: #0A0A0A;
--paper: #F4EFE0;     /* thẻ giấy sáng chứa chữ dài */
--muted: #4A443A;     /* trên nền đen dùng #B8B09A */
--c-orange: #EE7A2E;  /* phiến cam */
--c-teal: #2D7E73;    /* phiến xanh két, nhãn kicker */
--c-mustard: #D8A93B; /* phiến mù tạt, thanh hành động */
--c-magenta: #C73B7A; /* hồng sen: điểm nhấn, trang trích dẫn */
--c-sienna: #A06A3C;  /* vệt đất hữu cơ */
--c-blue: #3F73B7; --c-olive: #6F7A2E;  /* màu phụ */
```
Trên nền xương bò, nhấn bằng hồng sen; trên nền đen, nhấn bằng cam. Mỗi phiến một màu đặc, không đổ gradient.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Big+Shoulders+Stencil+Display:wght@800;900&family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600&family=Dela+Gothic+One&display=swap" rel="stylesheet">
```
- Tiêu đề: Bricolage Grotesque 800, giãn âm -0,03em, dòng sát 1,06 đến 1,1.
- Số (số chương, chỉ số, năm, mốc): Big Shoulders Stencil Display 800 đến 900, chữ khuôn tô.
- Nhãn, kicker, nguồn: Barlow Condensed 700 đến 800 IN HOA, giãn 0,08 đến 0,12em; kicker là viên thuốc nền xanh két chữ xương bò.
- Thân: Inter 400 đến 500. Dấu ngoặc kép lớn: Dela Gothic One.
- Năm font đã kiểm có khối tiếng Việt (Google Fonts nay cũng liệt kê tên ngắn "Big Shoulders Stencil").

## Bề mặt
Xương bò phẳng, mờ, như giấy bìa cứng. Mảng đen đặc dâng lên phủ kín ở slide chương và chỉ số. Có thể thêm hạt giấy rất nhẹ, không thêm lưới.

## Ngôn ngữ minh họa
- **Phiến (tablet):** khối chữ nhật bo 22 đến 26px, màu đặc, xếp khít cách nhau 24px như lưới gạch; mỗi phiến chứa một số hoặc một nhãn.
- **Vệt đất hữu cơ:** hình tròn méo màu nâu đất tràn ra mép, như vết đóng dấu thô.
- **Ô vuông nhỏ hồng sen** 56px làm dấu chấm câu thị giác.
- Hình minh họa nên là dạng cắt giấy phẳng, cạnh dứt khoát; biểu tượng như dấu mộc, nhãn hiện vật, bảng chỉ dẫn.
- Lịch diễn, danh sách xếp kiểu "lineup poster": các phiến nằm thành hàng, chữ in hoa.

## Chữ ký chuyển động
- **Đặt phiến:** từng phiến `drop` xuống chỗ, nặng, nảy rất ít, xếp lần lượt từ trái sang phải như người treo hiện vật (`data-stagger` 140).
- **Phun khuôn tô:** con số khổng lồ hiện bằng `wipe` từ dưới lên (`rise-wipe`) như lớp sơn phun qua khuôn.
- **Nền đen dâng:** mảng đen là lớp cố định, dâng từ đáy lên phủ sân khấu khi vào chương (`data-scene`).
- **Phiến đổi vai:** cùng một phiến cam đi từ ô bìa thành cột so sánh, thành thanh trích dẫn (`data-morph`).
- **Vệt đất trôi** chậm ở góc (`data-loop="float"`), như vật sống duy nhất trong bố cục tĩnh.
- Nhịp: chắc, theo từng khối; ít chuyển động nhỏ lắt nhắt.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tên deck Bricolage lớn bên trái, bốn phiến cam, xanh két, mù tạt xếp kín một phần ba bên phải, vệt đất ló ở góc trên.
- **Chương:** nền đen dâng, số chương khuôn tô cao nửa màn hình phun lên, các phiến thu nhỏ thành chip.
- **Trích dẫn:** phiến hồng sen nở gần kín trang, dấu ngoặc Dela Gothic màu xương bò.
- **Kết:** poster lineup: bốn phiến đóng khung trên dưới, lời cảm ơn giữa nền đen, nhãn kiểu `stamp` "LƯU TRỮ".

## Nên tránh
Gradient, bóng đổ mềm, kính mờ, nét mảnh như tóc, màu neon, chữ thân nhỏ dày đặc, chuyển động lơ lửng nhẹ tênh.

## Họ hàng
`block-frame` (khối màu pop tươi, không chất lưu trữ hay số khuôn tô), `peoples-platform` (cổ động, slab serif, giọng kêu gọi hơn), `silkscreen-poster` (in lụa phong cảnh du lịch, có minh họa cảnh vật).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
