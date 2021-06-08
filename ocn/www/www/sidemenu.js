$(function(){
    $("#side").click(function(){
       var $s_r = $("#sidemenu_box").css("left");
       var $ll=$s_r.split("px");
       console.log($ll[0]);
       if($ll[0]>0){
        $ll[0]=1100;
       }
      $("#sidemenu_box").stop().animate({"left":$ll[0]+"px"},1000) ;
       
    });
    var $s_n =0;
    var $_ch=27;
    do{
        $("#ch").append("<li><a href=''></a></li>");
        $s_n++;
    }while($s_n<$_ch);
});