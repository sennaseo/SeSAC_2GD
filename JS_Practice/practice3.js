let age = 50;
// 연령대별 출력하기!
if (ag >= 0 && age < 8) {
  console / log("유아");
} else if (age < 14) {
  console.log("초딩");
} else if (age < 17) {
  console.log("중학생");
} else if (age < 20) {
  console.log("고등학생");
} else if (age < 200) {
  console.log("성인");
} else if (age >= 200) {
  console.log("나이가 될 수 없습니다.");
} else {
  console.log("음수값입니다!@");
}

/* if문 중첩 */

let userId = "user";
let userPw = "1234!";

function login() {
  let inputId = prompt("아이디를 입력해주세요!");
  let inputPw = prompt("패스워드를 입력해 주세요!!");

  if (userId === inputId) {
    if (userPw === inputPw) {
      alert("로그인 성공!!");
    } else {
      alert("비밀번호가 틀렸습니다!");
    }
  } else {
    alert("아이디가 틀렸어요!");
  }
}

login();
