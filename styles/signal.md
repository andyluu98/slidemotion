# Signal (báo cáo định chế, xanh mực và giấy ngà)

> Xanh mực thẳm và tờ giấy ngà ấm thay nhau làm nền, một màu vàng cổ duy nhất, đường kẻ mảnh như tóc. Điềm tĩnh, đáng tin, có chiều sâu.

**Hợp:** báo cáo hội đồng quản trị, gọi vốn, tư vấn chiến lược, chính sách, báo cáo thường niên, quỹ đầu tư.
**Không hợp:** sự kiện vui nhộn, trẻ em, sản phẩm tiêu dùng trẻ trung, workshop sáng tạo.
**Cảm xúc:** trang trọng, điềm tĩnh, đáng tin, có chiều sâu.

## Hình dung
Như tập hồ sơ của một định chế lâu đời đặt trên bàn họp: bìa xanh mực, trang giấy ngà, chữ serif đậm, ghi chú đánh máy đơn cách. Một con dấu vàng hình vòng tròn treo trên sợi dây dọi, như dấu niêm phong. Người xem cảm thấy mọi điều trên slide đã được cân nhắc kỹ và chịu trách nhiệm.

## Bảng màu
```css
--navy: #1C2644;      /* sân khấu xanh mực */
--cream: #F0ECE3;     /* tờ giấy ngà */
--gold: #C8A870;      /* vàng cổ: con dấu, vạch nhấn trên nền xanh */
--fg: #E2DCD0;        /* chữ trên nền xanh */
--muted: #8E9AAC;
--rule: #34446A;      /* đường kẻ mảnh trên nền xanh */
/* khi đứng trên giấy ngà */
--fg-paper: #1A2030; --muted-paper: #5A6270;
--gold-deep: #93733A; /* vàng đậm hơn để số nhỏ vẫn đọc được trên giấy */
--rule-paper: #CAC4B4;
```
Vàng chỉ dành cho một điều mỗi slide: con dấu, vạch dưới tiêu đề, hoặc chữ nhấn. Chữ nhấn trong câu viết serif nghiêng màu vàng thay vì in đậm.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=Be+Vietnam+Pro:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- Tiêu đề: Source Serif 4 600 đến 700, giãn âm nhẹ (-0,01 đến -0,02em). Số chương to, nghiêng, nét mảnh 400.
- Thân: Be Vietnam Pro 400 đến 500, dòng thoáng 1,5.
- Siêu dữ liệu (kicker, nguồn, ngày, mã tài liệu): IBM Plex Mono 500 IN HOA, giãn 0,14 đến 0,18em.
- Bản gốc dùng DM Sans cho thân; DM Sans không có tiếng Việt nên đã thay bằng Be Vietnam Pro. Ba font trên đều đã kiểm có khối tiếng Việt.

## Bề mặt
Hai chất liệu đổi vai: mặt xanh mực có lưới 80px gần như vô hình (trắng 4,5%), mặt giấy ngà phẳng và sạch. Tờ giấy trượt vào từ mép phải, nở rộng, gấp lại thành thẻ, hoặc thu về một dải mỏng ở mép trái.
```css
background-color: #1C2644;
background-image:
  linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
background-size: 80px 80px;
```

## Ngôn ngữ minh họa
- **Đường kẻ mảnh 2px** khung trên và dưới hàng tiêu đề; một **vạch vàng 3px** ngắn đè lên đường kẻ trên.
- **Con dấu vàng:** vòng tròn viền vàng 2px, treo trên sợi **dây dọi** mảnh; khi thu nhỏ thì thành một nút tròn đánh dấu.
- **Dấu ngoặc kép serif** khổng lồ nét mảnh màu vàng cho trích dẫn.
- Đầu dòng là vạch ngang ngắn, không dùng chấm tròn. Số liệu có đường kẻ trên đầu, căn trái.
- Biểu đồ nét mảnh, ít màu (xanh mực, xám, một cột vàng); không bóng, không 3D.

## Chữ ký chuyển động
- **Tờ giấy trượt:** lớp giấy ngà cố định ngoài slide đổi vị trí và bề rộng theo `data-scene` (cột phải, phủ kín, gấp thành thẻ, rút về mép), chậm và đầm như lật hồ sơ.
- **Kẻ dòng:** các đường kẻ mảnh `wipe` từ trái sang trước khi chữ hiện, vạch vàng chạy theo sau.
- **Hạ dây dọi:** sợi dây `rise-wipe` ngược từ trên xuống, con dấu vàng `draw` thành vòng tròn ở đầu dây.
- **Con dấu đổi vai** xuyên deck bằng `data-morph`: nút nhỏ góc phải, vòng lớn quanh số chương, tâm điểm trục thời gian, vòng lớn ôm lời cảm ơn.
- Chữ: tiêu đề `blur` nhẹ, thân `fade`, không `pop`, không nảy.
- Nhịp: chậm vừa, đều, có khoảng nghỉ; như người trình bày đọc từng mục.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** nền xanh mực có lưới, cột giấy ngà bên phải, dây dọi hạ xuống và con dấu vàng khép vòng; tên báo cáo serif lớn bên trái.
- **Khuyến nghị chính:** tờ giấy phủ kín, một câu duy nhất, con dấu thu về nút vàng đóng ngay cạnh chữ nghiêng vàng.
- **Chỉ số:** ba con số trên nền xanh, đường kẻ trên đầu mỗi số `wipe`, số `data-count` có ghi nguồn bằng chữ đơn cách.
- **Kết:** giấy ngà, con dấu vàng nở thành vòng lớn ôm lời cảm ơn, hai đường chân trời mảnh hai bên.

## Nên tránh
Nhiều màu nhấn, ảnh stock bắt tay, icon tròn màu, gradient sặc sỡ, chuyển động nảy hay xoay, chữ đậm hàng loạt thay cho chữ nghiêng vàng.

## Họ hàng
`editorial-forest` (cũng serif và giấy ấm nhưng xanh rêu, giọng cập nhật nội bộ), `blue-professional` (xanh tư vấn hiện đại, sans, ít chất định chế), `monochrome` (sổ cái đen trắng, không có con dấu vàng).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
