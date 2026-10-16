# Sơn dầu impasto (sơn dày gạt bằng dao)

> Một bức tranh sơn dầu dày trên vải bố sẫm, đóng khung vàng: mảng màu lớn mép xiên sắc, ánh đèn ấm đối với bóng xanh lạnh, và một chủ thể rực màu.

**Hợp:** triển lãm nghệ thuật, giới thiệu tác phẩm, thương hiệu cao cấp, kể chuyện cảm xúc, sự kiện văn hóa.
**Không hợp:** sơ đồ kỹ thuật chi tiết, bảng số liệu dày, nội dung trẻ em.
**Cảm xúc:** đậm đặc, ấm áp, nghệ thuật, giàu cảm xúc.

## Hình dung
Người xem đứng trước một bức tranh đường phố đêm mưa trong phòng triển lãm: mặt tiền vàng đất có cửa sổ sáng, đèn đường hắt xuống mặt đường ướt thành những vệt ngang, vài chiếc ô màu nhìn từ trên cao. Đến gần thì thấy từng nhát dao: chỗ lưỡi ép có sống sơn sáng, chỗ nhấc lên có mép tối. Ánh sáng luôn từ trên trái.

## Bảng màu
```css
--canvas: #211914;   /* vải bố sẫm, nền (tối nhất #1A100B) */
--cream: #F3E7D0;    /* chữ, sống sơn sáng (trắng ấm #FFF2D2) */
--umber: #C8B79B;    /* chữ phụ, nhãn */
--gold: #EDB94E;     /* đèn, khung mạ vàng, màu nhấn chữ */
--peach: #F2B58C;    /* chân trời đào */
--cobalt-text: #9DBDF0;  /* chữ xanh trên nền tối */
/* trong tranh */
--cobalt: #1D347A; --cobalt-2: #2A4C9A; --cobalt-3: #3E6BC0;  /* trời, nước, bóng lạnh */
--orange: #E8963C; --rust: #B65A28;                          /* phản chiếu ấm */
/* chủ thể bão hòa, chỉ cho vật chính */
--s-red: #C8301F; --s-blue: #2F5FB5; --s-yellow: #F2B632; --s-green: #2F9A6E; --s-magenta: #B03A80;
```
Độ bão hòa cao nhất dành cho chủ thể (chiếc ô, vật chính), không dành cho nền. Nền lạnh và đậm, đèn ấm.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet">
```
- Tiêu đề: Fraunces 600, serif mềm có cá tính, màu kem hoặc vàng.
- Thân: Source Serif 4 400 đến 500.
- Cả hai font có bộ chữ tiếng Việt (đã kiểm Google Fonts ngày 16/10/2026).

## Bề mặt
Vải bố sẫm ấm có sợi dệt rất mờ, khung gỗ mạ vàng quanh tờ. Thẻ nội dung là một lớp kem rất mỏng (`rgba(255,236,200,.07)`), gần như trong. Không phủ hạt nhiễu lên toàn hình (nhiễu ăn mất mép dao).

## Ngôn ngữ minh họa
- **Nhát dao:** hình bình hành hai đầu cắt xiên (xiên 0,2 đến 0,3 lần bề cao), một màu, lệch sáng tối khoảng 10%; đôi khi có mảng thứ hai cùng tông kéo lẫn vào.
- **Sống sơn** sáng 3px ở cạnh trên; **mép tối** 4px ở cạnh dưới. **Vệt kéo** mảnh theo hướng nhát; **sơn cạn** cuối nhát là vài sợi ngắn dần.
- Không viền mảnh. Gradient chỉ làm bằng bậc thang nhát dao (cobalt, đào, vàng chia 6 đến 7 dải).
- **Phản chiếu mặt đường ướt:** chồng nhát ngang ngắn dưới nguồn sáng, hẹp và nhạt dần xuống.
- Bố cục giá trị trước: hình phải đọc được ở cỡ thumbnail với ít nhất ba mức sáng tối.
- Hình mẫu: ô nhìn từ trên (8 múi xen hai màu), vệt nhát màu to dần về đích, vòng nhát đứt (bản "mờ" của một vật), bảng pha màu gỗ óc chó hình thận làm chú thích, số trong vòng viền vàng.

## Chữ ký chuyển động
- **Gạt từng nhát:** hình hiện bằng chuỗi `wipe` theo đúng hướng nhát dao, mỗi nhát trễ 90 đến 140ms, như họa sĩ đang gạt sơn ngay trước mắt.
- **Trời đắp bậc:** các dải trời `wipe` từ trên xuống, cobalt đến đào đến vàng, mỗi dải một nhát.
- **Phản chiếu nhỏ giọt:** các vệt ngang dưới đèn `rise` từ trên xuống mặt đường, hẹp dần, trễ dần.
- **Ô bung mở:** chủ thể rực màu vào sau cùng bằng `zoom` ngắn, là khoảnh khắc duy nhất có màu bão hòa chuyển động.
- **Khung mạ vàng** là lớp cố định xuyên deck, đổi tỷ lệ theo `data-scene` khi đi vào chi tiết (như bước lại gần tranh).
- Nhịp: chậm vừa, có trọng lượng. Sơn tĩnh là sơn tĩnh: không lặp, không rung, không "sôi" nét.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** đường phố đêm gạt dần từng nhát, đèn sáng lên, ba chiếc ô rực màu cuối cùng; tên deck chữ kem.
- **Câu chuyện cảm xúc:** một vật duy nhất bão hòa trên nền cobalt lạnh, câu chốt bên cạnh, nhiều khoảng tối.
- **So sánh trước và sau:** "trước" là vòng nhát đứt mờ, "sau" là vật đầy đủ sống sơn sáng.
- **Kết:** bảng pha màu với ba nhát sơn, lời cảm ơn chữ vàng trong khung mạ.

## Nên tránh
Nét viền mảnh quanh hình, gradient mượt, bóng mờ, glow neon, hiệu ứng thủy tinh, 3D, bộ lọc "tranh sơn dầu" lên ảnh, xoáy kiểu Van Gogh, hạt nhiễu phủ toàn hình, chữ nhỏ vẽ bằng nhát dao, số liệu bịa, chép tranh có thật.

## Họ hàng
`dark-botanical` (cũng tối và sang, nhưng lá phẳng và ánh sáng mềm, không có mép dao), `mau-nuoc` (màu trong, loang, nền sáng, nhẹ hơn hẳn), `hd-2d` (ánh sáng ấm huyền ảo kiểu diorama game, không có chất sơn).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
