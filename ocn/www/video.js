$(function(){
    $("#v_movies>li").bind({
        "mouseenter":function(){
           var $v_in= $(this).index();
           $("#v_movies>li>span").eq($v_in-1).css("display","block");
        },
        "mouseleave":function(){
            var $v_in= $(this).index();
           $("#v_movies>li>span").eq($v_in-1).css("display","none");
        }
    });

    $("#v_banner").click(function(){
        window.open("https://biz.skbroadband.com/","new_");
    });

    

    $.get("./json/new_program.json",function($data){
        var $v_ul1 ='<ul class="v_sum"></ul>';
        var $v_ul2 ='<ul class="v_sum"></ul>';
        $(".v_movie_box").append($v_ul1,$v_ul2);
        $.map($data,function($v_a,$v_b){
           // console.log($v_b);
           if($v_b<8){
                var $v_li ='<li><img src="'+$data[$v_b]["new_thumb"]+'"></li>';
                $(".v_movie_box>ul").eq(0).append($v_li);
           }
           else{
                var $v_li2 ='<li><img src="'+$data[$v_b]["new_thumb"]+'"></li>';
                $(".v_movie_box>ul").eq(1).append($v_li2);
           } 
        });
        $(".v_movie_box>ul").eq(1).css("display","none");
        var $v_no =0;
        $("#v_more").click(function(){
           $(".v_movie_box>ul").css("display","none");
            $v_no++;
            if($v_no>1){
               $v_no =0;
            }
            $(".v_movie_box>ul").eq($v_no).css("display","block");
            
        });
    });
});