$(function () {
    let $top_slist =
        "<label>고객센터</label>\
    <label><img src='./ico/face_ico.gif' alt='./ico/face_ico.gif'></label>\
    <label><img src='./ico/in_ico.gif' alt='./ico/in_ico.gif'></label>\
    <label><img src='./ico/tw_ico.gif' alt='./ico/tw_ico.gif'></label>\
    <label class='list'>로그인 | 회원가입 | 마이페이지 | 장바구니</label>";

    $("#user_ct").append($top_slist);

    /* main_text 변환 */
    let $t_ea = $("#main_text > span").length;
    let $timers;
    let $t_num = 0;
    $.fn.textfade = function () {
        $timers = setInterval(function () {
            $("#main_text>span")
                .eq($t_num)
                .fadeOut(function () {
                    $t_num++;
                    if ($t_num >= $t_ea) {
                        $t_num = 0;
                    }
                    $("#main_text>span").eq($t_num).fadeIn();
                });
        }, 10000);
    };
    $.fn.textfade();

    /* 블랙스크린 */
    let $bk_html1 =
        "<li>[Main Menu]</li>\
    <li>- 강아지</li><li>- 고양이</li><li>- 장난감<ul><li>&nbsp;&nbsp;&nbsp;강아지 장난감</li><li>&nbsp;&nbsp;&nbsp;고양이 장난감</li></ul></li>\
    <li>- 펫사료<ul><li>&nbsp;&nbsp;&nbsp;강아지 장난감</li><li>&nbsp;&nbsp;&nbsp;고양이 장난감</li></ul></li>\
    <li>- 미용제품</li><li>- 기획전<ul><li>&nbsp;&nbsp;&nbsp;강아지 기획전</li><li>&nbsp;&nbsp;&nbsp;고양이 기획전</li></ul></li>";

    let $bk_html2 = "<li>[Service Menu]</li>\
    <li>- 공지사항</li>\
    <li>- 자유게시판</li>\
    <li>- FAQ</li>\
    <li>- 1:1 상품문의</li>\
    <li>- 이벤트</li>";

    let $bk_html3 = "<li>[My Menu]</li>\
    <li>- 로그인</li>\
    <li>- 회원가입</li>\
    <li>- 마이페이지</li>\
    <li>- 장바구니</li>\
    <li>- 구매현황</li>";

    $("#bk_ul1").append($bk_html1);
    $("#bk_ul2").append($bk_html2);
    $("#bk_ul3").append($bk_html3);

    $("#burger").click(function () {
        $("#blackscreen").css("display", "block");
    });
    $("#close_black").click(function () {
        $("#blackscreen").css("display", "none");
    });

    /* 대메뉴 */
    $.ajax({
        url: "./json/hello_menu.json",
        cache: false,
        type: "GET",
        datatype: "JSON",
        success: function ($data) {
            let $bg_menu =
                "<span links='" +
                $data[0]["cate_link"][0] +
                "'>" +
                $data[0]["menus"] +
                " </span>\
            <span links='" +
                $data[1]["cate_link"][0] +
                "'>" +
                $data[1]["menus"] +
                " </span>\
            <span>" +
                $data[2]["menus"] +
                " <img src='./ico/down_ico.png' alt='./ico/down_ico.png'>\
            <ul><li links='" +
                $data[2]["cate_link"][0] +
                "'>" +
                $data[2]["cate"][0] +
                "</li><li links='" +
                $data[2]["cate_link"][1] +
                "'>" +
                $data[2]["cate"][1] +
                "</li></ul></span>\
            <span>" +
                $data[3]["menus"] +
                " <img src='./ico/down_ico.png' alt='./ico/down_ico.png'>\
            <ul><li links='" +
                $data[3]["cate_link"][0] +
                "'>" +
                $data[3]["cate"][0] +
                "</li><li links='" +
                $data[3]["cate_link"][1] +
                "'>" +
                $data[3]["cate"][1] +
                "</li></ul></span>\
            <span links='" +
                $data[4]["cate_link"][0] +
                "'>" +
                $data[4]["menus"] +
                " </span>\
            <span>" +
                $data[5]["menus"] +
                " <img src='./ico/down_ico.png' alt='./ico/down_ico.png'>\
            <ul><li links='" +
                $data[5]["cate_link"][0] +
                "'>" +
                $data[5]["cate"][0] +
                "</li><li links='" +
                $data[5]["cate_link"][1] +
                "'>" +
                $data[5]["cate"][1] +
                "</li></ul></span>";

            $("#b_menu").append($bg_menu);
            $("#b_menu > span").mouseenter(function () {
                let $nd = $(this).index();
                $("#b_menu > span:eq(" + $nd + ")>ul")
                    .stop()
                    .slideDown();
            });
            $("#b_menu > span").mouseleave(function () {
                let $nd = $(this).index();
                $("#b_menu > span:eq(" + $nd + ")>ul")
                    .stop()
                    .slideUp();
            });
            /* 메뉴 이동 */
            $("#b_menu > span").click(function () {
                let $ad_mv = $(this).index();
                location.href = $("#b_menu > span > ul > li").eq($ad_mv).attr("links");
            });
            $("#b_menu > span > ul > li").click(function () {
                let $ad_mv = $(this).index();
                location.href = $("#b_menu > span > ul > li").eq($ad_mv).attr("links");
            });
        },
        error: function () {
            alert("AJAX DATA ERROR");
        },
    });
});
