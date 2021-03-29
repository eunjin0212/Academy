function lottoNum() {
  let lotto = 45; // 랜던함수에 사용할 최대치 정수값
  let num = 1; // 초기값;
  do {
    let random = Math.ceil(Math.random() * lotto);
    document.getElementById("num" + num).value = random;
    num++;
  } while (h <= 6);
}
