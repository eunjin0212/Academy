function dataList(e) {
  let data = e.split("\n");
  window.opener.document.getElementById("m_post").value = data[0];

  window.opener.document.getElementById("m_addr").value = data[1];
  self.close();
}
function popCloseBtn() {
  self.close();
}
$(function () {
  $("#list_data").slideDown(1000);
});
