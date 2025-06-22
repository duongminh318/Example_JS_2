// var x = 5;
// var y = 10;

// var z = x + y; // z = 15
// console.log(z);

// var firstName= "Alex";
// var lastName= "Win";
// var bieuTuong= " :)) "
// var fullName= firstName +" "+ lastName + " hehee" + bieuTuong ;
// console.log(fullName);

// var num = 5;
// var str = "5";
// console.log(num + num); // 10 (cộng số)
// console.log(str + str); // "55" (nối chuỗi)
// console.log(num + str); // "55" (nối chuỗi

// var bool= true;
// console.log(num+bool);


// var a = 10;
// var b = 3;
// var c = a - b; // c = 7
// console.log(c);

// var p = 4;
// var q = 6;
// var r = p * q; // r = 24
// console.log(r);

// var m = 20;
// var n = 5;
// var o = m / n; // o = 4

// console.log(o);

// var count1 = 0;

// var scorePrefix = 10 + count1++; // Tiền tố

// console.log("Tiền tố trong biểu thức:");
// console.log("count1:", count1); // count1 đã TĂNG lên 1
// console.log("scorePrefix:", scorePrefix); // scorePrefix = 10

// console.log(5%3);
// console.log(6%3);
// console.log(11%3);
// console.log(3/0);
// console.log(-1/0);
// console.log(0/0);
// console.log(8%2);
// console.log(16%2); // nếu =0 --> số chẵn
// console.log(7%2); // nếu # 0 --> số lẻ

// var currentStock = 50;
// var newOrders = 20;
// // currentStock= currentStock+ newOrders;
// currentStock+= newOrders;
// console.log(currentStock);

// var availableBalance = 500;
// var withdrawalAmount = 150;
// availableBalance -= withdrawalAmount; // Tương đương: availableBalance = availableBalance - withdrawalAmoun
// console.log(availableBalance); // Kết quả: 350 (Số dư tài khoản sau khi rút tiền)

// var quantity = 10;
// var pricePerUnit = 25;
// quantity *= 2; // Tương đương: quantity = quantity * 2;
// var totalPrice = quantity * pricePerUnit; // Tính tổng giá sau khi tăng số lượng
// console.log(totalPrice); // Kết quả: 500 (Tổng giá trị đơn hàng sau khi tăng số lượng gấp đôi)

// var totalStudents = 120;
// var numberOfGroups = 3;
// totalStudents /= numberOfGroups; // Tương đương: totalStudents = totalStudents / numberOfGroups;
// console.log(totalStudents); // Kết quả: 40 (Số học sinh trung bình mỗi nhóm)

// console.log(5 === 5); // true (cùng kiểu số, cùng giá trị)
// console.log("hello" === "hello"); // true (cùng kiểu chuỗi, cùng giá trị)
// console.log(true === true); // true (cùng kiểu boolean, cùng giá trị)

// console.log(5 === "5"); // false (khác kiểu: số vs chuỗi)
// console.log(true === 1); // false (khác kiểu: boolean vs số)


// // true (so sánh lỏng - có ép kiểu chuỗi "5" sang số 5)
// console.log(5 == "5");
// // true (so sánh lỏng - có ép kiểu boolean true sang số 1)
// console.log(true == 1);
// // true (so sánh lỏng - có ép kiểu boolean false sang số 0)
// console.log(0 == false);

// false (cùng giá trị và kiểu)
// console.log(5 !== 5);
// // true (khác kiểu dữ liệu)
// console.log(5 !== "5");

// false (so sánh lỏng - có ép kiểu, giá trị sau ép kiểu bằng nhau)
// console.log(5 != "5");
// // true (so sánh lỏng - có ép kiểu, giá trị sau ép kiểu khác nhau)
// console.log(0 != true);

// console.log(true && true && true && true && true); // true (cả hai vế đều đúng)

// var age = 17; // Tuổi
// var hasLicense = true; // Có bằng lái xe
// var result = age >= 18 && hasLicense;
// console.log(result);


