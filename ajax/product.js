$(function () {
  $.ajax({
    url: "product.json",
    cache: false,
    type: "GET",
    dataType: "JSON",
    success: function ($data) {
      //console.log($data);
      $.products($data);
    },
    error: function () {
      console.log("Data Error");
    },
  });

  $.extend({
    products: function ($data) {
      //$data["product"].map(function($name,$node){
      //console.log($data["product"].length);

      let $html = "";
      $($data["product"]).each(function ($node, $name) {
        $html =
          '<div class="product" link="' +
          $data["product"][$node]["p_link"] +
          '">\
      <span class="icon">Review : ' +
          $data["product"][$node]["p_review"] +
          '</span>\
      <img src="' +
          $data["product"][$node]["p_img"] +
          '">\
      <div class="proName">' +
          $data["product"][$node]["p_name"] +
          '</div>\
      <div class="explanation">' +
          $data["product"][$node]["p_info"] +
          '</div>\
      <div class="price"><s>' +
          $data["product"][$node]["p_price"] +
          '</s></div>\
      <div class="sale">' +
          $data["product"][$node]["p_sales"] +
          '</div>\
      <div class="percent">' +
          $data["product"][$node]["p_percent"] +
          "</div>\
      </div>";
        $("#wrapper").append($html);
      });

      $(".product").click(function () {
        location.href = $(this).attr("link");
      });
    },
  });
});
