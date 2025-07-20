// môi trường sân khấu lớn = người quản lý --> window
// console.log(this);

// console.log(this===window);

// const myObject= {
//     propertyName: "ahihi",
//     list2 : ["a","c"],
//     myMethod:function(){
//         // this ở đây
//          console.log("trong myMethod, this là: ", this);
//         console.log("Thuộc tính của object: ", this.propertyName);
//         // console.log(this.age);
//         console.log(this.list2);

//     }

// };

// myObject.myMethod();


// const myArray =[1,2,3]

// myArray.showInfo= function(){
//     console.log("this là ",this);
//     console.log(this.length);
// }

// myArray.showInfo();

// non-strict mode
// "use strict"
// function regularFunction(){
//     console.log("Trong regularFunction, this là", this);
//     //
//     console.log("this===undefined", this===undefined);
// }

// regularFunction();


const person = {
    name: "Alice",
    sayHello: function (greeting, punctuation) {
        //greeting="xin chào"
        //punctuation= "!"
        console.log(`${greeting}, my name is ${this.name} ${punctuation}`);
    }
};

// person.sayHello("xin chào" , "!")

// const anothePerson= {
//     name:"Bob"
// };

// call (arg1, agr2..)
//  person.sayHello.call(anothePerson, "hello", "?" );
//  person.sayHello()

// apply(arg1, [arg2, agr3..])
//  person.sayHello.apply(anothePerson, ["chào thím", " !!"]);


// bind
// tạo ra một diễn viên đóng thế, vai diễn sẽ mãi mãi thuộc về anotherPerson

// const bobGreeter= person.sayHello.bind(anothePerson, "good morning");

// // bấy giờ, khi nào diễn viên đóng thế, vai diễn đã được định bobGreeter

// bobGreeter("!!");
// bobGreeter("2");
// bobGreeter("9");
// bobGreeter("1");
// // person.sayHello()


const calculator = {
    value: 0,  
    add: function (num) {
        this.value += num;
        return this.value;
    },
    subtract: function (num) {
        this.value -= num;
        return this.value;
    },
    getValue: function () {
        return this.value;
    }
};

const objectmoi={value:10};
let sum = calculator.add.call(objectmoi, 5);

console.log(sum);

