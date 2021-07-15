let bannerInputVue = new Vue({
  el: "#banner_input",
  data: {
    bname: "",
    bimg: "",
    blink: bfrm.banner_url.value,
    list: "목록",
    register: "배너등록",
  },
  methods: {
    backToList() {
      location.href = "admin_banner.html"
    },
    uploadBanner() {
      if (!this.bname) {
        alert("배너명을 입력하세요.")
      } else if (!this.bimg) {
        alert("배너 이미지를 업로드해주세요.")
      } else if (!this.blink) {
        alert("링크주소를 입력하세요.")
      } else {
        let imgPath = this.bimg.split("\\")
        this.blink = this.blink + "/portfolio/shop/banner/" + imgPath[2]
        bfrm.action = "./banner_input.php"
        bfrm.method = "POST"
        bfrm.submit()
      }
    },
  },
  components: {},
  computed: {},
})
