function abc() {
  let x = Number(document.getElementById("calInput1").value);
  let z = Number(document.getElementById("calInput2").value); // Number 써줘야만 + 가 먹힘
  let result = x + z;
  if (result > 20) {
    console.log("해당 값은 20보다 큽니다.");
  } else if (result < 20) {
    console.log("해당 값은 20보다 작습니다.");
  } else if (result == 20) {
    console.log("정상적인 값입니다.");
  }
}
