let bannerInputVue = new Vue({
  el: "#product_input",
  data: {
    goodsno: "",
    nm: "",
    nmdtc: "",
    money: null,
    look: false,
    dcnum: "",
    dcpart: "",
    sales: "",
    ea: "",
    img: "",
    contents1: "",
    pUrl: "",
    list: "상품목록",
    register: "상품등록",
  },
  methods: {
    price(moneyNum) {
      // 소비자 가격
      let num = parseInt(moneyNum, 10)
      if (Number.isNaN(Number(num)) == true) {
        alert("숫자만 입력해주세요")
      } else {
        this.money = moneyNum.toLocaleString("ko")
      }
    },

    dcTd(check) {
      // 할인율 td 보이기
      if (check == "Y") {
        this.look = true
      } else {
        this.look = false
      }
    },

    dcPrice(dc) {
      // 할인률 input
      this.dcnum = dc
      document.getElementById("dcpartP").checked = false
      document.getElementById("dcpartW").checked = false
    },

    dcPart(unit) {
      // 단위 checkbox
      if (this.look == true && this.money !== "") {
        let m = this.money.split(",")
        this.dcpart = unit
        switch (this.dcpart) {
          case "P":
            let finalP = (1 - this.dcnum / 100) * Number(m[0] + m[1])
            this.sales = finalP
            break
          case "M":
            let finalW = Number(m[0] + m[1]) - this.dcnum
            this.sales = finalW
            break
        }
      } else {
        this.dcpart = ""
      }
    },

    backToList() {
      location.href = "admin_product.html"
    },
    uploadProduct() {
      if (!this.nm) {
        alert("상품명을 입력해주세요.")
      } else if (!this.img) {
        alert("상품 이미지를 업로드해주세요.")
      } else if (!this.nmdtc) {
        alert("간편설명을 입력해주세요.")
      } else if (!this.money) {
        alert("소비자가격을 입력해주세요.")
      } else if (this.look == true && !this.dcnum) {
        alert("할인율을 입력해주세요.")
      } else if (this.look == true && !this.dcpart && !this.dcpart) {
        alert("단위를 확인해주세요.")
      } else if (!this.ea) {
        alert("최대 수량을 입력해주세요.")
      } else if (!this.img) {
        alert("상품 이미지를 입력해주세요.")
      } else if (!this.contents1) {
        alert("상품 상세설명을 입력해주세요.")
      } else {
        // let imgPath = this.img.split("\\")
        // this.pUrl = this.pUrl + "/portfolio/shop/product/" + imgPath[2]
        pfrm.method = "POST"
        pfrm.action = "./new_productok.php?v=<?=$v?>"
        pfrm.submit()
      }
    },
  },
  computed: {
    autoNum() {
      // 상품코드
      let num = "" // 자리수
      for (let i = 0; i < 8; i++) {
        num += Math.floor(Math.random() * 9)
      }
      this.goodsno = num
    },
  },
})
