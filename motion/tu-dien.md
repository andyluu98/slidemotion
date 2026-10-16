# Từ điển chuyển động

Chuyển động có nghĩa khi nó làm đúng **động từ** của câu trên slide. Đọc câu, tìm động từ, tra bảng, rồi biến tấu theo chữ ký chuyển động của style.

**Tầng** cho biết khi xuất PowerPoint:
- **1**: PowerPoint có hiệu ứng tương đương, giữ đúng tinh thần.
- **2**: PowerPoint không có, bản PPTX hạ về hiệu ứng gần nhất (ghi ở cột cuối). Bản HTML vẫn chạy đầy đủ.

Deck chắc chắn sẽ xuất PowerPoint: dùng tầng 1 cho các khoảnh khắc quan trọng, tầng 2 cho phần trang trí.

## 1. Hiệu ứng vào (`data-anim`)

| Động từ của ý | `data-anim` | Hợp với | PowerPoint | Tầng |
|---|---|---|---|---|
| xuất hiện, hiện ra | `fade` | mọi thứ phụ | Fade | 1 |
| đi lên, tăng, mọc | `rise` | dòng chữ, thẻ | Float In (lên) | 1 |
| rơi vào chỗ, hạ xuống, được giao | `drop` | thẻ, khối, vật nặng | Fly In (từ trên) + Bounce end | 1 |
| đến từ trái, quá khứ | `left` | cột trái, "trước" | Fly In (trái) | 1 |
| đến từ phải, tương lai | `right` | cột phải, "sau" | Fly In (phải) | 1 |
| tập trung, phóng tới | `zoom` | hình chính, ảnh | Zoom | 1 |
| bật ra, nhấn mạnh | `pop` | huy hiệu, điểm, số nhỏ | Zoom + Bounce end | 1 |
| hiện rõ dần, tỉnh ra, lộ diện | `blur` | tiêu đề lớn, câu chốt | Fade (mất phần nhòe) | 2 |
| quét, viết ra, mở ra | `wipe` | tiêu đề, thanh, dải | Wipe (từ trái) | 1 |
| dâng lên, đổ đầy | `rise-wipe` | cột, mực nước, thanh dọc | Wipe (từ dưới) | 1 |
| đóng dấu, chốt, phán quyết | `stamp` | con dấu, nhãn "DUYỆT" | Basic Zoom (Out) | 1 |
| vẽ, phác, dựng hình | `draw` (trên nét SVG hoặc `<g>`) | bản vẽ, sơ đồ, đường đi | Wipe theo hướng vẽ | 2 |
| đếm, cộng dồn, tăng tới | `data-count="1234"` | con số có nguồn | hiện số cuối bằng Fade | 2 |

Thuộc tính đi kèm: `data-delay` (ms trễ), `data-dur` (ms chạy), `data-stagger` (đặt trên khối cha: mỗi con trễ thêm n ms; trên `<g data-anim="draw">`: mỗi nét trễ thêm n ms).

## 2. Lặp nhẹ (`data-loop`)

Dùng cho chi tiết phụ để slide còn "sống" sau khi hiện xong. Tối đa hai thứ lặp mỗi slide. Đặt `data-loop` lên phần tử **con** nếu phần tử cha đã có `data-anim` (hai hiệu ứng cùng dùng `transform` sẽ giành nhau).

| Ý | `data-loop` | PowerPoint (lặp tới hết slide) | Tầng |
|---|---|---|---|
| đang chờ, đang sống, tín hiệu | `pulse` | Emphasis Pulse | 1 |
| lơ lửng, nhẹ, đang bay | `float` | Motion path lên xuống, tự đảo chiều | 1 |
| vận hành, xoay vòng, chu kỳ | `spin` (`data-loop-dur`) | Emphasis Spin | 1 |
| treo, đung đưa, cân bằng | `sway` | Emphasis Teeter | 1 |
| ghi hình, cảnh báo nhấp nháy | `blink` | Emphasis Blink | 1 |
| quét, soi, kiểm tra | `scan` (`--sm-scan`: quãng đường) | Motion path đường thẳng, lặp | 1 |
| di chuyển theo tuyến, dòng chảy | SVG `<animateMotion>` | Custom motion path, lặp | 1 |

## 3. Giữa các slide

| Ý | Cách làm | PowerPoint | Tầng |
|---|---|---|---|
| cùng một vật đổi vai, đổi chỗ | `data-morph="ten"` trên hai slide liền nhau | Transition Morph, đặt tên hình `!!ten` | 1 |
| một lớp cố định xuyên deck (thanh dầm, vòng tròn, lưới) | phần tử nằm ngoài các slide, CSS theo `.sm-stage[data-scene="..."]` kèm `transition` | Morph với hình cùng tên lặp lại trên từng slide | 1 |
| sang chương mới | `data-transition="wipe"` | Transition Wipe | 1 |
| đi sâu vào chi tiết | `data-transition="zoom"` | Transition Zoom | 1 |
| cắt dứt khoát | `data-transition="cut"` | Transition Cut | 1 |
| mặc định | (không ghi) hòa dần | Transition Fade | 1 |

