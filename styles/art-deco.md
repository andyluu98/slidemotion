# Art Deco (đêm gala vàng và ngọc lục bảo)

> Nền đen ngọc lục bảo, chữ ngà, một màu vàng kim duy nhất: quạt nắng xòe sau tiêu đề, khung đôi, vạch đôi, kim cương lồng nhau, đối xứng nghiêm ngặt.

**Hợp:** gala, lễ trao giải, tất niên, bất động sản cao cấp, ra mắt thương hiệu sang trọng, kỷ niệm thành lập.
**Không hợp:** startup trẻ trung, giáo dục trẻ em, nội dung kỹ thuật, chủ đề chữa lành.
**Cảm xúc:** sang trọng, lễ hội, cổ điển, trang trọng.

## Hình dung
Sảnh khách sạn những năm 1920: cửa thang máy mạ vàng, trần cao có quạt nắng, đèn hắt lên tường đá xanh thẫm. Mỗi slide là một tấm biển đồng khắc chạm, mọi thứ đối xứng qua trục giữa. Người xem cảm thấy mình là khách mời của một buổi tối quan trọng.

## Bảng màu
```css
--bg: #0E1A17;       /* đen ngọc lục bảo, nền */
--emerald: #12392F;  /* ngọc lục bảo: khối tháp bậc */
--fg: #F4ECD8;       /* ngà: chữ chính */
--muted: #BFB59C;    /* ngà xám: chữ phụ */
--gold: #D4AF37;     /* vàng kim: nét, khung, nhấn */
```
- Vàng kim chỉ dùng cho nét mảnh, viền, tia và chữ nhấn ngắn; không đổ thành mảng vàng lớn.
- Ngọc lục bảo là khối nền duy nhất có diện tích.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Josefin+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Playfair Display SC 700 (có tiếng Việt), chữ hoa nhỏ, giãn 0,02em, dòng 1,2. Số đứng (`lining-nums`).
- Thân: Josefin Sans 400 (có tiếng Việt), dáng hình học đúng thời Deco.
- Kicker và dòng ngày giờ: Josefin Sans 600 IN HOA, giãn rộng 0,2 đến 0,32em, màu vàng.

## Bề mặt
Nền tối phẳng. Khung đôi vàng (`border: 6px double`) cách mép khoảng 40px. Hai cặp vạch đôi vàng ngang ở trên và dưới. Khối ngọc lục bảo có đỉnh bậc thang như tòa tháp ziggurat.
```css
.quat { border: 2px solid #D4AF37; border-bottom: 0; border-radius: 9999px 9999px 0 0;
  background: repeating-conic-gradient(from -90deg at 50% 100%, #D4AF37 0deg .8deg, transparent .8deg 7.5deg);
  mask: radial-gradient(circle at 50% 100%, transparent 22%, #000 22.5%); }
```

## Ngôn ngữ minh họa
- **Quạt nắng:** nửa vòng tròn tia vàng mảnh, lõi rỗng, đặt sau tiêu đề hoặc trên đỉnh tháp.
- **Tháp bậc:** khối ngọc lục bảo bậc thang hai bên, đỉnh phẳng giữa.
- **Kim cương lồng nhau:** hình vuông viền vàng xoay 45 độ, hai ba lớp lồng nhau làm khung cho con số.
- **Khung đôi và vạch đôi:** giữ trật tự, đóng khung câu trích, giải thưởng.
- Biểu tượng nên có: chữ cái lồng (monogram), cúp, ngôi sao tia, ly rượu, đường cong cột trụ; vẽ nét vàng mảnh, đối xứng.
- Mọi bố cục đối xứng qua trục dọc giữa.

## Chữ ký chuyển động
- **Quạt xòe:** quạt nắng dâng lên từ chân tiêu đề (`rise-wipe`) rồi các tia hiện lan từ giữa ra hai bên, như rèm nhà hát mở.
- **Vạch đôi mở từ tâm:** cặp vạch trên và dưới kéo dài từ giữa ra hai bên cùng lúc (`wipe` từ tâm, hai nửa đối xứng).
- **Khung thu vào:** khung đôi xuất hiện hơi lớn (khoảng 1,08) rồi thu về đúng cỡ, như cửa thang máy khép lại vừa khít.
- **Kim cương xoay vào khung:** kim cương lồng nhau xoay 90 độ và đổi cỡ để thành khung mới cho con số (`data-morph="kim-cuong"`, bọc lớp ngoài để xoay).
- **Tháp dâng bậc:** khối ngọc lục bảo `drop` hoặc `rise` từng bậc khi sang chương.
- Nhịp: đĩnh đạc, đối xứng, nhạc jazz chậm; không nảy, không lệch.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** khung đôi khép vào, quạt nắng xòe sau tên sự kiện, vạch đôi mở ra, dòng ngày giờ IN HOA vàng.
- **Công bố giải thưởng:** kim cương lồng nhau xoay vào giữa, tên người thắng hiện bằng `zoom` chậm bên trong, theo cú bấm.
- **Cột mốc thành lập:** các năm đứng trên các bậc tháp, mỗi bậc dâng lên lần lượt.
- **Kết:** quạt nắng lớn nhất sau lời cảm ơn, khung đôi bao trọn khung hình.

## Nên tránh
Màu thứ ba nổi bật, vàng đổ thành mảng lớn, gradient ánh kim lòe loẹt, bố cục lệch, nét tay, bo tròn mềm, biểu tượng phẳng hiện đại, chuyển động nảy hay lắc.

## Họ hàng
`son-mai` (sang trọng kiểu Việt, sơn then và son đỏ), `emerald-editorial` (cũng xanh lục bảo nhưng chất bìa tạp chí hiện đại), `dark-botanical` (sang nền tối, mềm mại và thực vật hơn).

*Style gốc của SlideFly.*
