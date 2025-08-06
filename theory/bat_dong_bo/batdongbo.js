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

// const loiHuaMuaDoAn= new Promise(function(thanhCong, thatBai){
//     // code trong này
//     console.log("lời hứa mua đồ ăn đang được tạo ra ..."); //1
//     // giả lập một tác vụ bất đồng bộ
//     setTimeout(function(){
//         // giả lập kết quả : hôm nay có mua được đồ ăn hay không
//         const coDoAnKhong= false;

//         // nếu mua dc đồ ăn thành công (resolve) và trả về kết quả
//         if(coDoAnKhong){
//             thanhCong("gà!");
//         } else{
//             // nếu không, gọi hàm ThatBai (reject) và trả về lý do.
//             thatBai("hôm nay hết đồ ăn rồi")
//         }

//     },1000 )
// })

// // gắn các trình xử lý promise
// loiHuaMuaDoAn
//         .then(function(doAn){
//             console.log(".then được gọi - Mua đồ anh thành công ");
//             console.log("kết quả ", doAn);
//         })
//         // .catch() sẻ được thực thi nếu promise bị reject (thatBai)
//         .catch(function(lyDo){
//             console.log(".catch được gọi - Mua đồ anh thất bại ");
//             console.error("kết quả ", lyDo);
//         })
//         .finally(function(){
//           console.log("finaly()  dc gọi - kết thúc mua đồ ăn");
//         });

// console.log("Chương trình chính vẫn chạy...");


// Promise Chain
// A --> B ---> C

// function tacVuPromiseA(){

//     return new Promise( resolve =>{
//         setTimeout(()=>{
//                 console.log("Tác vụ Promise A hoàn thành");
//                 resolve("kết quả từ Task A");
//         }, 500);
//     });

// }


// function tacVuPromiseB(dataFromA){

//     return new Promise( (resolve, reject) =>{
//         setTimeout(()=>{
//                 // console.log("Tác vụ Promise B hoàn thành dựa trên ", dataFromA);
//                 // resolve("kết quả từ Task B");
//                 reject ("lỗi sải ra ở tác vụ B")
//         }, 500);
//     });
// }


// function tacVuPromiseC(dataFromB){

//     return new Promise( resolve =>{
//         setTimeout(()=>{
//                 console.log("Tác vụ Promise C hoàn thành dựa trên ", dataFromB);
//                 resolve("kết quả từ Task C");
//         }, 500);
//     });

// }

// console.log("bắt đầu chuỗi Promise");
// tacVuPromiseA()
//     // .then() đầu tiên xử lý kết quả từ tacVuPromiseA.
//     // kết quả trả vể từ tacVuPromiseA --> tacVuPromiseB()
//     .then(dataA=> tacVuPromiseB(dataA))
//     .then(dataB=> tacVuPromiseC(dataB))
//     .then(ketQuaCuoiCung =>{
//         console.log("chuỗi promise đã hoàn thành, kết quả cuối cùng là", ketQuaCuoiCung);
//     })

//     .catch(error=>{
//         console.error("lỗi trong chuỗi promise: ", error);
//     })


// ex13
// const myPromise = new Promise((resolve, reject) => {
//     console.log("Bắt đầu Promise...");
//     setTimeout(() => {
//         resolve("Thành công!");
//         console.log("Trong setTimeout sau resolve");
//     }, 0);
//     console.log("Kết thúc executor");
// });
// myPromise.then(value => {
//     console.log("Then nhận được:", value);
// });

// console.log("Mã chính chạy");


// const soNgauNhien = Math.random();
// console.log(soNgauNhien);


// promise all

// chờ cho tất cả các promise trong mảng hoàn thành --> trả về kết quả

// const promise1= new Promise((resolve) =>{
//     setTimeout(()=>{
//         console.log("Promise 1 đã resolve sau 2 giây");
//         resolve("gà");
//     },2000)
// })

// const promise2= new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         console.log("Promise 1 đã resolve sau 1 giây");
//         //   resolve("coca");
//         reject("Lỗi 2");
//     },1000)
// })

// const promise3= new Promise((resolve) =>{
//     setTimeout(()=>{
//         console.log("Promise 1 đã resolve sau 1.5 giây");
//         resolve(3);
//     },1500)
// })


// Promise.all([promise1,promise2 ,promise3])
//     .then((results)=> {
//         console.log("tất cả các Promise thành công ", results);
//     })
//     // catch
//     .catch((error) => {
//         console.error("promise ALl thất bại vì:", error);
//     });


// Promise.race

// const promiseFast = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         console.log("promise Fast đã resolve sau 0.5 giây");
//         reject("lỗi")
//         // resolve("Promise nhanh Thắng cuộc >> ");
//     },500)
// })


// const promiseSlow = new Promise((resolve) =>{
//     setTimeout(()=>{
//         console.log("promise Slow đã resolve sau 1.5 giây");
//         resolve("Promise chậm về sau ...");
//     },1500)
// })

// //bắt đầu cuộc đua
// Promise.race([promiseFast, promiseSlow])
//     .then(ketQua =>{
//         console.log("kết quả tử Promise race", ketQua);
//     })
//     .catch(error => {
//         console.log(error);
//     })



// promise.resolve(value)
// tạo nhanh một promise đã được resolve với giá trị 20
// Promise.resolve(20).then(data => {
//     console.log("Promise đã resolve với giá trị ", data);
// })


