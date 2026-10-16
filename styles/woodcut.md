# Tranh khắc gỗ (bản in nổi từ khối gỗ)

> Đen là gỗ còn nguyên, trắng là chỗ lưỡi dao đã lấy đi: khối đen lớn có vân gỗ, tia nắng khắc, nhát đục có hướng, và một tấm màu cam cháy chỉ in trong vùng đã khắc trắng.

**Hợp:** truyện dân gian, thương hiệu thủ công, trailer sách, kể chuyện lịch sử và di cư, tuyên ngôn, nông nghiệp, lao động.
**Không hợp:** công nghệ bóng bẩy, sản phẩm số, nội dung trẻ em vui tươi, báo cáo số liệu chi tiết.
**Cảm xúc:** thô mộc, mạnh mẽ, thủ công, kịch tính.

## Hình dung
Như đứng trong xưởng in: khối gỗ đen vừa được lăn mực, tờ giấy kem ép xuống rồi lột ra, để lại mảng đen đặc, vân gỗ, những nhát dao trắng sắc. Ánh sáng không được vẽ mà được khắc ra. Cảnh có mặt trời tỏa tia, dãy núi đen, mái nhà với một ô cửa sáng đèn màu cam. Người xem thấy sức nặng, sự bền bỉ và một chút hy vọng.

## Bảng màu
```css
--paper: #efe5d0;       /* giấy, nhát đã khắc */
--ink: #14110d;         /* mực, mặt gỗ chưa khắc */
--orange: #e0612b;      /* tấm màu duy nhất: chỉ trong vùng khắc trắng */
--orange-text: #f2793a; /* chữ cam trên nền đen */
--accent: #9c3416;      /* chữ nhấn gạch nung trên giấy */
--muted: #4a4036;
```
Gần như chỉ đen và giấy. Cam là một tấm in thứ hai, chỉ nằm trong vùng đã khắc trắng (lõi mặt trời, ô cửa sáng đèn, mũi tên của vật đang chuyển); không in lên vùng đen chưa khắc, không làm nền trang trí. Trên slide nền đen, chữ đổi sang màu giấy.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap" rel="stylesheet">
```
- Tiêu đề: Anton, IN HOA, giãn 0,03em, như chữ gỗ xếp tay của nhà in.
- Thân, chú thích: Vollkorn 400 đến 600, chữ nghiêng 500 cho chú thích hình.
Cả hai font có tiếng Việt (đã kiểm ngày 16/10/2026). Bản gốc ghi rõ IM Fell English không dùng vì thiếu tiếng Việt.

## Bề mặt
Giấy kem có sợi ngang, vài hạt mực văng, tối nhẹ ở mép. Khối đen có vân gỗ ngang mờ (sọc giấy 7 phần trăm cách 9px và 31px), mép rách không đều. Khung mép khối 10px đen quanh tờ in; trên nền đen có đường giữ lề màu giấy 4px.
```css
background: repeating-linear-gradient(180deg, rgba(239,229,208,.075) 0 1.5px, transparent 1.5px 9px),
            repeating-linear-gradient(180deg, rgba(239,229,208,.055) 0 3px, transparent 3px 31px), #14110d;  /* khối gỗ */
```

## Ngôn ngữ minh họa
- **Bốn loại dao:** dao nhọn 1,5 đến 2,5px (viền, nếp), đục V 3 đến 8px (gạch bóng, tóc), đục U 10 đến 20px (tia nắng, quét trời), chấm đục bán kính 2 đến 5px (tuyết, tia lửa, sao).
- **Mỗi nhát là hình lá:** gốc to, ngọn nhọn, dài 30 đến 160px; không bao giờ là đường dài đều.
- **Gạch bóng theo hình:** nét chạy theo mặt (sườn núi song song mép sườn). Sáng thì nhát rộng, tối thì để nguyên gỗ. Chỉ khắc 3 đến 6 nhát sát mép hướng sáng; khắc kín mặt sẽ thành lông hay mưa.
- **Viền dao trắng** quanh vật đen trên nền đen: một quầng giấy rồi bóng đen đè lên.
- **Tia nắng khắc** tỏa từ tâm dài ngắn xen kẽ, đĩa cam ở lõi viền một vòng giấy. **Quét trời:** hai ba nhát U rất dài gợi tốc độ.
- **Ô cửa sáng đèn:** nhà đen viền giấy, một ô cửa cam; là chỗ duy nhất có màu trong cảnh.
- **Nhãn hình** "HÌNH n · TÊN" chữ Anton màu giấy, gạch chân bằng một nét dao.

## Chữ ký chuyển động
- **Khắc ra, không mờ ra:** hình hiện theo thứ tự tay thợ: nhát U thô trước, nhát V mảnh sau, chấm đục cuối (`pop` nhanh theo nhóm, `data-stagger` ngắn), như lưỡi dao đang lấy gỗ đi.
- **Ép giấy:** khoảnh khắc chính hiện bằng `stamp`, như tờ giấy được ép xuống khối gỗ rồi lột ra; mạnh, một lần, không nảy.
- **Khối đen đổ xuống:** khối gỗ là lớp cố định theo `data-scene`, đổi chỗ nặng nề giữa các slide (trái sang phải, lên thành dải đáy), như người thợ đặt khối khác lên bàn in.
- **Mặt trời và núi trượt:** đĩa mặt trời lên cao dần qua các slide (`data-morph`), dãy núi trượt chậm theo, kể thời gian trôi.
- **Màu cam in sau cùng:** ô cửa, lõi mặt trời hiện `fade` sau khi mọi nhát đen đã xong, như lượt in tấm màu thứ hai.
- Nhịp: nặng, chắc, ít động tác mà mạnh; không lặp, không rung.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** khối đen bên phải, mặt trời tia khắc với lõi cam, dãy núi đen có mái nhà một ô cửa sáng, vài nhát quét trời; tên deck chữ Anton bên trái, ép giấy bằng `stamp`.
- **Hành trình, di cư:** dải mực rách làm trục, mỗi trạm là đĩa mực khắc thêm nhát hơn trạm trước; trạm cuối tô cam với nhiều nhát nhất: "khắc là thời gian".
- **Biến đổi:** tư thế cũ chỉ là nét dao đứt, tư thế mới là mảng trắng khắc nét đen, mũi tên cong cam ở giữa.
- **Tuyên ngôn, kết:** cả slide là khối đen, một câu chữ giấy lớn, chấm đục bay như tia lửa.

## Nên tránh
Gradient, bóng đổ mờ, xám trung gian, màu thứ hai ngoài cam, cam in lên vùng đen chưa khắc; nét dài đều như vẽ máy; khắc kín mọi mặt; mặt người đen có nét trắng khó đọc; ảnh chụp lọc ngưỡng đen trắng; chép bản khắc của nghệ sĩ có thật.

## Họ hàng
`engraving` (khắc đồng nét mảnh đan chéo, tinh và học thuật; khắc gỗ mảng lớn, thô, kịch tính), `dong-ho` (tranh dân gian mảng màu phẳng, vui; khắc gỗ gần như chỉ đen và giấy, nặng hơn), `peoples-platform` (áp phích cổ động đồ họa, khẩu hiệu thẳng; khắc gỗ kể chuyện bằng hình và chất gỗ).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
