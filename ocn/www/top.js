$(function(){
    var $mn = "<span link='https://user.tving.com/pc/user/login.tving'>로그인</span>\
    <span link='https://user.tving.com/pc/user/regist.tving'>티빙 회원가입</span>\
    <span link='https://www.tving.com/pass/pass.do'>이용권 구매</span>\
    <span link='http://ocn.tving.com/ocn/program'>프로그램</span>";
    console.log($mn);
    $("#top_list").append($mn);

    $("#tving_logo").click(function(){
        location.href="https://www.tving.com/main.do?utm_source=poc&utm_medium=referral&utm_campaign=tvinginfo";
    });
    $("#ocn_logo").click(function(){
        location.href="http://ocn.tving.com";
    });
    $("#top_list >span").click(function(){
        var $nd =$(this).index();
        location.href = $("#top_list >span").eq($nd).attr("link");
    });
});