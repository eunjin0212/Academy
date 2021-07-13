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
