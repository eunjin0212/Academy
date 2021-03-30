function lottoNum() {
  let lotto = 45; // 랜던함수에 사용할 최대치 정수값
  let blank = "";
  for (let j = 0; j < 6; j++) {
    let inputClassNum = "inputCss" + j;
    let inputValue;
    for (let i = 1; i < 7; i++) {
      let lottoNumber = Math.floor(Math.random() * lotto);
      //document.write(lottoNumber + ",");
      inputValue = lottoNumber;
    }
    let input =
      "<input class='" +
      inputClassNum +
      "' type='text'  value='" +
      inputValue +
      "'/>";
    blank = input + blank;
  }
  document.getElementById("num").innerHTML = blank;
}
