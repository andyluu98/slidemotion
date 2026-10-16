# Creative Voltage (điện áp sáng tạo, retro hiện đại)

> Nền xanh navy đêm bị một tấm panel xanh điện chẻ đôi, huy hiệu vàng neon chớp như tia lửa, chấm halftone và một dòng chữ viết tay bay bổng. Năng lượng của một agency vừa có ý tưởng hay.

**Hợp:** pitch sáng tạo, agency, sự kiện, ra mắt sản phẩm trẻ trung, giới thiệu chiến dịch, workshop ý tưởng.
**Không hợp:** báo cáo tài chính dày số, văn bản hành chính, chủ đề tang lễ hay trầm lắng.
**Cảm xúc:** sôi động, sáng tạo, retro hiện đại, táo bạo.

## Hình dung
Như bìa tạp chí âm nhạc thập niên 90 được in lại bằng mực huỳnh quang: một khối xanh điện lớn cắt sân khấu thành hai mảng, đường nối giữa hai mảng là một vạch vàng neon phát sáng như dây điện đang có dòng. Người xem cảm thấy có điện chạy qua: mọi thứ vừa nảy ra, vừa được bật công tắc. Tấm panel là nhân vật chính, nó đổi hình liên tục: nửa trái, cột giữa, thẻ nổi, dải ngang, tràn toàn màn, rồi cuộn tròn thành đĩa.

## Bảng màu
```css
--navy: #1a1a2e;      /* nền sân khấu, đêm sâu */
--card-bg: #26264d;   /* thẻ nổi trên nền navy */
--blue: #0066ff;      /* panel xanh điện: khối chủ đạo */
--neon: #d4ff00;      /* vàng neon: huy hiệu, đường nối, sóng chữ */
--fg: #ffffff;        /* chữ chính */
--muted: #d9defa;     /* chữ phụ */
```
Luật màu nhấn: xanh điện là mặt bằng, vàng neon là tia lửa. Neon nên xuất hiện như điểm (huy hiệu, vạch nối, nét sóng), không tô thành mảng lớn; mảng lớn thuộc về xanh điện. Thẻ vuông góc, không bo.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Space+Mono:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
```
- Tiêu đề: Bricolage Grotesque 800, giãn âm -0,02em, to và hơi thô (thay cho Syne gốc vốn không có dấu tiếng Việt).
- Thân: Space Mono 400, như chữ đánh máy trên tờ brief.
- Dòng mở (kicker): Pacifico, một cụm ngắn viết tay bay bổng đặt chéo nhẹ gần tiêu đề. Chỉ một dòng mỗi slide.
- Đã kiểm: cả ba font có bộ chữ tiếng Việt trên Google Fonts.

## Bề mặt
Nền navy phẳng, không gradient. Trường chấm halftone vàng neon (chấm 4px, lưới 22px) mờ dần theo đường chéo, đặt ở một góc làm "nhiễu in".
```css
background: radial-gradient(circle, #d4ff00 0 4px, transparent 5px) 0 0 / 22px 22px;
mask-image: linear-gradient(135deg, #000 10%, transparent 85%);
```

## Ngôn ngữ minh họa
- **Panel xanh điện:** khối chữ nhật cạnh thẳng, cắt sân khấu theo chiều dọc hoặc ngang.
- **Đường nối neon:** vạch vàng 12px có quầng sáng nhẹ, chạy dọc mép panel.
- **Huy hiệu tia lửa:** ngôi sao 24 cánh nhọn màu neon, lõi tròn navy viền xanh. Dùng cho "MỚI", con số chốt, lời mời.
- **Vòng tròn trắng** nét 4px làm tâm điểm, và **viên nhộng viền neon** (chip) như bóng lệch của một thẻ.
- **Sóng chữ:** dải sóng neon lặp ngang, đặt dưới tiêu đề như gạch chân viết tay.

## Chữ ký chuyển động
- **Bật công tắc:** panel quét vào bằng `wipe` từ mép, ngay sau đó đường nối neon lóe sáng (`fade` nhanh rồi `pulse` một lần).
- **Panel biến hình xuyên deck:** một panel duy nhất đổi vai giữa các slide bằng `data-morph="panel"` (nửa trái, cột giữa, thẻ nổi, dải ngang, đĩa tròn).
- **Huy hiệu bật và xoay chậm:** `pop` khi vào, lõi đứng yên còn cánh sao `spin` rất chậm (`data-loop-dur` 20 giây trở lên).
- **Sóng chữ tự viết:** nét sóng neon `draw` từ trái sang, như ai đó gạch chân bằng bút dạ quang.
- **Halftone rung nhẹ:** trường chấm `float` biên độ nhỏ, như mực in chưa khô.
- Nhịp: nhanh, nảy, có nhạc; cắt dứt khoát (`data-transition="cut"`) khi sang chương.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** panel xanh chiếm nửa trái, tên deck chữ trắng to; bên phải tối có vòng tròn trắng và huy hiệu neon xoay, dòng Pacifico bay chéo phía trên.
- **Ý tưởng lớn:** panel tràn toàn màn hình, câu chốt chữ trắng khổng lồ, một huy hiệu duy nhất đóng góc.
- **Con số chiến dịch:** panel thành dải ngang dưới các con số, số `data-count`, đường nối neon làm trục.
- **Kết:** panel cuộn tròn thành đĩa xanh lớn giữa sân khấu, chip neon vang theo bên cạnh, lời mời hợp tác.

## Nên tránh
Thêm màu nhấn thứ ba, bo góc mềm cho panel, neon tô mảng lớn, bóng đổ mờ kiểu UI, nhiều dòng Pacifico trên một slide, chữ dài trong huy hiệu.

## Họ hàng
`studio` (cũng chất agency điện năng nhưng nền sáng, ít retro), `neon-cyber` (neon trên nền tối nhưng lạnh và công nghệ, không có chất in), `risograph` (cũng hạt in, trẻ trung, nhưng mực chồng lệch trên giấy sáng).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
