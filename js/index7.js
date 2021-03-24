function member(user, id) {
  if (user === "홍길동") {
    if (id === "html" || id === "HTML") {
      console.log("해당 사용자는 정상입니다.");
    } else {
      console.log("해당 사용자는 올바른 정보가 아닙니다.");
    }
  } else {
    console.log("해당 사용자는 올바른 정보가 아닙니다.");
  }
}
member("이순신", "html");

function clickHandle() {
  const input = document.getElementById("input");
  input.value = "홍길동";
}
clickHandle();
