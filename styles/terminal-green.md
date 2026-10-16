# Terminal Green (cửa sổ dòng lệnh xanh lá)

> Nền tối kiểu GitHub, chữ đơn cách, một màu xanh lá terminal. Cửa sổ dòng lệnh là sân khấu, con trỏ khối nhấp nháy là nhịp tim.

**Hợp:** bài nói cho dân lập trình, demo sản phẩm, đào tạo công nghệ, giới thiệu công cụ dev, postmortem sự cố.
**Không hợp:** người nghe không chuyên kỹ thuật, chủ đề cảm xúc, thời trang, ẩm thực, lễ hội.
**Cảm xúc:** kỹ thuật, hacker, tối giản, tập trung.

## Hình dung
Người xem như ngồi cạnh một kỹ sư đang gõ lệnh: một cửa sổ terminal có ba chấm đỏ vàng xanh trên thanh tiêu đề, bên cạnh là bản đồ thu nhỏ của mã nguồn với các vạch màu cú pháp. Chữ hiện ra như được gõ, kết quả trả về như output, và con trỏ khối xanh luôn nhấp nháy ở cuối dòng chờ lệnh tiếp theo. Mọi thứ tập trung, không thừa, đúng chất "show me the code".

## Bảng màu
```css
--bg: #0d1117;        /* nền tối kiểu GitHub */
--card-bg: #161b22;   /* thân cửa sổ, thẻ */
--line: #30363d;      /* viền cửa sổ, đường kẻ */
--fg: #e6edf3;        /* chữ chính */
--muted: #8b949e;     /* chú thích, comment */
--green: #39d353;     /* xanh terminal: con trỏ, thanh trạng thái, điều quan trọng */
--accent-2: #79c0ff;  /* xanh dương: chuỗi, đường dẫn */
/* màu cú pháp trong bản đồ mã: #ff7b72 từ khóa, #d2a8ff hàm, #a5d6ff chuỗi, #ffa657 số */
```
Luật màu nhấn: xanh lá là "lệnh chạy thành công". Mỗi slide chỉ một vùng xanh lá đậm; các màu cú pháp chỉ dùng trong mã, không mang ra làm màu trang trí.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">
```
- Một font duy nhất: JetBrains Mono cho mọi thứ.
- Tiêu đề: 800, giãn -0,03em, thường mở bằng dấu nhắc `$` hoặc `>` màu xanh.
- Thân: 400 đến 500; chú thích dạng comment `//` màu xám.
- Đã kiểm: có bộ chữ tiếng Việt.

## Bề mặt
Nền tối phẳng, phủ vạch quét ngang rất mờ (mỗi 4px một vạch xanh 4,5% độ đậm) như màn hình cũ. Một quầng xanh mờ sau cửa sổ chính.
```css
background: repeating-linear-gradient(to bottom, transparent 0 3px, rgba(57,211,83,.045) 3px 4px), #0d1117;
```

## Ngôn ngữ minh họa
- **Cửa sổ terminal:** bo 12px, viền 2px `--line`, thanh tiêu đề cao 44px với ba chấm đỏ `#ff5f56`, vàng `#ffbd2e`, xanh `#27c93f`, tên "bash: ~/..." góc phải.
- **Bản đồ mã:** các vạch bo 3px màu cú pháp, xếp như minimap trong trình soạn thảo.
- **Con trỏ khối:** chữ nhật xanh đặc, nhấp nháy theo nhịp bước.
- **Thanh xanh:** thanh trạng thái, vạch chia, trục, thanh tiến độ.
- **Đường nét đứt xanh** (14px nét, 10px trống) cho luồng dữ liệu.
- Sơ đồ vẽ bằng ký tự hộp và mũi tên ASCII được, miễn gọn.

## Chữ ký chuyển động
- **Gõ phím:** tiêu đề và dòng lệnh hiện bằng `wipe` từ trái theo từng dòng (`data-stagger`), như đang gõ; output hiện `fade` sau một nhịp.
- **Con trỏ sống:** con trỏ khối `blink` ở cuối dòng cuối, mỗi slide đúng một con trỏ.
- **Cửa sổ chuyển chỗ:** cùng một cửa sổ trượt và đổi kích thước giữa các slide (`data-morph="win"`): toàn màn, nửa phải, thu nhỏ.
- **Bản đồ mã cuộn:** minimap trôi dọc chậm (`scan` theo chiều dọc), như mã đang chạy.
- **Thanh tiến độ:** thanh xanh `wipe` tới mức tương ứng, số phần trăm `data-count`.
- Nhịp: từng bước rời rạc, dứt khoát, không nảy, không mờ dần lâu; chuyển chương bằng `data-transition="cut"`.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** cửa sổ terminal giữ tên deck sau dấu `$`, con trỏ nhấp nháy, minimap mã bên phải, thanh xanh trạng thái dưới đáy cửa sổ.
- **Trước và sau:** hai cửa sổ cạnh nhau, bên trái lỗi đỏ, bên phải `✓ passed` xanh, nửa sau chờ cú bấm (`data-step`).
- **Chỉ số hiệu năng:** cửa sổ dạng dashboard, thanh xanh làm đường tiến độ, số đếm lên.
- **Kết:** thanh xanh tràn toàn màn hình như chế độ đảo màu, chữ tối "exit 0".

## Nên tránh
Font không đơn cách, nhiều màu nhấn ngoài xanh lá, glow dày, hiệu ứng 3D, ảnh stock, đoạn mã dài đọc không kịp, mã giả nhưng sai cú pháp.

## Họ hàng
`dark-keynote` (cũng nền tối một nhấn nhưng là kính bóng và giao diện sản phẩm, không phải dòng lệnh), `retro-windows` (hoài cổ geek với cửa sổ hệ điều hành cũ, nền sáng vui hơn), `8-bit-orbit` (cũng màn hình cũ nhưng là game arcade neon, tinh nghịch).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
