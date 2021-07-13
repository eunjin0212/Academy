//우편번호 API연동
$(function () {
  $('#addsearch').postcodifyPopUp()
})
// document.getElementById('addsearch').postcodifyPopUp()
// 보안코드
let count = 0
document.getElementById('refresh').addEventListener('click', function () {
  count++
  document.getElementById('codes').setAttribute('src', './code.php?v=' + count)
})

const info1 = () => {
  const M_id = document.getElementById('M_id').value
  const M_pass0 = document.getElementById('M_pass0').value
  const M_pass1 = document.getElementById('M_pass1').value
  if (M_id === '') {
    alert('아이디를 입력하세요')
  } else if (M_pass0 === '' || M_pass1 === '') {
    alert('비밀번호를 입력해주세요.')
  } else {
    if (M_id.length < 4) {
      alert('아이디는 최소 3자 이상 입력하세요')
    } else {
      let match = /^(?=.*[~!@#$%^&*+-=`.,?"])/
      if (match.test(M_id) === true) {
        alert('아이디는 _ 외에 다른 특수문자는 사용하실 수 없습니다.')
      } else {
        if (M_pass0 !== M_pass1) {
          alert('동일한 패스워드를 입력하세요')
        } else {
          info2()
        }
      }
    }
  }
}

const info2 = () => {
  const M_name = document.getElementById('M_name').value
  const M_nick = document.getElementById('M_nick').value
  const M_email = document.getElementById('M_email').value
  const M_tel = document.getElementById('M_tel').value
  const M_post = document.getElementById('M_post').value
  const M_addr = document.getElementById('M_addr').value
  const M_security = document.getElementById('M_security').value

  if (M_name === '') {
    alert('고객명을 입력해 주세요')
  } else if (M_nick === '') {
    alert('닉네임을 입력해 주세요')
  } else if (M_email === '') {
    alert('이메일을 입력하세요')
  } else if (M_tel === '') {
    alert('휴대폰 번호를 입력하세요')
  } else if (M_post === '') {
    alert('도로명 주소를 입력해 주시길 바랍니다.')
  } else if (M_addr === '') {
    alert('상세 주소를 입력해 주시길 바랍니다.')
  } else if (M_security === '') {
    alert('보안코드를 입력해 주시길 바랍니다.')
  } else {
    etc()
  }
}

const etc = () => {
  const mfrm = document.getElementById('mfrm')
  const email = document.getElementById('M_email')
  const nick = document.getElementById('M_nick')
  if (nick.value !== '') {
    let match = /^(?=.*[!@#$%^&*+-=`.,?_"])/
    if (match.test(nick.value) === true) {
      alert('특수문자는 사용하지 못합니다.')
    } else if (nick.value.length < 2) {
      alert('닉네임은 2자이상 부터 사용할 수 있습니다.')
    } else {
      let ck = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[0-9a-zA-Z]/g
      if (email.value.match(ck) === null) {
        alert('올바른 이메일 주소를 입력하세요')
      } else {
        document.getElementById('mfrm').submit()
      }
    }
  }
}
