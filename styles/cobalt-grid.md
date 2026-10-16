# Cobalt Grid (bản tin in risograph hai màu)

> Giấy kem kẻ ô, một màu mực xanh cobalt điện, câu chữ serif điềm tĩnh và những cột vạch quét bậc thang như bản in bị nhiễu. Báo cáo xu hướng trông như ấn phẩm nghiên cứu độc lập.

**Hợp:** bản tin nghiên cứu, báo cáo xu hướng, hồ sơ năng lực, học thuật, tổng hợp khảo sát, white paper ngắn.
**Không hợp:** lễ hội, trẻ em, ra mắt sản phẩm ồn ào, nội dung cần nhiều màu phân loại.
**Cảm xúc:** biên tập, nghiên cứu, tĩnh lặng, hiện đại.

## Hình dung
Cả deck là một tập san in risograph chỉ có một lô mực: xanh cobalt trên giấy kem. Giấy kẻ ô 40px vĩnh viễn nằm dưới, hai hairline trên và dưới làm lề báo. Thỉnh thoảng một cột vạch dọc nhiễu bậc thang (như tín hiệu quét lỗi) và một ô mã QR 8x8 xuất hiện ở góc như tem phát hành. Người xem cảm thấy đang đọc một báo cáo nghiêm túc nhưng có gu thiết kế.

## Bảng màu
```css
--paper: #F0EBDE;                 /* giấy kem */
--ink: #1F2BE0;                   /* mực cobalt: chữ, tấm, nét */
--ink-soft: #5560E5;              /* chữ phụ */
--ink-faint: rgba(31,43,224,.18); /* đường chia mảnh */
--grid: rgba(31,43,224,.10);      /* lưới ô */
```
Luật màu: chỉ một màu mực. Nhấn bằng **đảo màu** (tấm cobalt đặc, chữ giấy kem) chứ không thêm màu. Mỗi slide tối đa một tấm cobalt đặc.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Hanken+Grotesk:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- Câu khẳng định, tiêu đề: Newsreader 400 (không đậm), giãn rất nhẹ -0,008em; nghiêng cho trích dẫn.
- Thân: Hanken Grotesk 400; nhãn đầu mục 600 giãn 0,18em.
- Nguồn, số liệu nhỏ, chú thích: IBM Plex Mono 400 đến 500.
- Bản gốc dùng IBM Plex Mono thay DM Mono vì DM Mono không có tiếng Việt. Ba font trên đều có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
```css
background-image:
  linear-gradient(#1F2BE0,#1F2BE0), linear-gradient(#1F2BE0,#1F2BE0),
  linear-gradient(to right, rgba(31,43,224,.10) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(31,43,224,.10) 1px, transparent 1px);
background-size: 1776px 1.5px, 1776px 1.5px, 40px 40px, 40px 40px;
background-position: 72px 28px, 72px 1050px, 0 0, 0 0;
background-repeat: no-repeat, no-repeat, repeat, repeat;
```

## Ngôn ngữ minh họa
- **Cột nhiễu bậc thang:** sọc dọc 3px mực cách 8px giấy, cắt bằng mặt nạ hình bậc thang lệch nhau.
- **Dải quét ngang** cùng chất liệu, mỏng 40px, làm chân trang hoặc thanh trên.
- **Ô QR 8x8** như tem phát hành (chỉ là họa tiết, không chứa đường dẫn thật).
- Khung 1,5px, đường kẻ 1,5px, góc vuông, không bóng. Biểu đồ: cột đặc cobalt, trục hairline, nhãn mono.
- Sơ đồ theo lưới 40px, mọi điểm rơi đúng giao lộ.

## Chữ ký chuyển động
- **In theo nấc:** cột nhiễu hiện từng bậc một (`wipe` từ trên xuống, chia nhiều đoạn `data-stagger="60"`), không mượt, như máy in nhả từng dải.
- **Lệch bản rồi khớp:** tấm cobalt vào hơi lệch 4px chéo, rồi trượt về đúng chỗ, như lô mực thứ hai in chồng chưa canh (CSS transition ngắn, bản PPTX hạ về `fade`).
- **Tem QR mọc từng ô:** 64 ô vuông `pop` theo đường chéo, rất nhanh (`data-stagger="12"`).
- **Dải quét lặp:** một vạch mảnh chạy ngang qua bảng số liệu (`data-loop="scan"`), như máy đang đọc dữ liệu.
- **Câu serif hiện bằng `blur`** nhẹ và chậm, đối lập với phần nhiễu dứt khoát.
- Nhịp: tĩnh, chừng mực; chuyển động đi theo nấc lưới, không nảy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** cột nhiễu bậc thang mọc dần bên phải, tem QR dập ở góc trên, tiêu đề serif lớn bên trái, hairline đầu báo kéo ngang.
- **Phát hiện chính:** tấm cobalt trượt vào lệch bản rồi khớp, câu phát hiện chữ giấy kem nằm trên tấm.
- **Bảng số liệu:** khung 1,5px ôm các con số `data-count`, tem QR dập góc khung, dải quét chạy bên dưới.
- **Kết:** colophon kiểu ấn phẩm (tên, ngày, nguồn), cột nhiễu lật sang mép trái.

## Nên tránh
Thêm màu thứ hai, tiêu đề đậm, bóng đổ, bo góc, gradient, nhiễu xuất hiện ở mọi slide (mất giá trị điểm nhấn), mã QR giả trỏ tới đâu đó.

## Họ hàng
`risograph` (cũng là in riso nhưng nhiều màu rực, trẻ trung, nghệ thuật), `monochrome` (tiết chế văn chương kiểu sổ cái, không có nhiễu đồ họa), `swiss-modern` (lưới rõ, chuyên nghiệp, không chất in ấn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
