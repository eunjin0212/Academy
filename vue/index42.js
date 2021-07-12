let login = '<div class="login">\
                <input type="text" id="mid">\
                <input type="button" value="로그인" onclick="abc()">\
            </div>'
let board = '<div class="event"><ul><li>공지사항1</li><li>공지사항2</li><li>공지사항3</li><li>공지사항4</li><li>공지사항5</li><li>공지사항6</li></ul></div>'

function abc() {
  if (document.getElementById('mid').value == '') {
    alert('아이디를 입력하세요')
  } else {
    alert(`${document.getElementById('mid').value} 님 반갑습니다.`)
  }
}
