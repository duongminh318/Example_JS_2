
let a = "10";
// coppy 1 ô giống giá trị của soA
let b = a;

// console.log("số B: ", a);

b = "10";
// console.log("số B sau khi đã đổi: ", b);
// console.log("số A sau khi B đã đổi: ", a);


//console.log(a == b); // true //ss lỏng lẻo
//console.log(a === b); // false // ss nghiêm ngặt


// let objA = {
//      value: 10 ,
   
//     }; //{}
// let objB = {
//      value: 10 ,
//     };

//  console.log(objA.value===objB.value);


// objB.value = "ahihi";

// objB={ name:" nhà mới của B"};

// console.log(objB);



// console.log(objA.value);
// console.log(objB.value);


// console.log(objA=== objB); 



// const mangBanThan= ["tuân", "tèo", "tủn"]; 

// mangBanThan[0]= "tí"; 

// mangBanThan= [4, 5, 6];

// console.log(mangBanThan);

// console.log(typeof mangBanThan);

// const objThayDoi= { value: 20};

// objThayDoi.value= 50; // thay đổi nội thất



// console.log(objThayDoi.value);

// objThayDoi= {};   // chuyển sang khác


// const chungCu= {
//     ten: "Royal city",
//     canHo:{
//         soPhong: "R1-101",
//         chuHo: " Nguyễn Văn Tèo"
//     }
// };

// const chiaKhoaCanHo= chungCu.canHo;
// chiaKhoaCanHo.chuHo= "Trần Thị Te";
// console.log(chiaKhoaCanHo);
// console.log(chiaKhoaCanHo.ten);


//thông tin của cả chung cư 
// console.log(chungCu);



// //function thay đổi số
// function thayDoiSo(num){
//  // num= soGoc  // num= 5
//     num= num+10;  //
//     console.log("bên trong hàm thay dổi số: ",num);
// }

// let soGoc= 5;
// // console.log("trước khi gọi hàm, soGoc= ",soGoc );

// thayDoiSo(soGoc);

// console.log(soGoc);


// function thayDoiDoiTuong(obj){
//     // obj =doiTuongGoc
//     obj.value= obj.value *2;
//     console.log("bên trong hàm thayDoiDoiTuong", obj.value );
// }


// let doiTuongGoc= {value :50};
// console.log("\nTrước khi gọi hàm, doiTuongGoc.value =", doiTuongGoc.value);

// thayDoiDoiTuong(doiTuongGoc)
// console.log(doiTuongGoc.value);


// function sonLaiNha(ngoiNha){
//     // ngoiNha= nhaCuaToi
//     ngoiNha.phongKhach= "màu hồng";
// }

// let nhaCuaToi={ phongKhach: "Màu trắng"};
// sonLaiNha(nhaCuaToi);

// console.log (nhaCuaToi.phongKhach);

const matrix =[
    [1,2],
    [3,4]
]

const row1= matrix[0]; //1, 2

row1[0]= 100;

console.log(matrix[0][0]);

console.log(row1[0]);

console.log(matrix[0]===row1); //



