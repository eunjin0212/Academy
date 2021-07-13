// function member(user, id) {
//   if (user === "홍길동") {
//     if (id === "html" || id === "HTML") {
//       // console.log("해당 사용자는 정상입니다.");
//     } else {
//       // console.log("해당 사용자는 올바른 정보가 아닙니다.");
//     }
//   } else {
//     // console.log("해당 사용자는 올바른 정보가 아닙니다.");
//   }
// }
// member("이순신", "html");

// function clickHandle() {
//   const input = document.getElementById("input");
//   input.value = "홍길동";
// }

function cal() {
  let aa = Number(document.getElementById("a").value);
  let bb = Number(document.getElementById("b").value);
  let result = (aa + bb) % 2;
  if (result == 1) {
    alert("홀수 입니다.");
  } else {
    alert("짝수 입니다.");
  }
}

function check() {
  let id = document.getElementById("id").value;
  if (id === "") {
    console.log("아이디를 입력해주세요.");
  } else if (id === "test") {
    console.log("중복된 아이디입니다.");
  } else {
    console.log("사용 가능한 아이디입니다.");
  }
}
