# Bauhaus (hình học cơ bản trên giấy kem)

> Hình tròn đỏ, hình vuông xanh, nửa đĩa vàng, thanh đen và tam giác: mỗi slide là một bố cục cân bằng mới dựng từ cùng một bộ hình.

**Hợp:** bài giảng thiết kế, workshop sáng tạo, giáo dục, giới thiệu studio, giải thích nguyên lý.
**Không hợp:** chủ đề trầm buồn, văn hóa Á Đông truyền thống, báo cáo tài chính trang trọng.
**Cảm xúc:** hình học, sáng tạo, rõ ràng, giáo dục.

## Hình dung
Như bàn làm việc của một xưởng thiết kế đầu thế kỷ 20: tờ giấy kem, vài miếng giấy màu cắt thành hình cơ bản, người thiết kế xếp đi xếp lại cho tới khi bố cục "đứng". Người xem thấy trật tự, thấy sự cân bằng giữa các khối nặng nhẹ, và thấy chữ luôn có chỗ thoáng. Hình học không minh họa nội dung bằng hình ảnh; nó tạo nhịp và hướng mắt.

## Bảng màu
```css
--bg: #F2EBDD;     /* giấy kem */
--ink: #111111;    /* chữ, thanh đen, tam giác, vòng mảnh */
--muted: #4A4A4A;  /* chữ phụ */
--red: #D7263D;    /* hình tròn, màu nhấn chính */
--blue: #1B4E9B;   /* hình vuông */
--yellow: #F2B705; /* nửa đĩa */
```
- Ba màu cơ bản phẳng tuyệt đối. Mỗi màu gắn với một hình: đỏ tròn, xanh vuông, vàng nửa đĩa. Giữ cặp này xuyên deck để người xem "học" được ngôn ngữ.
- Chữ nhấn dùng đỏ. Không pha màu thứ tư.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Josefin Sans 700 IN HOA (có tiếng Việt), giãn 0,02em, dòng 1,2; dáng hình học tròn vuông hợp tinh thần.
- Thân: Archivo 400 đến 500 (có tiếng Việt), grotesk trơn.
- Kicker: Josefin Sans, giãn 0,2em. Số lớn dòng 1,1.

## Bề mặt
Giấy kem phẳng, không hạt, không bóng, không viền bo. Mọi góc vuông (bo 0), chấm đầu dòng cũng vuông.

## Ngôn ngữ minh họa
- **Bộ sáu hình:** tròn đỏ, vuông xanh, nửa đĩa vàng (bo trên, phẳng dưới), thanh đen dày khoảng 24px, tam giác đen, vòng đen rỗng viền 8px.
- **Bố cục:** hình dồn về một bên hoặc ra mép, chữ chiếm phần thoáng; cân bằng bất đối xứng (một khối to nặng đối với vài khối nhỏ).
- Sơ đồ: dùng chính các hình làm nút (tròn cho người, vuông cho hệ thống, tam giác cho cảnh báo...), nối bằng thanh đen.
- Biểu đồ: cột là chữ nhật phẳng ba màu, trục là thanh đen.
- Có thể chồng hình lên nhau (tròn đè vuông) nhưng không làm trong suốt.

## Chữ ký chuyển động
- **Dựng lại bố cục:** cùng sáu hình trượt, xoay, đổi cỡ để thành bố cục mới mỗi slide (`data-morph` cho từng hình: `"tron"`, `"vuong"`, `"nua-dia"`, `"thanh"`, `"tam-giac"`, `"vong"`). Chuyển động thẳng và dứt khoát như kéo miếng giấy trên bàn.
- **Thanh đen kẻ trước:** thanh đen `wipe` từ trái sang để chia không gian, rồi hình và chữ mới vào chỗ.
- **Hình rơi đúng lưới:** hình mới xuất hiện bằng `drop` ngắn, khớp vào vị trí như nam châm.
- **Vòng mảnh quay một nhịp:** vòng rỗng hoặc tam giác `spin` một vòng chậm làm điểm tựa thị giác (`data-loop-dur` dài, tối đa một vật).
- **Tách thành phần:** khi giải thích "gồm nhiều phần", một khối lớn tách thành ba hình cơ bản bay ra ba hướng (`left`, `rise`, `right`).
- Nhịp: rõ ràng, có chủ đích, như phép tính hình học.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tên bài IN HOA bên trái, bên phải tròn đỏ lớn đè lên vuông xanh, nửa đĩa vàng đặt dưới đáy như mặt trời mọc, thanh đen gạch chân.
- **Ba nguyên lý:** ba hình cơ bản đứng ba cột, mỗi hình gắn một nguyên lý, hiện theo cú bấm.
- **Trước và sau:** bên trái hình xếp lộn xộn, bấm một cái chúng trượt về bố cục cân bằng.
- **Kết:** các hình gom về một cụm gọn ở góc, lời cảm ơn IN HOA giữa vùng kem thoáng.

## Nên tránh
Gradient, bóng, bo góc, màu pastel, nét tay, ảnh chụp không cắt khung hình học, chữ chân, quá nhiều hình nhỏ vụn, hình đè lên chữ.

## Họ hàng
`swiss-modern` (lưới và chữ là chính, ít hình), `pastel-geometry` (cùng hình học nhưng pastel mềm, thân thiện), `block-frame` (khối màu pop viền đậm, ồn ào và quảng cáo hơn).

*Style gốc của SlideFly.*
