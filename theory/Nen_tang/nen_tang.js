// var message = "Hello, Js";
//console.log(message);

// var message2;
//console.log(message2);

/*
var age= 25;
var name= 'win';
var isStudent= true; 
*/

// console.log(name);

// var tuoi= 20;
// var ten= "Vân ddd";
// var

// message= "Hello";
// // console.log(message);
// message = 20; // Thay đổi giá trị
// console.log(message); // 20

// var user= "tèo";
// var _count = 10;
// var $price = 99.99;


// var 1name = "John"; // Sai vì bắt đầu bằng số
// var var = "Hello"; // Sai vì trùng từ khóa JS
//  var first_name = "Alice";
//tôi sẽ khai báo tên của mình
// var tenCuaBan= "Minh";
// console.log(tenCuaBan);
// var yourAge= 12;

// var data = "Hello"; // data là string
// // console.log(typeof data);

// var num= 22;
// // console.log(typeof num);
// data= 33;
// console.log(typeof data);


// var data = "Hello"; // data là string
// console.log(typeof data); // "string"
// console.log(typeof 42); // "number"
// console.log(typeof "Hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof false); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (❗ Lỗi lịch sử của JavaScript)
// console.log(typeof {name: "Alice"}); // "object"
// console.log(typeof [1, 2, 3]); // "object" (Array là một object)

// var data = "Hello"; // data là string
// console.log(typeof data); // "string"
// data = 100; // data đổi thành number
// console.log(typeof data); // "number"
// data = true; // data đổi thành boolean
// console.log(typeof data); // "boolean"


//var numbers = [1, 2, 3, 4, 5]; // Mảng số
// var fruits = ["Táo", "Cam", "Xoài"]; // Mảng chuỗi
// // var mixed = [10, "Hello", true, null]; // Mảng chứa nhiều kiểu dữ liệu

// // var danhSachBanThan= ["teo", "tí", 3, true,false, ["tủn", "ti"] ];

// console.log(fruits[0]);
// console.log(fruits[2]);
// // console.log(fruits[3]);

// // fruits[0]= "Nho";
// // console.log(fruits);

//  fruits[10]= "mận";
//  console.log(fruits[9]);
// console.log(fruits);

// var complexArray = [
//  42, // Phần tử thứ nhất: Number
//  ["Táo", "Cam", "bưởi"], // Phần tử thứ hai: Mảng con
//  true // Phần tử thứ ba: Boolean
// ];


// console.log(complexArray[0]);
// console.log(complexArray[1][1]);
// console.log(complexArray[2]); // true


// complexArray[1][0]= "Dưa hấu";

// console.log(complexArray);

// var fruits = ["Táo", "Cam", "Xoài", "Nho"];
// var soLuongQua= fruits.length;
// console.log(soLuongQua); // 4
// console.log(fruits.length); // 4

// var nestedArray = [[], [2, 3], [4, 5, 6], "Hello"];
// console.log(nestedArray.length); // 4
// console.log(nestedArray[1].length); // 2 (số phần tử trong mảng con tại index 1)
// console.log(nestedArray[2].length); // 3 (số phần tử trong mảng con tại index 1)


// var myArray = [
//  [1, 2, 3],
//  ["A", "B", "C"],
//  [true, false, "Hello"]
// ];

// console.log(myArray[2][1]);

//obj

// var student = {
//  name: "Alice", // Key: name, Value: "Alice" (string)
//  age: 20, // Key: age, Value: 20 (number)
//  isEnrolled: true // Key: isEnrolled, Value: true (boolean)
// };

// console.log(student.name); 
// console.log(student.age); 
// console.log(student.height); 


// student.age= 21;
// console.log(student.age);

// var course = {
//  name: "JavaScript",
//  students: ["Alice", "Bob", "Charlie"], // Key: students, Value: Mảng
//  duration: 3
// };

// console.log(course.students);

