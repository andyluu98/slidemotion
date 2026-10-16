# Dark Keynote (keynote ra mắt phần mềm)

> Sân khấu gần đen, ánh sáng lạnh, một màu lime duy nhất dành cho điều sản phẩm làm được. Giao diện thật là nhân vật chính.

**Hợp:** ra mắt phần mềm, tính năng mới, demo sản phẩm số, báo cáo sản phẩm trên màn hình lớn, AI, SaaS.
**Không hợp:** văn hóa truyền thống, trẻ em, nội dung ấm áp, tài liệu để in.
**Cảm xúc:** chính xác, tối giản, tự tin, một điểm nhấn.

## Hình dung
Như một khoảnh khắc trong video ra mắt sản phẩm của hãng công nghệ lớn: tấm kính tối nổi trên nền đen, lưới mảnh 48px, mọi thứ thẳng hàng. Kể chuyện bằng tương phản: lộn xộn (ô rời, nét đứt) rồi một hành động dứt khoát (vào lưới, sáng lime), rồi khoảng trống.

## Bảng màu
```css
--bg: #07080C;            /* sân khấu */
--surface: #141823;       /* mặt kính nổi */
--fg: #EDF0F7; --muted: #9AA3B5; --label: #8791A5;
--line: rgba(255,255,255,.1);   /* viền 1px, đường mảnh */
--accent: #B7F34A;        /* lime: chỉ một chỗ mỗi slide */
```
Luật vàng: nếu hai thứ cùng lime trên một slide thì một thứ sai.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
```
- Tiêu đề: Inter 600, giãn âm (-0,035em), lớn và gọn.
- Số lớn: Inter Tight 600.
- Nhãn: JetBrains Mono IN HOA 18 đến 20px, giãn 0,14em ("TRƯỚC", "SAU", "ĐANG CHẠY").

## Bề mặt
Lưới mảnh 48px (mỗi ô thứ tư sáng hơn), vùng sáng lạnh phía trên giữa, viền tối bốn góc. Kính giả bằng gradient: ba bậc mặt tối, viền 1px trắng 10%, mép trên sáng, một vệt chéo mờ. Không blur nặng.

## Ngôn ngữ minh họa
- Nhân vật là giao diện: cửa sổ, thẻ, ô, thanh trạng thái, con trỏ, vòng tiến độ.
- Thẻ kính bo 14 đến 28px; ô giao diện 44 đến 68px; thanh khung xương cao 10 đến 14px thay cho chữ giả.
- "Ô chưa có" vẽ nét đứt `6 6`; "ô đang chọn" viền lime mảnh.
- Đường chuyển động: cong bậc hai, đầu tròn, 2,6px.

## Chữ ký chuyển động
- **Vào lưới:** các ô rời rạc `drop` hoặc `pop` rồi khớp vào hàng, nhanh và dừng hẳn (không trôi).
- **Một chấm lime sống** (`pulse`) đánh dấu điều đang xảy ra, có thể đi xuyên deck bằng `data-morph`.
- **Vệt sáng quét** qua tấm kính khi slide vào (dải gradient chạy ngang).
- **Con trỏ tự bấm:** con trỏ trượt tới nút, nút lún xuống, kết quả hiện ra (`animateMotion` hoặc `data-step`).
- **Số đếm** (`data-count`) cho chỉ số có nguồn.
- Nhịp: từng nhịp một (khung, đường, ô, nhãn), dứt khoát.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** màn tối, một chấm lime sáng lên giữa, tên sản phẩm hiện bằng `blur`.
- **Trước và sau:** bên trái các ô lộn xộn nét đứt, bên phải cùng các ô đó vào lưới, một ô sáng lime.
- **Con số:** một chỉ số khổng lồ đếm lên, vòng tiến độ chạy tới mức tương ứng.
- **Kết:** mọi thẻ thu về một điểm lime.

## Nên tránh
Màu cảnh báo, nhiều màu nhấn, glow dày, blend mode, ảnh stock người cười, icon trang trí khắp nơi.

## Họ hàng
`neon-cyber` (cyan và magenta, khung HUD), `aurora` (ba ánh sáng màu trôi), `hologram-hud` (viễn tưởng lạnh).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
