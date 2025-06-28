// var khung =document.getElementById('khung');
// var khung1= document.querySelector('#khung');
// var tatcaDoan= document.querySelectorAll('p');

// console.log(khung1);

// var currentItem = document.getElementById('current-li');

// console.log(currentItem);

// var parentList= currentItem.parentNode;

// console.log(parentList);

// var firstElementChild= currentItem.parentNode.firstElementChild;
// console.log(firstElementChild);

// var nextElementSibling= currentItem.nextElementSibling;
// console.log(nextElementSibling);

// var anhCuLi2= currentItem.previousElementSibling;
// console.log(anhCuLi2);

// const startElement = document.getElementById('current-li');
// const target = startElement.parentNode.firstElementChild;
// console.log(target);

// var thongBao= document.getElementById('thongBao');

// console.log(thongBao);

// thongBao.innerHTML= "<b>Chào bạn!</b>"

// var hinh= document.getElementById('hinh')
// console.log(hinh);

// hinh.setAttribute('src' ,'https://placehold.co/100x100/10b981/ffffff?text=M%E1%BB%9Bi');


// var list= document.getElementById('add-remove-list') // lấy phần tử cha ra
// var newItem= document.createElement('li'); // tạo mới
// newItem.textContent= "Mục mới"; // set nối dung cho li mới tọ 
// list.appendChild(newItem); // thêm vào

// var itemToRemove = document.getElementById('item-to-remove')
// if(itemToRemove){
//     itemToRemove.remove();
//     // console.log("Đã đập thành công");
// }
// click : Click chuột.
// submit : Gửi form (quan trọng).
// change : Giá trị thay đổi (ô input, select).
// event.preventDefault()   
// event.target : 
// event.target.value

// var btn= document.getElementById('btn');
// var kq= document.getElementById('kq');

// btn.addEventListener('click', function(){
//     kq.textContent= "Bạn đã bấm vào nút và làm thay đổi thẻ p của tôi"

// });


// var form = document.getElementById('formDangKy');
// var xuat = document.getElementById('xuat');

// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // chặn, không cho form gửi đi
//     var ten = document.getElementById('ten').value;
//     // console.log(ten);
//     var email = document.getElementById('email').value;

//     xuat.textContent='Tên: ' + ten + ', Email: ' + email;
// });


// var nhap = document.getElementById('nhap');
// var hienThi = document.getElementById('hienThi');

// nhap.addEventListener('change', function(){
//     hienThi.textContent = "Bạn đã nhập : " + nhap.value;
// });


var city= document.getElementById('city');
var citySelected= document.getElementById('citySelected')

city.addEventListener('change', function(){
    citySelected.textContent= "Thành phố bạn đã chọn là "+city.value
})

