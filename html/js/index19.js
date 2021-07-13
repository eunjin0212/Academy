// ===, !== : type도 확인하며, 결과값도 비교함
let a = "123456";
let b = "123";
if (a === 123456) {
  //console.log("동일함");
} else {
  //console.log("동일하지 않음");
}

function abc() {
  let aa = Number(document.getElementById("bb").value);
  console.log(aa);
  // NaN : Not a Number,
  // isNaN : true(문자), false(숫자) NaN만 쓰는 경우 없음. isNaN을 써야된다.
  // isNaN 많이 쓰임. 중요!

  if (isNaN(aa) == true) {
    alert("숫자만 입력하세요.");
    document.getElementById("bb").value = ""; // 값을 초기화 시킴
  } else if (aa == "") {
    alert("숫자를 입력하세요.");
    document.getElementById("bb").focus();
  } else {
    alert("정상적인 숫자를 입력하셨습니다.");
  }
}