Lưu ý `data-morph`: phần tử morph không tự mang `transform` riêng (muốn xoay thì bọc thêm một lớp). Phần tử morph không cần `data-anim`.

## 4. Theo cú bấm (`data-step`)

`data-step="1"`, `"2"`...: phần tử chờ cú bấm thứ n trên slide đó, có thể kèm `data-anim` để chọn kiểu hiện. Bấm hết bước mới sang slide sau; lùi thì gỡ từng bước. PowerPoint: hiệu ứng "On Click" theo đúng thứ tự (tầng 1).

## 5. Gợi ý theo loại ý

| Loại ý | Gợi ý cảnh |
|---|---|
| quy trình, vòng lặp | trạm nối nhau, chấm sáng chạy theo tuyến (`animateMotion`), trạm hiện lần lượt (`pop` + `data-stagger`) |
| so sánh trước và sau | hai nửa `left` / `right`, nửa "sau" chờ cú bấm |
| gom nhiều thành một | các mảnh lơ lửng (`float`) rồi `data-morph` về một khối ở slide sau |
| lọc, sàng | vật rơi qua tầng (`drop` trễ dần), vật bị giữ lại đổi màu |
| kiểm tra, phát hiện | vạch quét (`scan`), khung khoanh hiện bằng `pop` |
| phê duyệt, quyết định | con dấu `stamp` vào cuối |
| tăng trưởng, tiến độ | thanh `rise-wipe` hoặc `wipe`, số `data-count` |
| kiến trúc nhiều tầng | các tầng `drop` từ dưới lên, dòng dữ liệu đi lên (`scan` ngược hoặc `animateMotion`) |
| cảnh báo, rủi ro | vạch sọc, `drop` có nảy, một điểm `blink` |

## 6. Hợp đồng cho bộ xuất PowerPoint (giai đoạn 3)

Để bản PPTX giống bản HTML nhất:
- Chữ là phần tử HTML thật (không nằm trong ảnh). Mỗi khối chữ thành một hộp chữ sửa được.
- Minh họa SVG giữ dạng vector. Màu nét, màu tô ghi thẳng trên phần tử hoặc qua lớp CSS có tên rõ ràng.
- Hiệu ứng khai bằng thuộc tính `data-anim`, `data-loop`, `data-step`, `data-morph` sẽ được dịch sang PowerPoint theo bảng trên. Hiệu ứng tự viết bằng CSS keyframes thì bản PPTX hạ về Fade.
- Bộ xuất đọc bố cục thật từ trang đang chạy (runtime sẽ có hàm xuất vị trí và kiểu của từng phần tử ra JSON), nên CSS tự do vẫn xuất được, không bắt viết vị trí inline. Không cần Playwright: lấy JSON bằng trình duyệt của app hoặc Edge, Chrome có sẵn trên máy.

## Lớp điện ảnh (`runtime/cinema.js`)

Bản chiếu HTML dùng hết; khi xuất PowerPoint thì hạ theo cột cuối.

| Động từ của ý | Thuộc tính | Hợp với | PowerPoint | Tầng |
|---|---|---|---|---|
| bước vào nơi mới, mở ra một thế giới | `data-trans="iris"` | vào trạm, chương mới | Transition Circle (Shape) | 1 |
| lao vào, tập trung, hỏi thẳng | `data-trans="zoom"` | câu hỏi kiểm tra, cú sốc | Transition Zoom | 1 |
| đi tiếp, sang trang | `data-trans="push"` | slide trong cùng một phần | Transition Push | 1 |
| khép lại, chuyển hồi | `data-trans="shutter"` | sang tóm tắt, sang phần mới | Transition Blinds | 1 |
| bất ngờ, chói, cảnh báo | `data-trans="flash"` | khoảnh khắc sốc | Transition Flash | 1 |
| nói ra từng tiếng, tuyên bố | `data-fx="chars"` | tiêu đề lớn, câu chốt | Fade, By letter | 1 |
| kể, giải thích | `data-fx="words"` | đoạn chữ, tiêu đề | Fade, By word | 1 |
| giải mã, máy tính đọc | `data-fx="scramble"` | nhãn, mã, kicker | Fade | 2 |
| bật vào, nảy, được ném tới | `data-fx="spring"` | thẻ, viên gạch, mảnh | Fly In + Bounce end | 1 |
| vén màn, tiết lộ | `data-fx="curtain"` | tiêu đề, con số | Wipe | 2 |
| lóe lên, tỏa sáng | `data-fx="glow"` | chữ kết, ngôi sao, nhãn | Fade | 2 |
| lật bài, so sánh | `data-fx="flip"` | thẻ, phương án | Transition Flip hoặc Fade | 2 |
| trôi, thời gian trôi | `data-fx="kenburns"` | ảnh nền | Motion path rất chậm hoặc bỏ | 2 |
| chiều sâu, không gian | `data-depth` | lớp ảnh, lớp hình | bỏ | 2 |
| không khí, sống, ấm | `data-particles` | nền tối | bỏ | 2 |
