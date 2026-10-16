---
name: slidemotion
description: Soạn slide HTML có chuyển động kể chuyện từ một chủ đề và nội dung gợi ý, theo ba chế độ (giảng dạy, báo cáo, sự kiện) và thẻ style (85 phong cách) làm cảm hứng chứ không làm khuôn. AI đóng vai đạo diễn, mỗi slide tự thiết kế hình và hiệu ứng đúng ý. Xuất PowerPoint đang làm (giai đoạn 3), hiện giao file HTML. Dùng khi người dùng muốn làm slide, deck, bài thuyết trình, pitch, slide có hiệu ứng, slide đẹp không rập khuôn, /slidemotion, SlideMotion.
---

# SlideMotion: AI làm đạo diễn, không lắp ghép khung

Mô hình đủ giỏi để tự thiết kế từng slide. Thứ nó cần không phải khuôn, mà là **gu**: một phong cách để bám, một vốn từ chuyển động, và vài nguyên tắc để giữ độ tin cậy. Repo này chỉ cung cấp ba thứ đó cộng một runtime nhỏ để chiếu.

So sánh để nhớ: khung dựng sẵn giống nhà lắp ghép, nhanh mà căn nào cũng giống căn nào. SlideMotion giống đưa kiến trúc sư một cuốn sách phong cách: mỗi deck là một công trình riêng.

```
SKILL.md              file này: tinh thần, quy trình, tiêu chuẩn
modes/<che-do>.md    ba chế độ: giang-day, bao-cao, su-kien (đọc trước khi lên kịch bản)
styles/INDEX.md       bảng chọn style theo chủ đề, cảm xúc
styles/<slug>.md      thẻ style: hình dung, màu, chữ, minh họa, chữ ký chuyển động, khoảnh khắc đáng nhớ
motion/tu-dien.md     từ điển chuyển động: ý của câu -> hiệu ứng HTML -> hiệu ứng PowerPoint tương ứng
runtime/deck.js       co khung 16:9, điều hướng, data-anim, data-loop, data-step, data-morph, data-count
runtime/khoi-dau.html bộ khung trống tối thiểu (chỉ là vỏ, không có bố cục)
scenes/cong-thuc.md   công thức cơ chế (bấm từng bước, câu hỏi kiểm tra, toàn cảnh lia, vật xuyên suốt...), không có bố cục
examples/             deck mẫu để thấy mức chịu chơi, không để chép; không mở deck trùng chủ đề với deck đang làm
tests/                tệp kiểm thử runtime, không dùng làm mẫu thiết kế
```

## 1. Luật không đổi (độ tin cậy, chỉ có bấy nhiêu)

- **Số liệu có nguồn.** Không bịa số, tên, ngày, giá. Số trên slide ghi nguồn cạnh đó. Ví dụ minh họa thì ghi "minh họa". Thiếu dữ liệu thì dùng ý, hình, câu chốt thay cho số.
- **Chữ đọc được:** tương phản ít nhất 4,5:1 cho chữ thân, 3:1 cho chữ lớn; không đè chữ; không tràn mép (chừa 80px hai bên, 60px trên dưới).
- **Tiếng Việt đủ dấu, câu ngắn, không dùng ký tự gạch ngang dài.** Font phải có bộ chữ tiếng Việt.
- **Một file HTML**, chép nội dung `runtime/deck.js` vào thẻ `<script>` cuối trang (hoặc tham chiếu tương đối khi còn đang dựng). Font Google được phép.
- **Chữ là chữ, không vẽ chữ vào ảnh.** Câu cần sửa để ngoài SVG, để xuất PowerPoint còn sửa được.

Mọi thứ khác dưới đây là gợi ý nghề. Phá được nếu có lý do tốt cho nội dung.

## 2. Quy trình

### Bước 0. Chọn chế độ
Hỏi ngay câu đầu (trừ khi người dùng đã nói rõ), rồi đọc `modes/<che-do>.md`:

| Chế độ | Khi nào | Ưu tiên |
|---|---|---|
| `giang-day` | dạy lý thuyết, đào tạo, bài giảng | hiểu và nhớ: câu chuyện xuyên suốt, bấm từng bước, nhịp định nghĩa, ví von, ví dụ, câu hỏi; slide tóm tắt; bản phát tay |
| `bao-cao` | báo cáo, thuyết trình kết quả, học viên làm bài | rõ và nhanh: số liệu có nguồn, biểu đồ, kết luận trước; hiệu ứng nhẹ; sửa được, xuất PowerPoint |
| `su-kien` | ra mắt, pitch, mở màn, truyền cảm hứng | ấn tượng: ý tưởng điện ảnh, toàn cảnh lia, khoảnh khắc lớn |

Đoán được từ lời người dùng thì nói chế độ đã chọn trong một câu thay vì hỏi.

### Bước 1. Hiểu nội dung
- Tài liệu `.pdf/.docx/.pptx` thì chuyển sang Markdown trước khi đọc.
- Thiếu gì thì hỏi gộp một lượt: người xem là ai, thuyết trình hay để đọc, bao nhiêu slide, có cần PowerPoint không.
- Viết lại nội dung thành **một ý mỗi slide**. Ý dài thì tách.

