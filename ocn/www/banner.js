$(function(){
    let $b_no =0;
    var $b_timer;
    var $b_ea;
    $.getJSON("./json/banner.json",function($data){
        console.log($data["banners"]);
        var $ol ="<ol class='b_disc' id='b_disc'></ol>";
        var $ul ="<ul class='b_banners' id='b_banners'></ul>";
        $("#banner_box").append($ol,$ul);
        $data["banners"].map(function($a1,$b1){
            var $li ="<li></li> ";
            var $li2 ="<li link='"+$data["banners"][$b1][1]+"'node='"+$data["banners"][$b1][2]+"'><img src="+$data["banners"][$b1][0]+"></li>";
            $(".b_disc").append($li);
            $(".b_banners").append($li2);
        });
         $b_ea =$("#b_banners>li").length;

         


         $("#b_banners>li").fadeOut();
         $("#b_banners>li").eq($b_no).fadeIn();

         $("#b_banners>li").click(function(){
             var $v_link =$(this).index();
            window.open($("#b_banners>li").eq($v_link).attr("link"),"new_");
         });
         
        $("#b_disc>li").click(function(){
            var $banner =$(this).index();
            $("#b_banners>li").eq($b_no).fadeOut();
            $b_no = $banner;
            $("#b_disc>li").css("background-color","gainsboro");
            $("#b_disc>li").eq($b_no).css("background-color","red");
            $("#b_banners>li").eq($b_no).fadeIn();

            $("#b_disc>li").css("background-color","gainsboro");
            $("#b_disc>li").eq($b_no).css("background-color","red");
        });
        $.fn.b_move =function(){
            $b_timer =setInterval(function(){
                $("#b_banners>li").eq($b_no).fadeOut();
                $b_no++;
                if($b_no>=$b_ea){
                    $b_no=0;
                }
                $("#b_disc>li").css("background-color","gainsboro");
                $("#b_disc>li").eq($b_no).css("background-color","red");
                $("#b_banners>li").eq($b_no).fadeIn();
            },8000);

        }
        $.fn.b_move();
        $("#b_banners").mouseleave(function(){
            setTimeout($.fn.b_move(),0);
        });
        $("#b_banners").mouseenter(function(){
            clearInterval($b_timer);
        });
    });
    
    $("#b_left").bind({
        "click":function(){
            clearInterval($b_timer);
            $("#b_banners>li").fadeOut();
            $("#b_disc>li").css("background-color","gainsboro");
            if($b_no<0){
                $b_no=$b_ea-1;
            }
            $b_no--;
            $("#b_disc>li").eq($b_no).css("background-color","red");
            $("#b_banners>li").eq($b_no).fadeIn();
        }
    });
    $("#b_right").bind({
        "click":function(){
            clearInterval($b_timer);
            $("#b_banners>li").fadeOut();
            $("#b_disc>li").css("background-color","gainsboro");
            $b_no++;
            if($b_no>=$b_ea){
                $b_no=0;
            }
            
            $("#b_disc>li").eq($b_no).css("background-color","red");
            $("#b_banners>li").eq($b_no).fadeIn();
        }
    });
    
    
});