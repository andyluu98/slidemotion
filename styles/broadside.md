# Broadside (áp phích tuyên ngôn)

> Một tờ áp phích dán tường: nền mực đen, một màu cam lửa, chữ kem in thường cỡ khổng lồ, nhãn chữ máy và đường kẻ mảnh 1px. Nói ít, nói to.

**Hợp:** tuyên ngôn, pitch văn hóa, bài nói về thiết kế, chiến dịch có chính kiến, ra mắt thương hiệu muốn gây tiếng vang.
**Không hợp:** báo cáo số liệu dày, đào tạo nhẹ nhàng, nội dung trẻ em, sự kiện truyền thống trang nghiêm.
**Cảm xúc:** báo chí, áp phích, dõng dạc, kịch tính.

## Hình dung
Cả deck là một xấp áp phích cổ động in typo. Có hai giọng: slide nội dung là trang mực đen, chữ kem, đọc chậm; slide tuyên bố (bìa, chương, kết) là tờ cam lửa phủ kín, chữ mực đen in thường to tới mức tràn khung. Dấu gạch chéo "/" vừa là dấu đầu dòng vừa là hình đồ họa khổng lồ; hai gạch "//" đứng cạnh nhau thành dấu mở trích dẫn. Người xem có cảm giác đang đứng trước bức tường dán đầy tuyên ngôn.

## Bảng màu
```css
--ink: #111111;        /* nền mực, chữ trên tờ cam */
--slab: #1a1a18;       /* tấm mực nổi, sáng hơn nền một chút */
--fg: #f0ece5;         /* chữ kem trên nền mực */
--muted: #888880;      /* chữ phụ */
--hint: #505048;       /* chú thích rất nhỏ */
--fire: #e85d26;       /* cam lửa: môi trường của lời tuyên bố */
--line: rgba(240,236,229,.18);  /* hairline 1px, khung báo */
```
Luật màu nhấn: cam lửa không phải màu trang trí. Nó hoặc phủ cả trang (lúc tuyên bố), hoặc là một tấm, một vạch, một dấu "/" mang đúng ý chính. Trên tờ cam, chữ và nhấn đều chuyển sang mực đen, không thêm màu thứ ba.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@500;700&display=swap" rel="stylesheet">
```
- Tiêu đề tuyên bố: Barlow 900, **in thường**, giãn âm -0,04em, dòng sát 0,92; bìa khoảng 116px, kết tới 220px.
- Tiêu đề nội dung và thân: Barlow 400 đến 800.
- Nhãn, nguồn, số trang: IBM Plex Mono 500 IN HOA, giãn 0,14em, 22px.
- Dấu đầu dòng: ký tự "/" bằng Plex Mono 700 màu cam.
- Cả hai font có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Nền mực phẳng, không gradient. Hai đường hairline 1px trên và dưới làm "khung báo". Một tấm mực nổi (`--slab`) có thể trượt vào chiếm một bên, như tờ giấy dán đè. Gạch chéo khổng lồ cắt bằng `clip-path: polygon(62% 0, 100% 0, 38% 100%, 0 100%)`.

## Ngôn ngữ minh họa
- Hình là chữ và mảng: gạch chéo, tấm phẳng, vạch ngắn (stub 64 x 6px), đường kẻ. Góc vuông, không bo, không bóng.
- Một con số hoặc một câu chốt đặt trên tấm cam là "phần thưởng" của slide.
- Trục thời gian là một vạch cam ngang, nửa dưới slide tối hơn.
- Sơ đồ (nếu cần) vẽ bằng nét kem mảnh và ô vuông viền 1px, điểm nóng duy nhất màu cam.
- Không minh họa tả thực; nếu có ảnh, cho ảnh đen trắng tương phản cao, đặt cạnh mảng cam.

## Chữ ký chuyển động
- **Nhát chém "/":** gạch chéo khổng lồ lao vào theo đường chéo của chính nó (`right` hoặc trượt từ góc trên phải), dừng gắt, không nảy.
- **Đổi giọng bằng tờ cam:** từ slide nội dung sang slide tuyên bố, tờ cam phủ kín bằng `data-transition="cut"`, như thay áp phích mới. Về lại nội dung thì tờ cam rút thành vạch hoặc gáy trái (lớp cố định theo `data-scene`).
- **Chữ in thường đập vào:** tiêu đề tuyên bố hiện bằng `zoom` ngắn (180 đến 220ms) từ hơi to về đúng cỡ, như tờ áp phích vừa được dán phẳng.
- **"/" gõ từng dòng:** danh sách hiện bằng `fade` + `data-stagger="120"`, dấu "/" cam xuất hiện trước chữ một nhịp, như máy chữ.
- **Từ "/" thành "//":** gạch chéo ở slide trước tách đôi thành dấu mở trích dẫn ở slide sau (`data-morph="slash"`, `data-morph="slash2"`).
- Nhịp: dứt khoát, cắt nhiều hơn hòa, lặng sau mỗi câu lớn.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tờ cam phủ kín, gạch chéo mực đen chém vào bên phải, tên deck in thường cực lớn bên trái, nhãn mono góc trên.
- **Tuyên ngôn ba điều:** ba dòng ngắn trên nền mực, mỗi dòng mở bằng "/" cam, bấm tới đâu hiện tới đó (`data-step`).
- **Trích dẫn:** "//" khổng lồ màu cam, câu nói chữ kem, tên người nói bằng mono.
- **Kết:** lại tờ cam, một từ in thường 220px, "//" mực đen đứng cạnh.

## Nên tránh
Thêm màu nhấn thứ hai, bo góc, bóng đổ, gradient, icon trang trí, chữ IN HOA cho tiêu đề tuyên bố (mất chất in thường), tờ cam xuất hiện ở mọi slide (mất sức nặng).

## Họ hàng
`studio` (cùng Barlow và Plex Mono nhưng chất agency, năng lượng điện), `peoples-platform` (áp phích cổ động xanh cobalt và cam hổ phách trên giấy ấm, slab serif), `bold-poster` (áp phích tạp chí nền trắng, đỏ cà chua, chữ script nghiêng).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
