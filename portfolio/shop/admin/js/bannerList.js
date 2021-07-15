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

let listNone = document.getElementsByClassName("list_none")
let list = document.getElementsByClassName("list")
let boolean = false
let bannerListVue = new Vue({
  el: "#banner_list",
  data: {
    optionArray: ["배너순서", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    modifyText: "수정",
    deleteText: "삭제",
    bannerArr: [],
    linksText: "",
    delIdxVal: "",
    bool: "",
  },
  methods: {
    bannerDeleteBtn(idx) {
      // 배너 삭제 버튼
      this.delIdxVal = idx
      if (confirm("해당 배너를 삭제하시겠습니까?")) {
        location.href = "./banner_del.php?del_idx=" + idx
        window.location.reload()
      }
    },
    bannerModifyBtn(idx) {
      // 배너 수정 버튼
      if (confirm("해당 배너를 수정하시겠습니까?")) {
        location.href = ""
      }
    },
    bannerFunc(datas) {
      this.bool = true
      for (let i in datas) {
        this.bannerArr.push({
          num: Number(i) + 1,
          idx: datas[i]["bidx"],
          name: datas[i]["bname"],
          img: datas[i]["bimg"],
          link: datas[i]["bimg"],
          indate: datas[i]["bindate"].substring(0, 10),
          linkText: datas[i]["bimg"].substring(32, 55) + "...",
        })
      }
    },
    popup_img(src) {
      // 배너 이미지 클릭
      window.open(src, "", "_blank")
    },
  },
  computed: {
    bannerDataFunc() {
      fetch("admin_banner.json?v=<?=$v?>")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          bannerListVue.bannerFunc(data)
        })
        .catch((error) => {
          error = new Error()
          if (error == "Error") {
            this.bool = false
          }
        })
    },
  },
})