// console.log(false || false || false || true); // false (cả hai vế đều sai)

// var temperature = 15; // Nhiệt độ
// var result = temperature < 0 || temperature > 40 // Kiểm tra nhiệt độ quá thấp HOẶC quá cao
// console.log(result);

// console.log(!true); // false (phủ định của true là false)
// console.log(!false); // true (phủ định của false là true)
// var isLoggedIn = false; // Biến trạng thái đăng nhập
// console.log(!isLoggedIn);

// var calculationResult1 = 2 + 3 * 4; // Nhân có độ ưu tiên cao hơn cộng
// console.log(calculationResult1); // Kết quả: 14 (3 * 4 = 12, sau đó 2 + 12 = 14)
// var calculationResult2 = (2 + 3) * 4; // Ngoặc đơn thay đổi thứ tự ưu tiên
// console.log(calculationResult2); // Kết quả: 20 (2 + 3 = 5, sau đó 5 * 4 = 20)


// var userAge = 19; // Tuổi người dùng
// var canDrive = (userAge >= 18) ? "Được phép lái xe" : "Chưa được phép lái xe";
// console.log(canDrive);

// var diem= 6;
// var ketQua=  (diem >= 7)? "Đậu" : "rớt";
// console.log(ketQua);


//12
// var drinkType= "trà sữa";
// console.log(drinkType ==="Cà phê");

// drinkType= "Cà phê";
// console.log(drinkType ==="Cà phê");

//14
//  var expression = 5 * (2 + 3)
//  console.log(expression);


//  var number = [3, 7, 1, 9, 4];

//         // Sửa 1: Dùng cấu trúc if...else để xử lý dứt điểm trường hợp mảng rỗng
//         if (number.length === 0) {
//             console.log("Mảng rỗng");
//         } else {
//             var allPositive = true;
//             for (var i = 0; i < number.length; i++) {
//                 if (number[i] <= 0) {
//                     allPositive = false;
//                     break;
//                 }
//             }

//             // Sửa 2: Kiểm tra trực tiếp giá trị của biến boolean
//             if (allPositive) {
//                 console.log("Tất cả là số dương");
//             } else {
//                 console.log("Có số không dương");
//             }
//         }

