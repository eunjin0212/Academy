$(function () {
  // 우편번호 Api 연동
  $("#addrBtn").postcodifyPopUp();
});
// 이용약관 파일 불러오기
function textLoad() {
  let req = new XMLHttpRequest();
  req.open("GET", "./event_agree.txt", true);
  req.onreadystatechange = function () {
    if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
      let res = req.response;
      document.getElementById("agreeText").innerText = res;
    }
  };
  req.send();
}
textLoad();

function eventCheck() {
  const e_agree = document.getElementById("e_agree");
  const e_name = document.getElementById("e_name");
  const e_tel = document.getElementById("e_tel");
  const e_addr = document.getElementById("e_addr");
  const e_road = document.getElementById("e_road");
  const e_dtc = document.getElementById("e_dtc");

  let telId = "";
  for (let i = 0; i < 3; i++) {
    telId += document.getElementById("tel" + i + "").value;
  }
  e_tel.value = telId;

  if (e_agree.checked === true) {
    e_agree.value = "Y";
  } else {
    e_agree.value = "N";
  }

  if (e_agree.value === "N") {
    alert("개인정보 이용에 동의해주세요.");
  } else if (e_name.value === "") {
    alert("성함을 입력해주세요.");
  } else if (e_tel.value.length < 11 && e_tel.value !== "") {
    alert("정상적인 휴대폰 번호가 아닙니다.");
  } else if (e_tel.value === "") {
    alert("휴대폰 번호를 입력해주세요.");
  } else if (e_addr.value === "" || e_road.value === "") {
    alert("주소찾기를 이용해주세요.");
  } else if (e_dtc.value === "") {
    alert("주소를 입력해주세요.");
  } else {
    console.log(e_tel.value);
    alert(`${e_name.value} 님 이벤트 경품 발송을 위한 \n개인정보 수집에 동의 해주셔서 감사합니다.`);
    fm.action = "../../../shop/eventok.php";
    fm.submit();
    location.href = "http://eunjin9639.dothome.co.kr/portfolio/shop/index.html";
  }
}
