function banner() {
  let ol = document.getElementById("ol_id");
  let ul = document.getElementById("ul_id");
  let olChild = ol.children.length;
  for (let i = 0; i < olChild; i++) {
    let li = "<li></li>";
    ul.innerHTML += li;
  }
}
banner();
