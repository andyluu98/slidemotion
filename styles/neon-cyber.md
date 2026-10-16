# Neon Cyber (giao diện HUD, cyan và magenta phát sáng)

> Nền xanh đêm thẫm, lưới HUD mờ, hai màu neon cyan và magenta phát sáng, khung ngoặc bốn góc khóa mục tiêu, vòng ngắm xoay. Tương lai và năng động.

**Hợp:** AI, công nghệ, sản phẩm số, an ninh mạng, game, hackathon, ra mắt tính năng có chất "tương lai".
**Không hợp:** văn hóa truyền thống, sức khỏe dịu nhẹ, tài chính trang trọng, trẻ nhỏ, tài liệu để in.
**Cảm xúc:** công nghệ, tương lai, năng động.

## Hình dung
Như màn hình buồng lái trong phim khoa học viễn tưởng: lưới tọa độ chìm, mọi thông tin quan trọng được một khung ngoặc cyan bắt khóa, một vòng ngắm magenta có vòng trong nét đứt xoay quanh mục tiêu. Đường neon bắn ra từ hai mép đối diện rồi gặp nhau. Người xem cảm thấy hệ thống đang chạy, đang quét, đang tìm ra điều gì đó.

## Bảng màu
```css
--bg: #0a0f1c;        /* xanh đêm thẫm */
--fg: #eafcff;        /* chữ trắng ánh xanh */
--muted: #a3b6d4;
--cyan: #00ffcc;      /* neon chính: khung, trục, số, đầu dòng */
--mag: #ff00aa;       /* neon phụ: vòng ngắm, số chương, cảnh báo */
--card: rgba(0,255,204,.05);    /* thẻ HUD gần trong suốt */
--glow-c: 0 0 10px rgba(0,255,204,.9), 0 0 28px rgba(0,255,204,.45);
--glow-m: 0 0 10px rgba(255,0,170,.9), 0 0 28px rgba(255,0,170,.45);
```
Cyan là "hệ thống", magenta là "mục tiêu". Mỗi slide chỉ một thứ magenta. Phát sáng dùng cho nét và số, chữ thân không phát sáng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Chakra Petch 700, góc vát kiểu kỹ thuật số, bóng sáng cyan rất nhẹ (`text-shadow: 0 0 26px rgba(0,255,204,.22)`).
- Số lớn, mốc, số mục: Chakra Petch, phát sáng mạnh hơn.
- Thân: Space Grotesk 400 đến 500.
- Hai font đã kiểm có khối tiếng Việt.

## Bề mặt
Lưới 80px cyan 7%, một quầng magenta mờ hắt từ phía trên. Thẻ là khung mảnh cyan 32% có ánh sáng trong rất nhẹ.
```css
background-color: #0a0f1c;
background-image:
  radial-gradient(closest-side at 50% 0%, rgba(255,0,170,.24), rgba(255,0,170,.07) 55%, transparent),
  linear-gradient(to right, rgba(0,255,204,.07) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(0,255,204,.07) 1px, transparent 1px);
background-size: auto, 80px 80px, 80px 80px;
```

## Ngôn ngữ minh họa
- **Khung ngoặc bốn góc:** bốn góc chữ L dày 4px dài 56px, viền mảnh mờ nối giữa; luôn ôm vùng quan trọng nhất của slide.
- **Vòng ngắm:** vòng magenta 3px phát sáng, vòng trong nét đứt cyan.
- **Đường neon 3px** cyan và magenta: gạch dưới tiêu đề, vạch chia cột, trục thời gian, tâm ngắm.
- **Nút kim cương** cyan nhỏ xoay 45 độ làm điểm dữ liệu.
- Sơ đồ: nút và đường nối thẳng góc như mạch điện; số liệu đặt trong khung HUD có nhãn nhỏ.

## Chữ ký chuyển động
- **Khóa mục tiêu:** khung ngoặc là một vật xuyên deck (`data-morph`), co giãn nhảy tới vùng quan trọng của mỗi slide, tới nơi thì chớp nhẹ một lần.
- **Vòng ngắm quay:** vòng trong nét đứt xoay liên tục (`data-loop="spin"` trên phần tử con), vòng ngoài đứng yên.
- **Hai tia gặp nhau:** đường cyan `left` và đường magenta `right` bắn vào từ hai mép, gặp nhau ở giữa.
- **Quét:** một vạch sáng mảnh quét dọc qua thẻ (`data-loop="scan"`) khi hệ thống "đang phân tích".
- **Nút chạy mạch:** nút kim cương chạy theo đường nối (`animateMotion`); số `data-count` nhảy nhanh.
- Nhịp: nhanh, gọn, như giao diện phản hồi; chuyển cảnh `cut` hoặc `zoom`.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** màn tối, lưới hiện dần, khung ngoặc từ bốn góc màn hình thu vào khóa quanh tên sản phẩm, vòng ngắm ló từ mép trái.
- **Phát hiện:** vạch quét chạy qua dữ liệu, dừng lại, vòng ngắm `pop` ôm đúng điểm bất thường, nhãn magenta "PHÁT HIỆN".
- **Kiến trúc AI:** các nút kim cương nối mạch, dữ liệu chạy dọc đường cyan từ đầu vào tới mô hình.
- **Kết:** vòng ngắm lớn ôm lời cảm ơn, khung ngoặc giãn ra chạm bốn mép màn hình.

## Nên tránh
Quá hai màu neon, phát sáng trên mọi chữ, nền đen tuyền thiếu lưới, ảnh stock robot, chữ glitch khó đọc, chuyển động chậm mơ màng.

## Họ hàng
`dark-keynote` (kính tối tối giản, một màu lime, không HUD), `hologram-hud` (viễn tưởng lạnh, chính xác, ít neon magenta hơn), `terminal-green` (màn hình dòng lệnh xanh lục, chữ đơn cách).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
