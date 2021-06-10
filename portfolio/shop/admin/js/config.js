function info_ok() {
  let cpno = document.getElementById("info_cpno").value;
  let companyNumber = cpno.replaceAll("-", "");
  console.log(companyNumber.length);
  if (companyNumber.length < 10 || companyNumber.length > 12) {
    alert("사업자 번호를 확인해주세요.");
    return false;
  } else {
    return true;
  }
  return false;
}
// 593-85-00737

function use_point() {
  const pointUseCB = document.getElementById("info_point_use");
  if (pointUseCB.checked === true) {
    pointUseCB.value = "Y";
    document.getElementById("info_point").disabled = false;
  } else {
    pointUseCB.value = "N";
    document.getElementById("info_point").disabled = true;
  }
}

// json 파일 받아서 폼 채우기
function configData(getData) {
  let cpname = document.getElementById("cpname");
  let cpno = document.getElementById("cpno");
  let ceo = document.getElementById("ceo");
  let tel = document.getElementById("tel");
  let fax = document.getElementById("info_fax");
  let cn = document.getElementById("cn");
  let cnetc = document.getElementById("info_cnetc");
  let addr = document.getElementById("addr");
  let addrdtc = document.getElementById("addrdtc");
  let manager = document.getElementById("manager");
  let managerEmail = document.getElementById("managerEmail");
  let siteNm = document.getElementById("info_site_nm");
  let siteIco = document.getElementById("info_site_ico");
  let siteAdmin = document.getElementById("info_site_admin");
  let siteEmail = document.getElementById("siteEmail");
  let siteEmailnm = document.getElementById("info_site_emailnm");
  let pointUse = document.getElementById("info_point_use");
  let point = document.getElementById("info_point");
  let noData = "No data";
  let fimg_on = document.getElementById("fimg_on");
  let fimg = document.getElementById("fimg");
  let fimg_off = document.getElementById("fimg_off");

  let iUrl = getData[0]["info_site_ico"];
  for (let i in getData[0]) {
    for (let j in getData) {
      if (i === "info_cpname") {
        cpname.value = getData[j]["info_cpname"];
      } else if (i === "info_cpno") {
        cpno.value = getData[j]["info_cpno"];
      } else if (i === "info_ceo") {
        ceo.value = getData[j]["info_ceo"];
      } else if (i === "info_tel") {
        tel.value = getData[j]["info_tel"];
      } else if (i === "info_fax" && getData[j]["info_fax"] !== "") {
        fax.value = getData[j]["info_fax"];
      } else if (i === "info_fax" && getData[j]["info_fax"] === "") {
        fax.value = noData;
      } else if (i === "info_cn") {
        cn.value = getData[j]["info_cn"];
      } else if (i === "info_cnetc" && getData[j]["info_cnetc"] !== "") {
        cnetc.value = getData[j]["info_cnetc"];
      } else if (i === "info_cnetc" && getData[j]["info_cnetc"] === "") {
        cnetc.value = noData;
      } else if (i === "info_addr") {
        addr.value = getData[j]["info_addr"];
      } else if (i === "info_addrdtc") {
        addrdtc.value = getData[j]["info_addrdtc"];
      } else if (i === "info_manager") {
        manager.value = getData[j]["info_manager"];
      } else if (i === "info_manager_email") {
        managerEmail.value = getData[j]["info_manager_email"];
      } else if (i === "info_site_nm") {
        siteNm.value = getData[j]["info_site_nm"];
      } else if (i === "info_site_ico" && getData[j]["info_site_ico"] !== "") {
        // console.log(getData[j]["info_site_ico"]);
        fimg_on.style.display = "flex";
        fimg.style.background = "url(" + getData[j]["info_site_ico"] + ")";
        fimg.style.backgroundSize = "cover";
        fimg.style.backgroundRepeat = "no-repeat";
        fimg_off.style.display = "none";
        fimg.setAttribute("src", iUrl);
        document.getElementById("info_img").value = getData[j]["info_site_ico"];
        document.getElementById("info_idx").value = getData[j]["info_idx"];
      } else if (i === "info_site_ico" && getData[j]["info_site_ico"] === "") {
        fimg_on.style.display = "none";
        fimg_off.style.display = "flex";
      } else if (i === "info_site_email") {
        siteEmail.value = getData[j]["info_site_email"];
      } else if (i === "info_site_emailnm") {
        siteEmailnm.value = getData[j]["info_site_emailnm"];
      } else if (
        i === "info_point_use" &&
        getData[j]["info_point_use"] === "Y"
      ) {
        pointUse.checked = true;
      } else if (
        i === "info_point_use" &&
        getData[j]["info_point_use"] === "N"
      ) {
        pointUse.checked = false;
      } else if (i === "info_point" && getData[j]["info_point"] !== "") {
        point.value = getData[j]["info_point"];
      } else if (i === "info_point" && getData[j]["info_point"] === "") {
        point.value = noData;
      }
    }
  }
}

function openImg() {
  const fimgBg = document.getElementById("fimg").style.backgroundImage;
  let bg = fimgBg.split("..");
  const url = "http://eunjin9639.dothome.co.kr/portfolio/shop" + bg[1];
  //http://eunjin9639.dothome.co.kr/portfolio/shop/ico/20210610010533.png
  console.log(url);
  document.open(url, "img", "width=400 height=400");
}

function delHandle() {
  alert("정상적으로 이미지가 삭제 되었습니다");
  window.location.reload();
}
