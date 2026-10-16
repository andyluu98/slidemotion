# Thủy mặc (tranh mực tàu trên giấy xuyến)

> Mực năm sắc độ trên giấy xuyến ngà, núi xa tan vào sương, nét bút có phi bạch, khoảng trắng mênh mông và đúng một con dấu son nhỏ.

**Hợp:** văn hóa, triết lý, thương hiệu truyền thống, chiêm nghiệm, thơ ca, trà, thư pháp.
**Không hợp:** công nghệ, số liệu dày, sản phẩm trẻ trung sôi nổi, nội dung cần nhiều màu.
**Cảm xúc:** tĩnh lặng, thanh nhã, sâu lắng, Á Đông.

## Hình dung
Mỗi slide là một bức tranh sơn thủy đang được vẽ: dãy núi xa nhạt như hơi thở, núi gần đậm và có thớ đá, một chiếc thuyền nan nhỏ giữa mặt nước là giấy trống, một cành trúc chìa ra từ góc. 60 đến 80 phần trăm khung là giấy trống (trời, nước, sương). Người xem cảm thấy thời gian chậm lại; chữ đặt như lời đề thơ bên cạnh tranh.

## Bảng màu
```css
--paper: #F2ECDE;               /* giấy xuyến, sương, phi bạch */
--ink: #1B1A17;                 /* gốc mực, chữ */
--ink-jiao: rgba(27,26,23,.96); /* mực tiêu: chấm rêu, nét quyết định */
--ink-nong: rgba(27,26,23,.82); /* mực nùng: mép đậm, sống núi gần */
--ink-zhong: rgba(27,26,23,.6); /* mực trọng: nét phụ */
--ink-dan: rgba(27,26,23,.34);  /* mực đạm: thân núi, nét thuân */
--ink-qing: rgba(27,26,23,.16); /* mực thanh: núi xa, mặt nước */
--ink-cool: #3A4044;            /* mực lạnh: núi xa nhất */
--muted: #6A645A;               /* chữ phụ */
--son: #B02E22;                 /* son: chỉ con dấu */
```
- Sắc độ tạo bằng độ trong của cùng một màu mực, không pha màu khác.
- Son chỉ cho con dấu, tối đa một điểm nhỏ mỗi slide; không tô chữ, không làm mảng.
- Trong SVG ghi màu hex ở thuộc tính (`fill="#1B1A17"` kèm `fill-opacity`) để bản PowerPoint giữ đúng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Spectral:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
```
- Tiêu đề: Noto Serif Display 300 đến 400 (có tiếng Việt), thanh mảnh như chữ đề tranh; slide kết có thể 300 rất lớn.
- Thân: Spectral 300 đến 400 (có tiếng Việt), dòng 1,5.
- Kicker, chú thích dưới hình: Spectral nghiêng, chữ thường, giãn nhẹ 0,06em, màu xám.

## Bề mặt
Giấy ngà có vài vết ố tròn rất nhạt (màu `#D8CAAE`, độ đậm khoảng 0,22 tắt dần ra mép). Không khung, không viền. Minh họa không bao giờ đè lên chữ hay lấn hàng tiêu đề.

## Ngôn ngữ minh họa
- **Không có đường viền vector.** Hình thành từ nét bút có lực (mép đậm chính là đường bao), mảng loang ướt và nét khô quét nhanh lộ giấy (phi bạch).
- **Xa nhạt, gần đậm:** núi xa mực thanh hoặc mực lạnh, tan xuống thành dải sương bằng `linearGradient` dọc; núi gần mực đạm có mép nùng, nét thuân, chấm rêu mực tiêu.
- **Hình mẫu:** núi một nét, nét bút có phi bạch (nét mực rồi hai ba nét màu giấy mảnh đè ở nửa sau), vết loang có ngấn mép (`radialGradient`: giữa nhạt, mép đậm rồi tắt), dải sương màu giấy ngang chân núi.
- Nét: chính 5 đến 7px, phụ 3 đến 4px, thuân và vệt nước 2 đến 3px, luôn đầu tròn.
- Vật quen: thuyền nan và ngư ông, cành trúc, con dấu chữ 山; mỗi thứ một lần, nhỏ, chừa nhiều khoảng trống quanh nó.
- Chữ luôn là HTML, không viết chữ (kể cả chữ Hán) trong hình.

## Chữ ký chuyển động
- **Vẽ theo thứ tự nét của họa sĩ:** sống núi trước, nét phụ sau, vệt nước cuối (`<g data-anim="draw" data-stagger="250">`).
- **Mực loang ra:** vết loang hiện bằng `blur` kèm nở nhẹ, như giọt mực thấm vào giấy ướt.
- **Từ xa đến gần:** núi xa `fade` rất chậm trước, núi gần hiện sau, cuối cùng mới tới thuyền hoặc trúc; chiều sâu được dựng bằng thời gian.
- **Sương trôi qua:** khi chuyển slide, một dải sương màu giấy trượt ngang che rồi lộ cảnh mới (lớp cố định theo `data-scene`).
- **Ấn triện cuối cùng:** con dấu son `stamp` gọn ở góc, là động tác khép bức tranh.
- Nhịp: chậm, thở dài. Không lặp vô hạn, không rung, không xoay liên tục.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** chữ đề bên trái, bên phải núi chính vẽ dần từng nét, sương che chân núi, thuyền nan trên mặt nước trống phía dưới, cành trúc góc trên.
- **Hai trạng thái:** cùng một ngọn núi xa nhạt nhỏ rồi gần đậm lớn, nối bằng một nét cong có phi bạch, đầu nét chấm vào đỉnh.
- **Hành trình:** một nét bút dài làm trục, mỗi mốc là một vết loang đậm dần từ nhạt tới đặc, như mực thấm thêm qua từng bước.
- **Kết:** giấy gần như trống, một câu đề lớn mảnh, con dấu son đóng xuống.

## Nên tránh
Màu ngoài thang mực và son, hơn một điểm son mỗi slide, viền kín kiểu vector, mảng phẳng không gradient, bóng đổ, 3D, ánh kim, kính mờ, màu nước có màu, viền khắc gỗ dày kiểu Đông Hồ, vòng enso kiểu wabi, ảnh bitmap thay nét vẽ, phủ kín khung.

## Họ hàng
`wabi` (tối giản Nhật, enso và chỉ mực, không vẽ cảnh), `ukiyoe` (tranh khắc gỗ Nhật có màu và đường viền), `son-mai` (cũng Á Đông trang trọng nhưng nền tối, son đỏ và vàng lá).

*Ý tưởng gốc: lemo-opuscar `styles/ink-wash` (MIT), qua MotionFly và SlideFly.*
