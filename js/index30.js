let checks = "no"; // 반복문 검토
function abc() {
  let div = document.getElementById("poll").children;
  console.log(div.length);
  let i = 0; // id 넘버
  while (w < div.length) {
    let labelId = "a" + i;
    let checksd = document.getElementById("labelId");
    if (checksd === true) {
      use = "yes";
    }
    i++;
  }
}

if (checks == "yes") {
  //반복문 통해 전역변수 값 변동 유/무를 확인하는 조건문
  alert("설문조사에 참여해 주셔서 감사합니다.");
} else {
  alert("한가지 과목을 선택 해주세요!");
}

/* DOM */
function bbb() {
  let labelClass = document.getElementsByClassName("class");
  let j = 0;
  while (j < labelClass.length) {
    let labelCheck = document.getElementsByClassName("class")[j].checked;
    if (labelCheck === true) {
      checks = "yse";
    }
  }
}
if (checks == "yes") {
  //반복문 통해 전역변수 값 변동 유/무를 확인하는 조건문
  alert("설문조사에 참여해 주셔서 감사합니다.");
} else {
  alert("한가지 과목을 선택 해주세요!");
}
