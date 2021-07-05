$(function () {
    $("#menuUl>li").click(function () {
        // 대메뉴 클릭시 해당 페이지 이동
        location.href = "" + $(this).attr("links") + "";
    });
});
