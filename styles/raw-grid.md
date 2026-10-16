# Raw Grid (lưới thô viền đen)

> Nền trắng, viền đen 3px chính là bố cục. Ô hồng phấn, ô xanh lá phấn, bóng cứng lệch 6px, nhãn đen dạng viên thuốc và mũi tên dẫn đường.

**Hợp:** pitch khởi nghiệp, demo sản phẩm, deck thương hiệu, so sánh số liệu, kế hoạch hành động, tóm tắt dự án.
**Không hợp:** văn hóa truyền thống, sự kiện sang trọng, nội dung cảm xúc nhẹ nhàng.
**Cảm xúc:** thô mộc, dứt khoát, năng động, tự tin.

## Hình dung
Như một bảng kế hoạch dựng bằng khung thép sơn đen: mỗi ý là một ô có viền dày, ô được đóng kín, ô quan trọng nổi lên nhờ bóng đen cứng như tấm bìa dán lệch. Người xem thấy ngay ý nào nằm ở đâu, ý nào nối với ý nào. Không có gì mập mờ.

## Bảng màu
```css
--bg: #ffffff;     /* nền trắng */
--ink: #0a0a0a;    /* viền, chữ, mảng đen, bóng */
--muted: #333333;
--pink: #F2D4CF;   /* ô hồng phấn */
--green: #E5EDD6;  /* ô xanh lá phấn */
--sh: 6px 6px 0 #0a0a0a;  /* bóng cứng của thẻ nổi */
```
Luật màu: hồng và xanh lá là hai "phe" (trước và sau, vấn đề và giải pháp, của ta và của họ), đổi vai được nhưng không thêm phe thứ ba. Đen là cấu trúc; trang kết có thể đảo hẳn sang nền đen chữ trắng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500;700;800;900&display=swap" rel="stylesheet">
```
- Tiêu đề: Be Vietnam Pro 900, IN HOA, giãn âm (-0,02em).
- Thân: Be Vietnam Pro 500.
- Nhãn: Be Vietnam Pro 800 giãn 0,1em, chữ trắng trong viên thuốc đen; phụ đề và nguồn IN HOA 700.
- Bản gốc dùng Segoe UI (font hệ thống); SlideFly đổi sang Be Vietnam Pro để có tiếng Việt.

## Bề mặt
Trắng phẳng, không hạt, không lưới in sẵn: chính các viền 3px vẽ ra lưới. Một ký tự khổng lồ ("→" hoặc dấu ngoặc kép) đặt chìm rất mờ làm hình nền.
```css
border: 3px solid #0a0a0a; box-shadow: 6px 6px 0 #0a0a0a;  /* thẻ nổi */
```

## Ngôn ngữ minh họa
- **Ô viền 3px ghép sát nhau,** khe bằng 0, viền chung chồng lên nhau như bảng tính in to.
- **Thẻ trắng nổi** có bóng cứng 6px; thẻ là thứ người xem phải nhìn trước.
- **Nút nối:** ô vuông đen chứa mũi tên trắng, đặt trên đường viền giữa hai ô để chỉ chiều đi.
- **Đường kẻ ngang, dọc 3px** chia vùng.
- **Mũi tên "→"** làm gạch đầu dòng và làm hình nền khổng lồ mờ.
- Biểu đồ: cột vuông viền đen tô hồng hoặc xanh lá, nhãn số đặt trong viên thuốc đen.

## Chữ ký chuyển động
- **Chia ô:** viền 3px chạy ra cắt trang thành các ô (`wipe` ngang rồi dọc), sau đó ô mới đổ màu.
- **Bấm nút:** thẻ nổi lún xuống, bóng 6px co về 0 rồi bật lại, như bấm một nút vật lý (chuyển động CSS riêng, bản PPTX hạ về Fade).
- **Nút mũi tên trượt dọc đường viền** từ ô này sang ô kia (`animateMotion` hoặc `right`), chỉ thứ tự đọc.
- **Hai phe đổi chỗ:** ô hồng và ô xanh lá hoán vị giữa hai slide (`data-morph="pink"`, `data-morph="green"`).
- **Mũi tên nền trôi:** ký tự khổng lồ mờ trượt chậm sang phải (`float` ngang hoặc lớp cố định theo `data-scene`).
- Nhịp: dứt khoát, từng khối một, cắt nhanh. Nảy rất ít, chỉ ở cú bấm nút.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** ô tiêu đề lớn bên trái, bên phải ô hồng chồng ô xanh lá, nút mũi tên đen nối hai ô; nhãn viên thuốc ghi năm.
- **Vấn đề và giải pháp:** hai cột hồng và xanh lá, nút mũi tên ở giữa, thẻ trắng nổi mang câu chốt.
- **Ba con số:** ba ô viền đứng trên một tấm đen làm bóng chung, số đếm lên (`data-count`).
- **Kết:** đen tràn trang, ô hồng và ô xanh lá viền trắng, chữ trắng 150px.

## Nên tránh
Bo góc, bóng mềm, gradient, khe hở giữa các ô, màu thứ ba, viền mảnh dưới 2px, chữ nghiêng.

## Họ hàng
`neo-grid-bold` (cũng biên tập thô mộc nhưng không viền, mảng khớp lưới 12 x 8 và vàng chanh), `block-frame` (pop, tươi, khung khối màu rực hơn), `creative-mode` (chất agency tinh nghịch, nhiều nhãn mono).

*Ý tưởng gốc: frontend-slides (MIT), mẫu "Raw Grid", qua SlideFly.*
