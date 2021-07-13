function jsonData() {
  let request = new XMLHttpRequest();

  request.open("GET", "./admin_info.json", true);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let data = request.response;
    openImg(data);
    configData(data);
  };
}
jsonData();
