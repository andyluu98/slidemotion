# Coral (áp phích tạp chí san hô)

> San hô rực, mực đen và giấy kem gặp nhau ở những cạnh cắt gọn. Mảng san hô có sọc chéo 45 độ, chữ IN HOA hẹp cao, đường răng cưa và một mặt trời san hô viền kem.

**Hợp:** thời trang, F&B, thể thao, lifestyle, hồ sơ agency, ra mắt bộ sưu tập, chiến dịch mùa hè.
**Không hợp:** học thuật, báo cáo tài chính trang trọng, chủ đề tang lễ hay sức khỏe nhạy cảm.
**Cảm xúc:** táo bạo, ấm áp, hiện đại, tự tin.

## Hình dung
Mỗi slide là một trang tạp chí khổ lớn được ghép từ ba tờ giấy cắt thẳng: tờ san hô có sọc chéo mờ, tờ mực đen, tờ kem. Chúng giành chỗ của nhau qua từng slide, chạm nhau bằng cạnh cứng. Điểm sáng là một mặt trời san hô có quầng kem, như logo của một bãi biển hay một câu lạc bộ thể thao. Người xem thấy năng lượng, nắng và sự tự tin.

## Bảng màu
```css
--cream: #f5f0e8;   /* giấy kem: nền chính */
--ink: #1a1a1a;     /* mực: mảng tối, chữ */
--coral: #e85d5d;   /* san hô: mảng lớn và nhấn */
--white: #ffffff;   /* thẻ trắng giữ điểm nhấn */
--muted: #6b6b6b;
--hatch: repeating-linear-gradient(45deg, transparent 0 20px, rgba(0,0,0,.06) 20px 40px);
```
Luật màu: san hô luôn đi kèm sọc chéo khi là mảng lớn, phẳng khi là chi tiết nhỏ (vạch, chấm). Trên nền san hô, chữ và nhấn chuyển sang mực đen. Thẻ trắng dùng để "nhốt" một ý duy nhất.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Oswald 600 IN HOA, giãn 0,02em, dòng 1,2 đến 1,3 (chừa chỗ cho dấu tiếng Việt).
- Nhãn nhỏ: Oswald giãn rộng 0,3em.
- Thân: Inter 300 đến 400; tiêu đề cột Oswald IN HOA.
- Bản gốc dùng Oswald thay Bebas Neue vì cần dấu tiếng Việt. Oswald và Inter đều có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Giấy kem phẳng. Mảng san hô luôn mang sọc chéo `--hatch` chồng lên màu. Không hạt, không bóng; chất lượng nằm ở cạnh cắt thẳng và tỉ lệ mảng.

## Ngôn ngữ minh họa
- **Mảng phẳng** chia trang theo tỉ lệ táo bạo (2/3 và 1/3, dải ngang chân trang).
- **Mặt trời san hô** tròn đặc, viền kem 6px, đặt trên mảng mực hoặc kem.
- **Đường răng cưa** nét mực 3px, lặp ngang, làm đường trang trí đầu hoặc chân trang.
- **Dấu ngoặc kép khổng lồ** Oswald 700 cỡ hơn 600px.
- Vạch mực 4px, vạch san hô 10px. Cột có viền trên san hô 8px. Mốc thời gian là vòng kem viền mực 6px.
- Ảnh (nếu có) cắt vuông, đặt sát cạnh mảng san hô, không bo.

## Chữ ký chuyển động
- **Giấy cắt giành chỗ:** các mảng san hô, mực, kem đẩy nhau theo cạnh khi chuyển slide (lớp cố định theo `data-scene`, `transition` 600ms ease-out), không mảng nào biến mất bằng mờ.
- **Mặt trời mọc:** chấm san hô `rise` từ dưới lên rồi phình về đúng cỡ (`pop`), một lần duy nhất ở bìa hoặc chương.
- **Răng cưa tự kẻ:** đường zigzag hiện bằng `draw` hoặc `wipe` từ trái, nhanh như bút chạy.
- **Ngoặc kép rơi:** dấu ngoặc khổng lồ `drop` nặng xuống mảng san hô trước khi câu trích hiện.
- **Sọc chéo trôi:** sọc 45 độ trên mảng san hô trôi rất chậm (keyframe `background-position`), cho trang có nhịp thở; bản PPTX để tĩnh.
- Nhịp: thể thao, mạnh và gọn, ease-out dứt khoát.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** trang san hô sọc chéo chiếm bên trái, mặt trời san hô mọc trên nền kem bên phải, khối mực đỡ góc dưới, răng cưa kẻ đầu trang.
- **Con số:** san hô phủ cả trang, con số mực đen Oswald cỡ cực lớn đếm lên (`data-count`).
- **Trích dẫn:** mực phủ trang, tấm san hô bên trái giữ dấu ngoặc kép, câu nói chữ kem.
- **Kết:** san hô phủ trang, dải mực chân trang mang lời cảm ơn IN HOA.

## Nên tránh
Bo góc, bóng đổ, gradient, thêm màu thứ tư, chữ Oswald dòng quá sát làm dính dấu, mảng san hô trơn không sọc ở cỡ lớn, chữ nhỏ trên nền sọc.

## Họ hàng
`broadside` (áp phích tuyên ngôn nền đen, cam lửa, chữ in thường), `bold-poster` (áp phích tạp chí nền trắng, đỏ cà chua, chữ script nghiêng), `block-frame` (pop vui nhộn, khối màu tươi, ít chất tạp chí).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
