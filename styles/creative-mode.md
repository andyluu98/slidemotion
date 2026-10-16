# Creative Mode (tân thô mộc của studio thiết kế)

> Nền kem, viền mực 4px, bóng lệch cứng, khối màu phẳng xanh lá, hồng, cam, vàng. Chữ IN HOA dày đặc, nhãn mono, con dấu xoay nghiêng và băng cảnh báo sọc vàng đen.

**Hợp:** pitch agency hoặc studio, review sáng tạo, giới thiệu portfolio, talk muốn khác thường, hackathon, ra mắt thương hiệu trẻ.
**Không hợp:** báo cáo hội đồng, tài liệu pháp lý, chủ đề buồn hoặc trang nghiêm, khách hàng thích sự kín đáo.
**Cảm xúc:** sáng tạo, tự tin, tinh nghịch, đậm chất thiết kế.

## Hình dung
Bàn làm việc của một studio: các khối giấy màu cắt vuông xếp chồng thành bố cục kiểu cắt dán, mỗi khối có viền mực dày và bóng đổ lệch cứng như được in offset. Một con dấu tròn hồng đóng nghiêng, một dải băng cảnh báo sọc vàng đen chắn ngang góc như "đang thi công ý tưởng". Kết deck, màu xanh lá phủ kín sân khấu. Người xem cảm thấy tự tin và được mời chơi cùng.

## Bảng màu
```css
--cream: #EFE9D9;    /* nền */
--cream-2: #E4DCC4;  /* tấm giấy, thẻ */
--ink: #0F0F0F;      /* viền 4px, bóng cứng, chữ */
--green: #1F8A4C;    /* nhấn chính, phủ trang kết */
--pink: #F06CA8;     /* nhấn phụ, con dấu */
--orange: #E85A1F;   /* khối chồng, bóng màu */
--yellow: #F5C518;   /* vòng tròn, băng cảnh báo, số nổi */
```
Luật màu: mọi khối màu đều có viền mực 4px. Bóng là bóng cứng không blur, màu mực hoặc màu cam lệch 18 đến 24px. Xanh lá là màu "chốt", đừng để nó lẫn vào các khối trang trí khác trên cùng slide.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Archivo 900 IN HOA, giãn -0,01em, dòng 1,08.
- Thân: Space Grotesk 400 đến 500.
- Nhãn, meta: JetBrains Mono 700 IN HOA, giãn 0,14em, nằm trên băng mực chữ kem.
- Bản gốc dùng Archivo 900 thay Archivo Black vì cần dấu tiếng Việt. Cả ba font có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Nền kem phẳng. Một tấm `--cream-2` lớn có thể làm "bàn cắt dán" ở một bên. Không gradient, không hạt; độ sâu đến từ bóng cứng.

## Ngôn ngữ minh họa
- Khối vuông và chữ nhật viền 4px, góc vuông; một vòng tròn vàng làm điểm tròn duy nhất.
- **Bóng cứng:** `box-shadow: 18px 18px 0 #0F0F0F`; khối hồng có bóng kép (cam rồi viền mực).
- **Con dấu:** tròn hồng xoay -6 độ, vòng kem bên trong.
- **Băng cảnh báo:** sọc -45 độ vàng và mực, xoay -4 độ, chắn ngang góc slide.
- Ô số liệu mỗi ô một màu nền (hồng, vàng, xanh, cam), viền mực; thẻ so sánh: một kem, một hồng.
- Mũi tên trục thời gian có đầu tam giác cam.

## Chữ ký chuyển động
- **Đập khối có bóng:** khối `drop` xuống, bóng cứng mọc từ 0 lên 18px ngay khi chạm, như tấm giấy vừa đập xuống bàn.
- **Nút bấm lún:** khi một ý được chọn, khối dịch 18px theo hướng bóng và bóng về 0, như phím bị nhấn (`data-step` + transition).
- **Con dấu đóng xoay:** `stamp` kèm xoay từ -20 độ về -6 độ.
- **Băng cảnh báo kéo ngang:** `wipe` từ trái, chéo -4 độ, chắn ngang trước khi ý "cẩn thận" xuất hiện.
- **Xanh lá nuốt sân khấu** ở slide kết (`data-transition="wipe"` với khối xanh tràn ra).
- Nhịp: giật, nảy cứng, vui; nhiều nhịp nhỏ liên tiếp.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** bên phải là tấm cắt dán: khối xanh lớn, vòng vàng, khối cam, khối hồng lần lượt đập xuống chồng lên nhau; tiêu đề IN HOA dày bên trái.
- **Bốn con số:** bốn ô màu khác nhau đập xuống so le, số đếm lên (`data-count`), một ô có con dấu "MỚI".
- **Rủi ro:** băng cảnh báo kéo ngang góc, khối cam rung nhẹ (`sway` một lần).
- **Kết:** xanh lá phủ kín, con dấu viền kem đóng giữa trang.

## Nên tránh
Bóng mờ, bo góc mềm, gradient, viền mảnh, chữ thường cho tiêu đề, khối không viền, quá năm khối trên một slide (thành bừa không có chủ ý).

## Họ hàng
`block-frame` (pop tươi, khối màu, nhẹ tay hơn và không viền dày), `neo-grid-bold` (lưới mạnh biên tập, ít đồ chơi), `creative-voltage` (retro hiện đại sôi động, có chữ script).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
