//상하, 좌우 별도로 변수값을 생성 해야함

let k = 0,
  kk = 0;

let j = 10,
  jj = 10;

function abc() {
  //상:38 하:40 좌:37 우:39

  let a = event.keyCode;
  game(a);
  //console.log(a);
}
function game(a) {
  switch (a) {
    case 40:
      k = k + j;
      document.getElementById("box").style.top = k + "px";
      break;
    case 38:
      k = k - j;
      document.getElementById("box").style.top = k + "px";
      break;
    case 39:
      kk = kk + jj;
      document.getElementById("box").style.left = kk + "px";
      break;
    case 37:
      kk = kk - jj;
      document.getElementById("box").style.left = kk + "px";
      break;

    case 32:
      document.getElementById("box").style.backgroundColor = "blue";
      //document.getElementById("box").style.textAlign="center";
      //스타일사용시 - 뒤에오는 알파벳이 대문자가된다!

      //backgroundColor의 C는 대문자로 쓴다.(JS)
      //css 에서 margin-left 와 같이 "-" 가 들어갈 경우 "-"를 빼서 입력한다.
      // "-" 다음에 있는 영문은 대문자로 쓴다.
      // ex) marginLeft=""   /   textAlign="center"   /  backgruondColor=""

      break;

    case 13:
      document.getElementById("box").style.display = "none";
      break;
  }
}
