# Sách tranh sáp màu (trang truyện thiếu nhi tô sáp)

> Mỗi slide là một trang sách tranh tô bằng sáp màu trên giấy có vân: nét chàm sần, màu lem ra ngoài viền, khe giấy trắng lấp lánh.

**Hợp:** bài giảng cho trẻ em, truyện kể trước giờ ngủ, giáo dục mầm non, câu chuyện thương hiệu dịu dàng.
**Không hợp:** báo cáo doanh nghiệp, công nghệ, số liệu tài chính, sự kiện trang trọng.
**Cảm xúc:** ngây thơ, ấm áp, thủ công, kể chuyện.

## Hình dung
Một cuốn sách tranh mở trên đùi, giọng kể dịu và chậm. Hình vẽ theo logic trẻ con: nhà có một mặt tiền thẳng và một mặt hông nghiêng, người to hơn cửa, mặt trời cười, ngôi sao có mắt. Sáp chỉ bám vào đỉnh vân giấy nên mảng màu nào cũng lốm đốm trắng. Mỗi trang kể một việc.

## Bảng màu
```css
--paper: #F4EFE3;    /* giấy có vân, cũng là màu hạt trắng */
--ink: #2A2850;      /* chàm đậm: viền, mắt, chữ. Không bao giờ đen */
--muted: #5A5675;    /* chữ phụ, nhãn viết tay */
--coral: #B8381F;    /* chữ nhấn (sáp san hô trong hình #D9543A, tối #C94632) */
--blue: #3F5FA8; --plum: #7A4A7C; --teal: #17706C;   /* màu chữ phụ */
/* hộp sáp trong hình */
--yellow: #F2B632; --orange: #EE8A2E; --green: #5E9A4A; --sky: #6F98D2;
--pink: #EE8FA0; --brown: #8B5A3C; --wash: #4C74D2; /* màu nước duy nhất, đặc 0,1 đến 0,2 */
```
Hộp khoảng 12 cây sáp, không hơn. Một mảng màu nước xanh là khách, sáp mới là chủ. Độ đậm nhạt đến từ lực tay (gạch thưa hay dày), không thêm màu mới.

## Chữ
```html
<link href="https://fonts.googleapis.com/css2?family=Itim&family=Mali:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Tiêu đề và nhãn trong hình: Itim, tròn, thân thiện như chữ cô giáo viết.
- Thân: Mali 400 đến 600, nét viết tay dễ đọc.
- Cả hai font có bộ chữ tiếng Việt (đã kiểm Google Fonts ngày 16/10/2026).

## Bề mặt
Giấy ấm có vân sần, bóng gáy sách ở giữa, một mảng màu nước xanh nhạt loang ở một góc, dải cỏ sáp xanh ở đáy. Thẻ nội dung là giấy trắng hơi trong, bo góc lệch (`22px 30px 20px 28px`) như cắt bằng kéo.

## Ngôn ngữ minh họa
- **Viền kép:** một nét chàm đậm 4 đến 6px và một nét mảnh nửa độ dày lệch nhẹ, đầu nét tròn.
- **Mảng tô** là nhiều nét cong song song cách 6 đến 9px, dày 6 đến 8, vượt mép 3 đến 6px; vùng lớn thêm một lượt gạch chéo thưa. Phủ lên một lớp chấm giấy (pattern) để thành vân. Không bao giờ là mảng phẳng.
- Vật được vẽ trước, màu tô sau. Chừa nhiều giấy trống.
- Hình mẫu: ngôi sao có mặt (tối đa ba), mặt trời cười, chấm tròn tô sáp làm trạm, cây sáp làm chú thích, máy bay giấy với đường bay xoắn chấm chấm, số trong vòng tròn giấy, nhãn viết tay 2 đến 4 chữ.
- Mặt (hai chấm mắt, má hồng gạch, miệng một nét cong) chỉ cho vật chính.

## Chữ ký chuyển động
- **Vẽ rồi mới tô:** viền chàm hiện bằng `draw` theo thứ tự người vẽ, xong thì lớp tô sáp `wipe` qua như tay đang gạch màu, cuối cùng nhãn `fade`.
- **Lật trang sách:** chuyển chương bằng `data-transition="wipe"`, như ngón tay lật sang trang mới.
- **Mặt trời đung đưa:** mặt trời cười `sway` nhẹ ở góc trời; ngôi sao có mắt `pulse` chậm như đang chớp mắt.
- **Máy bay giấy bay vòng:** máy bay đi theo đường xoắn chấm bằng `<animateMotion>`, một lần, rồi đậu lại.
- **Vật rơi nhẹ vào trang:** quả táo, ngôi sao `drop` có nảy nhỏ, mỗi lần một vật.
- Nhịp: chậm, dịu, như giọng đọc truyện trước giờ ngủ. Tối đa hai thứ lặp mỗi slide.

## Khoảnh khắc đáng nhớ (gợi ý)
- **Bìa:** ngôi nhà góc nhìn trẻ con, cây táo, mặt trời cười vẽ dần rồi tô màu, tên truyện viết tay.
- **Đếm và so sánh:** các chấm tròn tô sáp hiện từng cái (`pop` + `data-stagger`), số chấm đúng bằng số trong lời kể.
- **Hành trình:** đường chấm sáp san hô uốn qua trang, mỗi trạm một chấm tròn, máy bay giấy bay dọc theo.
- **Kết:** bầu trời đêm, ba ngôi sao có mắt chớp, lời chúc ngủ ngon.

## Nên tránh
Mảng màu phẳng không có nét tô và vân, gradient mượt, bóng đổ, hiệu ứng thủy tinh, 3D, filter làm mờ, viền đen, hơn 12 màu sáp, hơn một màu nước, màu nước phủ lên nhân vật, nhân vật hay câu chữ của sách thật, số liệu bịa.

## Họ hàng
`whiteboard` (cũng nét tay nhưng là bút lông trên bảng, giảng giải cho người lớn), `paper-popup` (sách thiếu nhi nhưng là thẻ giấy cắt bật lên, màu rực và sạch), `clay-3d` (mềm mại vui tươi cho trẻ em, nhưng là khối đất nặn có chiều sâu, không có vân sáp).

*Ý tưởng gốc: MotionFly / lemo-opuscar (MIT), qua SlideFly.*