### Bước 2. Chọn style
- Người dùng nêu tên thì dùng. Chưa nêu thì đọc `styles/INDEX.md`, gợi ý 3 style: một **hợp** chủ đề, một **khác nền** (sáng/tối ngược lại), một **bất ngờ**. Nói ngắn vì sao.
- Đọc kỹ thẻ style đã chọn. Thẻ là **cảm hứng có căn cứ**: giữ bảng màu, chữ, chất liệu, chữ ký chuyển động; còn bố cục và hình từng slide là việc của bạn.
- Được trộn: nền của style này với chữ ký chuyển động của style kia, nếu hợp nội dung.

### Bước 3. Ý tưởng lớn, rồi kịch bản đạo diễn (trước khi viết code)
**Ý tưởng lớn trước, style sau.** Viết một câu: deck này diễn ra trong *thế giới* nào, theo *trục* nào, với *nhân vật* nào. Ví dụ: "Một ngày ở công trường: bầu trời đi từ bình minh tới đêm, chiếc mũ bảo hộ phát sáng là agent." Thẻ style chỉ quyết định vẻ ngoài; câu chuyện mới làm deck có hồn.
- `giang-day`, `su-kien`: bắt buộc có ý tưởng lớn.
- `bao-cao`: chỉ cần một sợi chỉ: câu hỏi, bằng chứng, kết luận.

Rồi lập bảng ngắn, mỗi slide một dòng:

| # | Ý chính | Hình ẩn dụ (vật gì kể ý này) | Chuyển động (động từ nào) | Khoảnh khắc |
|---|---|---|---|---|
| 1 | AI Agent cho xây dựng | khung nhà tự dựng từng tầng, cần trục | vẽ nét, chấm sáng leo tầng | bìa |
| 2 | Công trường ngập giấy tờ | giấy tờ bay lộn xộn | trôi lơ lửng, rối | |

- **Hình ẩn dụ** lấy từ thế giới của chủ đề (xây dựng: cần trục, bản vẽ, dầm; y tế: nhịp tim, phim chụp...), không phải icon chung chung.
- **Chuyển động lấy từ động từ của câu**: "gom lại" thì các mảnh bay về tâm, "lọc" thì rơi qua phễu, "kiểm tra" thì vạch quét, "duyệt" thì con dấu đập xuống. Tra `motion/tu-dien.md`.
- **Một nhân vật xuyên suốt** (gợi ý mạnh): một vật đi qua nhiều slide và đổi vai bằng `data-morph` hoặc lớp cố định theo `data-scene` (ví dụ thanh dầm vàng: gạch chân ở bìa, thành trục ở slide quy trình, thành vạch cổng ở slide lộ trình). Đây là thứ làm deck có "hồn".
- **Nhịp:** xen slide dày và slide nghỉ (một câu, một con số, một hình lớn). Không để ba slide liền cùng một bố cục hay cùng một kiểu hiện.
- Chọn 2 đến 4 **khoảnh khắc đáng nhớ** (bìa, con số then chốt, chỗ "à ra thế", kết) và dồn công vào đó.

### Bước 4. Dựng
- Bắt đầu từ `runtime/khoi-dau.html`. Sân khấu 1920x1080, đặt phần tử bằng `position:absolute` theo px hoặc grid/flex tự do, tùy slide.
- Cần cơ chế khó (câu hỏi kiểm tra, toàn cảnh lia, vật xuyên suốt, đo chữ để khoanh, bản phát tay) thì tra `scenes/cong-thuc.md`, **chỉ sau khi kịch bản đạo diễn đã xong**. Công thức không có bố cục; hình dáng slide do kịch bản và style quyết định.
- Toàn cảnh lia (`su-kien`, có thể dùng cho `giang-day`): đặt các lớp nền ngoài slide với `data-parallax="0.3"` (xa) đến `"1"` (gần), mỗi slide ghi `data-cam="<px>"`; runtime tự trượt các lớp.
- Khai báo token màu, chữ của style trong `:root` hoặc `.sm-stage`. CSS riêng từng slide gắn với lớp riêng của slide đó.
- Minh họa vẽ bằng SVG inline theo ngôn ngữ minh họa của thẻ style. Vẽ đúng vật của nội dung, không vẽ hình trang trí vô nghĩa.
- Hiệu ứng: dùng thuộc tính của runtime (`data-anim`, `data-delay`, `data-loop`, `data-step`, `data-morph`, `data-count`) cho phần lớn; tự viết CSS keyframes hoặc SVG `animateMotion` cho khoảnh khắc đặc biệt. Xem bảng tầng trong `motion/tu-dien.md` nếu deck sẽ xuất PowerPoint.
- Mỗi slide hiện xong trong khoảng 2,5 giây để người nói không phải chờ; chi tiết phụ có thể lặp nhẹ (`data-loop`) để slide không chết.

### Bước 5. Tự xem và sửa
Mở bằng trình duyệt của app, đi qua **từng** slide, chờ hiệu ứng chạy xong rồi chụp. Soát theo bảng:

