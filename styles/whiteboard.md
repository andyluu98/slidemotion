# Whiteboard (bảng trắng bút lông)

> Như người thuyết trình vừa nói vừa vẽ lên bảng: nét bút lông một mạch, hơi run, ba màu bút mỗi màu một nghĩa.

**Hợp:** giải thích khái niệm, quy trình, bài giảng đào tạo, workshop, onboarding, nội dung "vừa nói vừa vẽ".
**Không hợp:** ra mắt sản phẩm cao cấp, báo cáo tài chính trang trọng, sự kiện lễ hội.
**Cảm xúc:** thân thiện, dễ hiểu, nét tay, gần gũi.

## Hình dung
Cả deck là một tấm bảng trắng bóng: vết xước nhỏ, bóng mờ của bài giảng cũ chưa xóa sạch, vệt sáng cửa sổ trôi ngang. Mọi thứ người xem học được đều là nét bút lông. Bút và nam châm tự bay, không vẽ tay người.

## Bảng màu
```css
--bg: #F4F4EF;        /* bảng */
--ink: #23262c;       /* bút đen: vật, cấu trúc */
--blue: #2a5cb3;      /* bút xanh: tín hiệu, mũi tên, nối kết */
--orange: #d97757;    /* bút cam: điều quan trọng nhất, mỗi slide một chỗ */
--orange-d: #b5502b;  /* chữ cam đủ tương phản */
--muted: #4A505A;
```

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@500;700;800&family=Patrick+Hand&display=swap" rel="stylesheet">
```
- Tiêu đề và thân: Playpen Sans (có tiếng Việt), 700 đến 800 cho tiêu đề.
- Chữ viết tay ngắn trong hình: Patrick Hand 32 đến 62px, một hai chữ ("tách!", "đây rồi").

## Bề mặt
Nền trắng ấm, vết xước rất mờ, vùng sáng như ánh cửa sổ ở góc trên trái, bóng mờ của nét cũ (đen 8%, nét đứt).

## Ngôn ngữ minh họa
- Một độ dày: nét chính 7px, nét phụ 5px; đầu nét tròn.
- **Nét tay:** đường hơi lệch 1 đến 3px; hộp là bốn nét rời vượt qua góc 4 đến 7px; vòng tròn vẽ quá điểm đầu, không khép kín.
- Mũi tên: thân cong một nét, đầu mở hai nét, màu xanh.
- Vòng khoanh cam quanh câu trả lời. Chấm vệt (đứt 1 rồi 20) cho đường đi.
- Hình đơn giản nhất mà vẫn mang ý: hộp, vòng, mũi tên, thước, nam châm. Không đổ bóng, không tả thực.
- **Mẹo:** vòng khoanh quanh chữ nên đo vị trí chữ thật sau khi font tải xong (xem hàm `around` trong `examples/02_ai-agent-xay-dung-whiteboard.html`), đừng đoán tọa độ, chữ xuống dòng là lệch.

## Chữ ký chuyển động
- **Nét được viết ra:** mọi hình hiện bằng `draw`, theo thứ tự người vẽ thật (hộp trước, mũi tên sau, khoanh cam cuối).
- **Chữ viết tay hiện bằng `wipe`** từ trái sang như đang viết.
- **Nam châm dập** (`drop` có nảy) ghim tờ giấy, thẻ lên bảng.
- **Khăn lau quét** qua để xóa trạng thái cũ (một dải trắng `wipe`), rồi vẽ trạng thái mới.
- **Bút lơ lửng** (`float`) ở góc, như vừa đặt xuống.
- Nhịp: vừa phải, như đang giảng.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tên bài viết tay, một vòng khoanh cam quanh từ khóa, nam châm ghim tờ đề cương.
- **Quy trình:** các hộp nối bằng mũi tên xanh, vẽ lần lượt theo cú bấm.
- **Trước và sau:** vẽ trạng thái cũ, khăn lau quét qua, vẽ trạng thái mới.
- **Kết:** một câu được khoanh cam, dấu tích lớn.

## Nên tránh
Nét thẳng tắp như máy, gradient, bóng đổ, icon phẳng, quá ba màu bút, vẽ bàn tay người.

## Họ hàng
`notebook-tabs` (giấy kẻ, tab màu), `crayon-book` (sáp màu trẻ em), `scatterbrain` (bừa có chủ ý, brainstorm).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
