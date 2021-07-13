// let a = "abcdefg";
// let b = a.substr(3, 2);
// let c = a.substring(2, 4);
// console.log(b, c);

// // String.substring(start, end) : (시작점 ~ 끝 전까지 추출)
// // String.substr(start, length) : (시작점 ~ 길이 까지만 추출)
// function sub2() {
//   let a = "010-1234-5678";
//   console.log(a.substring(4, 8));
//   console.log(a.substr(4, 4));
// }
// sub2();

function bbb() {
  let aa = "홍길동, 이순신, 강감찬";
  let bb = aa.split(",");
  let cc = bb[0] + bb[1] + bb[2];
  console.log(cc);
  // split() : (안의 것을 제고하고 배열에 담음)
}
bbb();