// Promise.reject("Lỗi")
//     .catch(error => {
//         console.log("Promise đã reject với lý do", error);
//     });


// async / await
// async : đánh dấu đây là 1 promise
// async function helloAsync() {
//     return "Xin chào";

// }

//  helloAsync().then(x => console.log(x)); 
// //  console.log( helloAsync());

// // đánh dấu dây là async
// async function asyncError() {
//     throw new Error("Lỗi từ async function!");
// }

// asyncError().catch(e => console.error(e));

// await : chờ đợi

// try 
// catch

// Khai báo hàm là async để có thể sử dụng await bên trong.
// async function hamViDu_ThanhCong() {
//     // sử dụng try catch
//     try {


//         console.log("hàm async bắt đầu...");
//         console.log("bắt đầu chờ 1 giây và lấy giá trị...>");
//         // Dừng ở đây, chờ Promise này resolve sau 1 giây.
//         const ketQuaCho1Giay = await new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("Promise 1 giây đã resolve");
//                 resolve("giá trị sau 1 giây")
//             }, 1000)
//         })

//         console.log("đã chờ xong 1 giây và nhận giá trị",ketQuaCho1Giay);

//         console.log("kết thúc Promise 1 giây");
//         const ketQuaChoNuaGiay = await new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("Promise nửa giây đã resolve");
//                 resolve("giá trị sau nửa giây")
//             }, 500)
//         })
//         console.log("Đã chờ xong 0.5 giây và nhận giá trị",ketQuaChoNuaGiay );
//         //sau 0.5 giây nữa, code tiếp tục

//         console.log("hàm async kết thúc");

//         return "Hoàn thành!";

//     }
//     catch (error) {
//         // khối này sẽ không chay trong trường hợp thành công
//         // nếu bị lỗi thỉ mới bắt lỗi 
//         console.error("Đã có lỗi trong hàm async", error);

//     }
// }


// // gọi hàm
// hamViDu_ThanhCong().then(KetQuaCuoiCung=>{
//     console.log("Kết quả cuối cùng trả về từ hàm async",KetQuaCuoiCung );
// });

// // dòn
// console.log("Chương trình chính vẫn chạy "); //2


// async function hamViDu_CoLoi() {
//     try {
//         console.log("hàm async bắt đầu ....");
//         // dừng ở đây, chò Promise này resolve sau 1 giây
//         const ketQua1 = Promise(resolve => setTimeout(() => resolve("Bước 1 OK"), 1000));

//         // dừng ở đây

//         const ketQua2 = Promise((resolve, reject) => setTimeout(() =>
//             reject("Bước 2 gặp lỗi "), 1000));

//         console.log("hàm async kết thúc");



//     } catch (error) {
//         // khi await gặp Promise bị reject, code sẽ nhảy vào khối này
//         console.error("Đã có lỗi trong hàm async", error);

//     }

// }

// hamViDu_CoLoi();

// Fetch Api
// ajax : không cần tải lại toàn bộ trang web


// fetch (url, option)
// .then(response => {
// response.json() // cũng trả về Promise
// return response.json()
// } )
// .then(data => console.log(data);)
// .catch(error => {
//     console.error(error);
// })

// ví dụ
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response=> response.json())
// .then(json => console.log(json));


//dùng async/await để code trông gọn hơn
// async function layMotViecCanLam() {
//     try {
//         const response = await fetch('https://jsonplacehoslder.typicode.com/posts/1')
//         const data = await response.json();
//         console.log("dữ liệu là:", data);

//     } catch (error) {
//         // trường hợp bị lỗi mạng
//         console.log("Bắt dc lỗi Fetch:", error.message);
//     }

// }

// layMotViecCanLam();


// async function layPostKhongTonTai() {

//     try {
//          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

//          console.log("Response status: ", response.status);
//          if(!response.ok){
//             // nếu không thành công, throw một lỗi để khối catch bắt
//             throw new Error(` Lỗi HTTP status ${response.status}`)
//          }

//          // thành công thì chạy xuống đây
//         const data = await response.json();
//         console.log("dữ liệu là:", data);


//     } catch (error) {
//         console.log("bắt dc lỗi", error.message);
//     }

// }

// layPostKhongTonTai();

// tạo bài post
async function taoPostMoi() {
    try {
        console.log("Bắt đầu tạo post mới (POST request)...");

        // Gọi fetch với tham số thứ hai là một object options.
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // Chỉ định phương thức là POST.
            headers: {
                // Báo cho server biết rằng chúng ta đang gửi dữ liệu dạng JSON.
                'Content-Type': 'application/json; charset=UTF-8',
            },
            // Body của request phải là một chuỗi JSON.
            // Dùng JSON.stringify để chuyển đổi một object JavaScript thành chuỗi.
            body: JSON.stringify({
                title: 'Tiêu đề bài post mới từ Javascript',
                body: 'Nội dung của bài post mới này được tạo từ Javascript và Fetch API.',
                userId: 1,
            }),
        });

        console.log("Response status (POST):", response.status); // Status 201 nghĩa là "Created".
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! Status: ${response.status}`);
        }

        // Nhận lại dữ liệu post vừa "tạo" từ server.
        const newPost = await response.json();
        console.log("Post mới đã được 'tạo' (JSONPlaceholder fake):", newPost);
        return newPost;
    } catch (error) {
        console.error("Lỗi POST request:", error); // put/delete
    }
}

taoPostMoi();

