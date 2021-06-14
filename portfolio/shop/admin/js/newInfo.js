let qTextNum = document.getElementById("qListTitle");
if (qTextNum.innerText.length > 50) {
  qTextNum.innerText = qTextNum.innerText.substring(0, 50) + "...";
}
let pTextNum = document.getElementById("pListContents");
if (pTextNum.innerText.length > 40) {
  pTextNum.innerText = pTextNum.innerText.substring(0, 40) + "...";
}
