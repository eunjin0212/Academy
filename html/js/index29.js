let sel = document.getElementById("company");
let opText = ["브랜드바로가기", "MNET", "WAVE", "tvN", "SBS", "KBS", "Xtvn"];

function abc() {
  sel.innerHTML = "";
  // 누를수록 계속 옵션이 추가가 되는 것을 막기 위해서 초기회 시켜주기
  for (let i = 0; i < opText.length; i++) {
    console.log(opText[i]);
    let selText =
      "<option value='" + opText[i] + "'>" + opText[i] + "</option>";
    sel.innerHTML += selText;
  }
}
function link(value) {
  switch (value) {
    case "브랜드바로가기":
      console.log("브랜드바로가기");
      break;
    case opText[1]:
      console.log("MNET");
      location.href = "http://www.mnet.com";
      break;
    case opText[2]:
      console.log("WAVE");
      location.href = "https://www.wavve.com/live/index.html";
      break;
    case opText[3]:
      console.log("tvN");
      location.href = "http://tvn.tving.com/tvn";
      break;
    case opText[4]:
      location.href = "https://www.sbs.co.kr/";
      break;
    case opText[5]:
      location.href = "http://www.kbs.co.kr/";
      break;
    case opText[6]:
      location.href = "http://xtvn.tving.com/xtvn";
      break;
  }
}
