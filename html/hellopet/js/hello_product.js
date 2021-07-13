$(function () {
    $.getJSON("./json/hello_product.json", function ($p_data) {
        $.map($p_data["pet_product"], function ($data, $node) {
            if ($p_data["pet_product"][$node]["product_dc"] !== "") {
                let $p_li =
                    '<li  class="product_box"><span>\
             <span class="dc">' +
                    $p_data["pet_product"][$node]["product_dc"] +
                    '</span>\
             <img src="' +
                    $p_data["pet_product"][$node]["product_img"] +
                    '" ></span>\
           <span>' +
                    $p_data["pet_product"][$node]["product_nm"] +
                    "</span>\
           <span>" +
                    $p_data["pet_product"][$node]["product_sample"] +
                    "</span>\
           <span class='sales'><s>" +
                    $p_data["pet_product"][$node]["product_money"] +
                    " 원</s>&nbsp;" +
                    $p_data["pet_product"][$node]["product_sales"] +
                    " 원</span></li>";
                $("#product_list_ul").append($p_li);
            } else {
                let $p_li =
                    '<li  class="product_box">\
           <span><img src="' +
                    $p_data["pet_product"][$node]["product_img"] +
                    '" ></span>\
         <span>' +
                    $p_data["pet_product"][$node]["product_nm"] +
                    "</span>\
         <span>" +
                    $p_data["pet_product"][$node]["product_sample"] +
                    "</span>\
         <span>" +
                    $p_data["pet_product"][$node]["product_money"] +
                    "원</span></li>";
                $("#product_list_ul").append($p_li);
            }
        });
        let $ea = $("#product_list_ul>li").length;
        let $p_lw = $("#product_list_ul>li").css("width");
        let $p_lm = $("#product_list_ul>li").css("margin-right");
        let $p = Number($p_lm.replace("px", "")) + Number($p_lw.replace("px", ""));

        $("#product_list_ul").css("width", $ea * $p + "px");

        $("#right_btn").click(function () {
            $("#product_list_ul")
                .stop()
                .animate({ left: -$p + "px" }, 1000, function () {
                    let $p_copy = $("#product_list_ul>li").eq(0).clone();
                    $("#product_list_ul>li").eq(0).remove();
                    $("#product_list_ul").append($p_copy);
                    $("#product_list_ul").css("left", 0);
                });
        });

        $("#left_btn").click(function () {
            let $p_copy = $("#product_list_ul>li")
                .eq($ea - 1)
                .clone();
            $("#product_list_ul>li")
                .eq($ea - 1)
                .remove();
            $("#product_list_ul").css("left", -$p + "px");
            $("#product_list_ul").prepend($p_copy);
            $("#product_list_ul").stop().animate({ left: 0 }, 1000);
        });
    });
});
