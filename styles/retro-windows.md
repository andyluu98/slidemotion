# Retro Windows (màn hình Windows 95)

> Cả deck là một màn hình máy tính năm 1995: desktop xanh mòng két, cửa sổ xám vát cạnh, thanh tiêu đề xanh navy, nút Start, thanh tiến độ khối vuông và vạch quét CRT.

**Hợp:** talk lịch sử công nghệ, game, thương hiệu Y2K, deck tếu có chủ ý, hướng dẫn phần mềm vui, tổng kết năm kiểu "cài đặt hoàn tất".
**Không hợp:** sự kiện trang trọng, văn hóa truyền thống, thương hiệu cao cấp, nội dung buồn.
**Cảm xúc:** hoài cổ, tinh nghịch, geek, vui.

## Hình dung
Người xem ngồi trước chiếc màn hình CRT cũ. Mỗi slide là một cửa sổ chương trình: bài thuyết trình "PRESENTATION.EXE" mở ra, hộp thoại bật lên, thanh tiến độ chạy, con trỏ chuột tự bò tới nút OK. Sự hài hước đến từ chỗ nội dung nghiêm túc được đóng gói trong giao diện rất cũ.

## Bảng màu
```css
--bg: #008080;       /* desktop xanh mòng két */
--face: #d4d0c8;     /* mặt cửa sổ xám */
--navy: #000080;     /* thanh tiêu đề, tiêu đề, thanh tiến độ */
--accent-2: #1084d0; /* đầu sáng của gradient thanh tiêu đề */
--fg: #222222; --muted: #555555;
--pane: #ffffff;     /* ô trắng lõm chứa nội dung */
/* vát cạnh: sáng #fff / #dfdfdf trên trái, tối #808080 / #000 dưới phải */
```
Luật màu: giữ đúng bảng màu hệ thống. Màu nhấn duy nhất là navy; bốn màu logo Start (đỏ `#e03c31`, xanh lá `#29a329`, xanh dương `#1084d0`, vàng `#f2c40f`) chỉ dùng cho biểu tượng nhỏ.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&family=VT323&display=swap" rel="stylesheet">
```
- Tiêu đề bìa, kết, số lớn: VT323 (chữ điểm ảnh, có tiếng Việt), cỡ rất lớn 128 đến 280px.
- Tiêu đề thường, thân: Be Vietnam Pro 700 và 400, tiêu đề màu navy.
- Chữ trên thanh tiêu đề: Be Vietnam Pro 700 trắng 21px, giãn 0,06em, tên kiểu tệp "BAOCAO.EXE", "README.DOC".

## Bề mặt
Desktop xanh mòng két phẳng, vạch quét CRT 3% phủ toàn màn hình (không làm giảm tương phản), thanh tác vụ xám 44px dưới đáy có nút Start và đồng hồ.
```css
background: repeating-linear-gradient(0deg, rgba(0,0,0,.03) 0 1px, transparent 1px 3px);
```

## Ngôn ngữ minh họa
- **Cửa sổ vát cạnh:** viền 3px sáng trên trái, tối dưới phải; thanh tiêu đề 40px gradient navy sang `#1084d0`, ba nút _ □ X.
- **Ô lõm trắng:** viền đảo chiều (tối trên trái) chứa chữ, danh sách, biểu đồ.
- **Thanh tiến độ khối:** các khối navy 22px cách nhau 6px.
- **Biểu tượng desktop:** máy tính, thư mục vàng, nhãn trắng bên dưới.
- **Con trỏ chuột** trắng viền đen, **hộp thoại** có biểu tượng "i" hoặc dấu chấm than.
- Biểu đồ: cột khối pixel, đồ thị dạng "System Monitor". Mọi cạnh vuông, không bo.

## Chữ ký chuyển động
- **Mở cửa sổ:** cửa sổ phóng ra từ biểu tượng desktop (`zoom` nhanh, không mờ), đúng kiểu hoạt ảnh Windows cũ.
- **Thanh tiến độ chạy từng khối:** khối navy hiện lần lượt (`fade` với `data-stagger="80"`, hoặc `wipe` theo nấc), kèm số phần trăm VT323 đếm lên.
- **Con trỏ tự bấm:** con trỏ bò tới nút (`animateMotion`), nút lún vát cạnh đảo chiều, hộp thoại mới bật ra (`pop`).
- **Thu nhỏ xuống thanh tác vụ:** hộp thoại cũ co về thanh tác vụ khi sang slide mới (`data-morph="dlg"`).
- **Con trỏ chờ** nhấp nháy (`blink`) khi slide đang "tải".
- Nhịp: giật cục có chủ ý, từng nấc như máy chậm. Không mượt, không mờ dần dài.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** hộp thoại "SETUP" giữa desktop, tên deck chữ VT323 khổng lồ, thanh tiến độ chạy tới 100%.
- **Mục lục:** cửa sổ phóng to toàn màn hình, danh sách trong ô lõm trắng như hộp chọn tệp.
- **Cảnh báo, rủi ro:** hộp thoại lỗi bật ra kèm dấu chấm than, con trỏ di tới nút "OK" nhưng chưa bấm.
- **Kết:** hộp thoại "Tắt máy", desktop tối dần, thanh tác vụ rơi xuống, dòng chữ "Giờ có thể tắt máy an toàn".

## Nên tránh
Bo góc, gradient hiện đại, bóng mềm, kính mờ, logo Windows thật, màu ngoài bảng hệ thống, hoạt ảnh quá mượt.

## Họ hàng
`pixel-rpg` (hoài niệm 16-bit nhưng là thế giới game phiêu lưu, không phải giao diện), `8-bit-orbit` (arcade neon nền tối), `terminal-green` (màn hình dòng lệnh xanh trên đen, nghiêm túc hơn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
