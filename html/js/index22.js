function abc() {
  //   let userName = "홍길동";
  //   document.getElementById("a").innertext = userName;
  //   // 문자만 넣을 때
  //   let user = "<font color = 'blue'>홍길동</font>";
  //   document.getElementById("a").innerHTML = user;
  //   // html 태그로 넣을 때
  //   let cc = "";
  //   for (let i = 1; i < 5; i++) {
  //     let spanClassNum = "spanCss" + i;
  //     let span = "<span class='" + spanClassNum + "'>" + i + "</span>";
  //     cc = cc + span;
  //   }
  //   document.getElementById("a").innerHTML = cc;
  for (let i = 1; i < 9; i++) {
    let liClassNum = "liCss" + i;
    let li = "<li class='" + liClassNum + "'></li>";
    document.getElementById("list").innerHTML += li;
  }
}
// += : 더하고 결과값을 덮어씌워 출력한다.
// let a = a + 1 는 let a += 1 이다.
