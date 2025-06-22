// yêu cầu : in ra gửi lời chào đến 3 bạn: An, Bình, Cường
// console.log("xin chào bạn An, chúc bạn một ngày tốt lành ");
// console.log("xin chào bạn Bình, chúc bạn một ngày tốt lành ");
// console.log("xin chào bạn Cường, chúc bạn một ngày tốt lành ");


// function xinChao(ten){ //Tham số (Parameter):

//     console.log("xin chào bạn " +ten+ " chúc bạn một ngày tốt lành ");
// }

//  xinChao("Vân"); // Đối số (Argument)
//  xinChao("Minh");
// xinChao();
// xinChao();
// xinChao();


// cú pháp
// function inRaThongBao(){
//     // Tất cả những gì mình muốn hàm làm sẽ được viết ở đây
//     console.log("Đây là một thông báo từ bên trong hàm");
//     console.log("hàm đã được gọi thành công");
// }

// gọi hàm để thực thi
// inRaThongBao();

// function gioiThieuBanThan(){
//     console.log("My name: Mih");
//     console.log("My age: d..");
// }

// gioiThieuBanThan();

// function tinhTong(soA, soB){
//     var tong= soA+soB;
//     console.log("tổng của 2 số " +soA+" và số "+soB+ " là ",tong);
// }


// tinhTong(4,5);


// var tinhTong2= function (soA, soB){
//     var tong= soA+soB;
//     console.log("tổng của 2 số " +soA+" và số "+soB+ " là ",tong);
// }

// tinhTong2(5,5);

// function tinhTong(soA, soB){
//     var tong= soA+soB;
//     var tongDouble= tong*2;
//     return tong;
// }

// var ketQua= tinhTong(4,2);
// console.log(ketQua);

// var ketQuaCuoiCung= ketQua*2;
// console.log("kết quả sau khi nhân đôi là ", ketQuaCuoiCung);

// function tinhDienTich(dai, rong){
//     return dai*rong;
// }

// var dienTichPhong= tinhDienTich(3,4); //12
// console.log("Dien tich phong là ", dienTichPhong );

// function soSanhDienTich(d1,r1, d2, r2){
//     var dt1= tinhDienTich(d1, r1);
//     console.log(dt1);

//    var dt2= tinhDienTich(d2, r2);
//    console.log(dt2);
//    if(dt1>dt2){
//     console.log("Hình 1 lớn hơn");
//    } else if(dt1<dt2){
//     console.log("Hình 2 lớn hơn");
//    }else{
//      console.log("2 hình bằng nhau");
//    }
// } 


// soSanhDienTich(3,4,5,6)

// function giaTriTuyetDoi(number){
//     if(number<0){
//         return -number;
//     }else{
//         return number;
//     }
// }

// var kq= giaTriTuyetDoi(8);

// console.log(kq);


// function chaoHoi(){
//     console.log("xin chao");
  
//    return kq1;
// }

// var kq1= chaoHoi();
// console.log(kq1);

function tinhTongSoChan(start, end){
    var tong=0;
    for(var i=start; i<=end; i++){
        if(i%2===0){
            tong+=i;
        }
    }
    return tong;
}

var kq= tinhTongSoChan(7,10); //8

console.log(kq);