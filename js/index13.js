function telCheck() {
  let telCompany = document.getElementById("telCompany").value;
  let t2 = document.getElementById("tel1").value;
  let t3 = document.getElementById("tel2").value;
  let t4 = document.getElementById("tel3").value;
  if (telCompany === "") {
    alert("통신사를 선택해주세요.");
  } else {
    if (t2 === "" || t3 === "" || t4 === "") {
      alert("휴대폰 번호를 정확하게 입력하세요.");
    } else {
      alert("인증번호가 발송되었습니다.");
      document.getElementById("numForm").style.display = "block";
    }
  }
}
function numCheck() {
  if (numForm.num.value === "") {
    alert("인증번호를 입력해 주세요");
    return false;
  } else {
    alert("인증번호가 확인 되었습니다.");
    return;
  }
}
