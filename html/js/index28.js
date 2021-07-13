let menuText = "메일, 카페, 블로그, 지식IN, 쇼핑";
let menuList = document.getElementById("menu");
let textSplit = menuText.split(",");
console.log(textSplit.length);
let i = 0;
while (i < textSplit.length) {
  let list = "<li>" + textSplit[i] + "</li>";
  i++;
  menuList.innerHTML += list;
}
// let ulList = document.createElement("ul");
// document.body.appendChild(ulList);
// for (let i = 0; i < 5; i++) {
//   let liList = document.createElement("li");
//   ulList.appendChild(liList);
//   let spanList = document.createElement("span");
//   liList.appendChild(spanList);
//   const arr = ["메일", "카페", "블로그", "지식IN", "쇼핑"];
//   spanList.innerText = arr[i];
// }

function abc() {
  let j = 0;
  let blank = "";
  while (j < textSplit) {
    let code = "<li onclick='link(" + j + ")'>" + textSplit[j] + "</li>";
    blank += code;
    j++;
  }
}
document.getElementById("menu").innerHTML = blank;

function link(aa) {
  //console.log(typeof(aa));
  switch (aa) {
    case 0:
      location.href = "http://naver.com";
      break;
    case 1:
      alert("현재 서비스 준비중 입니다.");
      break;
  }
}
