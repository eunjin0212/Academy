function productInput() {
  location.href = "admin_newproduct.html"
}

let productListVue = new Vue({
  el: "#product_list",
  data: {
    bool: "",
    searchWord: "",
  },
  methods: {
    // 검색 기능
    searchFunc() {
      if (this.searchWord !== "") {
        location.href = "admin_product.html?stext="
      } else {
        alert("단어를 입력하세요.")
        // location.href = "admin_product.html"
      }
    },
  },
  components: {},
  computed: {
    productDataFunc() {
      fetch("admin_product.json?v=<?=$v?>")
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
