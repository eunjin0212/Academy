function btnHandle() {
  let wordInput = document.getElementById("word").value;
  let rep = wordInput.replace("일본", "한국");
  // replace : 해당 단어를 다른 단어로 변경해줌 ('해당 단어', '바뀔 단어'); 한 번 밖에 안바뀜, 동일한 단어가 있을 경우 첫번째에 해당 되는 단어만 변경이 됨
  console.log(rep);
  let repAll = wordInput.replaceAll(" ", "");
  // 전체 문장중에서 해당 단어를 다 바꿈;
  console.log(repAll);
}
function btnHandle2() {
  let phoneNum = document.getElementById("phone1").value;
  let phoneNumL = phoneNum.length;
  if (phoneNumL >= 11) {
    // let a = phoneNum.replaceAll("-", "");
    // let b = phoneNum.replaceAll(" ", "");
    // let c = phoneNum.replaceAll(".", "");
    // console.log(a, b, c); 엣지 에전 버전은 오류남 인터넷 익스플로어도 오류남 모바일은 가능
    let a = phoneNum.replace(/-/g, "");
    let b = phoneNum.replace(/' '/g, "");
    let c = phoneNum.replace(/./g, "");
  } else {
    alert("휴대폰번호 11자리를 입력해주세요.");
  }
}
// 단어 바꾸기
