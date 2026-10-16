# Risograph (in stencil ba mực lệch đăng)

> Một tờ in ra từ máy stencil: giấy kem, ba mực trong (hồng huỳnh quang, xanh, vàng) chồng lên nhau thành màu thứ ba, và không bao giờ khớp hẳn.

**Hợp:** thương hiệu sáng tạo, sự kiện, workshop, tạp chí độc lập, marketing trẻ, triển lãm, cộng đồng nghệ thuật.
**Không hợp:** báo cáo tài chính, pháp lý, y tế, tài liệu cần vẻ chuẩn mực.
**Cảm xúc:** trẻ trung, nghệ thuật, rực rỡ, indie.

## Hình dung
Như cầm trên tay một tờ zine vừa ra khỏi máy in, mực còn hơi thơm: mỗi màu là một lượt in riêng, rơi lệch vài px nên mép hình lộ một vệt giấy hay một viền màu của bản kia. Mảng đặc có lỗ kim, có vệt dọc theo chiều kéo giấy. Ít mực nhưng nhiều màu, nhờ chồng.

## Bảng màu
```css
--paper: #F4EEE2;    /* giấy, khoảng trống, thẻ khoét */
--pink: #FF48B0;     /* mực 1: mảng lớn, đĩa mặt trời, vệt in đôi dưới tiêu đề */
--blue: #0078BF;     /* mực 2: đường, thanh, tram nền; mực duy nhất đủ đậm cho nét mảnh */
--yellow: #FFE800;   /* mực 3: dải ngang, quầng; không cho chi tiết nhỏ */
--violet: #5A3B9C;   /* hồng chồng xanh */
--green: #1E8C4E;    /* xanh chồng vàng */
--coral: #FF5E3A;    /* hồng chồng vàng */
--ink3: #2B2140;     /* đủ ba mực: lõi đậm nhất, cũng là màu chữ */
--pink-tint: #F7C4D6; --yellow-tint: #F8EC93;  /* tram nhạt: nền thẻ, dải phụ */
--muted: #5A4E6B;
```
Mọi màu ngoài ba mực là màu chồng hoặc tram. Màu đậm nhất (`--ink3` trong hình) để dành cho khoảnh khắc đáng giá nhất, một lần mỗi slide. Màu chồng vẽ tường minh bằng hình và `clipPath`, không dùng `mix-blend-mode`.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Bricolage Grotesque 800, giãn âm -0,02em, to và hơi bướng.
- Thân: Be Vietnam Pro 400 đến 600.
- Vệt in đôi: tiêu đề có thể có một bản hồng lệch phía sau như in hai lượt.
Cả hai font có tiếng Việt (đã kiểm ngày 16/10/2026).

## Bề mặt
Giấy kem có lấm tấm hạt mực hồng, xanh, vàng rơi vãi. Nền tram chấm tròn (ô 9 đến 16px), mỗi mực một góc tram: xanh 15 độ, vàng 45 độ, hồng 75 độ.
```css
background: radial-gradient(circle, var(--blue) 42%, transparent 46%) 0 0 / 14px 14px;  /* một ruộng tram xanh */
```

## Ngôn ngữ minh họa
- **Hình phẳng, không viền:** vật là mảng màu và bóng phẳng; sáng tối bằng tram theo bậc 20, 40, 60, 100 phần trăm.
- **Đĩa hai bản in lệch đăng:** tròn xanh lệch (-5, +4), tròn hồng lệch (+5, -4), lõi màu chồng ở giữa nhỏ hơn 4 đến 5px.
- **Tờ giấy khoét:** chữ nhật màu giấy, phía sau là cùng hình bằng một mực, lệch 4px lộ viền.
- **Ô tram theo bậc:** nói "ít, vừa, nhiều" mà không cần số (bán kính chấm 2,8 / 4,6 / 6,6px trên ô 16px).
- **Vệt chấm xanh:** nét 9px đầu tròn, `stroke-dasharray: 0 20`, nối các vật.
- Lỗ kim trong mảng đặc, vệt dọc theo chiều kéo giấy. Phong cảnh gợi ý: mặt trời hồng, dải vàng, đồi lục, ruộng tram xanh.
- Một vùng tối đa hai bản in, tối đa một bản là tram.

## Chữ ký chuyển động
- **Lệch rồi khớp:** mỗi bản in bay vào từ một hướng lệch riêng (bản xanh từ trái dưới, bản hồng từ phải trên, quãng ngắn 8 đến 12px), vượt nhẹ rồi khớp vào chỗ; lệch cố định còn lại vài px. Gần nhất trong từ điển là `left` và `right` quãng ngắn; bản HTML có thể tự viết keyframes dùng thuộc tính `translate`.
- **In thêm một mực mỗi cú bấm:** cùng một hình, `data-step` 1 in tram, bước 2 in đặc, bước 3 in chồng bản thứ hai, bước 4 thêm quầng vàng. Hình "đậm lên" như chạy thêm một lượt máy.
- **Dải vàng kéo qua máy:** dải ngang hiện bằng `wipe` như giấy chạy qua trống in.
- **Vệt chấm xanh vẽ dần** bằng `draw` nối các vật theo thứ tự kể.
- **Mặt trời hồng nảy lên** bằng `pop`, một lần.
- Nhịp: tưng tửng, nảy nhẹ, hơi luộm thuộm có chủ ý; không rung liên tục.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** phong cảnh in ba mực (mặt trời hồng, dải vàng, đồi lục lệch đăng, ruộng tram xanh), tiêu đề in đôi hồng xanh, hai ba vật của đề tài nối bằng vệt chấm.
- **Quy trình:** trục xanh vẽ dần, mỗi nút thêm một bản in so với nút trước; nút cuối đủ ba mực, đậm nhất.
- **Sơ đồ khái niệm:** các thành phần là đĩa lệch đăng trên nền tram vàng, chỗ giao nhau tự hiện màu thứ ba, đúng là "phần chung".
- **Con số "quá nhiều":** ô tram bậc cao bị chồng thêm một bản lệch, cố ý trông bết mực.

## Nên tránh
Màu ngoài bảng, gradient mượt (chỉ tram theo bậc), bóng đổ mờ, 3D, ánh kim; ba bản tram chồng một vùng (thành bùn) trừ khi minh họa "quá tải"; viền đen quanh vật; `mix-blend-mode`; lệch đăng ngẫu nhiên mỗi khung hình hoặc lệch quá 14px khi đứng yên; logo hay hình máy in của hãng có thật.

## Họ hàng
`retro-zine` (giấy kaki, xanh lá với đen, băng keo, con dấu; risograph thì ba mực trong, chồng màu), `biennale-yellow` (một mực chàm trên vàng, chữ serif, áp phích triển lãm tĩnh), `silkscreen-poster` (in lụa mảng phẳng đục, du lịch hoài cổ; không có tram và lệch đăng).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
