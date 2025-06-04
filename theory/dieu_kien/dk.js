// var age = 20;
// if (age >= 18) {
//     console.log("Bạn đủ tuổi lái xe.");
// }


// var age = 15; // Sử dụng var để khai báo biến age
// if (age >= 18) { // Điều kiện: age có lớn hơn hoặc bằng 18 không?
//  console.log("Bạn đã đủ tuổi bầu cử."); // Nếu điều kiện đúng, in ra thông báo
// }

// console.log("ahihi");

// var age = 19;
// if (age >= 18) {
//     console.log("Bạn đã đủ tuổi bầu cử.");
// } else {
//     console.log("Bạn chưa đủ tuổi bầu cử.");
// }

// console.log("ahihi");

// var number = 7; // Sử dụng var để khai báo biến number
// if (number % 2 === 0) { // Điều kiện: number chia hết cho 2 (số dư bằng 0)?
//  console.log("Số này là số chẵn."); // Nếu điều kiện đúng, in ra "chẵn"
// } else { // Nếu điều kiện trên sai
//  console.log("Số này là số lẻ."); // In ra "lẻ"
// }

// var diem = 9; // Sử dụng var để khai báo biến diem

// if (diem >= 9) { // Điều kiện 1: điểm >= 9?
//     console.log("Xuất sắc"); // Nếu đúng, in ra "Xuất sắc"
// } else if (diem >= 8) { // Điều kiện 2 (chỉ kiểm tra nếu ĐK 1 sai): điểm >= 8?
//     console.log("Giỏi"); // Nếu đúng, in ra "Giỏi"
// } else if (diem >= 6.5) { // Điều kiện 3 (chỉ kiểm tra nếu ĐK 1 & 2 sai): điểm >= 6.5?
//     console.log("Khá"); // Nếu đúng, in ra "Khá"
// } else { // Nếu tất cả các điều kiện trên sai
//     console.log("Trung bình hoặc yếu"); // In ra "Trung bình hoặc yếu"
// }

// console.log("các câu lệnh phía dưới");

// false
// console.log(Boolean(false)); // false
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// var x= ""
// if(x){
//     console.log("x là truthy");
// }else{
//       console.log("x là Falsy"); // Vì "" là falsy
// }



// if (undefined) {
//     console.log("Truthy");
//   } else {
//     console.log("Falsy"); // In ra "Falsy"
//   }

// console.log(Boolean(true))
// console.log(Boolean("1"))
// console.log(Boolean(-1))
// console.log(Boolean( []))
// console.log(Boolean( {}))


// var username = ""; // Chuỗi rỗng (falsy) - Sử dụng var để khai báo biến username
// if (username) { // Kiểm tra truthy/falsy của username
//     console.log("Chào mừng, " + username); // Khối lệnh này KHÔNG thực hiện vì username là falsy
// } else { // Nếu username là falsy
//     console.log("Bạn chưa đăng nhập!"); // Khối lệnh này được thực hiện vì username là falsy
// }

// var count = 0; // Số 0 (falsy) - Sử dụng var để khai báo biến count
// if (count) { // Kiểm tra truthy/falsy của count
//  console.log("Có sản phẩm."); // Khối lệnh này KHÔNG thực hiện vì count là falsy
// } else { // Nếu count là falsy
//  console.log("Giỏ hàng trống."); // Khối lệnh này được thực hiện vì count là falsy
// }


// var myArray = []; // Mảng rỗng (truthy) - Sử dụng var để khai báo myArray
// if (myArray) { // Kiểm tra truthy/falsy của myArray
//  console.log("Mảng tồn tại (truthy)"); // Khối lệnh này được thực hiện vì mảng rỗng [] là truthy trong JavaScript
// } else { // Nếu myArray là falsy
//  console.log("Mảng không tồn tại (falsy)"); // Khối lệnh này KHÔNG thực hiện
// }
// var myObject = {}; // Đối tượng rỗng (truthy) - Sử dụng var để khai báo myObject
// if (myObject) { // Kiểm tra truthy/falsy của myObject
//  console.log("Đối tượng tồn tại (truthy)"); // Khối lệnh này được thực hiện vì đối tượng rỗng {} là truthy trong Jav
// } else { // Nếu myObject là falsy
//  console.log("Đối tượng không tồn tại (falsy)"); // Khối lệnh này KHÔNG thực hiện
// }

