# Split Pastel (chia đôi màu phấn)

> Trang màu đào bị chia đôi bởi một tấm panel oải hương kẻ lưới. Huy hiệu bạc hà, vàng nhạt, hồng nhạt có icon nhỏ lăn qua lại, và một viên nhộng đen làm nút kêu gọi.

**Hợp:** workshop sáng tạo, thuyết trình nhẹ nhàng, sản phẩm cho người trẻ, giới thiệu cộng đồng, hướng dẫn vui.
**Không hợp:** báo cáo tài chính, pháp lý, chủ đề nặng nề, khách hàng cần sự trang nghiêm.
**Cảm xúc:** vui tươi, thân thiện, hiện đại, sáng tạo.

## Hình dung
Như một trang landing của ứng dụng dành cho người trẻ: một nửa màu đào ấm, một nửa oải hương có lưới mờ như giấy kẻ ô. Trên đó là những huy hiệu tròn trịa mang icon dấu tích, ngôi sao, trái tim, như sticker dán vào sổ. Tấm panel lưới là sân khấu di động: trượt từ bên này sang bên kia, thu thành thẻ, thành dải, thành khung. Người xem thấy nhẹ nhõm, như đang được mời chơi chứ không phải nghe giảng.

## Bảng màu
```css
--peach: #f5e6dc;     /* trang đào: nền chính */
--lavender: #e4dff0;  /* panel oải hương có lưới */
--ink: #1a1a1a;       /* chữ, viên nhộng đen, vòng tròn */
--muted: #574e5c;     /* chữ phụ */
--mint: #c8f0d8;      /* huy hiệu bạc hà: icon dấu tích */
--yellow: #f0f0c8;    /* huy hiệu vàng nhạt: icon ngôi sao */
--pink: #f0d4e0;      /* huy hiệu hồng nhạt: icon trái tim */
--accent: #6a4c9c;    /* tím: chữ nhấn */
```
Luật màu nhấn: mỗi màu huy hiệu gắn với một nghĩa (bạc hà là đã xong, vàng là nổi bật, hồng là yêu thích) và giữ nghĩa đó suốt deck. Mực đen chỉ dành cho một viên nhộng kêu gọi hành động mỗi slide.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```
- Tiêu đề: Plus Jakarta Sans 800, giãn -0,025em, to và tròn.
- Thân: Plus Jakarta Sans 400 đến 500.
- Chữ trên nút đen: 700, màu đào.
- Thay cho Outfit gốc vốn không có dấu tiếng Việt. Đã kiểm: Plus Jakarta Sans có bộ chữ tiếng Việt.

## Bề mặt
Nền đào phẳng. Panel oải hương có lưới mực rất mờ, ô 64px, cạnh thẳng khi là nửa trang, bo tròn khi thu thành thẻ.
```css
background-color: #e4dff0;
background-image: linear-gradient(to right, rgba(26,26,26,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,.07) 1px, transparent 1px);
background-size: 64px 64px;
```

## Ngôn ngữ minh họa
- **Huy hiệu:** viên nhộng màu nhạt, icon nét đen ở đầu trái, một vạch mờ thay chữ ở phần còn lại.
- **Viên nhộng đen:** nút kêu gọi, vạch kẻ, trục thời gian.
- **Vòng tròn viền đen 4px:** khoanh điểm chú ý, hoặc chứa dấu ngoặc kép lớn.
- **Chấm đen tròn:** điểm đánh dấu, đầu mút trục.
- Icon nét tròn đầu, dày 2,2 đến 2,6px, chỉ màu mực.

## Chữ ký chuyển động
- **Panel đổi bên:** panel lưới trượt từ phải sang trái giữa hai slide (`data-morph="lav"`), mượt và có quán tính.
- **Huy hiệu lộn nhào:** các huy hiệu rơi vào nửa oải hương bằng `drop` có nảy, trễ dần, rồi `sway` nhẹ như sticker vừa dán.
- **Huy hiệu nở thành thẻ:** một huy hiệu phình to thành thẻ nội dung ở slide sau (`data-morph`), icon vẫn ở đầu trái.
- **Nút đen nhún:** `pop` rồi `pulse` một nhịp, mời bấm.
- **Chấm đen chạy:** chấm tròn trượt dọc trục thời gian (`animateMotion`) dừng ở mốc hiện tại.
- Nhịp: vui, nảy, nhanh vừa; không có cắt gắt.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** chia đôi kinh điển, tên deck bên nửa đào, ba huy hiệu lộn nhào rơi vào nửa oải hương.
- **Sang chương:** panel giữ chữ, huy hiệu hồng nở thành một mặt trời tròn lớn phía sau.
- **Ba điều cần nhớ:** ba huy hiệu lớn thành ba thẻ, mỗi thẻ mang đúng icon của nó, nút đen làm thanh chốt bên dưới.
- **Kết:** oải hương tràn kín trang, mọi huy hiệu quay về, nút đen "Bắt đầu thôi".

## Nên tránh
Màu bão hòa đậm, góc vuông sắc cho huy hiệu, icon nhiều màu, nhiều nút đen trên một slide, chữ serif, bóng đổ nặng.

## Họ hàng
`pastel-geometry` (cùng màu phấn nhưng nền xanh, thẻ trắng và năm viên nhộng xếp nhịp, điềm hơn), `capsule` (viên nhộng ấm, trẻ), `playful` (thân thiện thủ công, ít chất ứng dụng hơn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
