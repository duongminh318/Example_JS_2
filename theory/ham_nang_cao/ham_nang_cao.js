// cách viết truyền thống (function expression)
// const binhPhuong_truyenThong= function (x){
//     return x*x;
// };
// console.log(binhPhuong_truyenThong(2));


// arrow function
// const binhPhuong_arrow = (x) => {
//     return x * x;
// }

// console.log(binhPhuong_arrow(2));

// arrow không có tham sô
// const chaoBuoiSang=()=>{
//     console.log("đang chạy hàm này");
//     return "chúc ngày mới tốt lành";
// }

//chaoBuoiSang();
//let loiChuc= chaoBuoiSang();  // chaoBuoiSang= "chuc ngay moi tot lanh" = loiChuc
//console.log(loiChuc);

// const congHaiSo_arrow =  (a, b) => {
//     console.log("bắt đầu tính tổng hai số");
//     return a+b;
// }

// let sum= congHaiSo_arrow(2,3);
// console.log(sum);

// tính tổng
// const tongBinhPhuong_daydu= (a,b) =>{
//     return a*a +b*b;
// }
// console.log("Tổng bình phương (dài): ",tongBinhPhuong_daydu(3,4) );

// //rút gọn thành một dòng, bỏ {} và return
// const tongBinhPhuong_rutGon= (a,b) => a*a+ b*b;
// console.log("Tổng bình phương (gọn): ",tongBinhPhuong_rutGon(3,4) );


// có 1 tham số
// const nhanDoi = x => x*2;
// console.log("Nhân đôi của 7 là:", nhanDoi(7));

// const kiemTraSoChan= num => num%2===0

// console.log(kiemTraSoChan(6));

// trước đây
// function chaoHoi_cu(ten){

//     if(ten ===undefined){
//         ten= "khách"
//     }
//     console.log("chào bạn: ",ten);
// }

// chaoHoi_cu("Vân");
// chaoHoi_cu();

// function chaoHoi_moi(ten="khách"){

//      console.log("chào bạn: ",ten);
// }

// chaoHoi_moi("Vân")
// chaoHoi_moi();
// chaoHoi_moi(undefined);
// chaoHoi_moi(null);

// function replaceObject(obj) {
//     obj= {};
// }
// const myObject = { value: "original" };
// replaceObject(myObject);
// console.log(myObject.value);

// const tinhTongLinhHoat= function(...cacSo){

//     console.log(cacSo);
//     let tong=0;
//     for(let so of cacSo) // [1,2,3]
//     {
//         tong+=so;
//     }
//     return tong;

// }
// console.log(tinhTongLinhHoat(1,2,3,8,8));

// const tinhTongCacSo= function(name, ...cacSo){

//     console.log(cacSo);
//     console.log(name);
//     let tong=0;
//     for(let so of cacSo) // [1,2,3]
//     {
//         tong+=so;
//     }
//     return tong;

// }
// console.log(tinhTongCacSo("Vân", 2,3,8,8));


// function(soCuoi, ...cacSo)

// function tinhTong(tieuDe, ...cacSo) {
//     console.log("Tiêu đề:", tieuDe);
//     console.log("Các số nhận được (mảng):", cacSo);
//     let tong = 0;
//     for (let so of cacSo) {
//         tong += so;
//     }
//     return tong;
// }

// console.log("Tổng là:", tinhTong("Hóa đơn", 10, 20, 50));

// function nhaMayPhepCong(a, b, XulyketQua){
//     // xuLyketQua= congThucInRa
//     console.log("Nhà máy đang hoạt động");
//     let ketQua= a+b;
//     console.log("Đã tính xong, kết quả là : ", ketQua);

//     // sau khi có kết quả, nhà máy sẽ dùng "công thức" bạn gửi vào

//     console.log("bắt đầu áp dụng công thức");
// //  congThucInRa(ketQua)
//     XulyketQua(ketQua);

// }


// // Công thức 1: 
// function congThucInRa(ketquanhamaytong){
//     console.log("kết quả cuối cùng là ",ketquanhamaytong);
// }


// // công thức 2
// function congThucNhanDoi(nguyenlieu){
//     let ketQuaNhanDoi= nguyenlieu*2;
//     console.log(">> kết quả sau khi đôi là: ", ketQuaNhanDoi);

// }




//  nhaMayPhepCong(2,3, congThucInRa);

// callback
// nó là một hàm
// được truyền vào hàm khác như là đối số 
// và sẽ được gọi lại bên trong hàm

// function chao(x){
//     console.log("xin chào");
//     x();
// }



// function chucSucKhoe(){
//     console.log("chúc sức khoẻ");
//     console.log("hỏi thăm");
// }

// chao(chucSucKhoe);


// function ruaChen(goicongviectieptheo){
//     console.log('Đang rửa chén');

//     console.log("Đã rửa xong");

//     goicongviectieptheo();
// }

// function lauBan(){
//     console.log("Lau bàn sạch sẽ :)");
// }

// ruaChen(lauBan)


// function thucHienPhepTinh(a, b, callback) {
//  let ketQua = a + b;
//  callback(ketQua);
// }



// thucHienPhepTinh(3,5, result => console.log("Kết quả là ", result));

// khai báo một đối tượng user
// const user= {
//     id:1,
//     ten: "nguyễn văn A",
//     tuoi: 25,
//     email: "annguyen@gmail.com"
// }

// // hàm để hiện thông tin
// function hienThiThongTin(nguoiDung){
//     console.log(`${nguoiDung.ten}`);
//     console.log(`${nguoiDung.tuoi}`);
// }

// hienThiThongTin(user);


// function hienThiThongTin({ten, tuoi}){
//     console.log(`${ten}`);
//     console.log(`${tuoi}`);
// }

// hienThiThongTin(user);


// function timMinMax(mangSo){
//     // giả sử mảng không rỗng
//     let min= mangSo[0];
//     let max= mangSo[0];

//     for(const so of mangSo){
//         if(so>max) {max=so}
//         if(so<min) {min=so}

//     }

//     return {
//         giaTriLonNhat: max,
//         giaTriNhoNhat: min,
//         a:0
//     };
// }

// // dùng destructuring để hứng
// const {giaTriLonNhat, giaTriNhoNhat, a}= timMinMax([1,2,3,4,6])
// console.log(giaTriLonNhat);
// console.log(giaTriNhoNhat);
// console.log(a);

const data = {
    event: "Concert",
    details: {
        location1: "Hanoi",
        time: { start: "19:00", end: "22:00" },
        ticketPrice: 5000
    },

}

const { event, details: { location1, time: { start }, ticketPrice }  } = data;
console.log(`sự kiện ${event} địa điểm ${location1}, thởi gian bắt đầu ${start}, giá vé ${ticketPrice}`);