// switch (biểu_thức) {
//  case giá_trị_1:
//  // Khối lệnh JavaScript 1: Thực hiện nếu biểu_thức === giá_trị_1
//  break; // Lệnh break rất quan trọng!
//  case giá_trị_2:
//  // Khối lệnh JavaScript 2: Thực hiện nếu biểu_thức === giá_trị_2
//  break;
//  case giá_trị_3:
//  // Khối lệnh JavaScript 3: Thực hiện nếu biểu_thức === giá_trị_3
//  break;
//  // ... có thể có nhiều case khác ...
//  default: // Trường hợp tùy chọn
//  // Khối lệnh JavaScript mặc định: Thực hiện nếu biểu_thức không khớp với bất kỳ case nào
//  break;
// }


// var menu = 6;
// switch (menu) {
//     case 1:
//         console.log("Bạn chọn Gà");
//         break;
//     case 2:
//         console.log("Bạn chọn Cá");
//         break;
//     case 3:
//         console.log("Bạn chọn Bò");
//         break;
//     default:
//         console.log("Không có món này!");
// }


// var dayOfWeek = 7; // Sử dụng var để khai báo biến dayOfWeek và gán số 3 (Thứ Tư)
// var dayName; // Sử dụng var để khai báo biến dayName, biến này sẽ lưu tên ngày
// switch (dayOfWeek) { // Bắt đầu câu lệnh switch, biểu thức switch là biến dayOfWeek
//     case 1: // Case 1: Nếu dayOfWeek === 1 (Thứ Hai)
//         dayName = "Thứ Hai"; // Gán tên ngày là "Thứ Hai"
//         break; // Kết thúc case 1, thoát khỏi switch
//     case 2: // Case 2: Nếu dayOfWeek === 2 (Thứ Ba)
//         dayName = "Thứ Ba";
//         break; // Kết thúc case 2, thoát khỏi switch
//     case 3: // Case 3: Nếu dayOfWeek === 3 (Thứ Tư)
//         dayName = "Thứ Tư";
//         break; // Kết thúc case 3, thoát khỏi switch
//     case 4: // Case 4: Nếu dayOfWeek === 4 (Thứ Năm)
//         dayName = "Thứ Năm";
//         break; // Kết thúc case 4, thoát khỏi switch
//     case 5: // Case 5: Nếu dayOfWeek === 5 (Thứ Sáu)
//         dayName = "Thứ Sáu";
//         break; // Kết thúc case 5, thoát khỏi switch
//     case 6: // Case 6: Nếu dayOfWeek === 6 (Thứ Bảy)
//         dayName = "Thứ Bảy";
//         break; // Kết thúc case 6, thoát khỏi switch
//     case 7: // Case 7: Nếu dayOfWeek === 7 (Chủ Nhật)
//         dayName = "Chủ Nhật";
//         break; // Kết thúc case 7, thoát khỏi switch
//     default: // Trường hợp default: Nếu dayOfWeek không khớp với bất kỳ case nào từ 1 đến 7
//         dayName = "Không hợp lệ"; // Gán tên ngày là "Không hợp lệ"
//         break; // Kết thúc default case, thoát khỏi switch
// }
// console.log("Hôm nay là " + dayName); // In ra "Hôm nay là " + tên ngày tương ứng


// var choice = prompt("Nhập số món ăn bạn muốn chọn (1-4):");
// choice = Number(choice)

// switch (choice) {
//   case 1:
//     // alert("Bạn đã chọn Phở");
//     alert("tôi sẽ in ra cái gì đấy")
//     break;
//   case 2:
//     alert("Bạn đã chọn Cơm tấm");
//     break;
//   case 3:
//     alert("Bạn đã chọn Bún bò");
//     break;
//   case 4:
//     alert("Bạn đã chọn Hủ tiếu");
//     break;
// //   default:
// //     alert("Món không có trong menu");
// }

// Yêu cầu người dùng nhập vào số thứ nhất
var number1 = parseFloat(prompt("Nhập số thứ nhất:"));


// Yêu cầu người dùng nhập vào phép toán (+, -, *, /)
var operator = prompt("Nhập phép toán (+, -, *, /):");

// Yêu cầu người dùng nhập vào số thứ hai
var number2 = parseFloat(prompt("Nhập số thứ hai:"));

// Sử dụng câu lệnh switch để thực hiện phép toán
var result;
switch (operator) {
  case "+":
    // result = number1 + number2;
    alert(number1 + number2);
    break;
  case "-":
    result = number1 - number2;
    alert("Kết quả phép trừ: " + result);
    break;
  case "*":
    result = number1 * number2;
    alert("Kết quả phép nhân: " + result);
    break;
  case "/":
    if (number2 === 0) {
      alert("Lỗi: Không thể chia cho 0");
    } else {
      result = number1 / number2;
      alert("Kết quả phép chia: " + result);
    }
    break;
  default:
    alert("Phép toán không hợp lệ.");
}


console.log("ahihi");