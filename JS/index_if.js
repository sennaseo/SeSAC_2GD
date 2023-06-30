/* if문 */
// if(조건식){ 조건식이 잠을 때 실행할 문장;}
if (5 < 3) {
  console.log("얍");
}

let number = Number(prompt("숫자를 입력해주세요!"));
//console.log(type of number)
//if ~else.
/* 
if(조건)
//조건이 참일때 실행할 문장
false
조건이 거짓일때 실행할 문장 
*/
if (number > 10) {
  alrert("10보다 큽니다");
} else {
  // alert("10이거나, 10보다 작습니다!")
  console.log("10이거나, 10보다 작습니다");
}

if (number > 10) {
  console.log("10보다 큽니다.");
} else if (number === 10) {
  console.log("입력한 수가 10이네요!");
} else {
  console.log("10보다 작은수입니다!");
}

/* 성적 산출 프로그램 */
//0~100 까지의 수 입력
// 91 <= number <+
if (100 <= number && number >= 90) {
  console.log("A");
} else if (number >= 80) {
  console.log("B");
} else if (number >= 70) {
  console.log("C");
} else if (number >= 60) {
  console.log("D");
} else {
  console.log("F");
}
