# Restorative (bảng màu chữa lành)

> Nền cát ấm, ba khối hữu cơ mềm màu xô thơm, đất nung, cát nhạt đang thở; một chấm xanh mòng két lặng lẽ đến ngồi cạnh ý quan trọng.

**Hợp:** sức khỏe, tâm lý, coaching, nhân sự, phúc lợi, giáo dục mầm non, chăm sóc khách hàng.
**Không hợp:** công nghệ cứng, số liệu kỹ thuật dày, sự kiện sôi động, cảnh báo khẩn cấp.
**Cảm xúc:** dịu, chữa lành, ấm áp, tin cậy.

## Hình dung
Như một phòng trị liệu sáng ánh chiều: tường màu cát, vài chậu cây, đồ gốm thủ công. Không có cạnh sắc. Các khối màu như hòn cuội, lá cây, mảnh gốm, đổi dáng chậm rãi như đang hít vào thở ra. Người xem thấy được lắng nghe, không bị thúc ép; chữ ít và có khoảng thở.

## Bảng màu
```css
--bg: #F3EDE4;      /* cát ấm, nền */
--fg: #2F2A28;      /* chữ thân */
--muted: #6B5E57;   /* chữ phụ */
--plum: #4B2C4F;    /* tím mận: tiêu đề, cung mảnh */
--sage: #9BAF94;    /* xô thơm: khối hữu cơ */
--clay: #8A5A44;    /* đất nung: khối hữu cơ đậm */
--lsand: #E6D8C3;   /* cát nhạt: khối nền lớn */
--teal: #0F8B8D;    /* mòng két: màu nhấn duy nhất, chấm, chữ nhấn */
--card: rgba(255,252,247,.62);  /* thẻ kem trong mờ */
```
- Tiêu đề màu tím mận, không đen, để giọng nói mềm hơn.
- Mòng két là "điểm chú ý" duy nhất: một chấm, một từ, một con số mỗi slide.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Fraunces 600 (có tiếng Việt), giãn âm -0,015em, màu tím mận; chữ chân mềm như viết thư tay ngay ngắn.
- Thân: Nunito 400 đến 600 (có tiếng Việt), đầu nét tròn, dòng thoáng 1,5.
- Kicker: Nunito 700, giãn 0,2em.

## Bề mặt
Nền cát phẳng ấm. Thẻ là tấm kem trong mờ bo 40px, không viền, không bóng gắt. Khối hữu cơ là hình tròn méo với `border-radius` bốn góc khác nhau, ví dụ `62% 38% 46% 54% / 55% 44% 56% 45%`, nằm một phần ra ngoài mép khung.

## Ngôn ngữ minh họa
- **Khối hữu cơ:** ba khối cát nhạt, xô thơm, đất nung đè nhẹ lên nhau, đặt ở mép và góc, không bao giờ nằm sau chữ dày.
- **Cung tím mảnh:** một nét 3px vẽ cung tròn, gợi vòng ôm, nhịp thở, chu kỳ.
- **Chấm mòng két:** chấm tròn có quầng nhạt `0 0 0 10px rgba(15,139,141,.14)`, đặt cạnh câu quan trọng như ngón tay chỉ nhẹ.
- Minh họa thêm: lá, nhành cây, bàn tay mở, giọt nước, viên sỏi xếp chồng; nét tròn, mảng màu đặc, không viền.
- Biểu đồ: cột bo tròn đầu, đường cong mềm, màu xô thơm và đất nung.

## Chữ ký chuyển động
- **Khối thở:** các khối hữu cơ đổi dáng chậm giữa các slide bằng cách đổi `border-radius` và kích thước (lớp cố định theo `data-scene`, `transition` khoảng 1,8 giây), như hít vào thở ra.
- **Nhịp thở 4 giây:** một khối `data-loop="float"` biên độ rất nhỏ, chu kỳ dài, đủ để thấy slide đang sống mà không gây xao nhãng.
- **Chấm dẫn đường:** chấm mòng két đi theo người nói, trượt tới cạnh ý chính của mỗi slide (`data-morph="cham"`), rồi `pulse` thật nhẹ.
- **Cung ôm lại:** cung tím vẽ dần (`draw`) quanh con số hoặc câu trích, như vòng tay.
- **Chữ hiện êm:** nội dung `fade` hoặc `rise` ngắn, `data-stagger` rộng (khoảng 180ms) cho cảm giác không vội.
- Nhịp: chậm, êm, không nảy, không cắt.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** tiêu đề tím mận giữa khung, ba khối hữu cơ ôm từ các góc, chấm mòng két đặt dưới từ khóa.
- **Bài tập thở:** một khối xô thơm lớn phình ra và co lại theo nhịp hít vào, giữ, thở ra; chữ hướng dẫn đổi theo cú bấm.
- **Hành trình phục hồi:** các bước là những viên sỏi trên đường cong mềm, chấm mòng két đi qua từng viên.
- **Kết:** các khối nhẹ nhàng gom về một góc, cung tím ôm lời cảm ơn.

## Nên tránh
Góc vuông, đường thẳng cứng, màu bão hòa, đỏ báo động, chữ in hoa dài, nhiều màu nhấn, chuyển động nhanh, nảy, nhấp nháy.

## Họ hàng
`mau-nuoc` (màu nước loang tự nhiên, thủ công hơn), `soft-editorial` (tạp chí thanh lịch, chữ là trọng tâm), `grove` (hữu cơ, trầm, xanh rừng và văn chương hơn).

*Style gốc của SlideFly.*
