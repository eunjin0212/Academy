function fontclass(part) {
  let listView = document.getElementById("listView").classList;
  let classN = "";

  if (part === "1") {
    classN = "section";
    document.getElementById("listView").className = classN;
  } else {
    if (part === "2") {
      classN = "font_view2";
      listView.remove("font_view3");
    } else if (part === "3") {
      classN = "font_view3";
      listView.remove("font_view2");
    }
    document.getElementById("listView").className += " " + classN;
  }
}
