# Notebook Tabs (sổ còng có tab phân trang)

> Một tờ giấy kem đặt trên mặt bàn tối, lỗ còng bên trái, năm tab màu phấn thò ra mép phải. Mỗi chương rút một tab vào trang.

**Hợp:** đào tạo, báo cáo nhiều chương, tài liệu nội bộ, sổ tay quy trình, tổng kết dự án.
**Không hợp:** ra mắt sản phẩm ồn ào, chủ đề công nghệ lạnh, sự kiện đêm.
**Cảm xúc:** biên tập, ngăn nắp, thanh lịch, xúc giác.

## Hình dung
Người xem như đang lật một cuốn sổ còng được chăm chút: giấy dày, mép tab cong, chữ in kiểu sách. Năm tab màu là năm chương, luôn có mặt ở mép phải để người xem biết mình đang ở đâu. Khi vào một chương, tab của chương đó được kéo vào trang và đổi vai: thành tờ phân trang, thẻ ghi chú, băng dính washi, tờ giấy nhớ, vạch dạ quang. Cảm giác: có người đã sắp xếp kỹ mọi thứ cho mình.

## Bảng màu
```css
--desk: #2d2d2d;      /* mặt bàn phía sau tờ giấy */
--page: #f8f6f1;      /* tờ giấy kem: sân khấu chính */
--ink: #1a1a1a;       /* chữ, kẻ ngang */
--muted: #5f5a52;     /* chữ phụ */
--accent: #5a3e9b;    /* tím mực: nhấn chữ, số chương */
--t1: #98d4bb;  /* tab bạc hà */
--t2: #c7b8ea;  /* tab oải hương */
--t3: #f4b8c5;  /* tab hồng */
--t4: #a8d8ea;  /* tab xanh trời */
--t5: #ffe6a7;  /* tab kem vàng */
```
Luật màu nhấn: mỗi chương sở hữu một màu tab, và màu đó chỉ xuất hiện trong chương của nó (tab rút vào, nền thẻ, vạch dạ quang). Tím mực dành cho chữ nhấn, không tô mảng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Libre Bodoni 600, giãn -0,01em, chất sách in (thay cho Bodoni Moda gốc vốn không có dấu tiếng Việt).
- Nhãn tab, số chương: Libre Bodoni nghiêng 600, đặt dọc trên tab.
- Thân: Be Vietnam Pro 400 đến 500 (thay cho DM Sans gốc).
- Đã kiểm: cả hai font có bộ chữ tiếng Việt.

## Bề mặt
Tờ giấy kem bo 8px, bóng đổ sâu xuống mặt bàn tối. Hàng lỗ còng tròn bên trái (lỗ mang màu mặt bàn, có viền tối mờ). Một đường kẻ mực mảnh 2px ngăn tiêu đề với thân.
```css
background: radial-gradient(circle at 17px 17px, #2d2d2d 12px, rgba(0,0,0,.16) 13px, transparent 16px) 0 0 / 34px 176px repeat-y;
```

## Ngôn ngữ minh họa
- **Tab chương:** chữ nhật bo hai góc phải 14px, bóng nhỏ, số "01" đến "05" chữ dọc.
- **Đồ văn phòng phẩm:** thẻ chỉ mục, giấy nhớ, băng washi dán chéo, vạch dạ quang dưới chữ, kẹp giấy.
- Sơ đồ vẽ như ghi chú tay gọn gàng: khung bo nhẹ, mũi tên mực mảnh.
- Ảnh (nếu có) dán lên trang bằng hai mẩu băng washi ở góc.

## Chữ ký chuyển động
- **Rút tab:** tab của chương trượt từ mép phải vào trang và nở thành tờ phân trang hoặc thẻ (`data-morph="tab3"` giữa slide trước và slide chương).
- **Lật trang:** sang chương mới bằng `data-transition="wipe"`, như lật tờ giấy qua còng.
- **Dán băng washi:** mẩu băng `wipe` ngắn chéo góc, như được xé và dán tay.
- **Tô dạ quang:** vạch màu tab `wipe` chạy dưới cụm chữ quan trọng, đặt sau chữ.
- **Giấy nhớ hạ xuống:** `drop` nhẹ, sau đó `sway` biên độ rất nhỏ như còn đang dính chưa chặt.
- Nhịp: vừa phải, gọn, như tay người cẩn thận; không nảy mạnh.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tờ giấy đặt lệch trên bàn tối, năm tab thò ra mép phải, tên tài liệu chữ Bodoni lớn, một đường kẻ mực ngắn bên dưới.
- **Mục lục:** năm tab nhảy lên mép trên, nhãn chuyển sang nằm ngang, mỗi tab mang tên một chương.
- **Mốc thời gian:** băng washi bạc hà dán dọc trục, mỗi mốc là một tờ giấy nhớ.
- **Kết:** tờ giấy trượt đi, năm tab xòe thành năm dải màu, lời cảm ơn.

## Nên tránh
Màu tab dùng lẫn giữa các chương, nền trắng tinh lạnh, bóng neon, chữ sans đậm làm tiêu đề, quá nhiều đồ văn phòng phẩm trên một slide (một hai món là đủ).

## Họ hàng
`soft-editorial` (cùng chất văn chương thanh lịch nhưng không có ẩn dụ sổ, ít xúc giác), `paper-ink` (giấy và mực biên tập, sâu lắng hơn, không có màu phấn), `pastel-geometry` (cũng các khối màu phấn đổi vai, nhưng là hình học thuần, không có giấy).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
