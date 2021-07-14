function bannerEffect() {
  let effect
  const valR = document.getElementsByName("effect")[0]
  const valF = document.getElementsByName("effect")[1]
  if (valR.checked == true) {
    effect = "R"
  } else if (valF.checked == true) {
    effect = "F"
  } else if (valR.checked == false && valF.checked == false) {
    alert("효과를 적용해주세요.")
  }
  let datas
  function winck() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest()
    }
  }
  function getdata() {
    if (datas.readyState == XMLHttpRequest.DONE && datas.status == 200) {
      console.log(this.response)
    }
  }
  let geturl = "banner_effect.php?effect=" + effect
  datas = winck()
  datas.onreadystatechange = getdata
  datas.open("GET", geturl, true)
  datas.setRequestHeader("content-type", "application/x-www-form-urlencoded")
  datas.send()
}

function bannerInput() {
  location.href = "admin_newbanner.html"
}

let bannerListVue = new Vue({
  el: "#banner_list",
  data: {
    optionArray: ["배너순서", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    modifyText: "수정",
    deleteText: "삭제",
    bannerArr: "",
    bool: "",
  },
  methods: {
    bannerOptionBtn(option) {
      // 배너 수정, 삭제 버튼
      switch (option) {
        case "modify":
          if (confirm("해당 배너를 수정하시겠습니까?")) {
            location.href = ""
          }
          break
        case "delete":
          if (confirm("해당 배너를 삭제하시겠습니까?")) {
            location.href = ""
          }
          break
      }
    },
    bannerFunc(datas) {
      this.bannerArr = datas
      if (!this.bannerArr) {
        // 배너 이미지 없을 경우
        this.bool = false
      } else {
        this.bool = true
      }
    },
  },
  computed: {
    bannerDataFunc() {
      fetch("admin_banner.json")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          bannerListVue.bannerFunc(data)
        })
        .catch((error) => {
          console.log("bannerList.js Ajax Data Error!")
        })
    },
  },
})
