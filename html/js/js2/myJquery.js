let timer;
function slideUp(mid) {
  let objects = document.getElementById(mid);
  //console.log(objects.offsetHeight);
  let heights = objects.offsetHeight;
  // offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동함
  timer = setInterval(slide, 10);
  function slide() {
    heights--;
    if (heights <= 0) {
      clearInterval(timer);
      objects.style.display = "none";
    } else {
      objects.style.overflow = "hidden";
      objects.style.height = heights + "px";
    }
  }
}

/* slideDown Plug */
function slideDown(mid) {
  let objects = document.getElementById(mid);
  let heights = objects.offsetHeight;
  timer = setInterval(slide, 10);
  function slide() {
    heights++;
    if (heights >= 100) {
      clearInterval(timer);
    } else {
      objects.style.display = "block";
      objects.style.overflow = "hidden";
      objects.style.height = heights + "px";
    }
  }
}
