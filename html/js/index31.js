// function abc() {
//   let word1 = "김은진은 O 형입니다.";
//   let word2 = "김창회는 A 형입니다.";
//   let a = word1.match(/O/g); // null 뜨면 매치되는게 없음. 단어를 검색해주는 것 (/여기에 단어/g)들어가야함
//   console.log(a);
// }
// abc();

function clickHandle() {
  let word = "이순신님은 A형 입니다.";
  let word2 = "홍길동님은 O형 입니다. 용감하십니다.";

  let a = word.match(/님은/g);
  let b = word2.match(/소심|용감|무상/g);
  //match |는 여러단어를 한번에 검색할때

  if (b !== null) {
    alert("해당 단어는 사용하실 수 없습니다.");
  } else {
    alert("정상적으로 등록 되었습니다.");
  }
}
function ok() {
  let inputV = document.getElementById("tel").value;
  let inputL = inputV.length;
  console.log(inputL);
  if (inputV === "") {
    alert("인증번호를 입력하세요.");
  } else {
    if (inputL < 6) {
      let word = inputV.match(/[a-z]|[A-Z]|[ㄱ-ㅎ]|[ㅏ-ㅣ]|[가-히]/g);
      // [-] 단어의 범위
      if (word !== null) {
        alert("숫자만 입력하세요.");
      }
      alert("인증번호는 6자리 입니다.");
    } else {
      alert("확인되었습니다.");
    }
  }
}

// else {
//   }