| Câu hỏi | Nếu "không" |
|---|---|
| Đọc trong 3 giây có hiểu ý chính? | bớt chữ, tách slide |
| Chữ có đè hình, đè chữ, sát mép? | dời, thu hình, đổi màu nền dưới chữ |
| Hình có kể đúng ý của slide? | đổi hình ẩn dụ |
| Chuyển động có nghĩa (theo động từ) hay chỉ cho có? | đổi hoặc bỏ |
| Ba slide liền có giống dáng nhau? | đổi bố cục một slide |
| Số có nguồn? | ghi nguồn hoặc bỏ số |
| Có lỗi console? | sửa |
| Slide nào giống y một slide trong `examples/` về bố cục và hình? | đổi lại cho hợp câu chuyện của deck này |

Sửa tới khi qua hết. Không giao khi chưa tự xem.

### Bước 6. Bàn giao
- Đường dẫn tuyệt đối, số slide, style, cách trình chiếu (mũi tên hoặc Space, F toàn màn hình, bấm nửa phải để tới).
- PowerPoint chỉ xuất khi người dùng xin. Nói rõ hiệu ứng nào giữ nguyên, hiệu ứng nào hạ về gần nhất (theo tầng trong từ điển). Bộ xuất của SlideMotion chưa xong (giai đoạn 3): cần file .pptx ngay thì báo người dùng và dùng skill `slidefly`.
- `giang-day`: nhắc bản phát tay: mở file, bấm Ctrl+P, chọn "Lưu dưới dạng PDF"; runtime tự trải mọi slide, hiện đủ các bước, tắt hiệu ứng khi in.

## 3. Gợi ý nghề

- **Chữ:** tiêu đề 64 đến 120px, chữ thân từ 28px khi thuyết trình. Slide chốt cho chữ thật to.
- **Bố cục:** mỗi slide tự chọn dáng theo ý: chữ khổng lồ cắt mép, nửa hình nửa chữ, lưới bất đối xứng, sơ đồ chiếm cả slide, một câu giữa khoảng trống lớn. Khoảng trống là công cụ, không phải lỗi.
- **Màu:** một màu nhấn dành cho điều quan trọng nhất của slide. Hai thứ cùng nhấn thì một thứ thừa.
- **Hiệu ứng vào:** đa dạng theo vai: tiêu đề `wipe` hoặc `blur`, thẻ `drop` hoặc `pop`, sơ đồ `draw`, con số `count`, phán quyết `stamp`. Đừng cho tất cả cùng `rise`.
- **Lặp nhẹ:** chấm chạy trên đường, vạch quét, nhịp đập, đung đưa. Mỗi slide tối đa hai thứ lặp, đừng để rối mắt.
- **Ảnh thật:** chỉ dùng ảnh có giấy phép, ghi nguồn. Ảnh minh họa AI thì ghi rõ.

## 4. Lỗi hay gặp (để tránh)
- Slide nào cũng "tiêu đề trái trên, gạch đầu dòng dưới, ô điểm nhấn phải".
- Icon gắn vào từng gạch đầu dòng.
- Hình trang trí không liên quan nội dung chạy qua chạy lại.
- Cả deck một kiểu hiện, một tốc độ.
- Chữ nằm trong ảnh hoặc SVG nên không sửa được khi sang PowerPoint.
- `data-anim` gắn lên khối cao 0px (chỉ chứa phần tử `position:absolute`): trình duyệt không chạy chuyển động, khối kẹt ở trạng thái ẩn. Gắn `data-anim` lên chính phần tử có kích thước.
- Phần tử vừa xoay vừa có `data-anim`: hiệu ứng vào đặt lại `transform` nên mất góc xoay. Xoay bằng thuộc tính riêng `rotate: 30deg` (hoặc bọc thêm một lớp).
- Lớp xuyên suốt (vật đi qua nhiều slide) điều khiển bằng sự kiện `sm:change`: trong hàm nghe, lần đặt đầu tiên tắt `transition` để vật không bay vào từ góc trái trên; sau khi gắn hàm nghe, gọi luôn một lần nếu `deck.index >= 0`.
- Nền riêng của từng slide (sáng, tối) đặt trên chính `<section>`, không đặt trên `.sm-stage` theo `data-scene`: khi in bản phát tay, mọi slide dùng chung nền của sân khấu.
- Tự chụp để soát: Edge hoặc Chrome có sẵn chạy `--headless=new --user-data-dir=<thư mục tạm riêng cho mỗi lần chụp> --window-size=1920,1080 --virtual-time-budget=9000 --screenshot=...`. Dùng chung hồ sơ thì lệnh trả về ngay mà không ghi ảnh, hoặc lấy bản cũ trong bộ nhớ đệm.

## 5. Chế độ nhanh
Người dùng nói "nhanh", "ít token" hoặc deck trên 25 slide: dựng 3 đến 4 "cảnh" dùng lại (một cảnh quy trình, một cảnh so sánh, một cảnh con số), thay nội dung; dồn minh họa riêng cho bìa, khoảnh khắc chính và kết.
