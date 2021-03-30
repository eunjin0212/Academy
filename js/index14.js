const price = 29000;
const sale = 0.7;
const save = 3680;
console.log("최종가 " + (price * sale - save));

let num1 = (3 + 5) * 25;
let num2 = 9 * 17 + 47;
if (num1 > num2) {
  console.log("num1 " + num1);
} else if (num1 < num2) {
  console.log("num2 " + num2);
} else if (num1 === num2) {
  console.log("같다 " + num1 + " " + num2);
}

let randomNum = 57;
// Math.floor(Math.random() * 101);

if (10 < randomNum <= 50) {
  console.log("10보다 크고 50 이하의 숫자");
} else if (50 < randomNum <= 100) {
  ("50보다 크고 100이하의 숫자");
} else if (100 < randomNum) {
  console.log("100이상의 숫자");
}
// let a;
// if (a === "홍길동" || a === "유관순") {
//   console.log(a + "님은 vip등급입니다.");
// } else if (a === "이순신" || a === "강감찬") {
//   console.log(a + "님은 실버등급입니다.");
// }

//배열과 더블 반복문으로 만들어보기
let telCompany = "SKT";
let user = "이순신";

if ((user === "홍길동" || user === "이순신") && telCompany === "SKT") {
  console.log("SKT 고객이 맞습니다.");
} else if (user === "세종대왕" && telCompany === "KT") {
  console.log("KT 고객이 맞습니다.");
} else if (user === "강감찬" && telCompany === "LG") {
  console.log("LG 고객이 맞습니다.");
} else {
  console.log("해당 사용자는 통신사에 등록된 사용자가 아닙니다.");
}
