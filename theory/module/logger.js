
const logMessage = (message) => {
    console.log(`[LOG]: ${message}`);
};

// const sayHi= (name) =>{
    
// }
export default logMessage;


export const VERSION ='1.0.0' // named export một hằng số

export function getCurrentTime(){
    return new Date().toLocaleTimeString();
}
