# Ký họa đô thị (bút mực và màu nước vẽ tại chỗ)

> Một trang sổ ký họa vẽ ngay trên vỉa hè: nét bút sepia mảnh, run và thừa ra ở góc, màu nước loãng đổ sau và lệch khỏi nét vài pixel, một quả bóng bay đỏ là vật duy nhất rực màu.

**Hợp:** du lịch, thành phố, kiến trúc, nhật ký hành trình, giới thiệu địa điểm.
**Không hợp:** báo cáo tài chính, công nghệ thuần, nội dung cần độ chính xác kỹ thuật.
**Cảm xúc:** thân mật, phóng khoáng, thơ mộng, đời thường.

## Hình dung
Người xem đang lật cuốn sổ ký họa của một người đi phố: giấy cold-press màu kem, dãy nhà phố nét mực, mái hiên đỏ, tán cây là những chấm lá. Màu gợi chứ không tả: vài vệt cửa sổ thay cả lưới ô. Ghi chú viết tay bên lề, băng washi giữ trang, vài vệt thử màu dưới tiêu đề.

## Bảng màu
```css
--paper: #F3EAD6;    /* giấy kem, nền; tờ vẽ trong hình #FBF6E8 */
--ink: #3B2E25;      /* mực nâu sepia: mọi nét, chữ. Không bao giờ đổi màu */
--ink-2: #67523F;    /* chữ phụ */
--accent: #9C3826;   /* chữ nhấn */
/* màu nước, alpha .5 đến .85 */
--sky: #9FBCD6;      /* trời, nước (viền khô #7B9DBA) */
--stone: #D8C6A0; --pink-earth: #D99A7C; --smoke: #A9BFC9;
--leaf: #7FA04A; --leaf-d: #58763A; --leaf-l: #B2C46A;
--awning: #B8483E;   /* mái, mái hiên */
--balloon: #C8452F;  /* bóng bay: vật rực màu duy nhất */
--lamp: #E2B04A;     /* ánh đèn */
--shadow: #8B86A8;   /* bóng đổ pha tím xám, alpha .2 */
```
Màu xuất hiện như một sự kiện. Chỉ một vật rực màu mỗi slide (mặc định là bóng bay đỏ). Trắng giấy là giá trị sáng nhất, chừa cho mây và chỗ sáng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@500;600;700&family=Be+Vietnam+Pro:wght@400;500;600&family=Patrick+Hand&display=swap" rel="stylesheet">
```
- Tiêu đề: Playpen Sans 700, như chữ viết tay có chủ ý.
- Thân: Be Vietnam Pro 400 đến 500.
- Ghi chú bên lề, nhãn trong hình: Patrick Hand 26 đến 34px, rất ngắn ("trang 1", "A", "B").
- Cả ba font có bộ chữ tiếng Việt (đã kiểm Google Fonts ngày 16/10/2026).

## Bề mặt
Giấy cold-press kem có hạt và loang lốm đốm; trang giấy là một phần của bức tranh. Thẻ nội dung là giấy trắng hơi trong (`rgba(255,251,240,.55)`), bo góc lệch nhẹ. Mép màu nước loang có hạt nâu nhờ bộ lọc `feTurbulence` + `feDisplacementMap` (bản PPTX bỏ bộ lọc, màu phẳng hơn nhưng vẫn đọc được).

## Ngôn ngữ minh họa
- **Hai lớp luôn tách rời:** mực (một màu) và màu nước. Không hình nào chỉ có màu mà không có nét.
- **Nét mực run:** dày 2,6 (chính), 1,6 (chi tiết); đường thẳng chia nhỏ mỗi khoảng 45px lệch 1px, thừa ra 3 đến 8px ở hai đầu, không khép kín.
- **Màu lệch nét:** gom mảng màu vào một nhóm dịch (5, 4)px, cho phép tràn ra ngoài nét; viền khô đậm hơn 30 đến 40% ở rìa.
- **Tán cây:** nền lá nhạt rồi 100 đến 150 chấm lá elip, tối ở dưới phải, sáng ở trên trái; viền mực chỉ vài cung răng cưa.
- **Mây** không tô, chừa giấy, đáy pha xám xanh.
- Hình mẫu: ô cửa lệch màu, tư thế bóng ma nét đứt, đường đi chấm có mũi tên mực, vòng cuốn mực cho gió, băng washi ở góc, vệt thử màu, bắn mảng màu, vòng số viết tay.
- Không vẽ người có mặt; cần dáng người thì chỉ "người que" rất nhỏ.

## Chữ ký chuyển động
- **Mực trước, màu sau:** nét mực `draw` (khung, nhà phố), xong màu nước hiện bằng `blur` như sắc tố đang thấm vào giấy, cuối cùng chữ viết tay `wipe`.
- **Màu loang tới:** khi chuyển slide, vệt bắn màu `pop` lác đác với `data-stagger` từ hình ra lề giấy, dẫn mắt sang trang mới.
- **Dán washi:** tờ ký họa nhỏ `drop` xuống trang, hai mảnh băng washi `wipe` qua hai góc trên.
- **Bóng bay lơ lửng:** quả bóng đỏ `float` chậm; giữa các slide nó là `data-morph="bong-bay"`, bay từ góc này sang góc khác như người đọc đi theo nó qua thành phố.
- **Lật trang sổ:** chuyển chương bằng `data-transition="wipe"`.
- Nhịp: thong thả, như đi bộ ngắm phố. Cả hình xong trong khoảng 2 giây.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** dãy nhà phố nét mực vẽ dần, màu thấm vào sau, bóng bay đỏ bay lên góc trời, tên hành trình viết tay.
- **Lịch trình chuyến đi:** nét mặt đất làm trục, mỗi điểm dừng một ô ký họa nhỏ dán washi.
- **Một góc phố đặc biệt:** tờ ký họa lớn ở giữa, ghi chú bên lề chỉ vào chi tiết bằng nét mảnh.
- **Kết:** bóng bay đỏ bay ra khỏi trang, lời cảm ơn viết tay.

## Nên tránh
Mực đổi màu hoặc đen tuyền, màu nước khít với nét (mất cảm giác lệch lớp), tô kín sát mép giấy, 3D, bóng đổ cứng, glow, gradient rực, màu rực ngoài vật chính, người có mặt, địa danh hay biển hiệu thật, số liệu bịa.

## Họ hàng
`mau-nuoc` (màu nước mềm làm chủ, ít nét mực, thiên về thiên nhiên), `hoi-an` (ấm áp hoài niệm, chủ đề địa phương Việt, không có chất sổ ký họa), `whiteboard` (nét tay giảng giải, bút lông trên bảng, không có màu nước).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
