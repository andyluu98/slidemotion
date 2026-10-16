# Capsule (viên kẹo màu trên giấy kem)

> Giấy kem phai nắng, mọi hình đều viền mực 2px, những viên thuốc nhộng màu kẹo bay như hoa giấy rồi nằm xuống thành đường kẻ, trục, hàng nhãn.

**Hợp:** thương hiệu lifestyle, portfolio sáng tạo, ra mắt sản phẩm tiêu dùng, giới thiệu studio nhỏ, sự kiện trẻ.
**Không hợp:** báo cáo tài chính, chủ đề nghiêm trọng, văn hóa truyền thống, tài liệu kỹ thuật dày.
**Cảm xúc:** vui tươi, hiện đại, ấm áp, trẻ trung.

## Hình dung
Memphis gặp tạp chí: tiêu đề serif Bodoni đậm chất biên tập, xung quanh là những viên kẹo dẹt (pill) màu san hô, xanh trời, vàng bơ, tím oải hương, mỗi viên viền mực và in một chữ nhỏ ("Ý TƯỞNG", "TIẾP THEO"). Một tấm khung gradient tím, xanh, bạc hà có lưới chấm và viền đứt bên trong như tấm ảnh dán. Người xem thấy như đang lật một tạp chí trẻ được làm thủ công bằng sticker.

## Bảng màu
```css
--bg: #f5f5f0;      /* giấy kem */
--ink: #1a1a1a;     /* viền, chữ */
--muted: #55554f;
--coral: #e85d4e;   /* nhấn chính */
--violet: #a06ce8;  /* nhấn phụ, số liệu */
--lime: #c4d94e;    /* mặt trời */
--sky: #8bb4f7; --yellow: #f2d160; --lavender: #c5b5e0;
--peach: #f5b895; --mint: #a8e6cf;   /* kẹo */
--shadow: rgba(26,26,26,.1);         /* bóng lệch phẳng */
```
Luật màu: nhiều màu kẹo nhưng mỗi viên một màu phẳng, luôn có viền mực. Chữ nhấn quan trọng nhất dùng san hô; tím dành cho con số. Mảng kẹo lớn nên có một viên vàng làm điểm nhìn.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Libre Bodoni 700, giãn -0,02em; số chương Bodoni nghiêng cỡ lớn.
- Thân: Space Grotesk 400 đến 500.
- Chữ trên viên kẹo, nhãn: Space Grotesk 600 IN HOA, giãn 0,12 đến 0,14em, nằm trong pill viền mực nền vàng.
- Cả hai font có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Giấy kem có hạt nhiễu mịn và ba quầng màu rất nhạt ở góc (san hô trên trái, lime trên phải, xanh dưới phải).
```css
background:
  radial-gradient(ellipse at 8% 6%, rgba(232,93,78,.12), transparent 42%),
  radial-gradient(ellipse at 92% 12%, rgba(196,217,78,.14), transparent 40%),
  radial-gradient(ellipse at 88% 94%, rgba(139,180,247,.16), transparent 48%), #f5f5f0;
```

## Ngôn ngữ minh họa
- Viên kẹo bo tròn hết cỡ (`border-radius: 999px`), viền mực 2px, bóng lệch phẳng 8 đến 12px, không blur.
- Thẻ trắng bo 32px; khung gradient có lưới chấm 30px và viền đứt bên trong cách mép 16px.
- Mặt trời lime tròn đặc; chấm đào nhỏ in chữ "VUI".
- Dấu đầu dòng là viên kẹo mini viền mực, xoay vòng bốn màu.
- Biểu tượng (nếu cần) vẽ phẳng, viền mực, như sticker cắt tay.

## Chữ ký chuyển động
- **Hoa giấy rồi nằm xuống:** viên kẹo lơ lửng quanh tiêu đề (`float` lệch pha), sang slide sau chúng nằm ngang thành vạch chia, hàng nhãn hoặc trục thời gian nối đuôi (`data-morph="p1"` tới `"p4"`).
- **Kẹo bật nảy:** viên kẹo và nhãn vào bằng `pop` có nảy, so le `data-stagger="90"`.
- **Bóng lệch nhấn xuống:** thẻ trắng vào bằng `drop`, bóng phẳng từ 0 tăng lên 8px như vừa đặt lên bàn.
- **Mặt trời lime lăn quỹ đạo:** đi theo cung tròn quanh tiêu đề (`animateMotion` trên đường cong), một vòng chậm mỗi slide.
- **Thẻ phồng thành viên kẹo khổng lồ** ở slide kết (`data-morph="card"`, bo góc tăng dần).
- Nhịp: nhanh, nảy, vui như bóp đồ chơi.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tiêu đề Bodoni giữa trang, năm viên kẹo bay vào từ bốn mép và quay quanh, mặt trời lime ló góc.
- **Chương:** thẻ chữ bên trái, khung gradient bên phải dán đầy sticker kẹo.
- **Dòng thời gian:** bốn viên kẹo nối đuôi thành trục, mỗi mốc là một chấm tròn trắng viền mực bật lên.
- **Kết:** thẻ trắng phồng thành một viên kẹo vàng khổng lồ mang lời cảm ơn.

## Nên tránh
Kẹo không viền, bóng mờ blur, gradient trên viên kẹo, quá nhiều chữ trong một viên, tiêu đề bằng font không chân (mất chất tạp chí), xếp kẹo thẳng hàng cứng nhắc ở slide bìa.

## Họ hàng
`playful` (thủ công, indie, Bricolage Grotesque, ít chất tạp chí hơn), `block-frame` (pop táo bạo, khối màu đặc, không serif), `split-pastel` (pastel chia đôi nền, nhẹ nhàng, ít sticker).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
