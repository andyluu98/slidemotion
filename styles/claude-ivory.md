# Claude (giấy ngà, chữ có chân, cam đất, ngôi sao nhiều cánh)

> Nền ngà ấm như giấy viết, tiêu đề serif thanh có chữ nghiêng màu cam đất, terminal tối bo tròn bên cạnh cửa sổ app vẽ phẳng. Một ngôi sao cam đi suốt bài, mỗi ý học xong mọc thêm một cánh.

**Hợp:** giới thiệu Claude, Claude Code, AI cho công việc; đào tạo công cụ AI; bài nói về agent, skill, quy trình; deck sản phẩm phần mềm muốn ấm áp mà vẫn chỉn chu.
**Không hợp:** sự kiện lễ hội rực rỡ, thể thao, chủ đề cần không khí tối và kịch tính, thương hiệu khác (dễ gây hiểu nhầm là tài liệu của Anthropic).
**Cảm xúc:** điềm tĩnh, ấm, chín chắn, thân thiện, tin cậy.

## Hình dung
Như đọc một bài viết trên blog của Anthropic: nhiều khoảng trắng ngà, tiêu đề serif như sách, một màu cam đất duy nhất để nhấn. Đồ vật trên slide là đồ vật của người làm việc với AI: terminal, cửa sổ app, cây thư mục, phím tắt. Chuyển động thong thả, chính xác, không phô trương.

## Bảng màu
```css
--ivory: #FAF9F5;      /* nền slide */
--paper: #F0EEE6;      /* thẻ ấm, thanh tiêu đề cửa sổ */
--oat: #E3DACC;        /* viền thẻ ấm, vòng tròn nền */
--line: #D9D4C7;       /* viền mảnh, đường nối chưa sáng */
--slate: #141413;      /* chữ chính, nét vẽ */
--text: #3D3D3A;       /* chữ thân */
--mute: #6B6A65;       /* chú thích, nguồn */
--clay: #D97757;       /* cam đất: ngôi sao, nút, điểm chạy */
--clay-deep: #B85433;  /* chữ nghiêng nhấn, nhãn (đủ tương phản trên nền ngà) */
--olive: #6E8550;      /* xong, đúng */
--sky: #5B8DC0;        /* nhánh thứ hai, nhãn phụ */
--term: #1F1E1D;       /* nền terminal */
```
Một màu nhấn duy nhất là cam đất. Chữ nhấn dùng `--clay-deep`, còn `--clay` để cho hình (cam nhạt hơn thì chữ nhỏ không đủ tương phản). Ô liu và xanh trời chỉ dùng khi cần phân biệt hai thứ.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=Be+Vietnam+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Source Serif 4, độ đậm 500, 62 đến 104px, khoảng chữ hơi khít; cụm nhấn để nghiêng màu `--clay-deep`.
- Nhãn trên tiêu đề (kicker): Be Vietnam Pro 600, 22px, in hoa, giãn chữ, màu `--clay-deep`.
- Thân: Be Vietnam Pro 400, 26 đến 30px, màu `--text`; chữ đậm màu `--slate`.
- Lệnh, phím tắt, đường dẫn: JetBrains Mono trong ô phím (nền `--paper`, viền dưới dày hơn như nút bấm thật).
- Phông chính thức của Anthropic không có trên Google Fonts; ba phông trên là bản gần giống, có đủ dấu tiếng Việt.

## Bề mặt
Nền ngà phẳng, không lưới, không họa tiết. Thẻ trắng viền mảnh `--line` bo 20px, bóng rất nhẹ (đen 6%). Thẻ "ví von" dùng nền `--paper`. Terminal nền `--term` bo 18px, bóng sâu hơn để nổi lên trên giấy.

## Ngôn ngữ minh họa
- **Ngôi sao nhiều cánh:** chấm tròn cam ở tâm, các cánh là nét thẳng đầu tròn, độ dài lệch nhau một chút cho có chất vẽ tay. Vẽ tự do bằng SVG; không chép logo chính thức.
- **Đồ vật làm việc:** terminal có dấu nhắc `❯` màu cam, dòng xám cho trạng thái, dòng ô liu có dấu ✓; cửa sổ app có ba chấm xám và thanh tiêu đề; cây thư mục chữ mono; điện thoại, laptop nét đen 6px nền trắng.
- **Đường nối:** nét `--line` dày 4 đến 5px; chấm cam chạy trên đường để kể dòng việc.
- **Biểu tượng tròn:** vòng tròn trắng viền mảnh chứa hình nét đen một độ dày, một chi tiết cam.
- Nhãn "RESEARCH PREVIEW" là viên thuốc cam nhạt; "GA" là viên thuốc ô liu nhạt.

## Chữ ký chuyển động (GSAP)
- **Ngôi sao mọc cánh:** ngôi sao nhỏ ở góc phải giữ suốt bài, mỗi slide tính năng vẽ thêm một cánh (DrawSVG), ngôi sao xoay nhẹ rồi nảy về chỗ (elastic). Slide tóm tắt: ngôi sao lớn, cánh vẽ lần lượt, nhãn tên hiện ở đầu cánh.
- **Nhãn giải mã:** kicker hiện bằng ScrambleText chữ in hoa.
- **Tiêu đề từng từ:** SplitText theo từ, trồi lên ngắn, `power3.out`, cách nhau 0,045 giây.
- **Gõ lệnh:** khi bấm, lệnh trong terminal hiện từng ký tự như đang gõ, rồi dòng ✓ trượt vào.
- **Tỏa ra rồi gom về:** đường nối vẽ ra các nhánh, ô việc bật lên (`back.out`), rồi các nhánh gom về một tờ báo cáo.
- Nhịp: thong thả, chính xác; nảy vừa phải, không lắc lư. Chữ chính vào xong trong 1,5 giây.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tiêu đề serif lớn, ngôi sao cam bên phải vẽ từng cánh rồi xoay rất chậm, các cánh thở nhẹ.
- **Slide lệnh:** bấm một lần, lệnh được gõ ra và một tấm thẻ nhảy từ cây thư mục xuống terminal.
- **Slide so sánh trước, sau:** con số cũ bị gạch bằng nét cam, con số mới rơi xuống nảy dẹp người (CustomBounce).
- **Tóm tắt:** ngôi sao đủ cánh, mỗi cánh mang tên một ý; học viên chụp lại.

## Nên tránh
Nền tối toàn bài, nhiều màu nhấn cùng lúc, gradient rực, bóng đổ đậm, icon kiểu clip-art, chữ cam nhạt `--clay` trên nền ngà ở cỡ nhỏ, logo hay tên thương hiệu khác trên cùng slide.

## Họ hàng
`soft-editorial` (cũng giấy kem serif nhưng màu phấn, văn chương hơn), `swiss-modern` (rõ ràng, chuyên nghiệp nhưng lạnh hơn), `terminal-green` (toàn nền tối cho dân lập trình).

*Slug `claude-ivory`, không đặt tên tệp `claude.md` vì trên Windows trùng với CLAUDE.md. Rút ra từ deck `04-bao-cao/21_slide-co-gi-moi-claude-code-desktop.html` (16/10/2026), phỏng theo nhận diện công khai của Claude. Không phải tài liệu thương hiệu chính thức của Anthropic.*
