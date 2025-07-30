// console.log("1. bắt đầu tác vụ đồng bộ >>>");

// // định nghĩa một hàm có tên là hamDongBo

// function hamDongBo(){

//     let sum=0;

//     for(let i=0; i< 10; i++){
//         sum+=i;
//     }

//     console.log("2. tác vụ đồng bộ hoàn thành, tổng là: ", sum);
// }

// hamDongBo();

// // dòng này chỉ dc chay khi hàm đồng bộ đã hoành thành hoàn toàn

// console.log("3. kết thúc trương chình đồng bộ >>>");

// bất đồng bộ

// console.log("1. bắt đầu tác vụ bất đồng bộ >>>");

// setTimeout(function(){
//     // hàm callback này sẽ dc thực thi sau 2000ms
//     console.log("2. tác vụ bất đồng bộ hoàn thành sau 2 giây");
// }, 0.2)


// // dòng này dc thực thi ngay lập túc mà không cần chờ setTimeOut
// console.log("3. tiếp tục công việc khác");

//  callback (gọi lại khi cần)
// callback là một hàm (function),
//  được truyền vào một hàm khác dưới dạng đối số
// sau đó được gọi lại (call back) bên trong hàm đó

// function mainFunction(myCallback){
// // myCallback= callbackFunction(message)
//     console.log("Đang thực hiện công việc chính ...> ");
//     // giả lập một cộng việc và tạo ra một kết quả
//     const message= "công việc đã hoàn thành";
//     myCallback(message)


// }

// function callbackFunction(message){
//     console.log("callback dc gọi với thông điệp", message);
// }

// // callbackFunction("abc")

// mainFunction(callbackFunction);


// A --> B --> C

// function tacVuA(callback){
//     // giả lập tác vụ mất 500ms để hoàn thành
//   setTimeout(function(){
//         console.log("tác vụ A hoàn thành");

//         // gọi hàm callback được truyền vào để báo hiệu đã xong và bắt đầu tác vụ tiếp theo
//         callback();
//   }, 500);
// }

// // tương tự, định nghĩa tác vụ B


// function tacVuB(callback){
//     // giả lập tác vụ mất 500ms để hoàn thành
//   setTimeout(function(){
//         console.log("tác vụ B hoàn thành");

//         // gọi hàm callback được truyền vào để báo hiệu đã xong và bắt đầu tác vụ tiếp theo
//         callback();
//   }, 500);
// }

// // tương tự, định nghĩa tác vụ B


// function tacVuC(callback){
//     // giả lập tác vụ mất 500ms để hoàn thành
//   setTimeout(function(){
//         console.log("tác vụ C hoàn thành");

//         // gọi hàm callback được truyền vào để báo hiệu đã xong và bắt đầu tác vụ tiếp theo
//         callback();
//   }, 500);
// }


// tacVuA(function (){
//     // bên trong call back của A,  chúng ta gọi tác vụ B
//     tacVuB (function(){
//         // bên trong call back của B,  chúng ta gọi tác vụ C
//        tacVuC(function(){
//         // sau khi C hoàn thành, in ra thông báo cuối cùng
//         console.log("cả ba tác vụ A, B, C đã hoàn thành");
//        })
//     })
// })

// console.log("Chương trình chính vẫn chạy >>>");

// promise
// khởi tạo một đối tượng promise
// const myPromise= new Promise(function(resolve, reject){
//     // resole(value) khi tác vụ thành công
//     // reject (reason)  ///          thất bại
//     // code xử lý bất đồng bộ sẽ dc đặt ở đây
// });

// .then(), .catch() và .finally(),


// tạo promise mơi mô phỏng việc đu mua đồ ăn

const loiHuaMuaDoAn= new Promise(function(thanhCong, thatBai){
    // code trong này
    console.log("lời hứa mua đồ ăn đang được tạo ra ..."); //1
    // giả lập một tác vụ bất đồng bộ
    setTimeout(function(){
        // giả lập kết quả : hôm nay có mua được đồ ăn hay không
        const coDoAnKhong= false;

        // nếu mua dc đồ ăn thành công (resolve) và trả về kết quả
        if(coDoAnKhong){
            thanhCong("gà!");
        } else{
            // nếu không, gọi hàm ThatBai (reject) và trả về lý do.
            thatBai("hôm nay hết đồ ăn rồi")
        }

    },1000 )
})

// gắn các trình xử lý promise
loiHuaMuaDoAn
        .then(function(doAn){
            console.log(".then được gọi - Mua đồ anh thành công ");
            console.log("kết quả ", doAn);
        })
        // .catch() sẻ được thực thi nếu promise bị reject (thatBai)
        .catch(function(lyDo){
            console.log(".catch được gọi - Mua đồ anh thất bại ");
            console.error("kết quả ", lyDo);
        })
        .finally(function(){
          console.log("finaly()  dc gọi - kết thúc mua đồ ăn");
        });
        