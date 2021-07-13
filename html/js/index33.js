function keyUp() {
  alert("keyUps");
}
function keyDown() {
  alert("keyDown");
}

function keyPress() {
  alert("keyPress");
}
// onkeypress : 키를 누르는 순간 사용됨 (특수키를 인식함) - 대문자 소문자 ASCII를 구분함
// onkeydown : 키를 눌렀을때 사용됨 (특수키를 인식안함) - 대문자 소문자 ASCII 동일
// onkeyup : 키를 눌렀다가 놓을때 (특수키를 인식안함) - 대문자 소문자 ASCII 동일

function abc() {
  let b = event.keyCode;
  //event.keyCode 키보드에서 사용자가 해당 키를 누를 경우
  //ASCII형태로 코드값을 분석하여 키보드를 제어할 수 있습니다.
  let i = document.getElementById("a");
  alert("test");
  console.log(b);
  if (b == 189 || b == 109) {
    alert("-는 사용할 수 없습니다.");
    i.value = "";
  }
}
function bbb() {
  alert("keydown");
}
function ccc() {
  let b = event.keyCode;
  console.log(b);
  if (b == 45) {
    alert("-는 사용할 수 없습니다.");
  }
}

function pws() {
  let a = "123456";
  let b = document.getElementById("pw").value;
  if (a != b) {
    document.getElementById("help").style.display = "block";
  } else {
    document.getElementById("help").style.display = "none";
  }
}
//onkeyup,onkeydown,onkeypress,onclick,onchange,onsubmit
