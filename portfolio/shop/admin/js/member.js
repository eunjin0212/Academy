// json data 받기
let data
let plus = Math.floor(Math.random() * 99999)
function ajax() {
  plus++
  function windowFunc() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest()
    }
  }
  function opens() {
    if (data.readyState == XMLHttpRequest.DONE && data.status == 200) {
      dataFunc(this.response)
    }
  }
  data = windowFunc()
  data.onreadystatechange = opens
  data.open('GET', '../shop_members.json?v=100' + plus, true)
  data.send()
}
ajax()
function dataFunc(datas) {
  let dataArr = JSON.parse(datas)
  // console.log(datas)
  if (dataArr != '') {
    document.getElementById('member_tableNone').style.display = 'none'
    document.getElementById('member_tableList').style.display = 'table-row-group'
  }
  Object.keys(
    dataArr.map((i, j) => {
      // console.log(i)
      let idx = dataArr[j]['midx']
      let tr1 = document.createElement('tr')
      let tr2 = document.createElement('tr')
      let memTbody = document.getElementById('member_tableList')

      //고객그룹
      let sl = 'selected'
      let select1, select2, select3, select4
      switch (datas[j]['user_group']) {
        case 'N':
          select4 = sl
          break
        case 'S':
          select3 = sl
          break
        case 'G':
          select2 = sl
          break
        case 'V':
          select1 = sl
          break
      }
      tr1.innerHTML =
        `<td rowspan='2'><input value='${idx}' type='checkbox' name='midx[` +
        [j] +
        `]' class='all_check' onchange='checkFunc(this.checked)' /></td>\
        <td rowspan=2' id='user_id${idx}'>${dataArr[j]['user_id']}</td>\
        <td class='member_name' id='user_name${idx}'>${dataArr[j]['user_name']}</td>\
        <td colspan='6'><label for='member_identify1${idx}'><input type='radio' name='identify' id='member_identify1${idx}' /> 아이핀</label>\
        <label for='member_identify2${idx}'><input type='radio' name='identify' id='member_identify2${idx}' /> 휴대폰</label></td>\
        <td id='user_hp${idx}'>${dataArr[j]['user_hp']}</td>\
        <td class='levelSel'>정상<select id='levelSel${idx}'>\
        <option value="V" '${select1}'>VIP</option>\
        <option value="G" '${select2}'>GOLD</option>\
        <option value="S" '${select3}'>SILVER</option>\
        <option value="N" '${select4}'>NORMAL</option>\
        </select></td>\
        <td id='user_lastlog${idx}'>${dataArr[j]['user_lastlog'].split(' ')[0]}</td>\
        <td rowspan='2' id='user_level${idx}'>${dataArr[j]['user_level']}</td>\
        <td rowspan='2' class='user_modify' id='user_modify${idx}'><button>수정</button><button>그룹</button></td>`

      tr2.innerHTML = `<tr><td class='member_nick' id='user_nick${idx}'>${dataArr[j]['user_nick']}</td>\
        <td class='member_mailVerify' id='mail_accept${idx}'>${dataArr[j]['mail_accept']}</td>\
        <td><input type='checkbox' value='Y' /></td>\
        <td><input type='checkbox' id='mail_agree${idx}' value='Y' /></td>\
        <td><input type='checkbox' id='sms_agree${idx}' value='Y' /></td>\
        <td><input type='checkbox' value='Y' /></td>\
        <td><input type='checkbox' value='Y' /></td>\
        <td id='user_tel${idx}'>${dataArr[j]['user_tel']}</td>\
        <td id='user_point${idx}'>${dataArr[j]['user_point']}</td>\
        <td id='user_indate${idx}'>${dataArr[j]['user_indate'].split(' ')[0]}</td></tr>`

      memTbody.appendChild(tr1)
      memTbody.appendChild(tr2)

      if (dataArr[j]['mail_agree'] === 'Y') {
        document.getElementById('mail_agree' + idx + '').checked = true
      } else {
        document.getElementById('mail_agree' + idx + '').checked = false
      }
      if (dataArr[j]['sms_agree'] === 'Y') {
        document.getElementById('sms_agree' + idx + '').checked = true
      } else {
        document.getElementById('sms_agree' + idx + '').checked = false
      }
    })
  )
}
// 전체 체크
let checkBool
function allCheckFunc(ck) {
  let all_check = document.querySelectorAll('.all_check').length
  if (ck == true) {
    checkBool = true
  } else if (ck == false) {
    checkBool = false
  }
  for (let i = 0; i < all_check - 1 + 1; i++) {
    let class_all = document.getElementsByName('midx[' + i + ']')
    console.log(class_all[0])
    class_all[0].checked = checkBool
  }
}

// 부분체크
function checkFunc(ck) {
  if (ck == false && checkBool == true) {
    document.getElementById('allCheck').checked = false
  }
}

// 하단 버튼
modify = function (part) {
  switch (part) {
    case 1:
      if (confirm('해당 데이터를 수정하시겠습니까?')) {
        // for(let i = 0; )
        if (document.getElementsByClassName('all_check').checked == true) {
          console.log('데이터 수정')
          mfrm.action = './member_modify.php'
          mfrm.submit()
        } else {
          alert('데이터를 선택해주세요.')
          return false
        }
      }
      break
    case 2:
      if (confirm('해당 데이터는 삭제시 복구되지 않습니다. 삭제하시겠습니까?')) {
        mfrm.action = './member_del.php'
        mfrm.submit()
      }
      break
    case 3:
      if (confirm('데이터 전체 삭제를 하시겠습니까?')) {
        console.log('전체 삭제 선택')
      }
      break
  }
}

// 팝업 띄우기
$(function () {
  $('#add_member').click(function () {
    window.open('../add_member.html', '', 'width=1200, height=1000, scrollbars=auto')
  })
})

// 검색 기능
function search() {
  if (sform.stext.value == '') {
    alert('단어를 입력하세요.')
    return false
  } else {
    return true
  }
}

function filters() {
  let search = window.location.search
  let stextSp = search.split('&stext=')
  if (search == '') {
    document.getElementById('stext').value = ''
  } else {
    document.getElementById('stext').value = decodeURI(stextSp[1])
  }
  // 한글변환
  // document.getElementById("stext").value = unescape(stextSp[1]);
  let spartRe = stextSp[0].replace('?search_part=', '')
  let spart = document.getElementById('search_part')
  const sea = spart.length
  for (let i = 0; i < sea; i++) {
    if (spart.options[i].value == spartRe) {
      spart.options.selected = 'selected'
    }
  }
}
