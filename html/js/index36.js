/*
idcheck()라는 함수를 이용하여 아이값 유/무를 체크하는 문법을 제작하시오
"아이디를 입력해 주세요", "해당 아이디는 중복되지 않습니다."
*/
let sign = document.getElementById("sign").value;

function idcheck() {
  let mid = document.getElementById("mid").value;
  let admin = "admin";
  if (mid == "") {
    alert("아이디를 입력해 주세요");
  } else {
    if (mid == admin) {
      alert("해당 아이디는 사용하지 못합니다.");
    } else {
      document.getElementById("mid").readOnly = true;
      alert("해당 아이디는 중복되지 않습니다.");
      sign = "yes";
      //sign = "ok";
    }
  }
}
function gopage() {
  // if(sign=="no"){
  if (sign == "no") {
    alert("아이디를 중복체크 하셔야만 회원가입 됩니다.");
  } else {
    alert("회원가입이 진행 됩니다.");
  }
}
