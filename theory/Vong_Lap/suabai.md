Hãy cùng xem xét từng bài tập và so sánh với đáp án của bạn nhé:

1. In số từ 5 đến 15, lọc số lớn hơn 10:

Yêu cầu: In số từ 5 đến 15, chỉ in các giá trị lớn hơn 10. 
Code của bạn:
JavaScript

for(var i=5; i<=15; i++){
    if (i>10){
        console.log(i);
    }
}

So sánh: Code của bạn hoàn toàn chính xác và đáp ứng yêu cầu.
2. In số chẵn từ 2 đến 10:

Yêu cầu: In số chẵn từ 2 đến 10. 
Code của bạn:
JavaScript

for(var i=2; i<=10; i++){
    if(i%2===0){
        console.log(i);
    }
}
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
3. Tính tổng các số từ 0 đến 50:

Yêu cầu: Tính tổng các số từ 0 đến 50. 
Code của bạn:
JavaScript

var sum=0;
for(var i=0; i<=50; i++){
    sum+=i;
}
console.log(sum);
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
4. Tính tổng các số lẻ từ 0 đến 50:

Yêu cầu: Tính tổng các số lẻ từ 0 đến 50. 
Code của bạn:
JavaScript
>>
var sum=0;
for(var i=0; i<=50; i++){
    if(i%2){
    sum+=i
    }
}
console.log(sum);
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
5. Đếm số chia hết cho 5 từ 1 đến 100:

Yêu cầu: Đếm số chia hết cho 5 từ 1 đến 100. 
Code của bạn:
JavaScript

var count=0;
for(var i=1; i<=100; i++){
    if(i%5===0){
     count+=1
    }
}
console.log(count);
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
6. In các số chia hết cho 3 từ 1 đến 30:

Yêu cầu: In các số chia hết cho 3 từ 1 đến 30. 
Code của bạn:
JavaScript

for(var i=1; i<=30; i++){
    if(i%3===0){
        console.log(i);
    }
}
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
7. Tính tích các số từ 1 đến 5:

Yêu cầu: Tính tích các số từ 1 đến 5. 
Code của bạn:
JavaScript

var produce=1;
for(var i=1; i<=5; i++){
    produce*=i;
}
console.log(produce);
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
8. In bảng cửu chương số 7:

Yêu cầu: In bảng cửu chương số 7. 
Code của bạn:
JavaScript

for(var i=1; i<=10; i++){
    console.log("7 x "+i+ " = " + (7*i));
}
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
9. In các số từ 1 đến 10 (while loop):

Yêu cầu: In các số từ 1 đến 10 bằng vòng lặp while.
Code của bạn:
JavaScript

var i =1
while(i<=10){
    console.log(i);
    i++
}
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
10. Tính tổng các số chẵn từ 2 đến 20 (while loop):

Yêu cầu: Tính tổng các số chẵn từ 2 đến 20 bằng vòng lặp while. 
Code của bạn:
JavaScript

var sum=0;
var i =2;
while(i<=20){
    if(i%2===0){
    sum+=i;
    }
      i++;
}
console.log(sum);
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
11. In các số từ 5 giảm dần đến 1 (do-while loop):

Yêu cầu: In các số từ 5 giảm dần đến 1 bằng vòng lặp do-while.
Code của bạn:
JavaScript

var i=5;
do{
    console.log(i);
    i--;
}while(i>=1);
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
12. Dừng vòng lặp khi gặp số 7:

Yêu cầu: Dừng vòng lặp khi gặp số 7 và in các số trước đó. 
Code của bạn:
JavaScript

for(var i=1; i<=10; i++){
    if(i===7){
        break;
    }
    console.log(i);
}
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
13. Bỏ qua số lẻ từ 1 đến 10:

Yêu cầu: Bỏ qua số lẻ và chỉ in số chẵn từ 1 đến 10. 
Code của bạn:
JavaScript

for(var i=1; i<=10; i++){
    if(i%2){
        continue;
}else(i%2===0)    //tại sao ở đây không { }
   console.log(i);
}
So sánh: Code của bạn hoạt động đúng.
Về câu hỏi //tại sao ở đây không { }: Trong JavaScript, nếu if hoặc else chỉ có một câu lệnh theo sau, bạn không bắt buộc phải sử dụng dấu ngoặc nhọn {}. Tuy nhiên, việc sử dụng dấu ngoặc nhọn luôn được khuyến khích để tăng tính rõ ràng và tránh lỗi khi có thêm nhiều câu lệnh trong tương lai. Code của bạn có thể được viết rõ ràng hơn như sau:
JavaScript

for(var i=1; i<=10; i++){
    if(i % 2 !== 0){ // Nếu là số lẻ
        continue;
    } else { // Nếu là số chẵn
        console.log(i);
    }
}
Hoặc đơn giản hơn:
JavaScript

for(var i=1; i<=10; i++){
    if(i % 2 === 0){ // Nếu là số chẵn
        console.log(i);
    }
}
14. Tìm số đầu tiên chia hết cho 4 và dừng:

Yêu cầu: Tìm số đầu tiên chia hết cho 4 trong khoảng từ 1 đến 20 và dừng lại. 
Code của bạn:
JavaScript

for(var i=1 ; i<=20; i++){
    if(i%4===0){
        console.log("So dau toen chia het cho 4 la : " + i);
        break;
    }
}
So sánh: Code của bạn chính xác và đáp ứng yêu cầu.
Tổng kết:

Các đáp án của bạn đều chính xác và giải quyết đúng các yêu cầu của bài tập. Điểm cần lưu ý duy nhất là về việc sử dụng dấu ngoặc nhọn {} trong câu lệnh if/else ở bài 13 để cải thiện tính rõ ràng của code, mặc dù code hiện tại của bạn vẫn chạy đúng.