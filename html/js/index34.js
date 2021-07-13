function abc() {
  let aa = Number(document.getElementById("a").value);
  let bb = Number(document.getElementById("b").value);
  let cc = "-";
  if (cc == "+") {
    bbb(aa, bb); //bbb 이름을 가진 함수로 값을 전달함
  } else if (cc == "-") {
    ccc(aa, bb); //ccc 이름을 가진 함수로 값을 전달함
  }
  //단, 주의사항 값을 던질때 해당 변수값이 전역변수, 지역변수인지 확인하고
  //함수를 연결 하게 됩니다.
}
function bbb(c, d) {
  let cc = c + d;
  console.log(cc);
}
function ccc(c, d) {
  let cc = c - d;
  console.log(cc);
}

function zzz() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  gugu(a, b);
}

function gugu(c, d) {
  let h = 1;
  while (h <= d) {
    let k = c * h;
    console.log(c + "*" + h + "=" + k);
    h++;
  }
}

function jj() {
  gugu(4, 12);
}

// function + function
