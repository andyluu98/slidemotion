# Bold Poster (áp phích in ấn táo bạo)

> Tờ giấy trắng, mực nâu đen ấm, một màu đỏ cà chua, những dải trắng ngà. Tiêu đề chữ viết tay nghiêng, thân chữ có chân văn chương, nhãn nhỏ giãn rộng. Một áp phích tuyên ngôn.

**Hợp:** tuyên ngôn thương hiệu, tầm nhìn nhà sáng lập, pitch sáng tạo, câu chuyện thương hiệu, ra mắt chiến dịch, giá trị cốt lõi.
**Không hợp:** báo cáo kỹ thuật, bảng số liệu dày, đào tạo quy trình từng bước, chủ đề cần trung tính.
**Cảm xúc:** táo bạo, kiểu tạp chí, tự tin, ấn tượng.

## Hình dung
Như bước vào một xưởng in áp phích: trên tường dán tờ giấy trắng với một tấm áp phích đỏ được dán nghiêng trong khung thẳng, khung viền đôi (3px và 1,5px) như khung tranh in. Mỗi slide nói một câu dõng dạc bằng chữ viết tay đậm, giải thích bằng giọng văn chương bên dưới. Có lúc mực nâu tràn kín tờ, có lúc đỏ tràn kín để trích một câu. Người xem cảm thấy đang nghe một người tin vào điều mình nói.

## Bảng màu
```css
--bg: #ffffff;        /* tờ giấy trắng */
--ink: #1c1410;       /* mực nâu đen ấm: chữ, khung, mảng tối */
--muted: #5e5049;     /* chữ phụ */
--red: #d8000f;       /* đỏ cà chua: áp phích, vạch, điểm nhấn */
--light: #f5f2ef;     /* trắng ngà: dải, cột, nền phụ */
--stack: 2px 2px 0 rgba(28,20,16,.25), 4px 4px 0 rgba(28,20,16,.2), 6px 6px 0 rgba(28,20,16,.15); /* bóng xếp tầng như giấy chồng */
```
Luật màu nhấn: đỏ là tiếng hô. Mỗi slide một mảng đỏ (áp phích nghiêng, vạch trục, hay tràn trang cho trích dẫn), không rải đỏ khắp nơi. Khi đỏ hoặc mực tràn trang, chữ và khung đổi sang trắng.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề: Lobster 400, giãn 0,005em, có thể nghiêng nhẹ vài độ cùng tấm áp phích. Ngắn, một cụm.
- Thân: Lora 400, nghiêng cho câu trích; Lora 600 đến 700 cho ý nhấn.
- Nhãn nhỏ: Space Grotesk 600, IN HOA, giãn rộng ("TUYÊN NGÔN", "No. 03").
- Đã kiểm: cả ba font có bộ chữ tiếng Việt. Lobster nối nét nên chữ có dấu chồng (ặ, ổ, ữ) cần cỡ lớn để dấu không dính nét, nên thử hiển thị trước.

## Bề mặt
Giấy trắng phẳng, dải trắng ngà làm cột hoặc băng. Khung viền đôi: viền ngoài 3px, viền trong 1,5px cách 8px. Bóng xếp tầng ba lớp cứng cho tấm áp phích, như nhiều tờ in chồng lên nhau.
```css
border: 3px solid #1c1410; /* kèm ::after inset 8px, border 1.5px */
box-shadow: 2px 2px 0 rgba(28,20,16,.25), 4px 4px 0 rgba(28,20,16,.2), 6px 6px 0 rgba(28,20,16,.15);
```

## Ngôn ngữ minh họa
- **Tấm áp phích đỏ** chữ nhật, dán nghiêng vài độ, nằm trong một khung thẳng: sự đối lập giữa nghiêng và thẳng là chữ ký thị giác.
- **Khung viền đôi** làm lưới bảng, khung trích dẫn, khung vùng chính.
- **Vạch đỏ** 12px: gạch đầu dòng trái, gạch dưới tiêu đề, trục thời gian. **Đường mực** 3px cho phân cách.
- **Đĩa mực** tròn đặc cho điểm mốc, số thứ tự.
- **Dải ruy băng đỏ** nghiêng chạy ngang chân trang.
- Hình minh họa nếu có: in một màu mực hoặc một màu đỏ, phẳng như in lụa.

## Chữ ký chuyển động
- **Dán áp phích:** tấm đỏ `drop` từ trên xuống, chạm thì xoay nghiêng về đúng góc của nó, bóng xếp tầng hiện sau cùng.
- **Khung dò vùng chính:** cùng một khung viền đôi di chuyển và đổi cỡ để ôm vùng quan trọng của từng slide (`data-morph="frame"`).
- **Mực tràn:** mảng mực hoặc mảng đỏ `rise-wipe` từ chân tờ lên kín trang khi vào chương hoặc trích dẫn.
- **Chữ viết tay hiện:** tiêu đề Lobster `wipe` từ trái theo hướng viết; câu thân `fade` sau.
- **Ruy băng đung đưa:** dải đỏ chân trang `sway` biên độ rất nhỏ.
- Nhịp: chắc, có trọng lượng, như dán giấy lên tường; nhanh vào, dừng hẳn, để chữ đứng lâu.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** cột trắng ngà bên trái giữ nhãn nhỏ, tấm áp phích đỏ nghiêng trong khung thẳng mang tên thương hiệu bằng Lobster trắng.
- **Sang chương:** mực nâu tràn kín tờ, áp phích đỏ nghiêng bên phải, số chương lớn.
- **Trích dẫn tuyên ngôn:** đỏ tràn kín tờ, khung đôi trắng, câu nói Lora nghiêng cỡ lớn.
- **Kết:** giấy ấm, ruy băng đỏ nghiêng chạy ngang chân trang mang lời kêu gọi.

## Nên tránh
Lobster cho đoạn văn dài hoặc chữ nhỏ, màu thứ hai ngoài đỏ, bo góc, bóng mờ, gradient, nhiều thứ nghiêng trên cùng slide (chỉ một vật nghiêng), icon phẳng kiểu ứng dụng.

## Họ hàng
`broadside` (áp phích báo chí dõng dạc nhưng chữ in khối, không viết tay), `peoples-platform` (cổ động mạnh mẽ, đồ họa thẳng thắn hơn, ít chất tạp chí), `vintage-editorial` (tạp chí cổ điển dí dỏm, nhiều chữ và nét hơn).

*Ý tưởng gốc: frontend-slides (MIT), qua SlideFly.*
