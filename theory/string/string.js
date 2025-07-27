// console.log("string");


// let chuoiGoc= "học lập Trình JAvascript";
// console.log("chuỗi gốc ban đầu", chuoiGoc);

// let chuoiKhongInHoa= chuoiGoc.toLowerCase();
// console.log("chuỗi gốc sau khi chuyển đổi", chuoiGoc);

// console.log(chuoiKhongInHoa);

// 1-- lấy độ dài (mang, chuỗi)
let myName = "Trần Văn Tèo abc xyz";
// console.log(myName.length);

// 2 chartAt
// console.log("ký tự đầu tiên", myName.charAt(5));
// lấy ký tự cuối cùng
// console.log(myName.charAt(myName.length-1));


// slice (start, end)
let greeting = "Xin Chào các bạn  !";
// let xin= greeting.slice(0, 3)
// console.log(xin);

// console.log("lấy 5 ký tự cuối",greeting.slice(-1));

// in hoa tất cả
// console.log(greeting.toUpperCase());
// console.log(greeting.toLowerCase());

// .trim
// let rawData= "  mã sản phẩm: abc   ";

// console.log(rawData);
// let cleanData= rawData.trim();
// console.log(cleanData);

// tìm kiếm và thay thế

// let story = "ngày xửa ngáy xưa, ở một vương quốc nọ ngày...";
// console.log("chuỗi có chứa từ 'xưa' không?", story.includes("xưa"));
//  console.log("Tim không thấy sẽ trả về : ", story.indexOf("ngáy", 10));
//  console.log("Tim không thấy sẽ trả về : ", story.lastIndexOf("ngáy", 10));



// thay thế

// let  message= "hôm nay trời đẹp, đi chơi vui lắm, đẹp lắm!"
// // replace
// console.log("Dùng .replace:", message.replace("đẹp", "xấu"));

// // replaceAll
// console.log("Dùng .replaceAll,", message.replaceAll("đẹp", "mát"));


// tách chuỗi
// let tags= "javascript; reactjs; nodejs; frontend";

// let tagArray = tags.split(";");
// console.log(tagArray);

// trích xuất chuỗi con từ chuỗi lớn
// let str = "javascript";
// console.log(str.substring(0, 4));
// console.log(str.substring(1));

// let str= "Hello World Hello";
// console.log(str.lastIndexOf("Hello")); // 🔍 tìm từ phải sang trái => khớp ở index 12 => ✅ trả về 12
// console.log(str.lastIndexOf("Hello", 2));
// 🔍 tìm ngược từ index 10 => khớp ở index 0  => ✅ trả về 0

//  console.log("");
//  const studentName= "Minh";
//  const age= 25;
//  const oldGreeting = "Chào bạn "+ studentName + " bạn " +age;
//  console.log(oldGreeting);


//  console.log(`chao ban ${studentName} bạn  ${age}  `);

//  const price = 100000;
// const tax = 0.1;
// const messageWithExpression = `Giá sản phẩm là ${price} VND. Thuế là ${tax * 100}%. Tổng cộng là ${price * (1 + tax)} VND.`;
// console.log(messageWithExpression);

// const cauVan= " JavaScript là ngôn ngữ của web, học JavaScript rất thú vị.";


// console.log(cauVan.lastIndexOf("Java", 0)); 


// const chuoi1= "Học";
// const chuoi2= " lập trình";
// const chuoi3= " không khó";

// const chuoiGhep= chuoi1.concat(chuoi2, chuoi3, " ahihi");
// console.log(chuoiGhep);
// [1,3,4] -->" 1,2,3"


// const noiDungEmail= `
// chào bạn,
// cảm ơn bạn đã quan tâm đến sảm phẩm của chúng tôi


// trân trọng
//   abc
// `

// console.log(noiDungEmail);

// [apple,banana,orange,mango] -> "apple,banana,orange,mango"

const list = "apple,banana,orange,mango";
const fruitsArray = list.split(',');
console.log("Mảng fruits:", fruitsArray);

console.log(fruitsArray.join("-"));

