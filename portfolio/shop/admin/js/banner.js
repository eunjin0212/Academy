Vue.component("", {
  template: "",
  props: [""],
})

let banner = new Vue({
  el: "#banner",
  data: {
    link: "http://링크주소",
    num: 1,
  },
  methods: {},
  components: {
    number: { template: "<td></td>" },
  },
  computed: {
    bannerFunc: function () {},
  },
})
