# Chế độ báo cáo

Dùng khi người dùng trình bày kết quả: báo cáo dự án, báo cáo tuần, đề xuất, học viên nộp bài. Người nghe cần **hiểu kết luận và tin con số** trong thời gian ngắn. Mục tiêu: rõ, nhanh, sửa được.

## Sợi chỉ thay cho ý tưởng lớn
Không cần thế giới điện ảnh. Cần một sợi chỉ ba nhịp:
1. **Câu hỏi**: báo cáo này trả lời điều gì.
2. **Bằng chứng**: số liệu, biểu đồ, ảnh hiện trường, mỗi thứ có nguồn.
3. **Kết luận và đề xuất**: việc gì, ai làm, khi nào.

**Kết luận đặt trước**: slide 2 hoặc 3 đã nói kết luận chính; phần sau là bằng chứng.

## Số liệu là trung tâm
- Mỗi con số ghi nguồn ngay cạnh (file, sheet, trang). Không có nguồn thì không đưa số.
- **Một biểu đồ, một thông điệp**: tiêu đề slide là câu kết luận ("Chi phí vật tư vượt dự toán ở 2 hạng mục"), không phải tên biểu đồ ("Biểu đồ chi phí").
- Tô màu nhấn đúng cột, đúng dòng đang nói; phần còn lại xám.
- Con số lớn dùng `data-count` khi muốn nhấn, nhưng không lạm dụng.
- Bảng: tối đa 6 dòng trên một slide; nhiều hơn thì chuyển sang phụ lục.

Cảnh mẫu trong `scenes/canh-mau.html`: "Chỉ số có nguồn", "Biểu đồ cột một thông điệp", "Bảng so sánh có khuyến nghị".

## Style và hiệu ứng
- Ưu tiên style sáng, rõ: `swiss-modern`, `blue-professional`, `bento-light`, `dataviz`, `cobalt-grid`, `monochrome`, `signal`. Style sự kiện chỉ dùng cho bìa nếu muốn.
- Hiệu ứng nhẹ và **tầng 1** trong `motion/tu-dien.md` (fade, rise, wipe, zoom, `data-step`, `data-morph`), vì báo cáo thường phải nộp PowerPoint.
- Biểu đồ mọc lên bằng `wipe` hoặc `rise-wipe`; không xoay, không nảy.
- Không lia nền, không lặp vô hạn.

## Nhanh và sửa được
- Bố cục nên lặp có chủ đích để người dùng tự thêm slide theo mẫu: khai báo vài lớp CSS dùng lại (`.s-chiso`, `.s-bieudo`, `.s-bang`) trong `<style>`.
- Chữ là chữ, số là số trong HTML (không vẽ vào SVG), để sau này xuất PowerPoint vẫn sửa được.
- Có slide **phụ lục** cho số liệu chi tiết và nguồn đầy đủ.

## Xuất PowerPoint
Bộ xuất của SlideMotion đang làm (giai đoạn 3). Người dùng cần file .pptx ngay thì báo rõ và dùng skill `slidefly`; nếu chỉ trình chiếu thì giao HTML.

## Soát thêm cho chế độ này
| Câu hỏi | Nếu "không" |
|---|---|
| Kết luận có xuất hiện trong 3 slide đầu? | đưa lên trước |
| Mỗi số có nguồn ngay cạnh? | ghi nguồn hoặc bỏ số |
| Tiêu đề slide biểu đồ là một câu kết luận? | viết lại tiêu đề |
| Có slide đề xuất: việc, người, hạn? | thêm |
