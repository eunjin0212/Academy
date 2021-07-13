$(function(){
    $.ajax({
        url:"./json/menu.json",
        cache:false,
        type:"GET",
        datatype:"JSON",
        success:function($a,$b){
            console.log($a[0]["menu_link"][0]);
            
            $.each($a,function($anode,$adata){
                let $span_list = "<span>"+$adata["main_menu"]+"</span>";
                $("#menu_box").append($span_list);
                //console.log($adata);
                //console.log($adata["main_menu"]);  대메뉴
            });
            var $1dv = "<div link="+$a[0]["menu_link"][0]+">"+$a[0]["menu_list"][0]+"</div><div link="+$a[0]["menu_link"][1]+">"+$a[0]["menu_list"][1]+"</div>";
            var $2dv = "<div link="+$a[1]["menu_link"][0]+">"+$a[1]["menu_list"][0]+"</div><div link="+$a[1]["menu_link"][1]+">"+$a[1]["menu_list"][1]+"</div>";
            var $3dv = "<div link="+$a[2]["menu_link"][0]+">"+$a[2]["menu_list"][0]+"</div>";
            var $4dv = "<div link="+$a[3]["menu_link"][0]+">"+$a[3]["menu_list"][0]+"</div><div link="+$a[3]["menu_link"][1]+">"+$a[3]["menu_list"][1]+"</div>";
            var $6dv = "<div link="+$a[5]["menu_link"][0]+">"+$a[5]["menu_list"][0]+"</div><div link="+$a[5]["menu_link"][1]+">"+$a[5]["menu_list"][1]+"</div><div link="+$a[5]["menu_link"][2]+">"+$a[5]["menu_list"][2]+"</div>";
            var $7dv = "<div link="+$a[6]["menu_link"][0]+">"+$a[6]["menu_list"][0]+"</div><div link="+$a[6]["menu_link"][1]+">"+$a[6]["menu_list"][1]+"</div><div link="+$a[6]["menu_link"][2]+">"+$a[6]["menu_list"][2]+"</div>";
            $("#menu_box>span").eq(0).append($1dv);
            $("#menu_box>span").eq(1).append($2dv);
            $("#menu_box>span").eq(2).append($3dv);
            $("#menu_box>span").eq(3).append($4dv);
            $("#menu_box>span").eq(5).append($6dv);
            $("#menu_box>span").eq(6).append($7dv);

            $("#menu_box>span").eq(4).click(function(){
                location.href=$a[4]["menu_link"][0];
            });
            
            $("#menu_box>span").mouseenter(function(){
                var $nd =$(this).index();
                //console.log($nd);
                $("#menu_box > span:eq("+$nd+")>div").stop().slideDown();
            });
            $("#menu_box>span").mouseleave(function(){
                var $nd =$(this).index();
                //console.log($nd);
                $("#menu_box > span:eq("+$nd+")>div").stop().slideUp();
            });

            $("#menu_box>span > div").click(function(){
                location.href = $(this).attr("link");
            });
        },
        error:function(){
            alert("Data error");
        }

    });
    $("#menu_box > span").mouseenter(function(){
        var $th_node = $(this).index();
        console.log($th_node);
        $("#menu_box > span >div").eq($th_node).slideDown();
    });
    $("#menu_box > span").mouseleave(function(){
        var $th_node = $(this).index();
        console.log($th_node);
        $("#menu_box > span >div").eq($th_node).slideUp();
    });

});