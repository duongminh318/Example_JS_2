// for (initialization; condition; increment/decrement) {
//  // Khối code (body of loop) sẽ được lặp lại
//  // ... các câu lệnh ...
// }


// for (khởi tạo; điều kiện; thay đổi) {
//   // Các lệnh cần lặp lại
// }

// for (var i = 1; i <= 5; i++) {
//   console.log(i);
// }


// for (var i = 5; i > 0; i--) {
//   console.log(i);
// }

// for (var i=0; i<=10; i+=2){
//     console.log(i);
// }

// var fruits = ["apple", "banana", "orange"]; // Một mảng có 3 phần tử
// for(var i=0; i< fruits.length; i++){
//     console.log(fruits[i]);
// }

// Đây là phần quan trọng nhất. fruits[i] là cú pháp để truy cập vào phần tử có chỉ số i trong mảng fruits.
// Khi i = 0, fruits[0] là "apple".
// Khi i = 1, fruits[1] là "banana".
// Khi i = 2, fruits[2] là "orange".


// while (điều kiện) {
//   // Các lệnh cần lặp lại
//   // QUAN TRỌNG: Phải có lệnh làm thay đổi điều kiện!
// }
// Điều kiện (condition): Được kiểm tra trước mỗi lần lặp. Nếu đúng, khối lệnh bên trong sẽ được thực thi. Nếu sai, vòng lặp dừng lại.

// var count = 5;

// while (count > 0) {
//   console.log(count);
//   count--; // Giảm count đi 1, đây là lệnh để thay đổi điều kiện
// }

// var soNgaunhien = Math.floor(Math.random()*10);
// console.log(soNgaunhien);

// var randomNumber;
// var attempts = 0;
// while (randomNumber !== 7) { // Lặp cho đến khi randomNumber bằng 7
//  randomNumber = Math.floor(Math.random() * 10) + 1; // Tạo số ngẫu nhiên từ 1 đến 10
//  attempts++;
//  console.log(`Lần thử ${attempts}: Số ngẫu nhiên là ${randomNumber}`);
// }
// console.log(`Đã tìm thấy số 7 sau ${attempts} lần thử.`);


// do {
//   // Các lệnh cần lặp lại (được chạy ít nhất 1 lần)
// } while (điều kiện); // Lưu ý có dấu ; ở cuối
// Thực thi trước, kiểm tra sau: Khối lệnh trong do được chạy 1 lần, sau đó điều kiện trong while mới được kiểm tra.
// Ví dụ thực tế: Bắt người dùng nhập số lớn hơn 10
// JavaScript


// do {
//   userNumber = parseInt(prompt("Nhập một số lớn hơn 10:"));
// } while (userNumber <= 10);

// console.log("Bạn đã nhập số hợp lệ!");
// // Giải thích:
// // Chương trình sẽ luôn hỏi bạn nhập số ít nhất một lần. Sau khi bạn nhập, nó mới kiểm tra xem số bạn nhập có nhỏ hơn hoặc bằng 10 không (userNumber <= 10). Nếu có, nó sẽ bắt bạn nhập lại.

// var i=1;
// do{
//   console.log(i);
//   i++;

// }while(i<=5);

// var i=7;
// do{
//   console.log(i);
//   i++;
// }while(i<=5);

/**
 // CẢNH BÁO: ĐOẠN MÃ NÀY SẼ GÂY RA VÒNG LẶP VÔ HẠN
// NẾU CHẠY SẼ LÀM TREO TRÌNH DUYỆT CỦA BẠN

var count = 5;

while (count > 0) {
  // Vòng lặp này sẽ in "Số đếm là: 5" mãi mãi
  console.log("Số đếm là: " + count);

  // LỖI Ở ĐÂY: Không có lệnh nào để thay đổi giá trị của 'count'
  // Lẽ ra phải có lệnh count--;
}

console.log("Dòng này sẽ không bao giờ được thực thi.");
 */


// for (var i = 1; i <= 10; i++) {
//   if (i === 8) {
//     console.log(i);
//     console.log("-----");
//      break; // Thoát khỏi vòng lặp khi i bằng 5
//   }
//   console.log(i);
// }

// console.log("Vòng lặp kết thúc sớm!"); // Câu lệnh sau vòng lặp


// for (var i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue; // Bỏ qua lần lặp này khi i bằng 3
//   }
//   console.log(i);
// }


// for (var i = 1; i <= 5; i++) {
//  console.log(`Bắt đầu lần lặp thứ ${i}`);
//  if (i === 3) {
//   break; // Thử thay bằng 'continue' để so sánh
//  //continue;
// }
//  console.log(`Kết thúc lần lặp thứ ${i}`);
// }
// console.log("Vòng lặp kết thúc!");
/*
Output khi dùng 'break':
Bắt đầu lần lặp thứ 1
Kết thúc lần lặp thứ 1
Bắt đầu lần lặp thứ 2
Kết thúc lần lặp thứ 2
Bắt đầu lần lặp thứ 3
Vòng lặp kết thúc!
Output khi dùng 'continue':
Bắt đầu lần lặp thứ 1
Kết thúc lần lặp thứ 1
Bắt đầu lần lặp thứ 2
Kết thúc lần lặp thứ 2
Bắt đầu lần lặp thứ 3
Bắt đầu lần lặp thứ 4
Kết thúc lần lặp thứ 4
Bắt đầu lần lặp thứ 5
Kết thúc lần lặp thứ 5
Vòng lặp kết thúc!
*/


// for (var i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }else {   //tại sao ở đây không { }
//     console.log(i);
//   }
// }



