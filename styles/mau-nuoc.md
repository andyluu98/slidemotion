# Màu nước (sổ tay thực địa tự tô màu)

> Một trang sổ tay của người đi thực địa: nét chì phác trước, màu loang trong suốt tô sau, mép màu đọng đậm, một giọt son đỏ là điểm nhấn duy nhất.

**Hợp:** thiên nhiên, du lịch, kể chuyện, giáo dục, sức khỏe, môi trường, nông nghiệp.
**Không hợp:** số liệu tài chính dày, công nghệ lạnh, ra mắt sản phẩm cần cảm giác chính xác cứng.
**Cảm xúc:** mềm mại, tự nhiên, ấm áp, thủ công.

## Hình dung
Mỗi slide là một trang giấy cotton ấm có vân sợi, trên đó có một tờ giấy mép xé dán lệch. Người xem thấy họa sĩ làm việc: phác chì xám mảnh, rồi từng lớp màu thấm loang, chỗ hai lớp chồng nhau thì đậm hơn như màu thật. Giọng điềm tĩnh, tò mò, chính xác: một vật mẫu mỗi hình, ghi chú viết tay bên cạnh.

## Bảng màu
```css
--paper: #F3ECDD;     /* giấy nền cotton ấm */
--sheet: #FBF8F1;     /* tờ giấy mép xé, nền vật mẫu */
--ink: #2F2922;       /* chữ, thân cành, nét cọ khô */
--ink-2: #6E5D4B;     /* mực phụ */
--graphite: #7E7871;  /* nét chì phác, mũi tên, khung */
--sage: #7F9F6A; --leaf: #4E6E3C;   /* lá, đồi gần, mảng chính */
--straw: #D6B36A;     /* đất, nắng, mảng ấm */
--rain: #8FA9BE; --slate: #5F7486;  /* trời, nước, đồi xa */
--vermilion: #C2462B; /* điểm nhấn duy nhất */
--muted: #645646; --accent: #B23F27;  /* chữ phụ, chữ nhấn đủ tương phản */
```
Mỗi hình 3 đến 5 màu cộng mực. Muốn đậm hơn thì tô thêm lượt, không đổi sang màu tối hơn. Son đỏ chỉ một lần mỗi hình, nên là một vật lặp lại xuyên deck (mặt trời, giọt màu, bước cuối). Giấy là màu trắng: không tô trắng tinh, không dùng đen tuyền.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;1,500&family=Be+Vietnam+Pro:wght@300;400;600&family=Dancing+Script:wght@500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- Tiêu đề: EB Garamond 500, giãn rất nhẹ âm (-0,005em); chữ nghiêng 500 cho câu dẫn.
- Thân: Be Vietnam Pro 300 đến 400, thoáng.
- Ghi chú viết tay cạnh vật mẫu: Dancing Script 500 đến 600, ngắn.
- Nhãn nhỏ, chú thích loài, tọa độ: IBM Plex Mono 400.
Cả bốn font đều có bộ chữ tiếng Việt (đã kiểm trên Google Fonts ngày 16/10/2026).

## Bề mặt
Giấy kem có sợi và hạt rất mờ. Một tờ giấy sáng màu hơn, mép răng cưa nhỏ, nghiêng 1 đến 2 độ, làm nền cho hình chính. Khung chì phác bốn cạnh vượt nhẹ qua góc, có lượt thứ hai mảnh hơn lệch 2 đến 3px như vẽ nhanh.

## Ngôn ngữ minh họa
- **Mảng màu ba lượt:** cùng một đường cong kín vẽ ba lần: thân (`fill-opacity` .34 đến .42), lượt lệch nhỏ hơn (.16 đến .2), mép đọng là nét cùng màu (`stroke-opacity` .5 đến .85, dày 1,6 đến 2,4px). Không viền vector đen.
- **Hạt màu:** vài chấm tròn bán kính 0,6 đến 1,5px cùng màu rải trong mảng.
- **Giọt son nở:** mép gợn nhiều sóng nhỏ, lõi nhạt, vài hạt bắn ra ngoài.
- **Nét cọ khô:** dải mép răng cưa, vài vệt lông cọ đứt quãng chạy dọc, kết thúc sớm hơn dải.
- **Cành lá:** cuống một nét cọ, lá hình thoi cong một lượt có gân mảnh; lá xa nhạt hơn lá gần.
- Phong cảnh xếp lớp: trời mưa nhạt, đồi xa xám xanh, đồi giữa xô thơm, đồi gần lá đậm.
- Nhãn đặt trên giấy trống cạnh mảng màu, có đường dẫn chì; không che vật, không nằm trên mảng đậm.

## Chữ ký chuyển động
- **Phác chì trước, màu sau:** khung và trục hiện bằng `draw` (0 đến 0,3 giây), rồi mới đến màu. Đây là nhịp mở của mọi slide có hình.
- **Màu thấm loang:** từng lớp màu hiện bằng `blur` kèm trượt lên rất ít (khoảng 10px), chậm 1 đến 1,2 giây, `data-stagger` theo thứ tự nền, khối lớn, vật chính, chi tiết.
- **Mảng màu trôi và đổi sắc giữa slide:** ba mảng lớn là lớp cố định theo `data-scene`, đổi chỗ, đổi cỡ và đổi màu nền mượt, như nước loang sang góc khác của trang.
- **Giọt son rơi xuống giấy:** `zoom` nhỏ từ tâm rồi nở mép, một lần, ở khoảnh khắc quan trọng nhất.
- **Nét cọ khô quét ngang** dưới tiêu đề bằng `wipe` từ trái.
- Nhịp: chậm, thở, không nảy, không lặp vô hạn.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tờ giấy mép xé bên phải, chì phác đường chân trời và vòng mặt trời, rồi trời, đồi, cây loang lên từng lớp; giọt son làm mặt trời rơi xuống cuối cùng.
- **Hành trình, quy trình:** một dòng sông màu mưa chảy ngang, mỗi bước là một vũng màu; vũng đi theo bậc rơm, xô thơm, mưa, lá, và son đỏ cho bước cuối.
- **Sơ đồ khái niệm:** mỗi thành phần là một mảng màu riêng, chỗ hai mảng chồng nhau đậm lên đúng là "phần chung"; mũi tên chì cong nối.
- **Kết:** một cành lá vẽ dần từ cuống lên, lời cảm ơn viết tay bên cạnh.

## Nên tránh
Màu ngoài bảng, trắng tinh, đen tuyền, hơn một giọt son mỗi hình; viền vector đậm, hình phẳng đặc như clip-art, 3D, bóng đổ, ánh kim, gradient cầu vồng; chữ đè lên mảng đậm; số liệu tự đặt trong hình; bộ lọc nặng và `mix-blend-mode` (bản PPTX dễ mất hình).

## Họ hàng
`thuy-mac` (mực nước Á Đông gần đơn sắc, tĩnh và thiền hơn; màu nước ở đây nhiều sắc và ấm), `urban-sketch` (ký họa bút mực có viền nét rõ, phố phường; màu nước ở đây không viền, thiên nhiên), `crayon-book` (sáp màu trẻ em, nét đặc thô; màu nước thì trong và loang).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
