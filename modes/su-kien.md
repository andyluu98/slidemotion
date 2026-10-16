# Chế độ sự kiện

Dùng cho ra mắt sản phẩm, pitch, mở màn hội thảo, bài nói truyền cảm hứng. Người xem cần **cảm và nhớ** một hai thông điệp. Đây là chế độ được chơi lớn nhất.

## Ý tưởng điện ảnh
- **Một thế giới liên tục** chứ không phải từng slide rời: máy quay đi qua một toàn cảnh (công trường, thành phố, đại dương, bản vẽ khổng lồ), mỗi slide là một góc của thế giới đó.
- **Một trục biến đổi** nhìn thấy được: trời đi từ bình minh tới đêm, tòa nhà lên từng tầng, bản đồ sáng dần từng vùng. Trục này chính là mạch truyện.
- **Một nhân vật** đi qua thế giới: vật nhỏ, có cá tính (mũ bảo hộ phát sáng, chiếc thuyền giấy, một tia sáng).
- **Đồ vật thật thay cho ô thẻ**: cửa sổ chat, terminal đang chạy, biển báo, giá hồ sơ, con dấu. Người xem nhận ra thế giới của họ.

Ví dụ đầy đủ: `examples/03_mot-ngay-o-cong-truong.html` (toàn cảnh lia, trời đổi giờ, mũ bảo hộ đi theo).

## Kỹ thuật dựng
- **Toàn cảnh lia**: nền gồm 2 đến 3 lớp đặt ngoài các slide, mỗi lớp có `data-parallax` (0,3 lớp xa, 0,6 lớp giữa, 1 lớp gần); mỗi slide ghi `data-cam="<px>"`. Runtime trượt các lớp, xa chậm gần nhanh, tạo chiều sâu.
- **Ánh sáng theo cảnh**: mỗi slide ghi `data-scene`; CSS theo `.sm-stage[data-scene=...]` đổi bầu trời (xếp chồng vài lớp gradient rồi đổi `opacity`, vì gradient không chuyển mượt được).
- **Lớp phủ cho chữ**: nền giàu chi tiết thì phủ một dải tối mềm phía bên có chữ (gradient từ mép trái), hoặc đặt chữ trong khung kính mờ (`backdrop-filter: blur`). Soát kỹ chữ đè lên cửa sổ sáng, mặt trời.
- **Khoảnh khắc lớn**: chữ khổng lồ chiếm nửa slide, số chương rỗng nét làm nền, con dấu đóng, cả thành phố lên đèn.

## Nhịp
- Bìa và kết là hai cảnh đắt nhất; dồn công vào đó.
- Xen một slide gần như trống (một câu giữa toàn cảnh) sau mỗi 3 đến 4 slide dày.
- Chữ chính hiện xong trong khoảng 1,5 giây; nền, ảnh, hạt sáng được sống tiếp suốt slide.
- Dùng hết `runtime/cinema.js`: chuyển cảnh mỗi phần một kiểu, chữ tách ký tự cho câu lớn, ảnh AI cho mọi cảnh lớn (Bước 2b của SKILL.md).

## Giới hạn
- Hiệu ứng điện ảnh phần lớn là tầng 2: sang PowerPoint sẽ hạ về hiệu ứng đơn giản. Chế độ này nên giao HTML để chiếu.
- Không đánh đổi độ đọc được: chữ thân vẫn từ 28px, tương phản vẫn đạt.

## Soát thêm cho chế độ này
| Câu hỏi | Nếu "không" |
|---|---|
| Nói được ý tưởng lớn trong một câu? | viết lại ý tưởng trước khi sửa slide |
| Ba slide bất kỳ có trông như cùng một thế giới? | thống nhất nền, nhân vật, ánh sáng |
| Chữ có chỗ nào nằm trên vùng sáng chói? | thêm lớp phủ hoặc dời chữ |
