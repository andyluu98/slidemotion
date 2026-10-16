# Paper & Ink (tạp chí in, giấy ấm, mực đen và đỏ son)

> Giấy ấm, mực gần đen, một màu đỏ son. Đường kẻ đơn và kẻ đôi trượt, giãn như dàn trang báo in; một dải đỏ đi xuyên deck như dây đánh dấu sách.

**Hợp:** bài nói chuyện, nghiên cứu, văn hóa, kể chuyện dài, ra mắt sách, chuyên mục bình luận, bài giảng nhân văn.
**Không hợp:** ra mắt sản phẩm công nghệ, sự kiện vui nhộn, trẻ em, deck nhiều biểu đồ màu.
**Cảm xúc:** biên tập, sâu lắng, kể chuyện.

## Hình dung
Như mở một số tạp chí văn hóa in trên giấy dày: tên chuyên mục nằm trên đường kẻ đôi, tiêu đề Garamond lớn, đoạn dẫn nghiêng, chữ thân serif đều đặn. Một miếng đỏ son chỗ này, một dấu ngoặc kép khổng lồ chỗ kia. Người xem có cảm giác đang được kể một câu chuyện có biên tập, có người chịu trách nhiệm từng chữ.

## Bảng màu
```css
--paper: #faf9f7;     /* giấy */
--tint: #efe8dc;      /* tấm giấy ngả màu: khung nổi bật, dải nền */
--ink: #1a1a1a;       /* mực: chữ, đường kẻ, mảng mực */
--muted: #5c5650;
--crimson: #c41e3a;   /* đỏ son: dải đánh dấu, dấu ngoặc kép, một điểm mỗi slide */
```
Đỏ son như mực đỏ của biên tập viên: đánh dấu, không tô nền lớn (trừ trang kết). Mảng mực đen đặc dành cho trang trích dẫn.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
```
- Tiêu đề: Cormorant Garamond 600 đến 700, căn trái ở bìa, dòng sát 1,02. Số chương nghiêng 500 cỡ 240px.
- Thân: Source Serif 4 400 đến 500; đoạn dẫn, câu chốt và trích dẫn để nghiêng.
- Kicker, tên chuyên mục: in hoa, giãn 0,24em; tên người trích dẫn in hoa giãn 0,12em.
- Hai font đã kiểm có khối tiếng Việt. (Nguồn gốc chỉ nạp Cormorant Garamond thẳng và Source Serif 4 thẳng; dòng trên bổ sung trục nghiêng để chữ nghiêng là chữ thật, không phải nghiêng giả.)

## Bề mặt
Giấy sáng phẳng. Tấm giấy ngả màu trượt vào từ mép phải làm cột hoặc dải. Có thể thêm hạt giấy rất nhẹ; không lưới.

## Ngôn ngữ minh họa
- **Kẻ đôi:** vạch 4px trên, 1px dưới, cách nhau 5px, nằm dưới tên chuyên mục hoặc tiêu đề.
- **Kẻ đơn 2px** ở chân trang; **đường dọc 1px** chia cột như khe giữa hai cột báo.
- **Dải đỏ son** cao 10px hoặc miếng đỏ son chữ nhật mang dấu ngoặc kép.
- **Dấu ngoặc kép Garamond** 520px màu đỏ son.
- Minh họa (nếu cần): tranh khắc nét, ảnh đen trắng có chú thích nghiêng; không icon màu.
- Số liệu trình bày như bảng tạp chí: cột, đường kẻ, số serif, nguồn nghiêng nhỏ.

## Chữ ký chuyển động
- **Dàn trang:** kẻ đôi `wipe` từ trái trước, tiêu đề `rise` ngắn sau, đoạn dẫn nghiêng `fade` cuối, như trang đang được sắp chữ.
- **Dây đánh dấu đỏ:** dải đỏ son là một vật xuyên deck (`data-morph`), đi từ mép bìa thành gạch dưới chương, thành thanh tiến độ trên trục thời gian, như dải lụa trong sách.
- **Mực tràn:** ở trang trích dẫn, mảng mực đen dâng từ đáy phủ kín (`rise-wipe` hoặc lớp cố định theo `data-scene`), chữ đảo thành giấy trên mực.
- **Câu trích dẫn hiện từng dòng** (`rise` với `data-stagger` 220), dấu ngoặc đỏ `fade` lớn trước đó.
- **Khe cột mở:** đường dọc 1px `draw` từ trên xuống chia hai cột so sánh.
- Nhịp: điềm đạm, như lật trang; chuyển cảnh hòa dần hoặc `wipe` khi sang chương.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tiêu đề Garamond lớn căn trái, đoạn dẫn nghiêng; bên phải tấm giấy ngả màu với miếng đỏ son mang dấu ngoặc kép.
- **Mở chương:** mảng mực bên phải, dải đỏ son vắt ngang, số chương nghiêng khổng lồ.
- **Trích dẫn:** mực tràn kín trang, dấu ngoặc đỏ, câu nghiêng hiện từng dòng, tên người nói in hoa.
- **Kết:** đỏ son phủ kín trang, đường kẻ giấy mảnh, lời cảm ơn Garamond 700.

## Nên tránh
Màu thứ ba, font sans to làm tiêu đề, icon phẳng, bo góc, bóng đổ, biểu đồ nhiều màu, chuyển động nảy hoặc xoay.

## Họ hàng
`vintage-editorial` (tạp chí cổ điển dí dỏm hơn, có cá tính, nhiều màu giấy cũ), `monochrome` (sổ cái đen trắng, không có đỏ son), `editorial-forest` (serif và giấy ấm, tông xanh rêu, giọng báo cáo nội bộ).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
