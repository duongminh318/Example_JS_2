// var globalVar= " Tôi là biến global";

// function accessGlobal(){
//     var a=3;
//     console.log(globalVar);
// }

// accessGlobal();
// console.log(a);
// console.log(globalVar);

// var globalVar =" Tôi là biến global";-

// function myFunction(){
//     var localVariable= " Tôi là biến local";
//     console.log(localVariable);
// }



// myFunction();
//  console.log(localVariable);

// function functionA(){
//     var long= "tôi là biến trong funA"
//     console.log(long);
// }

// function functionB(){
//     var long= "tôi là biến trong funB"
//     // console.log(long1);
//     console.log(long);
// }

// // console.log(long);

// long= " ddd";

// functionA();
// functionB();
//  var globalVar= "Global bên ngoài";

// function outerFunction(){
//      var outerVar = "Outer bên trong";

//      function innerFuntion(){
//                var innerVar = "Inner bên trong";
//                console.log(innerVar);
//                console.log(outerVar);
//                console.log(globalVar);
//      }
//      // console.log(innerVar);  // Lỗi! innerVar không tồn tại ở đây (ngoài innerFunction)
//      innerFuntion();
// }

// outerFunction();


// let number= 12;
// console.log(number);
// number= 13;
// console.log(number);


// const pi= 3.14;
// console.log(pi);
// pi= 3;

// {   },if, for, while

// if(true){
//     var bienDuocTaoBoiVar= " tôi là var";
//     let bienDuocTaoBoilet = " tôi là let";
//     const bienDuocTaoBoiConst = " tôi là Const";

//     console.log(bienDuocTaoBoiVar);
//     console.log(bienDuocTaoBoilet);
//     console.log(bienDuocTaoBoiConst);

// }

// console.log("gọi bên ngoài");

// console.log(bienDuocTaoBoiVar);
// console.log(bienDuocTaoBoilet);
// console.log(bienDuocTaoBoiConst);


// for( var j=0;j <3; j++ ){
//     console.log(j);
// }


// console.log(j);



// for( let i=0;i <3; i++ ){
//     console.log(i);
// }


// console.log(i);


// if (true) {
//   var functionScopedVar = "Tôi là var, tôi thoát ra ngoài được!";
//   let blockScopedLet = "Tôi là let, tôi bị kẹt lại.";
// }
// console.log(functionScopedVar);
// console.log(blockScopedLet); // Dòng này sẽ gây lỗi

// var globalVar=  " tôi là biên global var";
//  let globalLet= " tôi là biên global let";
// const globalCon= " tôi là biên global Const";
// console.log(window);
// console.log(window.globalLet);
// console.log(window.globalCon);
// console.log(window.globalVar);

// console.log(hoistedVar);
// var hoistedVar = "Hi!";


// Hoisting của let và const (Temporal Dead Zone)
// console.log(hoistedLet); // Lỗi! ReferenceError: Cannot access 'hoistedLet' before initialization
// console.log(bienLet);
// let bienLet= "tôi là let";

// console.log(bienConst);
// const bienConst= "tôi là Const";

// sayHello();

// function sayHello(){
//     console.log("Xin chào tôi là function declaration");
// }


// Function Expressions 


// const sayGoodbye= function(){
//     console.log("tạm biệt tình trang hoisting đẩy lên đầu");
//     console.log("có gì thì gọi hàm ở phía dưới tui");
// }
// sayGoodbye();

'use strict';

// console.log(a);
// var a=10;
// let x=5;

// const y=10;
// y=5;

let public1 =10;


