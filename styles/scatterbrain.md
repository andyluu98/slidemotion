# Scatterbrain (bức tường giấy note của buổi brainstorm)

> Cả deck là bức tường phòng workshop: bảng bần, giấy note năm màu ghim đỏ và băng dính, nét mực nguệch ngoạc. Bừa, nhưng bừa có chủ ý.

**Hợp:** workshop, brainstorm, đào tạo sáng tạo, buổi ý tưởng, retro nhóm, kick-off dự án.
**Không hợp:** báo cáo tài chính, hội đồng quản trị, sự kiện trang nghiêm, tang lễ, chủ đề y tế nghiêm trọng.
**Cảm xúc:** vui tươi, sáng tạo, ấm áp, bừa có chủ ý.

## Hình dung
Người xem như vừa bước vào phòng họp sau một buổi động não: tường phủ giấy kẻ ô màu kem, một tấm bảng bần lớn, giấy note dán chéo, ghim đỏ, mảnh băng dính mờ đè lên góc. Mỗi ý là một tờ note; nhóm ý là một cụm note; ý quan trọng được ghim to và dán băng dính thêm cho chắc. Không ai đo thước, mọi thứ hơi nghiêng.

## Bảng màu
```css
--paper: #f7f5f0;     /* tường giấy kẻ ô */
--ink: #2d2a26;       /* mực: chữ, nét nguệch ngoạc, vòng "vs" */
--muted: #5c5750;
--accent: #c92a2a;    /* đỏ ghim: chấm đầu dòng, điểm nhấn nhỏ */
--note-y: #ffe066;    /* note vàng (đổ dần #ffd43b): ý chính */
--note-b: #a5d8ff;    /* note xanh (đổ dần #74c0fc) */
--note-p: #ffc9c9;    /* note hồng (đổ dần #ff9f9f) */
--note-g: #b2f2bb;    /* note xanh lá (đổ dần #8ce99a) */
--note-w: #ffffff;    /* note trắng viền mực 3px: dải nhãn, kết luận */
--cork: #c69c6d;      /* bảng bần (gradient #d4ae7f đến #b98a5a) */
```
Màu note nên mang nghĩa trong cả deck (ví dụ vàng = ý, hồng = vấn đề, xanh = giải pháp) chứ không rải ngẫu nhiên. Đỏ ghim chỉ dùng cho chi tiết nhỏ, không tô mảng lớn.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Patrick+Hand&family=Roboto+Slab:wght@400;500;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Lobster 400, chữ viết bút dạ béo, vui. Dùng cho câu ngắn, không dùng cho đoạn dài.
- Thân: Roboto Slab 400 đến 500, chân chữ vuông dễ đọc trên nền note.
- Chữ tay, nhãn, ghi chú: Patrick Hand ("ý hay!", "vote", "nhóm 2"), có thể nghiêng -2 độ.
- Bản gốc dùng Shrikhand, Caveat, Zilla Slab; Zilla Slab không có tiếng Việt nên đã thay bằng Roboto Slab. Cả ba font trên đều đã kiểm có khối tiếng Việt.

## Bề mặt
Giấy kem kẻ ô 40px rất mờ, hai vầng màu nhạt (vàng góc trên trái, xanh góc dưới phải), hạt giấy phủ trên cùng 6%. Bảng bần có lỗ ghim chữ thập nhỏ và bóng tối viền trong.
```css
background-image:
  radial-gradient(60% 50% at 12% 8%, rgba(255,224,102,.22), transparent 70%),
  radial-gradient(50% 45% at 92% 90%, rgba(165,216,255,.22), transparent 70%),
  linear-gradient(rgba(45,42,38,.06) 1px, transparent 1px),
  linear-gradient(90deg, rgba(45,42,38,.06) 1px, transparent 1px);
background-size: auto, auto, 40px 40px, 40px 40px;
```

## Ngôn ngữ minh họa
- **Giấy note** vuông, góc nhọn, xoay -12 đến 12 độ, bóng nâng mềm (`4px 6px 22px rgba(45,42,38,.2)`).
- **Ghim tròn** gradient đỏ (#ff6b6b sang #c92a2a), có khi ghim xanh hoặc xanh lá để phân nhóm. **Băng dính** trắng mờ 55%, xoay chéo 38 độ đè lên góc.
- **Nét mực nguệch ngoạc** gợn sóng dưới tiêu đề; vòng tròn mực chữ "vs" giữa hai phương án.
- Mũi tên, vòng khoanh, gạch chân vẽ tay bằng mực, nét tròn đầu, hơi run.
- Sơ đồ = các cụm note nối nhau bằng sợi chỉ hoặc nét mực; không dùng hộp bo góc kiểu phần mềm.

## Chữ ký chuyển động
- **Dán note:** từng tờ `drop` xuống tường, mỗi tờ trễ lệch nhau không đều (`data-stagger` 90 đến 160), tiếp đất hơi nảy rồi nằm yên ở góc nghiêng riêng.
- **Ghim bấm:** ghim `pop` sau khi note đã nằm; băng dính `wipe` chéo qua góc ngay sau đó.
- **Gom cụm:** các note rời ở slide trước `data-morph` về thành một cụm sát nhau ở slide sau, như lúc nhóm sắp xếp ý (affinity map).
- **Nét mực tự viết:** gạch chân, mũi tên, vòng khoanh `draw` nhanh như tay cầm bút dạ.
- **Note treo một ghim** đung đưa nhẹ (`data-loop="sway"`) cho câu hỏi còn bỏ ngỏ.
- Nhịp: tươi, hơi lộn xộn, có nảy; mỗi slide một hai nhịp bất ngờ.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** bảng bần phủ kín, một tờ note vàng khổng lồ ghim và dán băng dính mang tên buổi, các note nhỏ dán quanh góc.
- **Động não:** hàng chục note nhỏ rơi lả tả khắp tường, slide sau chúng tự gom thành ba cụm có nhãn tay.
- **Hai phương án:** note vàng và note xanh hai bên, vòng mực "vs" `stamp` vào giữa.
- **Bình chọn:** chấm đỏ nhỏ `pop` lần lượt lên từng note, note thắng được khoanh mực.

## Nên tránh
Lưới thẳng tắp, mọi note cùng góc nghiêng, gradient bóng bẩy, icon phẳng của phần mềm, đoạn văn dài trên note, quá năm màu note trên một slide.

## Họ hàng
`whiteboard` (vừa nói vừa vẽ, nét bút lông là nhân vật, ít vật dán), `playful` (thủ công indie, hình khối mềm, không có không khí phòng họp), `retro-zine` (cắt dán bụi bặm chất in ấn, gai góc hơn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
