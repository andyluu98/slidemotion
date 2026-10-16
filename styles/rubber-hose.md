# Rubber hose 1930 (hoạt hình đen trắng thời đầu phim có tiếng)

> Một cuộn phim cũ chiếu trong khung bo tròn: giấy ngà, mực gần đen, và mọi đồ vật đều có mặt cười, tay chân ống cao su nhún theo nhạc jazz.

**Hợp:** bài giảng nhẹ nhàng, nội dung cho thiếu nhi hoặc gia đình, quảng cáo vui, kể chuyện bằng đồ vật có mặt cười, thương hiệu đồ uống, đồ gia dụng.
**Không hợp:** số liệu cần màu để phân biệt nhóm, công nghệ hiện đại, chủ đề nghiêm trọng.
**Cảm xúc:** hoài cổ, nhí nhảnh, đen trắng, nhạc jazz.

## Hình dung
Người xem ngồi trong rạp cũ: khung phim bo tròn, giấy ngà, xước dọc và bụi li ti chạy qua. Trong khung, cái cốc, viên đường, tấm slide đều là nhân vật: thân chính là đồ vật, mắt hình bánh, găng trắng bốn ngón, giày đen tròn to, tay chân như ống mì đều nét. Mọi thứ, kể cả cái bàn, "thở" theo nhịp jazz. Thẻ tiêu đề đen viền đôi chen giữa như phim thời đó.

## Bảng màu
```css
--ink: #151413;     /* mực gần đen: viền, tròng mắt, giày, thẻ tiêu đề */
--paper: #EBE4D1;   /* giấy ngà: nền, chữ trên thẻ đen */
--white: #FBF9F3;   /* thân vật, găng, lòng ống tay */
--shade: #BDB6A6;   /* một dải bóng cứng ở cạnh phải vật */
--g1: #3A3835; --g2: #77726A; --g3: #A9A397; --g4: #CBC4B3;  /* bậc xám cho tường, sàn, bóng lệch */
--muted: #4A463F;
--card-bg: #F7F3E8;
```
Chỉ đen, trắng và xám, không một sắc màu nào, kể cả vết xước. Nhân vật giữ hai đầu mút (trắng sáng, đen đậm), nền dùng các bậc xám giữa. Điểm nhấn là tương phản, không phải màu.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Playfair+Display+SC:wght@700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề, con số: Lobster (chữ nét liền uốn lượn kiểu thẻ tiêu đề phim cũ). Có tiếng Việt (đã kiểm).
- Dòng dẫn nhỏ (kicker): Playfair Display SC 700. Có tiếng Việt (đã kiểm).
- Thân: Be Vietnam Pro 400 đến 600.
- Lobster đọc khó khi dài: chỉ dùng cho tiêu đề ngắn và số.

## Bề mặt
Tờ giấy ngà nằm trong khung phim bo tròn tối, xước dọc mảnh và bụi rải ngẫu nhiên. Có thể đặt tường giấy dán tường xám và sàn ca rô đen trắng làm sân khấu.
```css
background: #EBE4D1;
box-shadow: inset 0 0 0 28px #151413;  /* khung phim, bo góc lớn bằng border-radius trên lớp trong */
```

## Ngôn ngữ minh họa
- **Ống cao su là hai nét chồng:** nét mực 17px bên dưới, nét trắng 8px bên trên, cùng một đường dẫn; không khuỷu, không đầu gối. Chân là nét mực 10px.
- Nét viền 6px cho nhân vật lớn, 4 đến 4,5px cho vật nhỏ, 3,5px cho đường chỉ; mũi tên cong đứt `12 9`. Đầu nét tròn.
- **Một dải bóng cứng** màu `--shade` ở phía xa nguồn sáng (sáng từ trên trái), vẽ trong thân trước rồi viền đè lên.
- Mắt hình bánh (tròng đen khoét một nêm trắng), bốn kiểu miệng (cười toác, cười mỉm, phẳng, lo lắng có giọt mồ hôi), găng trắng có ba vạch may, giày elip mực có chấm sáng.
- Thẻ tiêu đề: nền mực bo 10px, viền trắng mảnh trong cách mép 6px. Huy hiệu số: đĩa trắng viền mực, số Lobster.
- Cả đồ vật là thân: không đặt đầu cốc lên thân người.

## Chữ ký chuyển động
- **Nhún theo nhịp jazz:** nhân vật và cả vật trang trí nhún cùng một nhịp đều (`data-loop="sway"` hoặc nhún lên xuống ngắn), như cả khung hình đang nghe nhạc. Đây là "nhịp tim" của deck.
- **Mở, đóng ống kính tròn:** đầu và cuối chương mở bằng vòng tròn đen co lại hoặc nở ra quanh nhân vật (iris), bản PPTX hạ về Fade.
- **Thẻ tiêu đề chen ngang:** chương mới cắt dứt khoát sang thẻ đen viền đôi (`data-transition="cut"`), chữ trắng hiện ngay, giữ một nhịp rồi cắt về cảnh.
- **Nhảy và dẹt:** vật vào cảnh bằng `drop` có nảy rõ, như nảy trên sàn ca rô.
- **Găng vẫy chào:** bàn tay găng `data-loop="sway"` quanh cổ tay, dùng cho lời chào, lời mời.
- **Phim cũ chạy:** lớp xước dọc và bụi nhấp nháy lặp (`data-loop="blink"` thưa, lệch pha).
- Nhịp: chẵn bốn phách, nảy, hơi quá đà; mọi động tác kết thúc đúng phách.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** ống kính tròn mở ra, một cái cốc có mặt cười nhún nhảy, găng vẫy chào, tên deck chữ Lobster trên thẻ đen.
- **Trước và sau:** cùng một nhân vật hai tư thế (đứng ủ rũ, rồi nhảy cẫng) bằng `data-morph`.
- **Ba ý chính:** ba đồ vật đứng thành hàng, mỗi vật đeo một huy hiệu số, nhún lệch phách nhau.
- **Kết:** thẻ "HẾT" kiểu phim cũ, ống kính tròn đóng lại quanh nhân vật đang cúi chào.

## Nên tránh
Mọi sắc màu, gradient tô vật, bóng mờ, 3D bóng loáng; nhân vật có bản quyền hoặc giống một nhân vật nổi tiếng (tai tròn, quần đỏ, mắt nêm đặc trưng); người cầm cốc hay đầu cốc trên thân người; chữ thoại trong bong bóng; số liệu bịa; câu dài trong hình.

## Họ hàng
`silent-film` (phim câm đen trắng, ảnh thật, khung chữ thoại, kịch tính khô; ở đây là hoạt hình nét mực và nhạc là động cơ), `midcentury-toon` (hoạt hình hoài cổ hai mươi năm sau, có màu in lệch, hình học hơn), `monochrome` (đen trắng tối giản hiện đại, không có nhân vật).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
