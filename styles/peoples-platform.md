# People's Platform (áp phích cổ động)

> Áp phích in lụa của một chiến dịch: xanh cô-ban, cam hổ phách trên giấy ấm, chữ slab đậm dõng dạc, màu đỏ chỉ xuất hiện như bóng in chồng phía sau.

**Hợp:** tuyên ngôn, dự án cộng đồng, chiến dịch, kêu gọi hành động, pitch truyền cảm hứng, phong trào tình nguyện.
**Không hợp:** báo cáo tài chính chi tiết, sản phẩm cao cấp tinh tế, nội dung tĩnh lặng.
**Cảm xúc:** cổ động, mạnh mẽ, đồ họa, thẳng thắn.

## Hình dung
Mỗi slide là một tấm áp phích dán trên tường phố: mảng xanh đặc, khung kem dày bên trong, con dấu tròn có ngôi sao đóng lệch, băng cam chạy dưới chân. Chữ khẩu hiệu có hai lớp bóng đỏ chồng lệch như bản in nhiều lần bị trượt. Người xem cảm thấy được gọi tên, được rủ đứng dậy.

## Bảng màu
```css
--paper: #f5f2ea;     /* giấy ấm */
--cream: #f4e9d6;     /* khung, chữ trên nền xanh */
--ink: #0e0e14;       /* chữ, vạch 6px */
--muted: #45454f;
--blue: #2c2cdc;      /* xanh cô-ban: mảng chính, tiêu đề */
--orange: #f2a03a;    /* cam: băng rôn, số lớn, dòng viết tay */
--red: #e83a2a; --red-deep: #b7281c;  /* chỉ dùng làm bóng in chồng */
--sh-m: 6px 6px 0 var(--red), 12px 12px 0 var(--red-deep);
```
Luật màu: đỏ không bao giờ là màu chữ hay màu nền, chỉ là bóng cứng lệch xuống phải. Xanh và cam chia nhau mảng lớn; cam dành cho điều cần hô to.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Archivo+Narrow:wght@400;500;600;700&family=Patrick+Hand&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```
- Tiêu đề, khẩu hiệu: Alfa Slab One IN HOA, có bóng đỏ cứng.
- Thân: Archivo Narrow 500, chữ hẹp chắc như bản tin.
- Dòng viết tay (lời kêu gọi, chữ ký): Patrick Hand, xoay -3 độ, màu cam.
- Nhãn, ngày, địa điểm: IBM Plex Mono IN HOA, giãn 0,2em.
- Bản gốc dùng Caveat Brush và DM Mono; SlideFly đã đổi sang Patrick Hand và IBM Plex Mono vì có tiếng Việt.

## Bề mặt
Giấy ấm phủ hạt in lụa hai lớp chấm (đen 8%, trắng 6%) hòa trộn `multiply`, nằm trên mọi thứ khác.
```css
background-image: radial-gradient(rgba(0,0,0,.08) 1px, transparent 1px), radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px);
background-size: 3px 3px, 5px 5px; background-position: 0 0, 1px 2px;
```

## Ngôn ngữ minh họa
- **Mảng đặc phẳng** xanh hoặc cam, cạnh thẳng, không gradient.
- **Khung kem 6px** lùi vào trong mảng xanh như viền áp phích.
- **Con dấu tròn:** viền cam 6px, vòng nét đứt xanh bên trong, ngôi sao xanh ở giữa, xoay lệch -9 độ, bóng đỏ cứng.
- **Viên kim cương** cam xoay 45 độ làm dấu đầu mục.
- **Vạch mực 6px:** gạch chân, đường ray dòng thời gian, hoặc thanh che chữ như văn bản bị kiểm duyệt.
- **Dấu ngoặc kép khổng lồ** Alfa Slab màu cam có bóng đỏ cho câu trích.
- Hình gợi ý: loa phóng thanh, nắm tay giơ cao, đám đông cắt bóng phẳng, mũi tên khối. Vẽ phẳng hai màu.

## Chữ ký chuyển động
- **In chồng:** khẩu hiệu hiện bằng `stamp`, bóng đỏ lớp một rồi lớp hai đổ ra sau 120ms, như kéo lụa từng màu.
- **Con dấu đóng xéo** (`stamp`) rồi lắc nhẹ một nhịp (`sway` trên lớp con, chỉ khi cần sự sống).
- **Mảng xanh tràn trang:** sang chương mới, mảng xanh `wipe` từ trên phủ kín, khung kem `draw` vào trong.
- **Gỡ băng kiểm duyệt:** thanh mực che một từ trượt đi (`wipe` ngược) để lộ từ khóa màu cam.
- **Băng rôn cam kéo ngang** dưới chân trang (`wipe`) mang lời kêu gọi.
- Nhịp: dồn dập, từng cú đóng dứt khoát, như tiếng hô theo nhịp.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** mảng xanh kín trang, khung kem, khẩu hiệu chữ kem có bóng đỏ, con dấu ngôi sao đóng bên phải, băng cam dưới chân.
- **Ba yêu cầu:** ba viên kim cương cam, mỗi yêu cầu một dòng slab, hiện theo cú bấm như ba tiếng hô.
- **Sự thật bị che:** một câu có từ bị thanh mực che, bấm để gỡ băng.
- **Kết:** mảng cam tràn đè lên xanh, khung mực, chữ 170px "CÙNG LÀM", con dấu xanh xoay vào góc.

## Nên tránh
Đỏ làm màu chữ hay nền, gradient, bo góc mềm, ảnh stock, icon nét mảnh, nhiều font viết tay, giọng điệu ngập ngừng.

## Họ hàng
`broadside` (áp phích báo chí dõng dạc nhưng đơn sắc và nhiều chữ hơn), `bold-poster` (tuyên ngôn kiểu tạp chí, chữ script Lobster), `woodcut` (thô mộc, kịch tính, nét khắc gỗ đen).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
