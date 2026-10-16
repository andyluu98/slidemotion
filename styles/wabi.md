# Wabi (tối giản wabi-sabi Nhật Bản)

> Giấy washi, mực sumi, một con dấu đỏ hanko dùng dè sẻn. Rất ít vật, rất nhiều khoảng trống, mọi thứ hơi lệch tâm.

**Hợp:** nghiên cứu, chiến lược, triết lý, bài nói chiêm nghiệm, tuyên bố giá trị, ra mắt sách.
**Không hợp:** bán hàng sôi nổi, số liệu dày đặc, nội dung trẻ em, lễ hội.
**Cảm xúc:** tĩnh lặng, chiêm nghiệm, tối giản, sâu sắc.

## Hình dung
Một căn phòng trà trống: tờ giấy washi mộc, một vòng tròn bút lông vẽ một hơi không khép, một sợi chỉ mực thả dọc, một dấu son nhỏ. Người xem chậm lại. Cái đẹp nằm ở chỗ chưa hoàn hảo và ở khoảng trống; một slide chỉ nên nói một điều.

## Bảng màu
```css
--bg: #F4F1EA;      /* giấy washi */
--sumi: #1F1F1F;    /* mực sumi: chữ, enso, đường mảnh */
--muted: #6F6C66;   /* chữ phụ, kicker */
--stone: #8C8A85;   /* xám đá: số chương, chú thích */
--hanko: #C8102E;   /* đỏ con dấu: chỉ một điểm mỗi slide */
--ink-wash: rgba(31,31,31,.05);  /* mảng loang mực rất nhạt */
```
- Đỏ hanko chỉ xuất hiện dưới dạng con dấu vuông nhỏ (khoảng 56px), đặt cạnh điểm chính. Không tô chữ đỏ, không mảng đỏ.
- Phần còn lại là sắc độ của mực trên giấy.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;500&family=Be+Vietnam+Pro:wght@300;400;500&display=swap" rel="stylesheet">
```
- Tiêu đề: Noto Serif 500 (có tiếng Việt), giãn 0,005em, dòng 1,18; giọng điềm đạm.
- Thân: Be Vietnam Pro 300 (mảnh), câu dài dòng 1,55. Chữ đậm chỉ lên 500.
- Kicker: Be Vietnam Pro 500, giãn rộng 0,32em, màu xám.
- Số chương: Noto Serif 400 rất to, màu xám đá.

## Bề mặt
Giấy ngà phẳng. Một mảng loang mực 5% hình chữ nhật đứng, chiếm một phần khung, như vệt nắng qua cửa giấy. Bố cục bất đối xứng: chữ lệch trái, khoảng trống lớn bên phải hoặc ngược lại.

## Ngôn ngữ minh họa
- **Enso:** vòng tròn bút lông không khép, nét dày mỏng không đều (dày ở đỉnh, mỏng dần, hở một đoạn), xoay góc khác nhau mỗi slide.
- **Sợi chỉ mực:** đường thẳng 2px dọc hoặc ngang, làm trục, gáy, phân cách.
- **Con dấu hanko:** ô vuông đỏ bo rất nhẹ, có viền trong màu giấy và ký hiệu nét trắng đơn giản.
- Minh họa thêm (nếu cần): một cành, một hòn đá, một cái chén, vẽ ít nét mực, nhiều chỗ trống.
- Biểu đồ: đường mảnh một màu mực, điểm quan trọng đánh dấu bằng con dấu.

## Chữ ký chuyển động
- **Enso trôi và xoay:** vòng enso là lớp cố định, mỗi slide trôi sang vị trí mới và xoay thêm một góc, đổi cỡ (theo `data-scene`, `transition` chậm khoảng 1,6 giây). Như mặt trăng đổi chỗ trên trời.
- **Khoảng lặng trước lời:** slide mới mở ra trống vài nhịp; chữ hiện sau (`data-delay` 400 đến 700ms) bằng `fade` chậm.
- **Sợi chỉ buông xuống:** đường mảnh dọc kéo dài từ trên xuống (`rise-wipe` theo chiều ngược hoặc `wipe` dọc), như sợi chỉ thả.
- **Con dấu đóng:** hanko hạ xuống cạnh điểm chính bằng `stamp` gọn, là động tác cuối cùng của slide.
- **Loang mực dạt:** mảng loang 5% trượt sang bên kia giữa hai slide (`data-morph="loang"`).
- Nhịp: chậm, thưa, một động tác một lúc; không lặp, không nảy.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tiêu đề lệch trái, enso lớn bên phải tràn một phần ra khỏi khung, con dấu nhỏ dưới tên tác giả.
- **Một câu hỏi:** cả slide chỉ một câu ở giữa trái, enso nhỏ xoay chậm vào vị trí, khoảng lặng dài.
- **Hai lựa chọn:** sợi chỉ mực chia đôi khung, hai cột chữ mảnh; con dấu đóng xuống bên được chọn ở cú bấm.
- **Kết:** enso trôi về giữa, lời cảm ơn nằm trong lòng vòng, con dấu cuối cùng.

## Nên tránh
Nhiều hơn một điểm đỏ, màu thứ ba, bố cục đối xứng tuyệt đối, chữ đậm nặng, gradient, bóng, biểu tượng phẳng, nhồi nhiều ý, chuyển động nhanh, enso khép kín.

## Họ hàng
`thuy-mac` (tranh thủy mặc có núi, sương, nét bút giàu sắc độ; wabi tối giản hơn, chỉ enso và chỉ mực), `ukiyoe` (tranh khắc gỗ Nhật, màu và đường viền rõ), `one-line` (một nét liền mạch, tối giản phương Tây).

*Style gốc của SlideFly.*
