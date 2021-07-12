function checks() {
  if (adm.a_id.value === "") {
    alert("아이디를 입력하세요");
    adm.a_id.focus();
    return false;
  } else if (adm.a_pw.value === "") {
    alert("패스워드를 입력하세요");
    adm.a_pw.focus();
    return false;
  } else {
    adm.action = "login_ok.php";
    return true;
  }
}

// 아이디 저장
function id_save() {
  let userid = document.getElementById("a_id").value;
  let useCheck = adm.a_save.checked;

  if (userid !== "" && useCheck === true) {
    document.cookie = "adm_id=" + escape(adm.a_id.value);
    // 쿠키생성
  } else {
    document.cookie = "adm_id="; // 쿠키 초기화
    alert("아이디를 입력하셔야만 됩니다.");
    adm.a_save.checked = false;
    adm.a_id.focus();
  }
}

// let admid = "";
// let cookieData = document.cookie.split(";");
// let loginData = cookieData[0].split("=");
// let data = loginData[1];
// if (data !== "") {
//   //   adm.a_id.value = loginData[1];
//   //   adm.a_save.checked = true;

//   if (data === undefined) {
//     adm.a_id.value = "";
//   } else {
//     adm.a_id.value = data;
//     adm.a_save.checked = true;
//   }
// } else {
//   adm.a_id.value = "";
// }
