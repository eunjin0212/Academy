$(function () {
    let $banner_timer;
    let $banner_node = 0;
    let $banner_ea;
    $.getJSON("./json/hello_banner.json", function ($banner_data) {
        let $banner_ul, $disc_ol;
        let $banner_li = "";
        let $disc_li = "";
        $.map($banner_data["banners"], function ($q, $w) {
            if ($banner_data["banners"][$w][3] == "yes") {
                $disc_li += "<li></li> ";
                $banner_li += "<li link='" + $banner_data["banners"][$w][1] + "' node='" + $banner_data["banners"][$w][2] + "'></li>";
                //
            }
        });
        $disc_ol = "<ol>" + $disc_li + "</ol>";
        $banner_ul = "<ul>" + $banner_li + "</ul>";
        $("#banner_box").append($banner_ul, $disc_ol);

        $banner_ea = $("#banner_box>ul>li").length;
        let $banner_w = 0;
        while ($banner_w < $banner_ea) {
            let $n_img = $("#banner_box>ul>li").eq($banner_w).attr("node");
            $("#banner_box>ul>li")
                .eq($banner_w)
                .css({
                    background: "url(" + $banner_data["banners"][$n_img - 1][0] + ")",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                    "background-position": "center center",
                });
            $banner_w++;
        }

        let $banner_s = 8000;
        $("#banner_box>ul>li").fadeOut();
        $("#banner_box>ul>li").eq($banner_node).fadeIn();
        $.fn.banner_move = function () {
            $banner_timer = setInterval(function () {
                $banner_node++;
                $("#banner_box>ul>li").fadeOut();
                if ($banner_node == $banner_ea) {
                    $banner_node = 0;
                }
                $("#banner_box>ul>li").eq($banner_node).fadeIn();
                $("#banner_box>ol>li").css("background-color", "gray");
                $("#banner_box>ol>li").eq($banner_node).css("background-color", "black");
            }, $banner_s);
        };
        setTimeout($.fn.banner_move, 0);

        $("#banner_box>ol>li").click(function () {
            clearInterval($banner_timer);
            let $banner_disc = $(this).index();
            $banner_node = $banner_disc;
            $("#banner_box>ul>li").fadeOut();
            $("#banner_box>ul>li").eq($banner_node).fadeIn();
            $("#banner_box>ol>li").css("background-color", "gray");
            $("#banner_box>ol>li").eq($banner_node).css("background-color", "black");
        });
        $("#banner_box>ul>li").click(function () {
            let $banner_img = $(this).index();
            let $banner_link = $("#banner_box>ul>li").eq($banner_img).attr("link");
            window.open($banner_link, "_new");
        });
    });
    $("#banner_right").click(function () {
        clearInterval($banner_timer);
        $banner_node++;
        $("#banner_box>ul>li").fadeOut();
        if ($banner_node == $banner_ea) {
            $banner_node = 0;
        }
        $("#banner_box>ul>li").eq($banner_node).fadeIn();
        $("#banner_box>ol>li").css("background-color", "gray");
        $("#banner_box>ol>li").eq($banner_node).css("background-color", "black");
    });
    $("#banner_left").click(function () {
        clearInterval($banner_timer);

        $("#banner_box>ul>li").fadeOut();
        if ($banner_node <= 0) {
            $banner_node = $banner_ea;
        }
        $banner_node--;
        $("#banner_box>ul>li").eq($banner_node).fadeIn();
        $("#banner_box>ol>li").css("background-color", "gray");
        $("#banner_box>ol>li").eq($banner_node).css("background-color", "black");
    });
    $("#banner_box").mouseenter(function () {
        clearInterval($banner_timer);
    });
    $("#banner_box").mouseleave(function () {
        setTimeout($.fn.banner_move, 0);
    });
});
