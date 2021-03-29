// return true; <form> + ajax 결과에 따라서 다시 던질건지 말건지 결정짓는 것. 두 세번도 던질 수 있음
// submit; <form>에서만 사용하고 한 번 던지면 끝.
function aaa() {
  let aa = document.getElementById(a).value;
  let bb = document.getElementById(b).value;
  let cc = document.getElementById(b2).value;

  let bb_pw = bb.length; //length : 단어의 갯수를 파악
  if (bb_pw < 6) {
    alert("패스워드는 최소 6자 이상입니다.");
  } else {
    if (bb != cc) {
      alert("동일한 패스워드를 입력하세요.");
    }
  }
}

function ccc() {
  let rd = 10;
  // let z = Math.random()*rd;  //소수점도 반영됨

  // Math : 수학적으로 처리 ()
  // random() 함수 : CPU가 무작위로 숫자를 선택함
  // * : 범위 (0~10)까지

  let z = Math.ceil(Math.random() * rd); // 소수점 첫째자리 무조건 올림
  // let z = Math.floor(Math.random()*rd);  // 소수점 첫째자리 무조건 내림
  // let z = Math.round(Math.random()*rd);  // 소수점 첫째자리 0.5이상 반올림

  // 1~10 까지 무작위 중에 60% 확률로 당첨

  if (z < 7) {
    alert("당첨되셨습니다.");
  } else {
    alert("다음기회에...ㅠ");
  }
  document.getElementById("r").value = z; // = 을 기점으로 값이 앞에 있냐 뒤에 있냐에 다름. 지금은 test가 value값에 들어가란 뜻
}
ccc();

function ddd() {
  // 1~100 까지 출력
  let ids = document.getElementById("mid").value;
  if (ids == "lee") {
    let rd = 22;
    let h = rd;
  }
  let rd = 100;
  let h = Math.ceil(Math.random() * rd);
  if (h == 22) {
    alert("황금 금괴 당첨");
  } else if (h == 10 || h == 20 || h == 30 || h == 40 || h == 50) {
    alert("80% 할인 쿠폰!!");
  } else if (h > 85) {
    alert("10% 할인 쿠폰!!");
  } else {
    alert("다음기회에 ㅋ");
  }
  document.getElementById("r").value = h;
}
