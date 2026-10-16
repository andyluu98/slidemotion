# Xanh Đại Học (mẫu Morph giảng đường, vòng xanh và bông tám cánh)

> Những vòng tròn xanh đồng tâm nở ra từ một chấm, đĩa trắng ở tâm, bông hoa tám cánh xanh thẫm xoay về chỗ, hai viên kim cương bay hai bên. Trẻ, học thuật, thân thiện.

**Hợp:** bảo vệ đề tài, luận văn, bài giảng, báo cáo nhóm, hội thảo sinh viên, giới thiệu khoa, câu lạc bộ học thuật.
**Không hợp:** sự kiện sang trọng tối màu, văn hóa truyền thống, thương hiệu thời trang, nội dung hài hước.
**Cảm xúc:** trẻ, học thuật, thân thiện.

## Hình dung
Như bộ slide đẹp nhất trong lớp mà ai cũng muốn xin mẫu: nền trắng xanh sáng, các vòng tròn xanh dày có bóng đổ chéo xuống trái tạo cảm giác giấy cắt nổi khối, một bông hoa tám cánh nhiều sắc xanh như huy hiệu trường. Mọi chuyển cảnh là một cú Morph mượt kiểu PowerPoint: vòng nở, hoa xoay, đĩa trượt. Người xem thấy chỉn chu, tươi, đáng tin.

## Bảng màu
```css
--bg: #F7FCFF;        /* trắng ánh xanh */
--fg: #0D2B4E;        /* xanh đêm: chữ */
--muted: #4F6378;
--blue: #03A9F4;      /* vòng xanh chính, kim cương */
--accent: #0288D1;    /* xanh đậm hơn: thẻ lớn, chữ nhấn (chữ trắng trên nền này đạt 3,8:1) */
--card: rgba(255,255,255,.88);  /* thẻ trắng chứa chữ */
/* tám cánh hoa, từ sáng tới thẫm */
--p1: #1E88E5; --p2: #0288D1; --p3: #0091EA; --p4: #1565C0;
--p5: #0070C0; --p6: #1A47A0; --p7: #14206F; --p8: #002060;
--shadow: -30px 30px 46px rgba(0,0,0,.4);  /* bóng chéo xuống trái */
```
Xanh là chủ đạo, không thêm màu nhấn khác. Điểm nhấn là đĩa trắng có bóng nằm giữa vòng xanh: thứ gì đặt vào đó là thứ quan trọng nhất.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Montserrat 800, tròn trịa, trẻ.
- Thân: Open Sans 400 đến 600, rõ khi chiếu ở giảng đường.
- Số lớn trong đĩa trắng: Montserrat 700 đến 800.
- Hai font đã kiểm có khối tiếng Việt.

## Bề mặt
Nền sáng, có lúc phủ gradient tròn (trắng xanh ở giữa, xanh đậm dần ra mép) hoặc gradient dọc nhạt xuống xanh. Một vệt sáng ngang mảnh xám nhạt chạy qua giữa trang ở slide mở đầu.
```css
background: radial-gradient(circle farthest-corner, #F0FAFF 74%, rgba(3,169,244,.94) 96%);
```

## Ngôn ngữ minh họa
- **Vòng đồng tâm:** bốn vòng (xanh mờ nhòe, xanh chính, xanh 70%, trắng) viền rất dày 120 đến 160px; khi phóng to tràn ra ngoài trang thành khung.
- **Đĩa:** đĩa trắng có bóng, đĩa gradient trắng xanh viền trắng 2px.
- **Bông tám cánh:** tám cánh hình quạt ghép thành vòng tròn có lõi rỗng, mỗi cánh một sắc xanh.
- **Kim cương:** hình vuông bo 5px xoay 45 độ, bóng chéo, đặt đối xứng hai bên hoặc làm đầu mút trục thời gian.
- **Thẻ xanh lớn** bo 28px có bóng, chứa chữ trắng; thẻ trắng 88% cho cột nội dung.

## Chữ ký chuyển động
- **Nở vòng:** tất cả vòng xếp chồng ở tâm thành một chấm, rồi nở ra thành khung tràn trang (lớp cố định đổi kích thước theo `data-scene`), chậm và đầy.
- **Hoa xoay vào chỗ:** bông tám cánh đổi cỡ và góc xoay qua mỗi slide (`data-morph`, bọc lớp ngoài để xoay 180, 90, 0 độ).
- **Kim cương bay vào:** hai viên từ ngoài mép `left` và `right` đối xứng, xoay về 45 độ.
- **Thẻ xanh hạ xuống** che nửa trang (`drop` không nảy mạnh) để mở phần nội dung.
- **Hoa thở nhẹ:** ở slide tĩnh, bông hoa xoay cực chậm (`data-loop="spin"`, `data-loop-dur` dài).
- Nhịp: mượt, liền mạch kiểu Morph, không cắt ngang.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** một vệt sáng ngang và chấm nhỏ ở tâm; vòng xanh nở tung thành khung, hoa nhỏ đậu trên đĩa trắng phía trên tên đề tài.
- **Mục lục:** thẻ xanh phủ kín, hoa phóng to đầy đủ ở giữa, các mục xếp hai bên như cánh.
- **Kết quả nghiên cứu:** vòng xanh thu về bên phải ôm đĩa trắng, con số chính `data-count` nằm trong đĩa.
- **Kết:** vòng đồng tâm lớn có bóng, hoa phóng to mờ phía sau, "Cảm ơn hội đồng" xanh đậm ở tâm.

## Nên tránh
Màu nóng, nền tối, font chữ tay, quá nhiều chữ trong đĩa trắng, chuyển cảnh cắt đột ngột, dùng hoa và vòng cùng lúc ở cỡ lớn trên một slide.

## Họ hàng
`blue-professional` (xanh tư vấn doanh nghiệp, phẳng, không hình tròn nổi khối), `pastel-geometry` (hình học dịu nhiều màu, hợp đào tạo nội bộ), `cobalt-grid` (xanh coban biên tập kiểu nghiên cứu, nghiêm hơn).

*Ý tưởng gốc: mẫu PowerPoint "MẪU MORPH ĐẠI HỌC", chuyển thể qua SlideFly.*
