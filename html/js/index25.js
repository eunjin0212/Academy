function checkHandle() {
  let ul = document.getElementById("u_id");
  let li = ul.childNodes;
  console.log(ul.children.length);
  // 빈 공간은 text로 인식, Node 갯수도 증가, 바로 밑에 자식만 확인
  // childNodes은 getElementById, query 두 개민 사용 가능
  // children: 바로 밑에 있는 자식 태그만 인식
}
