# Swiss Modern (phong cách Thụy Sĩ, lưới 12 cột và đỏ tín hiệu)

> Trắng, đen, một màu đỏ tín hiệu. Lưới 12 cột hiện rõ, bố cục lệch có chủ đích, mọi thứ căn trái. Rõ ràng trước, đẹp sau.

**Hợp:** doanh nghiệp, đào tạo, báo cáo, quy trình nội bộ, giới thiệu công ty, tài liệu chính sách cần đọc nhanh.
**Không hợp:** lễ hội, văn hóa truyền thống, trẻ em, thương hiệu cần sự ấm áp mềm mại.
**Cảm xúc:** rõ ràng, chuyên nghiệp, tối giản.

## Hình dung
Như tấm áp phích của trường phái thiết kế Thụy Sĩ thập niên 60: nền trắng, lưới cột mảnh lộ ra như giàn giáo, chữ sans đậm căn trái, một khối đỏ lớn chiếm đúng một phần ba trang. Không trang trí thừa; hình học chính là trang trí. Người xem cảm thấy thông tin được sắp xếp bởi một người rất tỉnh táo.

## Bảng màu
```css
--bg: #ffffff;        /* giấy trắng */
--ink: #0a0a0a;       /* đen: chữ, khối đen, đường kẻ 3px */
--muted: #555555;
--red: #ff3300;       /* đỏ tín hiệu: một khối hoặc một chấm mỗi slide */
--card: #f2f2f2;      /* ô xám nhạt khi cần thẻ */
```
Đỏ là tín hiệu, không phải trang trí: chỉ đặt vào điều quan trọng nhất (khối chính, chấm đánh dấu, gạch chân phương án chọn). Chữ trên khối đỏ hoặc đen dùng trắng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Archivo 800, giãn âm mạnh -0,035em, căn trái; số chương Archivo 900 cỡ 260px.
- Thân: Inter 400 đến 500; nhãn Inter 600.
- Hai font đã kiểm có khối tiếng Việt.

## Bề mặt
Trắng tinh. Lưới cột 160px (đen 7%) và hàng 120px (đen 5%) hiện mờ ở bìa và slide cấu trúc, ẩn ở slide chữ.
```css
background-image:
  linear-gradient(to right, rgba(0,0,0,.07) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(0,0,0,.05) 1px, transparent 1px);
background-size: 160px 100%, 100% 120px;
```

## Ngôn ngữ minh họa
- **Khối đỏ, khối đen** hình chữ nhật góc vuông, kích thước bội số của cột lưới (một phần ba trang, một cột, một ô vuông 200px).
- **Chấm tròn** đỏ (hoặc trắng trên nền đỏ) là hình tròn duy nhất được phép.
- **Đường kẻ đen 3px** ngang và dọc chia vùng; cột nội dung có viền trên đen 8px.
- Sơ đồ: hộp vuông, mũi tên thẳng góc 90 độ, số thứ tự lớn; biểu đồ cột phẳng đen, cột cần nhấn màu đỏ.
- Icon nếu có: nét đều, hình học, không bo tròn kiểu dễ thương.

## Chữ ký chuyển động
- **Lưới dựng trước:** lớp lưới `fade` vào đầu tiên, sau đó mọi thứ "ăn khớp" vào cột, như dàn trang trên bàn sắp chữ.
- **Kẻ thước:** đường kẻ 3px `wipe` theo hướng đọc (ngang từ trái, dọc từ trên), đúng tốc độ, không nảy.
- **Khối đỏ trượt cột:** khối đỏ là cùng một vật qua nhiều slide (`data-morph`), trượt và co giãn từ một phần ba phải, thành gáy trái, thành trục thời gian.
- **Chấm đỏ đánh dấu:** `pop` nhỏ, đúng một lần mỗi slide, đặt vào kết luận.
- **Dãy đều nhịp:** danh sách và cột hiện bằng `left` với `data-stagger` bằng nhau tuyệt đối, như máy đếm nhịp.
- Nhịp: chính xác, đều, nhanh vừa; không xoay, không mờ nhòe.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** lưới mờ, khối đỏ chiếm một phần ba bên phải với chấm trắng lớn, ô đen nhỏ ở chân, tiêu đề Archivo căn trái và đường kẻ dưới chân tiêu đề.
- **Chương:** khối đen bên phải với ô đỏ vuông bên trong, số chương 260px.
- **Quy trình:** khối đỏ dẹt lại thành trục ngang, các bước đánh số lớn hiện đều nhịp phía trên.
- **Kết:** đỏ chiếm toàn trang, lời cảm ơn trắng căn trái.

## Nên tránh
Căn giữa đối xứng, bo góc, bóng đổ, gradient, nhiều hơn một màu nhấn, font chữ tay, chữ nghiêng trang trí, chuyển động nảy.

## Họ hàng
`bauhaus` (hình học nhiều màu cơ bản, vui và mang tính giáo dục hơn), `neo-grid-bold` (lưới biên tập đậm, giọng tạp chí), `raw-grid` (lưới thô mộc kiểu khởi nghiệp, ít kỷ luật Thụy Sĩ hơn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
