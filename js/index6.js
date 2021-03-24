function abc(a, b) {
  let num = 1;
  let result;
  //   for (let i = 3; i < 8; i++) {
  //     result = i * num;
  //     console.log("for" + i + "*" + num + "=" + result);
  //     num++;
  //   }
  while (num <= b) {
    result = a * num;
    console.log(a + "*" + num + "=" + result);
    num++;
  }
}
function ccc(id, password) {
  const userId = "kim";
  const userPassword = "a1234";
  if (userId !== id || password !== userPassword) {
    alert("아이디 및 패스워드를 확인하세요.");
  } else {
    alert("로그인 되었습니다.");
  }
}
ccc("kim", "a1234");
