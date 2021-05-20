$(function () {
  $("#addressSearch").click(function () {
    window.open("./addpopup.html", "", "width=500px, height=300px");
  });
});
function joinForm() {
  let m_id = document.getElementById("m_id").value;
  let m_pass = document.getElementById("m_pass").value;
  let passCheck = document.getElementById("passCheck").value;
  let m_name = document.getElementById("m_name").value;
  let m_nick = document.getElementById("m_nick").value;
  let m_email = document.getElementById("m_email").value;
  let telNum0 = document.getElementById("telNum0").value;
  let telNum1 = document.getElementById("telNum1").value;
  let telNum2 = document.getElementById("telNum2").value;
  let phNum0 = document.getElementById("phNum0").value;
  let phNum1 = document.getElementById("phNum1").value;
  let phNum2 = document.getElementById("phNum2").value;
  let m_post = document.getElementById("m_post").value;
  let m_addr = document.getElementById("m_addr").value;
  let m_addr_dtc = document.getElementById("m_addr_dtc").value;
  let m_tel = document.getElementById("m_tel").value;
  m_tel = telNum0 + telNum1 + telNum2;
  let m_hp = document.getElementById("m_hp").value;
  m_hp = phNum0 + phNum1 + phNum2;
  if (m_id !== "") {
    if (m_id.length < 4) {
      alert("4자 이상 입력해주세요.");
      return false;
    }
  } else if (m_pass !== "" && passCheck !== "") {
    if (m_pass !== passCheck) {
      alert("동일한 비밀번호가 입력되어야 합니다.");
      return false;
    }
  } else if (m_name === "") {
    alert("이름을 입력해주세요.");
    return false;
  } else if (m_nick === "") {
    alert("닉네임을 입력해주세요.");
    return false;
  } else if (m_email === "") {
    alert("이메일을 입력해주세요.");
    return false;
  } else if (telNum0 === "" || telNum1 === "" || telNum2 === "") {
    alert("전화번호를 입력해주세요.");
    return false;
  } else if (telNum0 !== "" && telNum1 !== "" && telNum2 !== "") {
    if (isNaN(Number(m_tel)) === true) {
      alert("정확한 연락처를 입력하세요");
      return false;
    } else if (isNaN(Number(m_tel)) === false) {
      // 숫자면 실행
      if (m_tel.length < 8) {
        alert("정확한 연락처를 입력하세요");
        return false;
      } else {
        alert("전화번호는 " + telNum0 + "-" + telNum1 + "-" + telNum2);
      }
    }
  } else if (phNum0 === "" || phNum1 === "" || phNum2 === "") {
    alert("휴대폰 번호를 입력해주세요.");
    return false;
  } else if (phNum0 !== "" && phNum1 !== "" && phNum2 !== "") {
    if (isNaN(Number(m_hp)) === true) {
      alert("정확한 연락처를 입력하세요");
      return false;
    } else if (isNaN(Number(m_hp)) === false) {
      // 숫자면 실행
      if (m_hp.length < 11) {
        alert("정확한 연락처를 입력하세요");
        return false;
      } else {
        alert("휴대폰 번호는 " + phNum0 + "-" + phNum1 + "-" + phNum2);
      }
    }
  } else if (m_post === "" || m_addr === "" || m_addr_dtc === "") {
    alert("주소 검색을 해주세요.");
    return false;
  } else {
    document.getElementById("security").value = "memberok";
    document.f.submit();
  }
}
function cancelBtn() {
  //   m_id = "";
  //   m_pass = "";
  //   passCheck = "";
  //   m_name = "";
  //   m_nick = "";
  //   m_email = "";
  //   telNum0 = "";
  //   telNum1 = "";
  //   telNum2 = "";
  //   phNum0 = "";
  //   phNum1 = "";
  //   phNum2 = "";
  //   m_post = "";
  //   m_addr = "";
  //   m_addr_dtc = "";
  //   m_tel = "";
  //   m_hp = "";
  location.href = "./index.html";
}
