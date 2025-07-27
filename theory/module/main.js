// import myLogger2 from './logger.js'; // Tên 'myLogger' là tùy ý

myLogger2("Hello Modules!");


// greeting.js. Trong đó có một hàm sayHi(name) 
// để in ra lời chào, ví dụ Hello, Alice!.
//  Hãy dùng export default cho hàm đó. Sau đó,
//  import nó vào file main.js và gọi hàm đó với 
// tên của mình."

// import sayHe from './greeting.js';

// sayHe("Tèo")


import myLogger2, { VERSION, getCurrentTime } from './logger.js';

console.log(VERSION);
console.log("thời gian hiện tại", getCurrentTime());