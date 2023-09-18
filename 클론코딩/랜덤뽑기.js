const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = [];
  let j = 0;
  for (i = 0; i < selectingNumber; i++) {
    randomNum = Math.floor(Math.random() * totalIndex + 1);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  var result = [];
  var real = [];
  for (i = 0; i < randomIndexArray.length; i += 2) {
    result.push(randomIndexArray.slice(i, i + 2));
  }
  for (j = 0; j < 6; j++) {
    for (k = 0; k <= 1; k++) {
      real.push(student[result[j][k]]);
    }
  }
  var qwer = [];
  for (i = 0; i < real.length; i += 2) {
    qwer.push(real.slice(i, i + 2));
  }
  for (q = 0; q < 6; q++) {
    console.log(qwer[q]);
  }
  return qwer;
};

const val = document.getElementById("value");

const student = [
  0,
  "칼국수",
  "마라탕",
  "덮밥",
  "분식",
  "국밥",
  "고기",
  "냉면",
  "돈가스",
  "쌀국수",
];

function ck() {
  selectIndex(11, 11);
}
