
// let mangA= ["teo", 1, 2 ];

// const colors = ["red", "green", "blue"];
// // for (let i = 0; i < colors.length; i++) {
// //   console.log("Màu thứ", i + 1, "là", colors[i]);
// // }

// for(const color of colors){
//     console.log(`Màu: ${color}`); //"màu", color
// }

// push, pop, thao tác với đuôi

//array.push (element1, ...., elementN)

// let animals = ["dog", "cat"];
// console.log("mảng animals trước khi push",animals);
// // animals.push("bird", "fish");
// // console.log("mảng animals sau khi push",animals);

// let removedAnimal= animals.pop();
// console.log("mảng animals sau khi pop",animals);
// console.log("phần tử đã bị gỡ ra",removedAnimal );

// đầu mảng 

//unshift
// array.unshift(element1,..., elementN)
// let letters = ["b","c"];
// console.log("trước khi unshift", letters);

// letters.unshift(0, 1, "a", "x" , "x");

// // console.log("sau khi unshift", letters);

// // shift = gỡ đầu ra
// let firstLetter= letters.shift();
// console.log("sau khi shift", letters);
// console.log("phần tử đã bị gỡ ra ở đầu ",firstLetter);


// splice() - con dao mổ đa năng
// array.splice(start, deleteCount, item1, item2, ...)

// const fruits = ["apple", "banana", "orange", "mango"];

// console.log("Mảng gốc", fruits);
// th1: chỉ xoá

// const removedFruits= fruits.splice(0, 2);  // xoá 2 cái đầu
// console.log("sau khi xoá 2 cái đầu ", fruits );
// console.log("Phẩn tử đã bị xoá",removedFruits);

// th2 : chỉ thêm
// fruits.splice(2, 0, "coconut","kiwi");
// console.log("sau khi thêm 2 cái quả tử vị trí i=1 ", fruits);

// th3: vừa xoá vừa thêm (thay thế)
//bắt đầu từ index=0, xoá 1 phần tử, sau đó chèn "dâu", "đào"

// const replaceFruits= fruits.splice(0, 1, "dâu", "đào");
// console.log(`bắt đầu từ index=0, xoá 1 phần tử, sau đó chèn "dâu", "đào" ra kết quả là:   ${fruits}`);
// console.log("cái đã bị thay thế" , replaceFruits);

// let numbers= [1,3,3,4,5,3]
// let firstEvenNumber = false; // Khởi tạo là undefined để biết nếu không tìm thấy
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         firstEvenNumber = number;
//         break; // Dừng vòng lặp sau khi tìm thấy số chẵn đầu tiên
//     }
// }
// if (firstEvenNumber) { // if(4) => true
//     console.log("Số chẵn đầu tiên trong mảng:", firstEvenNumber);
// } else {
//     console.log("Không tìm thấy số chẵn trong mảng.");
// }


// array.foreach(function(element, index, array)){
//         các dòng lệnh lên element ở đây
// }




// const colors = ["red", "green", "blue"];
// console.log("dòng forEach để in ra");

// colors.forEach(function(con, i, array){
//     console.log(`màu thứ ${i} : ${con}`);
//     // console.log(array);
// });

// array.filter (function(element, index, array))
// tạo 1 mảng mới chứa các phần tử thoả mãn điểu kiện,

// const numbers =[1, 2, 3, 3, 5, 3];
// console.log("Mảng gốc", numbers);
// const evenNumbers = numbers.filter( num=> num%2===0  )
// console.log("Những số chia hết cho 2", evenNumbers);

// console.log("Mảng gốc", numbers);


const numbers =[3, 1, 3, 3, 5, 3];

// tìm số đầu tiên nhỏ hơn 2
const foundNumber= numbers.find(num=> num>10);  // undefined nếu không tìm thấy
console.log(" số đầu tiên lớn hơn 10 là",foundNumber );


//sử dụng findindex để vị trí phần tử thoả mãn kiện
// nếu ko tìm thấy nó sẽ ra -1
const foundIndex=  numbers.findIndex(num=> num>10);
console.log(" vị trì index đầu tiên lớn hơn là",foundIndex );

// array.map(function(element, index, array) { return gia_tri_moi; }))

// const numbers =[1, 2, 3, 4];

// const squareNumbers= numbers.map(num=> num*num);

// console.log("mảng bình phương mới",squareNumbers);
// console.log("mảng gốc",numbers);

//slice() máy photocopy
 
// array.slice (start, end)

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// const middleAnimals= animals.slice(4);
// console.log(middleAnimals);





