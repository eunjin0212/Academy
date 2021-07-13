function clickHandle() {
  document.getElementById("input1").readOnly = false;
}
function clickHandle1() {
  let ok = "";
  for (let i = 0; i < 5; i++) {
    let check = survey.a[i].checked;
    if (check === true) {
      ok = "ok";
    }
  }
  if (ok !== "ok") {
    alert("한가지를 선택해주셔야 합니다.");
  } else {
    alert("설문조사에 응해주셔서 감사합니다.");
  }
}
