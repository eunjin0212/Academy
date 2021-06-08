$(function(){
    var $s_n =0;
    var $_ch=27;
    do{
        $("#ch").append("<li><a href=''></a></li>");
        $s_n++;
    }while($s_n<$_ch);

    var $n=0;
    $(".chanel").click(function(){
        if($n==0){
            //$(".side_box").stop().animate({"right":"-200px"},1000);
            $(".side_box").stop().animate({"right":"0px"},1000);
            $n++;
        }
        else{
            //$(".side_box").stop().animate({"right":"0px"},1000);
            $(".side_box").stop().animate({"right":"-200px"},1000);
            $n=0;
        }
        
    });
});