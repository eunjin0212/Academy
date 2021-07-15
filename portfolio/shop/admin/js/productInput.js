let bannerInputVue = new Vue({
  el: "#product_input",
  data: {
    bname: "",
    bimg: "",
    blink: pfrm.domain.value,
    list: "상품목록",
    register: "상품등록",
  },
  methods: {
    backToList() {
      location.href = "admin_product.html"
    },
    uploadProduct() {
      //   if (!this.bname) {
      //     alert("배너명을 입력하세요.")
      //   } else if (!this.bimg) {
      //     alert("배너 이미지를 업로드해주세요.")
      //   } else if (!this.blink) {
      //     alert("링크주소를 입력하세요.")
      //   } else {
      //      let imgPath = this.bimg.split("\\")
      //      this.blink = this.blink + "/portfolio/shop/product/" + imgPath[2]
      //     pfrm.action = "new_productok.php"
      //     pfrm.method = "POST"
      //     pfrm.submit()
      //   }
      confirm("등록하시겠습니까?")
    },
  },
  components: {},
  computed: {},
})
