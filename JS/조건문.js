//login();
/* switch ~ case */
// let a =4
// swich (값){
//     case1
// }

let a = 4;
switch (a) {
  case 3:
    console.log("입력값이 4보다 작습니다.");
    break;
  case 4:
    console.log("입력값이 4입니다");
    break;
  case 5:
    console.log("a는 5입니다!");
    break;
  default:
    console.log("3,4,5가 아니네요!");
    break;
}
//손잡기
let num = 10;

if (num % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

/* 삼항연산자
조건 ?(조건이 참일 때)실행1:(조건이 거짓일 때)실행2 
*/
let result = num % 2 === 1 ? "홀수" : "짝수";
console.log(result);

let now = new Date().getHours(); //15
console.log(now);
if (now >= 12) {
  console.log("오후");
} else {
  console.log("오전");
}

now >= 12 ? console.log("오후") : console.log("오전");
