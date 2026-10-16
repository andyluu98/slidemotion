# Aurora (cực quang trên trời đêm)

> Ba vầng sáng mờ màu ngọc lam, tím, san hô trôi trên nền gần như đen; một tấm kính mờ nổi lên giữ nội dung.

**Hợp:** AI, ra mắt sản phẩm, keynote công nghệ, startup, tầm nhìn tương lai.
**Không hợp:** báo cáo số liệu dày, văn hóa truyền thống, giáo dục trẻ em.
**Cảm xúc:** công nghệ, tương lai, mơ màng.

## Hình dung
Người xem ngồi trong phòng tối, nhìn lên bầu trời đêm có cực quang. Ánh sáng không có hình rõ ràng: nó loang, phình, đổi màu và dạt sang chỗ khác sau mỗi ý. Nội dung nằm trên một tấm kính mờ trôi giữa trời, viền sáng mảnh như mép kính hứng đèn. Mọi thứ êm, chậm, có chiều sâu.

## Bảng màu
```css
--night: #0B0B14;   /* nền trời đêm */
--fg: #F4F4F8;      /* chữ chính */
--muted: #A9A9C2;   /* chữ phụ */
--teal: #2DD4BF;    /* ngọc lam: màu nhấn, kicker, câu chốt */
--violet: #7C3AED;  /* tím: vầng sáng */
--coral: #F97362;   /* san hô: vầng sáng ấm, điểm cảm xúc */
--deep: #1E3A8A;    /* xanh đêm: vầng sáng trầm, lấp góc */
```
- Ba màu sáng chỉ sống dưới dạng ánh sáng nhòe (độ mờ 0,35 đến 0,55), không làm mảng phẳng.
- Chữ nhấn dùng ngọc lam. San hô để dành cho một khoảnh khắc ấm (con người, khách hàng, lời cảm ơn).

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```
- Tiêu đề: Unbounded 600 (có tiếng Việt), giãn âm -0,02em. Font rất rộng nên giữ cỡ vừa (khoảng 52px cho tiêu đề thường, 78px cho bìa).
- Thân: Manrope 400 đến 500 (có tiếng Việt), nhẹ và thoáng.
- Câu chốt, nhãn đậm: Manrope 700 đến 800. Kicker giãn 0,26em, màu ngọc lam.

## Bề mặt
Nền đen tím phẳng, ba vầng sáng tròn rất lớn làm nhòe bằng `filter: blur(90px)`, lớp hạt nhiễu phủ toàn khung độ mờ 0,08 cho khỏi "sạch nhựa".
```css
.glass { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14);
  border-radius: 28px; backdrop-filter: blur(24px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.12), 0 30px 80px rgba(0,0,0,.35); }
```
Đường chỉ sáng 1px `rgba(255,255,255,.22)` làm vạch phân cách, có thể biến thành trục ngọc lam.

## Ngôn ngữ minh họa
- **Ánh sáng thay hình:** vầng sáng đặt sau con số, sau cột, sau ý chính để "soi" nó.
- **Kính mờ:** thẻ, bảng, khung câu trích đều là tấm kính bo 28px; có thể bo tròn hẳn thành đĩa kính sau số chương.
- Biểu tượng (nếu cần) dạng nét mảnh 1,5 đến 2px màu trắng, không tô.
- Sơ đồ: nút là đĩa kính nhỏ, đường nối là chỉ sáng, điểm quan trọng phát quầng ngọc lam.

## Chữ ký chuyển động
- **Cực quang dạt và đổi màu:** ba vầng sáng là lớp cố định xuyên deck, mỗi slide dạt sang vị trí mới và đổi màu cho nhau (`.sm-stage[data-scene]` với `transition` 1,6 đến 2,4 giây, chậm hơn mọi thứ khác).
- **Thở:** một vầng sáng phình co rất chậm (`data-loop="pulse"`, biên độ nhỏ), như trời đang sống.
- **Kính nổi lên:** tấm kính hiện bằng `blur` kèm trượt nhẹ, như sương ngưng lại thành mặt kính.
- **Chữ tỉnh ra:** tiêu đề lớn và câu chốt hiện bằng `blur`; chữ thân `rise` ngắn.
- **Hội tụ:** ở slide kết, ba vầng sáng trôi về giữa và chồng lên nhau sau lời cảm ơn.
- Nhịp: chậm, mượt, không nảy, không cắt gắt.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** ánh sáng dâng từ dưới chân tên sản phẩm, vệt san hô như chân trời, một đường chỉ sáng dưới tiêu đề.
- **Ba con số:** ba vầng sáng xếp hàng, mỗi vầng nằm sau một số, số đếm lên (`data-count`).
- **Dòng thời gian:** chỉ sáng biến thành trục ngọc lam phát sáng, ba dải màu chạy dọc trục như dải lụa ánh sáng.
- **Kết:** ba màu hội tụ giữa khung, tên sản phẩm hoặc lời cảm ơn sáng lên giữa quầng.

## Nên tránh
Nền trắng, mảng màu phẳng đặc, viền dày, bóng đổ cứng, chữ Unbounded quá to hoặc quá dài, quá nhiều tấm kính chồng nhau, chuyển động nhanh giật.

## Họ hàng
`dark-keynote` (kính tối chính xác, một điểm nhấn, tiết chế hơn), `neon-cyber` (neon sắc cạnh, khung HUD, năng lượng mạnh), `hologram-hud` (viễn tưởng lạnh, thông số kỹ thuật).

*Style gốc của SlideFly.*