// var company = {
//     name: "TechCorp",
//     address: {
//         city: "Hà Nội", // Key: city, Value: "Hà Nội"
//         country: "Vietnam" // Key: country, Value: "Vietnam"
//     },
//     employees: 100
// };

// console.log(company.address.city); // "Hà Nội"

// company.address.city = "Hồ Chí Minh";
// console.log(company.address.city); // "Hồ Chí Minh"

// var a;
// console.log(a); // undefined (biến được khai báo nhưng chưa gán giá trị)
// var arr = [1, 2, 3];
// console.log(arr[5]); // undefined (phần tử index 5 không tồn tại)
// var obj = { name: "Alice" };
// console.log(obj.age); // undefined (thuộc tính 'age' không tồn tại)

// console.log("hello" / 2);

// console.log(Number("123")); // 123 (chuỗi số thành số)
// console.log(Number("123abc")); // NaN (Không thể chuyển đổi)
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN


// var str = "456";
// Number(str);
// console.log(str); // "456" (Vẫn giữ nguyên giá trị gốc)
// var str2 = Number(str); // Gán lại giá trị mới
// console.log(str2); // 456 (Bây giờ str đã thành số)


// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("Hello")); // true
// console.log(Boolean("")); // fals


// var num = 10;
// Boolean(num);
// console.log(num); // 10 (Vẫn giữ nguyên)
// num = Boolean(num); // Gán lại giá trị mới
// console.log(num); // true (Bây giờ num đã thành boolean)


// console.log(String(123)); // "123"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"
// console.log(String([1, 2, 3])); // "1,2,3" (Mảng thành chuỗi)


// var num = 42;
// String(num);
// console.log(num); // 42 (Vẫn giữ nguyên)
// num = String(num); // Gán lại giá trị mới
// console.log(num); // "42" (Bây giờ num đã thành chuỗi)


// 11.
// var car = {
//     band:"Toyota",
//     model: "Camry",
//     year:2023,
// };

// console.log(car);
// console.log(car.band);
// console.log(car.model);
// console.log(car.year);

//12.
// var person ={
//     name:"David",
//     age:25,
// };
// person.email="david@example.com";
// person.age=26;
// console.log(person.age);
// console.log(person.email);


//13.
// var laptop = {
//     specs: {
//         RAM: "16GB",
//         CPU: "Intel Core i7",
//         SSD: "512GB"
//     },
//     band: "Apple"
// };
// console.log(laptop.specs.CPU);


//14.
// var library = {
//     name: "Central Library",
//     books: ["JavaScript Basics", "Python for Beginners", "Data Structures"]
// };
// console.log(library.books[1]);
// library.books[3]="Web Development";
// // console.log(library.books[3]);
// console.log(library);


// console.log(Boolean("false")); // true - vì là chuỗi không rỗng
// console.log(Boolean(1));       // true - số khác 0
// console.log(Boolean([]));      // true - mảng rỗng là truthy
// console.log(Boolean(null));    // false - đây là falsy

// console.log(String([1, 2, 3]))
// 
//  var hello_World = 'Hello World';
// var numbers = [];



// ex7

// var age = 20;
// console.log(typeof age); // Output: number
// console.log(typeof 20); // Output: number
// console.log(typeof "LetDiv"); // Output: string
// var ___a = true;
// console.log(typeof ___a); // Output: boolean
// console.log(typeof null); // Output: object (đây là lỗi của JavaScript)
// console.log(typeof undefined); // Output: undefined
// console.log(typeof NaN); // Output: number


//ex8
// var students = ['Lan', 'Hung', 'Tien', 'Cuong', 'Tuan']
// console.log(students[2]); // Output: 'Tien'
// students[3] = 'Trung';
// console.log(students);


//11
// var characters = ['A', 'B', 'C', 'D'];
// characters[4]= "E";
// console.log(characters);

//16
// var value = '1.5';
// value= Number(value);
// console.log(value);




