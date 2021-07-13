const input = document.querySelector("input");
let hidden = document.getElementById("overLep");
const idInput = document.getElementById("idInput");
const pass = document.getElementById("pass");
const passCheck = document.getElementById("passCheck");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const vipNum = document.getElementById("vipNum");
const radioCk = document.getElementById("radio");
let radio = radioCk.children;

function checkValue(value, regExp) {
  if (!value.match(regExp)) {
    return false;
  }
  return true;
}

function idCheck() {
  if (idInput.value === "") {
    alert("아이디를 입력해주세요.");
    return;
  } else {
    alert("중복되는 아이디가 없습니다.");
    idInput.readOnly = true;
    return;
  }
}

function passwordCheck() {
  passCheck.addEventListener("focusout", (e) => {
    if (pass.value !== passCheck.value) {
      pass.value = "";
      passCheck.value = "";
      alert("비밀번호를 확인해주세요.");
      pass.focus();
      return;
    } else if (
      pass.value === passCheck.value &&
      pass.value !== "" &&
      passCheck !== ""
    ) {
      alert("비밀번호가 일치합니다.");
      return;
    }
  });
}

function phoneCheck() {
  phone.addEventListener("focusout", (e) => {
    let phoneV = phone.value;
    if (phoneV !== "") {
      let mobile = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
      if (!checkValue(phoneV, mobile)) {
        alert("잘못된 휴대폰 번호입니다.");
        phoneV = "";
        phone.focus();
        return;
      } else if (phoneV == "") {
        alert("휴대폰 번호를 입력해주세요.");
        return;
      } else {
        alert("휴대폰 번호가 확인되었습니다.");
        phone.readOnly = true;
        return;
      }
    }
  });
}

function emailCheck() {
  email.addEventListener("focusout", (e) => {
    let emailV = email.value;
    if (emailV !== "") {
      let emailRegExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
      if (!checkValue(emailV, emailRegExp)) {
        alert("잘못된 이메일 입니다.");
        emailV = "";
        email.focus();
        return;
      } else if (emailV === "") {
        alert("이메일을 입력해주세요.");
        return;
      } else {
        alert("이메일이 확인되었습니다.");
        vipCodeCheck();
        return;
      }
    }
  });
}

function vipCodeCheck() {
  if (vipNum.value !== "") {
    alert("VIP 회원 코드가 확인 되었습니다.");
    return;
  } else {
    return radioCheck();
  }
}

function radioCheck() {
  for (let i = 0; i < radio.length; i++) {
    if (radio.checked == true) {
      hidden.value = "yes";
      console.log(hidden.value);
    }
  }
}

function join() {
  console.log(input.value);
  if (input.value == "") {
    alert("정보를 입력해주세요.");
    return;
  } else if (idInput.readOnly !== true) {
    alert("아이디 중복체크를 해주세요.");
    return;
  } else if (radio.checked !== true) {
    alert("설문조사에 참여해주세요.");
    return;
  } else {
    alert("회원가입이 완료 되었습니다.");
  }
}
