//onclick라는 이벤트를 사용하지 않고 실행하는 방법
// function aaa() {
//   //해당 함수는 실행을 하지않고 대기 상태임
//   var a;
//   for (a = 1; a < 6; a++) {
//     var b = "<input type='checkbox'>" + a + "<br>";
//     document.getElementById("list").innerHTML += b;
//   }
// }

// function ck() {
//   var ea = document.getElementById("list");
//   var node = ea.childNodes.length; //하위 자식노드가 몇개 있는지 개수를 가져옴
//   console.log(node);

//   //var node = ea.childNodes;
//   //해당 아이디 안에 자식노드가 어떤것이 있는지 확인하는 사항
//   //node[0]~[11] : 해당 노드가 가지고 있는 텍스트, 태그명을 확인할 수 있음.
//   //console.log(node[3]);

//   /*
//         node[1].checked = true;
//         node[4].checked = true;
//         node[7].checked = true;
//         node[10].checked = true;
//         node[13].checked = true;
//         */
// }

function inputFunc() {
  for (let i = 1; i < 6; i++) {
    //   let inner =
    //     "<input type='checkbox' id='" +
    //     i +
    //     "'/><label for='" +
    //     i +
    //     "'>" +
    //     i +
    //     "</label><br>";
    let inner = "<input type='checkbox' id='" + i + "'/>" + i + "<br/>";
    document.getElementById("list").innerHTML += inner;
  }
}
inputFunc();
function check() {
  let allChecked = document.getElementById("all").checked;
  let inputCheck = document.getElementById("list");
  let node = inputCheck.childNodes.length;
  for (let j = 0; j < node; j++) {
    let child = inputCheck.childNodes;
    if (child[j].nodeName === "INPUT") {
      if (allChecked == true) {
        child[j].checked = true;
      } else {
        child[j].checked = false;
      }
    }
  }
}
