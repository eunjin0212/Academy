function jsonData() {
  let request = new XMLHttpRequest();

  request.open("POST", "admin_info.json", true);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let data = request.response;
    configData(data);
  };
}
jsonData();

function phpData() {
  let info_idx = document.getElementById("info_idx").value;
  let info_img = document.getElementById("info_img").value;
  let favi = "idx=" + info_idx + "&delimg=" + info_img;
  function requestData() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    }
  }
  function favicon() {
    if (request.readyState === XMLHttpRequest.DONE && request.status == 200) {
      delHandle();
    }
  }
  request = requestData();
  request.onreadystatechange = favicon;
  request.open("POST", "img_del.php", true);
  request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  request.send(favi);
}
