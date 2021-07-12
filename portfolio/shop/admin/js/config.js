function info_ok() {
  let cpno = document.getElementById("info_cpno").value;
  let companyNumber = cpno.replaceAll("-", "");
  if (companyNumber.length < 10 || companyNumber.length > 12) {
    alert("사업자 번호를 확인해주세요.");
    return false;
  } else {
    return true;
  }
  return false;
}

let checkNum = 0;
function use_point() {
  const pointUseCB = document.getElementById("info_point_use");
  if (checkNum === 0) {
    pointUseCB.value = "Y";
    document.getElementById("info_point").readonly = true;
    checkNum++;
  } else {
    pointUseCB.value = "N";
    document.getElementById("info_point").readonly = false;
    checkNum = 0;
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
      cpname.value = getData[j]["info_cpname"];
      cpno.value = getData[j]["info_cpno"];
      ceo.value = getData[j]["info_ceo"];
      tel.value = getData[j]["info_tel"];
      cn.value = getData[j]["info_cn"];
      addr.value = getData[j]["info_addr"];
      addrdtc.value = getData[j]["info_addrdtc"];
      manager.value = getData[j]["info_manager"];
      managerEmail.value = getData[j]["info_manager_email"];
      siteNm.value = getData[j]["info_site_nm"];
      siteEmail.value = getData[j]["info_site_email"];
      siteEmailnm.value = getData[j]["info_site_emailnm"];

      if (i === "info_fax" && getData[j]["info_fax"] !== "") {
        fax.value = getData[j]["info_fax"];
      } else if (i === "info_fax" && getData[j]["info_fax"] === "") {
        fax.value = noData;
      }

      if (i === "info_cnetc" && getData[j]["info_cnetc"] !== "") {
        cnetc.value = getData[j]["info_cnetc"];
      } else if (i === "info_cnetc" && getData[j]["info_cnetc"] === "") {
        cnetc.value = noData;
      }

      if (i === "info_site_ico" && getData[j]["info_site_ico"] !== "") {
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
      }

      if (i === "info_point_use" && getData[j]["info_point_use"] === "Y") {
        pointUse.checked = true;
      } else if (
        i === "info_point_use" &&
        getData[j]["info_point_use"] === "N"
      ) {
        pointUse.checked = false;
      }

      if (i === "info_point" && getData[j]["info_point"] !== "") {
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
  document.open(url, "img", "width=400 height=400");
}

function delHandle() {
  alert("정상적으로 이미지가 삭제 되었습니다");
  window.location.reload();
}
