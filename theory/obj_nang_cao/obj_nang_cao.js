// const person=
// {
//     name: "Tony Stark",
//     age: 45,
//     city: "New York"
// }

// // cứ mỗi thuộc tính, cần 1 dòng -> dài dòng
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);



// chỉ một dòng duy nhất
// alias cú pháp ten_thuoc_tinh: biet_danh
// const {name, age: tuoi, city: thanhpho }= person;
// console.log(name);
// console.log(tuoi);
// console.log(thanhpho);


// const person=
// {
//     firstName: "Tony ",
//     age: 45,
//     city: "New York"
// }

// const {firstName, lastName= "Stark"}= person;
// console.log(firstName);
// console.log(lastName); // vì person không có lastName ,nó sẽ lấy giá trị mặc định 


// const user= {
//     id:1,
//     name: "Adrew",
//     address:{
//         street: "112 Main st" ,
//         city: "Tokyo"
//     }
// };

// const {name, address:{ city}}= user;
// console.log(city);
// console.log(user.address.city);


// const car={
//     make: "toyota",
//     model: "camry",
//     year: 2020,
//     city:"Tokyo"
// }
//  console.log(car);
// // delete car.year;

// // console.log(car);

// if(car.city){
//     delete car.city
//     console.log("xoá thành công ");
//     console.log("car sau khi xoá",car);
// }else{
//     console.log("Thuộc tính city không tồn trong obj car");
// }

// const item =
// {
//     name: "laptop",
//     price: 1200

// }
// // gán undefined

// item.price= null;
// console.log("price" in item); // true
// console.log(item);

// // xoá bằng delete
// delete item.price
// console.log("price" in item);
// console.log(item);


// const student = {
//     name: "Bob",
//     age: 20,
//     //  propertyName: "abcxyz"
//     "model-number": "xyz",
//     "product name3": "laptop"


// };

// const propertyName= "age";
//  console.log(propertyName);

// // dùng dấu chấm 
// console.log(student[propertyName]); // 20, vì nó lấy giá trị của biến propertyName ("age") để tìm
// console.log(student["model-number"]);
// console.log(student["product name"]);

// const keys= Object.keys(student);
// console.log(keys);

// keys.forEach(key=>{
//     // dùng key (là một biến) để truy cập động vào từng thuộc ính của students
//     console.log(`${key} : ${student[key]}`);
// })

// class

// class Dog{
//     // hàm khởi tạo constructor
//     constructor(name, breed){
//         // this tham chiếu đến chính cái object sắp được tạo
//         this.name=name;
//         this.breed= breed;
//     }

//     // method: các hành động
//     describe(){
//         console.log(`${this.name} là một chú chó giống ${this.breed} `);
//     }
//     keu(){
//         console.log("gâu gâu");
//     }
// }

// // 4. tạo object (instance) từ class

// const myDog= new Dog("cậu vàng" , "chó Siba" );
// console.log(myDog.name);
// myDog.describe();
// myDog.keu();

// const newDog=  new Dog("cậu vàng 2" , "chó ta" );
// newDog.describe();
// // ("abc", "cho phu quoc")

// console.log("hello world");

// Animal (cat, dog, bird, )


// class cha
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age= age;

//     }

//     eat() {
//         console.log(`${this.name} đang ăn ....`);
//     }

//      hienThiTuoi() {
//         console.log(`số tuổi của ${this.name} là : ${this.age} `);
//     }

//     makeSound() {
//         console.log("âm thanh của muôn loài");
//     }
// }


// // tạo ra class dog
// class Dog extends Animal {
//     constructor(name,age, breed) {
//         //super() bắt buộc phải gọi để constructor của class cha
//        super(name, age); //
//        this.breed= breed;
//     }

//     makeSound(){
//         //  super.makeSound();
//         console.log("wow wow");
//     }

// }


// class Cat extends Animal {
//     constructor(name,age, breed) {
//         //super() bắt buộc phải gọi để constructor của class cha
//        super(name, age); //
//        this.breed= breed;
//     }

//      makeSound(){
//         //  super.makeSound();
//         console.log("meow meow");
//     }

// }

// const myDog= new Dog("cậu vàng" , 13, " chó phú quốc");
// myDog.eat();
// myDog.makeSound();
// myDog.hienThiTuoi();

// const myCat= new Cat("Tom" , 3, " mèo nhà");
// myCat.eat();
// myCat.makeSound();
// myCat.hienThiTuoi();





// instanceof
// chỉ dùng object vs class 
// console.log(myDog instanceof Dog); // true
// console.log(myDog instanceof Animal); // true
// console.log(myCat instanceof Animal); // true
// console.log(myDog instanceof MyCat); // false


// console.log(myDog.constructor === myCat.constructor);


