// var nums= [ "teo", "ty", "te", 4, 3, 7];

// console.log(nums[1]);

// for(var i=0; i<=5; i++){
//     console.log(i);
// }

// for(var i=0; i<nums.length; i++){ //tăng lên 2 vị trí (0, 2, 4...)
//     console.log(nums[i]);
// }

// var numbers= [3, 5, 8, 2];
// var numbers2= [];
// var sum= 0;

// for(var i=0; i<numbers.length; i++){
//     // console.log(i);
//     // console.log(numbers[i]);
//     sum+= numbers[i];
// }
// console.log(sum);

// Object
// var products = [
//   { name: "Áo", price: 100000, quantity: 2 },
//   { name: "Giày", price: 500000, quantity: 1 },
// ];

// var totalPrice= 0;
// for(var i=0; i< products.length; i++){
//     totalPrice+= (products[i].price* products[i].quantity)

// }
// console.log(totalPrice);

// var Ty= [
//      { mon: "toán", diem: 10 },
//     { mon: "văn", diem: 9.5},
// ]

// var tongDiemTy= 0;
// for(var i=0; i< Ty.length; i++){
//     tongDiemTy+= Ty[i].diem
// }
// // var diemTb= tongDiemTy/2;
// // console.log(diemTb);
// console.log(tongDiemTy);

// kiểm tra có số chẵn trong mảng không
// nếu có thì true, không thì false
// var  arr = [1, 3, 7, 8, 9];
// var hasEven= false;
// for(var i=0; i< arr.length; i++){

//     if(arr[i]%2===0){
//         hasEven=true;
//         console.log(arr[i]);
//         break;

//     }
// }

// console.log(hasEven);
// // console.log(hasEven ? "Có số chẵn" : "Không có số chẵn");
// if (hasEven) { // Bước 5: Kiểm tra cờ
//  console.log("Mảng có số chẵn.");
// } else {
//  console.log("Mảng không có số chẵn.");
// }
// Output: "Mảng có số chẵn."
// tìm sản phẩn có giá lớn 100.000
// var products = [
//     { name: "Áo thun", price: 50000 },
//     { name: "Quần jeans", price: 150000 },
//     { name: "Giày sneaker", price: 80000 }
// ];

// var hasExpensiveItem = false; // Biến cờ: chưa tìm thấy sản phẩm đắt

// for (var i = 0; i < products.length; i++) {
//     if (products[i].price > 100000) { // Kiểm tra giá > 100k
//         hasExpensiveItem = true; // Tìm thấy, đổi cờ thành true
//         break; // Thoát sớm
//     }  
// }

//  if (hasExpensiveItem) {
//         console.log("Có sản phẩm giá trên 100,000 VNĐ.");
//     } else {
//         console.log("Không có sản phẩm nào giá trên 100,000 VNĐ.");
//     }



// Output: "Có sản phẩm giá trên 100,000 VNĐ."


// var numbers = [10, 9, 6, 4, 2, 0];

// var isDecreasing = true; // Khởi tạo true: giả định mảng giảm dần

// for (var i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i] <= numbers[i + 1]) { // Không giảm dần
//         isDecreasing = false; // Đổi cờ thành false
//         break; // Thoát sớm
//     }
// }

// if (isDecreasing) {
//     console.log("Mảng giảm dần.");
// } else {
//     console.log("Mảng không giảm dần.");
// }
// Output: "Mảng giảm dần."


// var numbers = [1, 3, 5, 8];
// var isEvenFound = false;
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         // isEvenFound = true
//     }
// }
// if (isEvenFound) {
//     console.log("Mảng có số chẵn.");
// } else {
//     console.log("Mảng không có số chẵn.");
// }
// Output: "Mảng không có số chẵn." (sai, vì số 8 là chẵn)


// var numbers = [1, 3, 5, 8];
// var isEvenFound = false;
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         isEvenFound = true;
//     }

// }

// if (isEvenFound) {
//     console.log("Mảng có số chẵn.");
// } else {
//     console.log("Mảng không có số chẵn.");
// }


// var numbers = [1, 3, 5, 7,8];
// var isEvenFound = false; // Sai: Khởi tạo true khi chưa kiểm tra
// for (var i = 0; i < numbers.length; i++) {
//  if (numbers[i] % 2 === 0) {
//  isEvenFound = true;
//  }
// }
// if (isEvenFound) {
//  console.log("Mảng có số chẵn."); // Sai vì không có số chẵn
// }else{
//      console.log("Mảng ko có số chẵn."); 
// }

var numbers = [1, 8, 10, 3];
var isEvenFound = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        isEvenFound = true; // Tìm thấy nhưng vẫn lặp
        break;
    }
}
// Không tối ưu

if (isEvenFound) {
 console.log("Mảng có số chẵn."); // Sai vì không có số chẵn
}else{
     console.log("Mảng ko có số chẵn."); 
}