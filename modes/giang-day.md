# Chế độ giảng dạy

Dùng khi người dùng đứng lớp: dạy lý thuyết, đào tạo nội bộ, bài giảng có học viên. Mục tiêu không phải "trầm trồ" mà là **hiểu và nhớ**: học viên ra về giải thích lại được cho người khác.

## Ý tưởng lớn: một câu chuyện để treo kiến thức
- Chọn một thế giới gần với học viên: một ngày ở công trường, một ca trực ở bệnh viện, một đơn hàng đi từ kho tới khách. Mỗi khái niệm là một "trạm" trong câu chuyện đó.
- Một nhân vật đi qua các trạm (chiếc mũ bảo hộ, một đơn hàng, một hồ sơ). Học viên nhớ khái niệm gắn với chỗ nhân vật đứng.
- Trục thời gian hoặc trục không gian rõ ràng (sáng tới tối, tầng 1 tới mái), để học viên biết mình đang ở đâu trong bài.

## Nhịp cho mỗi khái niệm (giữ cố định suốt bài)
1. **Gọi tên và định nghĩa**: một câu, chữ to. Thuật ngữ giữ nguyên, nghĩa nằm trong câu.
2. **Ví von đời thường**: "Skill giống bộ tài liệu cho nhân viên mới".
3. **Ví dụ trong nghề của học viên**: cảnh có đồ vật thật (tin Zalo, bảng Excel, biên bản).
4. **Câu hỏi kiểm tra**: hỏi trước, bấm mới hiện đáp án (`data-step`). Cơ chế ở mục 2 của `scenes/cong-thuc.md`; hình thức câu hỏi tự thiết kế theo câu chuyện.

Học viên quen nhịp này sau hai khái niệm, từ đó họ tự đoán được slide tiếp theo sẽ làm gì và tập trung vào nội dung.

## Cấu trúc bài
- **Bìa** có câu hỏi lớn của buổi học ("Làm sao để AI làm việc thật ở công trường?").
- **Bản đồ buổi học**: các trạm sẽ đi qua; lặp lại bản đồ ở đầu mỗi phần, trạm hiện tại sáng lên.
- **Mỗi phần 3 đến 6 slide**, cuối phần có **slide tóm tắt** (3 ý, học viên chụp lại được).
- **Slide thực hành**: đề bài, thời gian, sản phẩm cần nộp.
- **Kết**: trả lời câu hỏi lớn ở bìa, một câu.

## Hiệu ứng: đẹp hết cỡ, nhưng chữ đứng yên khi đang đọc
Học viên nhớ bài giảng đẹp lâu hơn bài giảng phẳng. Được chơi lớn: ảnh có chiều sâu, chuyển cảnh, chữ bay, hạt sáng.
- **Bấm từng bước** vẫn là công cụ chính: người dạy nói tới đâu, hình hiện tới đó.
- **Chuyển cảnh có nghĩa** (`data-trans` trong `runtime/cinema.js`): vào trạm mới thì mở vòng tròn, câu hỏi kiểm tra thì lao vào, trong một trạm thì đẩy ngang, tóm tắt thì lá chớp. Học viên nghe nhịp chuyển là biết mình đang ở đâu.
- **Mỗi trạm một ảnh** cùng một thế giới (Bước 2b của SKILL.md), ảnh trôi chậm phía sau chữ.
- **Chữ chính hiện xong trong 1,5 giây** rồi đứng yên; thứ chuyển động liên tục chỉ nằm ở nền hoặc ở hình minh họa.
- Khoảnh khắc "à ra thế" (đổi một chữ thì nghĩa đổi, vặn núm thì cột dẹt xuống) đáng giá hơn mọi hiệu ứng trang trí: mỗi phần nên có ít nhất một.

## Chữ và mật độ
- Chữ thân từ 30px, tiêu đề 64px trở lên. Phòng học xa màn hình hơn phòng họp.
- Slide định nghĩa: tối đa 25 từ. Slide ví dụ: được dày hơn vì học viên đọc theo.
- Nền sáng hoặc tối đều được; phòng sáng đèn thì nên nền sáng.

## Bản phát tay
Runtime có chế độ in: mở file, bấm Ctrl+P, chọn "Lưu dưới dạng PDF". Mọi slide được trải ra, mọi bước đã hiện, hiệu ứng tắt. Nhắc người dùng điều này khi bàn giao.

## Soát thêm cho chế độ này
| Câu hỏi | Nếu "không" |
|---|---|
| Mỗi khái niệm có đủ định nghĩa, ví von, ví dụ? | thêm phần còn thiếu |
| Có câu hỏi kiểm tra sau mỗi phần? | thêm một slide hỏi đáp |
| In ra PDF có đọc được không cần người giảng? | thêm chú thích ngắn |
