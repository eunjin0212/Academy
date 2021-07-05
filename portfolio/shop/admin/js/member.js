// json data 받기
let jsondb;
let db;
let plus = 0;
function ajax() {
  plus++;
  function wck() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    }
  }
  function opens() {
    if (db.readyState == XMLHttpRequest.DONE && db.status == 200) {
      const jsondata = this.response;
      jsondb(jsondata);
    }
  }
  db = wck();
  db.onreadystatechange = opens;
  db.open("GET", "../shop_members.json?v=" + plus, true);
  db.send();
}
ajax();

jsondb = function (data) {
  $(function () {
    let $data = JSON.parse(data);
    if ($data !== "") {
      $("#member_tableNone").css("display", "none");
      $("#member_tableList").css("display", "table-row-group");
    } else {
      // 데이터 없을시
      $("#member_tableNone").css("display", "table-footer-group");
      $("#member_tableList").css("display", "none");
    }
  });

  let dataArr = JSON.parse(data);

  Object.keys(
    dataArr.map((i, j) => {
      let idx = dataArr[j]["midx"];
      let tr1 = document.createElement("tr");
      let tr2 = document.createElement("tr");
      let memTbody = document.getElementById("member_tableList");
      Object.keys(
        dataArr.map((k, l) => {
          tr1.innerHTML = `<td rowspan='2'><input type='checkbox' id='user_select${idx}'/></td><td rowspan=2' id='user_id${idx}'>${
            dataArr[j]["user_id"]
          }</td><td class='member_name' id='user_name${idx}'>${
            dataArr[j]["user_name"]
          }</td><td colspan='6'><label for='member_identify1${idx}'><input type='radio' name='identify' id='member_identify1${idx}' /> 아이핀</label><label for='member_identify2${idx}'><input type='radio' name='identify' id='member_identify2${idx}' /> 휴대폰</label></td><td id='user_hp${idx}'>${
            dataArr[j]["user_hp"]
          }</td><td>정상<select id='levelSel${idx}'><option value='' id='user_level${idx}'>${dataArr[j]["user_level"]}</option></select></td><td id='user_lastlog${idx}'>${
            dataArr[j]["user_lastlog"].split(" ")[0]
          }</td><td rowspan='2' id='user_group${idx}'>${dataArr[j]["user_group"]}</td><td rowspan='2' class='user_modify' id='user_modify${idx}'>수정</td>`;
          tr2.innerHTML = `<tr><td class='member_nick' id='user_nick${idx}'>${dataArr[j]["user_nick"]}</td><td class='member_mailVerify' id='mail_accept${idx}'>${
            dataArr[j]["mail_accept"]
          }</td><td><input type='checkbox' /></td><td><input type='checkbox' id='mail_agree${idx}' /></td><td><input type='checkbox' id='sms_agree${idx}' /></td><td><input type='checkbox' /></td><td><input type='checkbox' /></td><td id='user_tel${idx}'>${
            dataArr[j]["user_tel"]
          }</td><td id='user_point${idx}'>${dataArr[j]["user_point"]}</td><td id='user_indate${idx}'>${dataArr[j]["user_indate"].split(" ")[0]}</td></tr>`;
          memTbody.appendChild(tr1);
          memTbody.appendChild(tr2);
        })
      );
      if (dataArr[j]["mail_agree"] === "Y") {
        document.getElementById("mail_agree" + idx + "").checked = true;
      } else {
        document.getElementById("mail_agree" + idx + "").checked = false;
      }
      if (dataArr[j]["sms_agree"] === "Y") {
        document.getElementById("sms_agree" + idx + "").checked = true;
      } else {
        document.getElementById("sms_agree" + idx + "").checked = false;
      }
    })
  );
};

// 검색 기능
function search() {
  if (sform.stext.value == "") {
    alert("단어를 입력하세요.");
    return false;
  } else {
    return true;
  }
}

function filters() {
  let search = window.location.search;
  let stextSp = search.split("&stext=");
  if (search == "") {
    document.getElementById("stext").value = "";
  } else {
    document.getElementById("stext").value = decodeURI(stextSp[1]);
  }
  // 한글변환
  // document.getElementById("stext").value = unescape(stextSp[1]);
  let spartRe = stextSp[0].replace("?search_part=", "");
  let spart = document.getElementById("search_part");
  const sea = spart.length;
  for (let i = 0; i < sea; i++) {
    if (spart.options[i].value == spartRe) {
      spart.options.selected = "selected";
    }
  }
}
// 팝업 띄우기
$(function () {
  $("#add_member").click(function () {
    window.open("../add_member.html", "", "width=1000,height=1000,scrollbars=auto,resizable=no,location=yes,menubar=yes");
  });
});
