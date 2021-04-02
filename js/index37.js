function reFunc() {
  let input = document.getElementById("inp").value;
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  let randomNum = Math.ceil(Math.random() * 10) + 1;
  if (input !== 0) {
    if (Number(input) == randomNum) {
      result.innerText = randomNum + " 당첨!";
    } else {
      input = "";
      result.innerText = "랜덤 숫자는 " + randomNum + " 실패!";
    }
  }
}
