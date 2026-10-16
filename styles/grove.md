# Grove (chuyên khảo văn chương trong rừng)

> Một cuốn chuyên khảo bìa xanh rừng đêm: chữ kem ấm, trang giấy da, một vạch san hô đất duy nhất. Serif không bao giờ đậm, hairline 1px, và những vòng gỗ mờ thay cho hình in chìm.

**Hợp:** thương hiệu bền vững, nhà hàng, tư vấn, văn hóa nghệ thuật, báo cáo tác động môi trường, câu chuyện thương hiệu lâu đời.
**Không hợp:** ra mắt công nghệ sôi động, trẻ em, khuyến mãi ồn ào, slide số liệu dày đặc.
**Cảm xúc:** trầm lắng, văn chương, hữu cơ, ấm áp.

## Hình dung
Như mở một cuốn sách khổ lớn trong thư viện gỗ: trang xanh rừng sâu, chữ kem như in trên vải, thỉnh thoảng một trang giấy da sáng trượt vào cho phần trích dẫn và số liệu. Ở góc là mặt cắt thân cây với các vòng tuổi mờ, nói rằng mọi thứ ở đây được vun trồng lâu năm. Người xem chậm lại, đọc kỹ hơn.

## Bảng màu
```css
--forest: #192b1b;               /* nền rừng đêm */
--forest-alt: #203624;           /* tấm rừng sáng hơn một bậc */
--cream: #d4cfbf;                /* chữ kem, nét vòng gỗ */
--parchment: #e8e4d6;            /* trang giấy da */
--muted: rgba(212,207,191,.68);
--line: rgba(212,207,191,.24);   /* hairline 1px */
--accent: #cf5a50; --coral: #c8524a;  /* san hô đất: vạch, dấu ngoặc, chữ nhấn */
```
Luật màu: san hô đất là màu duy nhất có độ ấm mạnh, chỉ dùng cho một vạch, một dấu ngoặc kép hoặc một chữ nghiêng nhấn mỗi slide. Trên giấy da, chữ chuyển sang xanh rừng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Be+Vietnam+Pro:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
```
- Tiêu đề: Playfair Display **400, không bao giờ đậm**, giãn -0,01em; chữ nhấn `<em>` nghiêng màu san hô.
- Thân: Be Vietnam Pro 300 (nhẹ), chữ đậm chỉ tới 500.
- Nhãn, meta, nguồn: JetBrains Mono 400 IN HOA, 20 đến 22px, giãn 0,14 đến 0,18em.
- Số chương: Playfair nghiêng 240px.
- Cả ba font có tiếng Việt (đã kiểm Google Fonts, 16/10/2026).

## Bề mặt
Xanh rừng phẳng, không hạt, không bóng, không bo. Hai hairline 1px trên và dưới vùng nội dung làm lề sách. Tấm `--forest-alt` làm cột hoặc mảng, chỉ đậm hơn nền một bậc.

## Ngôn ngữ minh họa
- **Vòng gỗ:** các vòng tròn đồng tâm hơi lệch tâm, nét rất mảnh, mờ 45%, như mặt cắt thân cây. Đặt trong cột phải ở bìa, giữa trang ở kết.
- **Vạch san hô** 2px, ngắn ở đầu tiêu đề, dài khi làm trục thời gian.
- **Dấu ngoặc kép san hô** Playfair cỡ khoảng 460px.
- Dấu đầu dòng là gạch ngang mảnh 2px, không dùng chấm tròn.
- Minh họa (nếu cần): lá, hạt, cành, vẽ hairline một màu kem; ảnh tông ấm, ít bão hòa.

## Chữ ký chuyển động
- **Vòng gỗ lan ra:** các vòng `draw` từ tâm ra ngoài, mỗi vòng trễ thêm (`data-stagger="180"`), chậm như cây lớn từng năm.
- **Vòng gỗ thở:** sau khi hiện, cả cụm `spin` cực chậm (`data-loop-dur` vài phút), gần như đứng yên.
- **Giấy da trượt vào:** trang giấy da đến từ mép phải (`right`, ease-out dài) cho phần trích dẫn hoặc số liệu, như lật sang trang sáng.
- **Vạch san hô mọc thành trục:** vạch ngắn đầu tiêu đề ở slide trước kéo dài thành trục thời gian ở slide sau (`data-morph="rule"`).
- **Chữ hiện bằng `fade`** dài 800ms, không trượt, không nảy.
- Nhịp: chậm, thở, nhiều khoảng lặng.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** cột rừng sáng bên phải, vòng gỗ lan dần trong cột, tiêu đề Playfair 400 bên trái, vạch san hô ngắn phía trên.
- **Hành trình thương hiệu:** vạch san hô kéo thành trục, các mốc là năm Playfair nghiêng, nửa dưới lùi một bậc màu.
- **Trích dẫn:** giấy da phủ trang, dấu ngoặc kép san hô, câu nói xanh rừng.
- **Kết:** trở về rừng, vòng gỗ đứng giữa như hình in chìm, lời cảm ơn nhỏ và lặng.

## Nên tránh
Chữ serif đậm, bo góc, bóng đổ, gradient, màu nhấn thứ hai, chuyển động nhanh hoặc nảy, vòng gỗ quá rõ lấn chữ.

## Họ hàng
`editorial-forest` (tạp chí quý xanh rừng nhưng nền giấy sáng, nhấn hồng phấn, có ô và biểu đồ tí hon), `dark-botanical` (sang trọng mềm mại nền tối, Cormorant), `wabi` (tĩnh lặng chiêm nghiệm nền sáng, tối giản hơn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
