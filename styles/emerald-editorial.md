# Emerald Editorial (bìa tạp chí xanh ngọc)

> Bìa tạp chí: nền xanh ngọc bão hòa, mực xanh navy sâu, giấy yến mạch. Serif didone dày, đường kẻ mực 4px, hoa văn kẻ đôi kiểu tờ chương trình kịch với viên kim cương ở giữa.

**Hợp:** báo cáo lãnh đạo, họp chiến lược, ra mắt sản phẩm chất tạp chí, thư ngỏ của CEO, hồ sơ thương hiệu cao cấp.
**Không hợp:** trẻ em, workshop vui, kỹ thuật chi tiết, nội dung cần không khí nhẹ nhàng, mềm mại.
**Cảm xúc:** biên tập, tự tin, sang trọng, bìa tạp chí.

## Hình dung
Mỗi slide là một trang bìa hoặc trang mở đầu của tạp chí lớn: khung mực 4px bao quanh, dải tên báo (nameplate) navy trên đầu, chữ didone to và đối xứng, phía dưới là đường kẻ đôi tách đôi bởi viên kim cương, như tờ chương trình nhà hát. Hình chữ nhật tuyệt đối, không bo. Người xem cảm thấy đây là tuyên bố của người có vị thế.

## Bảng màu
```css
--em: #3CD896;      /* xanh ngọc: nền bìa */
--ink: #0F1A5C;     /* navy: chữ, đường kẻ, tấm đậm */
--ink-2: #1B2774;   /* chữ phụ */
--paper: #F1E9D6;   /* giấy yến mạch: tấm sáng, nhấn trên nền navy */
```
Luật màu: ba màu, đảo vai nhau. Nền xanh ngọc thì chữ navy. Navy phủ trang thì chữ xanh ngọc, nhấn giấy yến mạch. Giấy phủ trang thì chữ navy, như trang in bên trong.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Manrope:wght@500;700;800&display=swap" rel="stylesheet">
```
- Tiêu đề: Playfair Display 900, giãn -0,015em, căn giữa; phụ đề bìa Playfair nghiêng 700.
- Trích dẫn: Playfair 800 nghiêng.
- Thân: Manrope 500; nhãn đầu mục Manrope 800 giãn 0,18em; meta IN HOA giãn 0,12em.
- Bản gốc dùng Playfair Display 900 thay Bodoni Moda vì cần dấu tiếng Việt. Playfair và Manrope đều có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Xanh ngọc phẳng, không hạt. Khung `4px solid #0F1A5C` cách mép 60px như mép bìa. Dải nameplate navy cao khoảng 96px ở đỉnh khung, ngay dưới là một đường kẻ 4px.

## Ngôn ngữ minh họa
- **Hoa văn kẻ đôi:** hai đường 4px song song nằm sát nhau, tách làm hai nửa trái phải, viên kim cương navy (vuông xoay 45 độ) ở giữa.
- **Khung 4px** ôm vùng quan trọng: cả trang ở bìa, ô số liệu ở slide con số.
- Tấm navy và tấm giấy là hình chữ nhật cạnh sắc.
- Mốc thời gian là viên kim cương nhỏ trên trục mực, kết trục bằng kim cương lớn.
- Ảnh (nếu có) đặt trong khung 4px, cắt vuông, đen trắng hoặc tông lạnh.

## Chữ ký chuyển động
- **Kẻ đôi mở từ tâm:** hai nửa đường kẻ đôi `wipe` từ giữa ra hai phía, viên kim cương `pop` đúng tâm ngay sau, như tấm màn sân khấu mở.
- **Khung siết vào:** khung 4px từ ngoài sân khấu co về đúng mép bìa (`data-morph="frame"`), sang slide sau lại thu nhỏ ôm đúng vùng cần nhìn.
- **Nameplate hạ xuống:** dải navy đầu trang `drop` không nảy, đường kẻ 4px `wipe` ngay dưới.
- **Kim cương đi xuyên deck:** cùng một viên kim cương đổi chỗ qua các slide (`data-morph="gem"`), lúc là tâm hoa văn, lúc là góc mục lục, lúc là đầu mút trục thời gian.
- **Tiêu đề didone hiện bằng `zoom`** rất nhẹ từ 104% về 100%, đối xứng, chậm.
- Nhịp: trang trọng, đối xứng, mọi thứ đi từ tâm ra hoặc từ ngoài vào tâm.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** khung siết vào mép, nameplate navy hạ xuống mang tên tổ chức, tiêu đề didone giữa trang, kẻ đôi mở từ tâm với kim cương ở dưới.
- **Chương:** navy phủ trang, tấm giấy bên phải, kim cương nằm giữa hai đường kẻ ngoặc.
- **Con số lãnh đạo:** dải navy mang ba con số xanh ngọc `data-count`, khung xanh ngọc bên trong.
- **Kết:** navy phủ trang, hai đường kẻ xanh ngọc ngoặc trên dưới một từ duy nhất.

## Nên tránh
Bo góc, bóng đổ, gradient, serif mảnh (mất chất bìa), bố cục lệch không chủ đích, thêm màu ngoài ba màu, quá nhiều viên kim cương trên một slide.

## Họ hàng
`editorial-tri-tone` (tạp chí ba màu ấm mềm, bo góc, serif nghiêng), `art-deco` (sang trọng lễ hội nền tối, đường hình học vàng), `vintage-editorial` (tạp chí cổ điển dí dỏm, có cá tính).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
