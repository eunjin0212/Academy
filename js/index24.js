function color() {
  let input = Number(document.getElementById("box").value);
  let bodys = document.getElementById("body");
  for (let i = 1; i <= input; i++) {
    let div = "<div id='colorBox" + i + "'></div>";
    bodys.innerHTML += div;
  }
  if (input == "" || isNaN(input) == true) {
    alert("숫자를 입력해주세요.");
  } else if (input > 7) {
    alert("옳바른 값을 입력해주세요. 1~8");
  } else {
    document.getElementById(`colorBox${input}`);
  }
}
