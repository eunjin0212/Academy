function aaa() {
  let a = document.getElementById("ck").checked;
  let b = document.getElementById("ra").checked;
  if (a == false && b == false) {
    alert("동의함에 체크해주세요.");
  } else {
    alert("동의합니다.");
  }
}

let ck1 = document.getElementById("ck1").checked;
let ck2 = document.getElementById("ck2").checked;
function checkHandle() {
  console.log(ck1);
  if (ck1 === false && ck2 === false) {
    alert("광고 수신 동의에 대해 선택해주세요.");
  } else {
    alert("서비스를 등록합니다.");
  }
}
function checkedFnc() {
  let chkList = document.querySelectorAll("input[name=fruit]:checked");
  console.log(chkList.length);
  if (chkList.length < 2) {
    alert("2가지 이상 과일을 선택하세요.");
  } else {
    alert("정상적으로 등록되었습니다.");
  }
}
function checkedFnc2() {
  for (let i = 0; i < 5; i++) {
    let check = form.fruit[i].checked;
    let count = 0;
    console.log(typeof check);
    if (check === true) {
      count = count + 1;
    }
  }
  if (count < 2) {
    alert("2가지 이상 과일을 선택하세요.");
  } else {
    alert("정상적으로 등록되었습니다.");
  }
}
