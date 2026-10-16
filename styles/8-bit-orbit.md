# 8-Bit Orbit (arcade pixel neon ngoài không gian)

> Khoảng không xanh navy sâu, lưới cyan 40px, vạch quét CRT, bóng đổ cứng lệch 4px, ngoặc góc chữ L, bộ ba neon cyan, hồng, vàng. Một máy arcade đang khởi động giữa vũ trụ.

**Hợp:** game, hackathon, công cụ dev, talk công nghệ trẻ trung, giới thiệu cộng đồng, sự kiện esports, gamification trong đào tạo.
**Không hợp:** báo cáo cho ban lãnh đạo truyền thống, văn hóa trang trọng, chủ đề y tế hay tang lễ.
**Cảm xúc:** hoài cổ arcade, tinh nghịch, neon, năng lượng.

## Hình dung
Người xem đứng trước một máy chơi game thùng đời 80 vừa bật nguồn: màn hình CRT có vạch quét và viền tối bốn góc, sao pixel trôi chậm phía sau, một hành tinh pixel vàng có vành hồng mọc lên ở góc. Mỗi slide là một "màn chơi": có khung ngoặc góc giữ mục tiêu, có thanh tải, có con quái pixel đi tuần. Cảm giác: tò mò, phấn khích, muốn bấm START.

## Bảng màu
```css
--bg: #0a0e27;        /* khoảng không */
--navy: #0f1b3d;      /* bóng đổ cứng, khối tối */
--fg: #eef1fa;        /* chữ chính */
--muted: #aab4d8;     /* chữ phụ */
--cyan: #5edcf4;      /* màu chủ: tiêu đề, lưới, ngoặc góc */
--pink: #f0a6ca;      /* màu phụ: panel, thanh thứ hai */
--yellow: #f4d03f;    /* điểm thưởng: hành tinh, chấm góc, bóng lệch */
--lav: #e2d5f2;       /* oải hương: mặt phẳng nửa màn */
```
Luật màu nhấn: cyan là người chơi 1, hồng là người chơi 2, vàng là phần thưởng. Vàng xuất hiện ít nhất, dành cho điểm số, kỷ lục, điều đạt được. Bóng đổ luôn cứng, lệch đúng 4 đến 12px, không nhòe.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Tektur:wght@500;700;900&family=Chakra+Petch:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Tektur 700, giãn 0,02em, màu cyan, góc cạnh như chữ trên vỏ máy game.
- Thân: Chakra Petch 400 đến 500.
- Điểm số, nhãn hệ thống ("SCORE", "LV 03", "PRESS START"): Space Mono 700 IN HOA.
- Đã kiểm: cả ba font có bộ chữ tiếng Việt. Font pixel thuần như Silkscreen, Pixelify Sans không có dấu tiếng Việt nên không dùng cho chữ có dấu.

## Bề mặt
Lưới cyan 40px rất mờ, vạch quét CRT 4px, viền tối dạng elip quanh màn hình. Sao pixel vuông cyan, vàng trôi chéo rất chậm.
```css
background-image:
  repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,.16) 2px 4px),
  radial-gradient(ellipse at center, transparent 55%, rgba(5,7,20,.6) 100%),
  linear-gradient(rgba(94,220,244,.08) 1px, transparent 1px),
  linear-gradient(90deg, rgba(94,220,244,.08) 1px, transparent 1px);
background-size: auto, auto, 40px 40px, 40px 40px;
```

## Ngôn ngữ minh họa
- Mọi hình là pixel: SVG `shape-rendering="crispEdges"`, ghép từ ô vuông, không cong, không khử răng cưa.
- **Hành tinh pixel** vàng có vành hồng; **quái pixel** (invader) cyan có bóng hồng; **sao** ô vuông 4 đến 6px.
- **Ngoặc góc chữ L** cyan dày 8px ở hai góc chéo, kèm một ô vàng và một ô hồng 12px ở hai góc còn lại.
- **Panel lưới** màu hồng hoặc oải hương, bóng cứng vàng lệch 12px.
- **Thanh pixel** cao 12px, bóng lệch 4px màu tương phản: gạch chân, vạch chia, trục, thanh máu, thanh tải.

## Chữ ký chuyển động
- **Khởi động máy:** màn tối, lưới `fade` vào, rồi dòng "PRESS START" `blink`; bấm (`data-step`) thì tiêu đề hiện.
- **Chuyển động theo bậc:** vật di chuyển giật từng ô như sprite (CSS `steps()`), không trượt mượt. Quái pixel đi tuần qua lại.
- **Thanh tải đầy dần:** thanh pixel `wipe` theo từng nấc, số phần trăm `data-count`.
- **Hành tinh quay quỹ đạo:** hành tinh trôi dọc một đường cong (`animateMotion`) xuyên các slide hoặc `float` tại chỗ.
- **Ăn điểm:** khi một ý được chốt, ô vàng `pop` kèm nhãn "+1" bay lên (`rise`).
- Nhịp: giật cục có chủ ý, nhanh, vui; chuyển chương bằng `data-transition="cut"` như qua màn.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** màn hình khởi động, tên deck chữ cyan to trong ngoặc góc, hành tinh mọc ở góc trên phải, "PRESS START" nhấp nháy.
- **Lộ trình:** thanh cyan làm trục như bản đồ màn chơi, quái pixel ở điểm đầu, hành tinh ở điểm cuối, mỗi mốc là "LEVEL n".
- **Bảng điểm:** dải cyan toàn chiều ngang giữ các con số kiểu bảng xếp hạng HIGH SCORE.
- **Kết:** lưới hồng phủ kín màn, "GAME OVER? CONTINUE?" với đếm ngược.

## Nên tránh
Bóng đổ mờ, góc bo, gradient mượt, hình vector cong, font pixel không dấu cho tiếng Việt, quá ba màu neon trên một slide, chữ nhỏ dày đặc khó đọc qua vạch quét.

## Họ hàng
`pixel-rpg` (cũng pixel nhưng là game nhập vai 16-bit ấm, kể chuyện phiêu lưu), `neon-cyber` (neon tối nhưng là viễn tưởng sạch, không pixel), `terminal-green` (màn hình cũ nhưng nghiêm túc, đơn sắc, cho dân lập trình).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
