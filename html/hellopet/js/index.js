$(function(){
$(window).scroll(function(){  
    var $side_banner = $(this).scrollTop();
            var $mving =0;

            if($side_banner==0){
                $mving = 150;
            }
            else{
                $mving = $side_banner + 150;
            }              
            $("#up").stop().animate({"top":$mving+"px"},800);
        });
});