let timer;
let num = 5;
function startFunc() {
  num = num - 1;
  document.getElementById("sec").innerText = num;
  if (num > 0) {
    timer = setTimeout(startFunc, 1000);
  } else {
    clearTimeout(timer);
  }
}
function stopFunc() {
  clearTimeout(timer);
}
