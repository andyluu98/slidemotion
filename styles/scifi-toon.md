# Hoạt hình viễn tưởng (sitcom khoa học viễn tưởng viền dày)

> Đĩa bay, cổng không gian, hành tinh có vành được đối xử như đồ gia dụng: viền tím đen dày, màu phẳng, mỗi slide là một thế giới màu mới.

**Hợp:** bài thuyết trình hài hước, thương hiệu công nghệ, video ngắn, deck giải thích ý tưởng nhẹ nhàng, ra mắt tính năng kiểu tếu.
**Không hợp:** báo cáo trang trọng, chủ đề nhạy cảm, văn hóa truyền thống.
**Cảm xúc:** vui nhộn, viền dày, màu phẳng, viễn tưởng.

## Hình dung
Một tập phim hoạt hình truyền hình cho người lớn: chuyện nhỏ nhặt (gửi một tấm slide, sửa một lỗi) được làm bằng phương tiện khổng lồ (đĩa bay, tia kéo, cổng không gian). Nhân vật chính là chính tấm slide có mắt trắng to, đồng tử bé tí, tay chân sợi mì. Mỗi slide là một hành tinh khác, đổi cả màu nền. Chỉ cổng không gian là thứ phát sáng.

## Bảng màu
```css
--ink: #2a1d3a;     /* viền tím đen, mắt, đồng tử: thứ giữ hình trên mọi nền */
--paper: #fff6c9;   /* thân slide, sao */
--fg: #241a33; --muted: #4a3a62;
--accent: #912a07;  /* chữ nhấn trên nền sáng */
/* mỗi slide một thế giới (--bg): xanh xô thơm #b6d7a9 (mở màn), bơ #f4dc82, tím #3b2a78,
   bạc hà #a8e0cf, san hô #f4a58f, đào #f9c6a5, aqua #9fd4d8, cực tím #2b1c5e, be #e8dcc2 (kết)
   trên nền tối: chữ #fff3d6, nhấn #ffb347 */
/* đồ vật: vàng đất #f4b942 bóng #d98d1e, hồng #f4a3c4, kính #bfe9f2, tím đồ vật #8f6bb3,
   san hô #ef8a6b, bạc hà #7ad3c4; cổng: #b25cff #5a1fb0 #efd3ff #fff3ff */
```
Màu tím hồng của cổng chỉ dành cho cổng. Bóng đổ là một mảng mực 20%, đúng một mảng mỗi hình, ở phía xa nguồn sáng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&family=VT323&display=swap" rel="stylesheet">
```
- Tiêu đề, nhãn: Baloo 2 800. Có tiếng Việt (đã kiểm).
- Thân: Be Vietnam Pro 400 đến 600.
- Dòng lệnh terminal: VT323 màu bạc hà trên khối mực. Có tiếng Việt (đã kiểm).

## Bề mặt
Nền phẳng một màu của thế giới, đáy là sàn phòng thí nghiệm lát ô có đường kẻ mực. Trang trí thưa: mặt trăng có miệng hố, hành tinh có vành, sao bốn cánh.
```css
background: var(--bg);  /* phẳng, không chuyển sắc; đổi theo từng slide */
/* sàn: dải đáy kẻ ô bằng nét màu --floor-line (#2a1d3a, trên nền tối đổi sang #8d78d6) */
```

## Ngôn ngữ minh họa
- Viền mực dày đều: 6 cho vật chính, 4,5 cho chi tiết, 3,5 cho nét nhỏ; đầu và góc nét tròn.
- Màu phẳng, mỗi hình một mảng bóng cứng. Không gradient, không 3D, không phối cảnh.
- **Mắt** tròn trắng viền mực, đồng tử 8 đến 10px nhìn lệch lên; mày là một cung. Bốn nét biểu cảm: trợn mắt mở miệng là bất ngờ, cười nhỏ là ổn, miệng phẳng là trung tính, mày cong và giọt mồ hôi là quá tải.
- Hình mẫu: đĩa bay (chân tím, vòm kính, người ngoài hành tinh hồng, năm đèn kem), cổng không gian (viền gợn, lòng tím đậm, tay xoáy, lõi sáng), slide có mặt, thẻ terminal, đường bay chấm tròn thưa có mũi tên.
- Tự bịa nhân vật và đạo cụ. Mỗi slide một nhân vật chính, phần còn lại là chấm phá.

## Chữ ký chuyển động
- **Cổng mở:** cổng `zoom` từ một điểm, tay xoáy bên trong `data-loop="spin"`; vật đi qua cổng là sang ý mới. Đây là thứ duy nhất được "phát sáng".
- **Nhảy qua thế giới:** chuyển slide bằng cổng: cổng nở to phủ khung, slide sau hiện ra với màu nền mới (`data-transition="zoom"`).
- **Đĩa bay lướt theo đường chấm:** đĩa đi theo tuyến (`animateMotion`), đến nơi thì chao nhẹ (`data-loop="sway"` trên lớp con).
- **Tia kéo hút lên:** chùm tia hình thang hiện (`wipe` từ trên xuống), vật bên dưới `rise` lên theo tia.
- **Nhịp hài:** đứng yên một nhịp, rồi biểu cảm đổi tức thì (mắt trợn, giọt mồ hôi `pop`). Khoảng lặng trước cú đổi là chỗ gây cười.
- **Terminal gõ lệnh:** dòng `> ...` hiện bằng `wipe`, con trỏ khối `data-loop="blink"`.
- Nhịp: nảy hài, dừng gắt, cắt nhanh kiểu sitcom.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** đĩa bay lướt vào, tia kéo thả xuống một tấm slide có mặt đang ngơ ngác; tên deck nằm cạnh.
- **Vấn đề:** slide có mặt toát mồ hôi dưới chồng chữ giả cao ngất, mày cong quá tải.
- **Giải pháp:** cổng mở, slide chui qua, sang thế giới màu mới với gương mặt cười.
- **Kết:** đĩa bay chở lời cảm ơn rời khung theo đường chấm, sao bốn cánh lóe.

## Nên tránh
Nhân vật, hình bóng, tổ hợp màu, câu cửa miệng, khẩu súng cổng của phim có thật; bộ ba xanh chanh chói, giọt nhầy chảy và chữ bong bóng lượn sóng đi cùng nhau; gradient, bóng mờ, glow ngoài cổng; màu tím cổng cho vật khác; hình quá đông; số liệu bịa.

## Họ hàng
`game-show` (cũng viền dày màu kẹo, đổi màu mỗi slide, nhưng là trường quay thi đấu và có bóng đổ lệch), `rubber-hose` (đồ vật có mặt, tay chân ống mì, nhưng đen trắng thập niên 30), `neon-cyber` (công nghệ tương lai thật sự nghiêm túc, nền tối, không có nhân vật).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
