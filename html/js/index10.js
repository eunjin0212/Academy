function abc() {
  let text = document.getElementById("text").value;
  if (text === "") {
    alert("댓글을 입력하세요.");
    return false;
  } else {
    // fm.submit();
    return true;
  }
}