// var numbers = [5, 10, 2, 8, 25, 15];
// var maxValue = numbers[0]; // Coi 5 là lớn nhất tạm thời

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxValue) {
//         maxValue = numbers[i]; // Gặp số lớn hơn thì cập nhật
//     }
// }

// console.log("Số lớn nhất là:", maxValue); // 25

// var numbers = [5, 10, 2, 8, 25, 15];
// var minValue = numbers[0]; // 1. Khởi tạo minValue bằng phần tử ĐẦU TIÊN (5)
// for (var i = 1; i < numbers.length; i++) { // 2. Duyệt từ phần tử thứ HAI (index 1)
//     if (numbers[i] < minValue) { // 3. So sánh phần tử hiện tại với minValue
//         minValue = numbers[i]; // 4. Nếu nhỏ hơn, cập nhật minValue
//     }
// }
// console.log("Số nhỏ nhất trong mảng là:", minValue); // 5. In kết quả (2)


// var products = [
//   { name: "Áo thun", price: 50000 },
//   { name: "Quần jeans", price: 150000 },
//   { name: "Giày sneaker", price: 80000 }
// ];

// var maxProduct= products[0];
// for(var i=1; i< products.length; i++){
//     if(products[i].price> maxProduct.price){
//         maxProduct=products[i];
//     }
// }
// console.log(maxProduct);
// console.log("giá cao nhất là", maxProduct.price);
// console.log("sản phẩm có giá cao nhất là", maxProduct.name);


// var products = [
//   { name: "Áo thun", price: 50000 },
//   { name: "Quần jeans", price: 150000 },
//   { name: "Giày sneaker", price: 80000 }
// ];

// var minProduct= products[0];
// for(var i=1; i< products.length; i++){
//     if(products[i].price < minProduct.price){
//         minProduct=products[i];
//     }
// }
// console.log(minProduct);
// console.log("giá thấp nhất là", minProduct.price);
// console.log("sản phẩm có giá thấp nhất là", minProduct.name);

//ex 8

// var numbers = [1,2,3];


// if (numbers.length === 0) {
//     console.log("Mảng rỗng");
// } else {
//     var maxValue = numbers[0];
//     for (var i = 1; i < numbers.length; i++) {
//         if (numbers[i] > maxValue) {
//             maxValue = numbers[i];
//         }
//     }
//     console.log(maxValue)
// }

// var prices = [100, 120, 90, 150, 160, 140];
// var decreaseCount = 0; // Biến đếm số lần giá giảm

// for (var i = 0; i < prices.length - 1; i++) { // Dừng trước phần tử cuối
//     var currentPrice = prices[i]; // Giá hiện tại
//     var nextPrice = prices[i + 1]; // Giá sau
//     if (currentPrice > nextPrice) { // So sánh: hiện tại > sau
//         decreaseCount++; // Tăng đếm nếu giá giảm
//         console.log(`Giá giảm từ ${currentPrice} xuống ${nextPrice} tại vị trí index ${i}`);

//     }
// }
//    console.log("Tổng số lần giá giảm:", decreaseCount); // In kết quả (2)


// var prices = [100, 120, 90, 150, 160, 140];
// var decreaseCount = 0; // Biến đếm số lần giá giảm

// for (var i = 0; i < prices.length - 1; i++) { // Dừng trước phần tử cuối
//     var currentPrice = prices[i]; // Giá hiện tại
//     var nextPrice = prices[i + 1]; // Giá sau
//     if (currentPrice < nextPrice) { // So sánh: hiện tại > sau
//         decreaseCount++; // Tăng đếm nếu giá giảm
//         console.log(`Giá tăng từ ${currentPrice} lên ${nextPrice} tại vị trí index ${i}`);

//     }
// }
//    console.log("Tổng số lần giá tăng:", decreaseCount); // In kết quả (2)


// var products = [
//  { name: "SP1", price: 100 },
//  { name: "SP2", price: 120 }, // Giá tăng
//  { name: "SP3", price: 90 },
//  { name: "SP4", price: 150 }, // Giá tăng
//  { name: "SP5", price: 140 }
// ];

// var increaseCount= 0;

// for(var i=0; i<products.length-1; i++ ){
//     var currentProduct= products[i];
//     var nextProduct= products[i+1];

//     if(currentProduct.price < nextProduct.price){
//         increaseCount++;
//         console.log(`giá tăng từ ${currentProduct.price} lên ${nextProduct.price} `);
//         console.log(`${nextProduct.name}`);
//     }

// }
// console.log(`tổng số lần tăng ${increaseCount}`);

var matrix = [
    [1, 2, 3],   // hàng 0
    [4, 5, 6],   // hàng 1
    [7, 8, 9]    // hàng 2
];

// console.log(matrix[0]);
// console.log(matrix[0][1]);
// console.log(matrix[1][0]);
// console.log(matrix[1][2]); // matrix[1][2] nghĩa là hàng số 1, cột số 2 ->6

// for (var i = 0; i < matrix.length; i++) {
//      console.log(matrix[i]);
//      // Vòng lặp trong: Duyệt qua các cột trong hàng hiện tại
//   for (var j = 0; j < matrix[i].length; j++) {
//     console.log(`Phần tử tại [${i}][${j}] là ${matrix[i][j]}`);
//   }

// }

var products = [
    { name: "Bút", price: 5000, quantity: 3 },
    { name: "Sách", price: 20000, quantity: 2 },
    { name: "Tẩy", price: 3000, quantity: 2 }
];


if (products.length === 0) {
    console.log("mảng rỗng");
}

else {

    var minValueProduct = products[0];
    var minValue = minValueProduct.price * minValueProduct.quantity;
    console.log(minValue);

    // for( var i=1; )
}
