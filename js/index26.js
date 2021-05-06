//   let box = document.createElement("div");
//   document.body.appendChild(box);
let timeOut;
let num = 0;
function time() {
  timeOut = setTimeout(time, 10);
  document.getElementById("box").style.left = num + "px";
  if (num >= 1000) {
    num += 1;
    clearTimeout(timeOut);
  }
}

function stopFunc() {}
