
    $(function(){
        $.ajax({
            url:"./json/notice.json",
            cache:false,
            type:"GET",
            dataType:"json",
            success:function($llist){ 
                 var $b_li;
                $.each($llist["notice"],function($node,$data){
                    $b_li="<li>"+$data[0]+"</li>"

                    $("#bottom_ul").append($b_li);

                });     
            },
            error:function(){console.log("오류")},  
        });
        var $timer;
        var $test=0;    
        $.fn.news=function(){
            $timer =setInterval(function(){
               // console.log($test);
                $test++;
                
                $("#bottom_ul").stop().animate({"top":"-55px"},500,function(){
                    var $cl=$("#bottom_ul>li").eq(0).clone();      
                    $("#bottom_ul").append($cl);
                   $("#bottom_ul>li").eq(0).remove();
                    $("#bottom_ul").css({"top":"0px"});
                });
            },10000);
        }
        setTimeout($.fn.news,10000);

    });

    let botton_data;
    function windowsck(){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }
    }
    function fileopen(){
            if(botton_data.readyState==XMLHttpRequest.DONE && botton_data.status==200){
                company_list(this);
            }
    }
    botton_data = windowsck();
    botton_data.onreadystatechange = fileopen;
    botton_data.open("GET","./json/pullmenu.json",true);
    botton_data.send();

    function company_list(data){
        const list = JSON.parse(data.responseText);
       // console.log(list[0]);//brand(5)  subsidi 키
        
      var html="", html2="";
      var option1;
        list[0]["brand"].forEach(function(br1,br2,br3){
            option1=document.createElement("option");
            option1.innerHTML=br1;
            option1.value=br2;
            document.getElementById("bottom_brd").appendChild(option1);
        });
     
        list[0]["subsidi"].forEach(function(gr1,gr2,gr3){  
            
            option2=document.createElement("option");
            option2.innerHTML=gr1;
            option2.value=gr2;
             
              if(option2.value==0){
                var option3=document.createElement("option");
               option3.innerText="- CJ 그룹";
               document.getElementById("bottom_grup").appendChild(option3);
              }else if(option2.value==1){
                var option4=document.createElement("option");
                option4.innerText="- 생명공학";
                document.getElementById("bottom_grup").appendChild(option4);
              }else if(option2.value==2){
                var option5=document.createElement("option");
                option5.innerText="- 인프라";
                document.getElementById("bottom_grup").appendChild(option5);
              }

            document.getElementById("bottom_grup").appendChild(option2);
        });
   
    
    }
    function brd(){
       
        var botval =document.getElementById("bottom_brd").value;
       
            Number(botval);
            //console.log(botval);

            if(botval==0){
                location.href="http://tvn.tving.com/tvn";
            }else if(botval==1){
                location.href="http://xtm.tving.com/xtm";
            }else if(botval==2){
                location.href="http://ogn.tving.com/ogn";
            }else if(botval==3){
                location.href="http://tooniverse.tving.com/tooniverse";
            }else if(botval==4){
                location.href="https://www.catchon.co.kr/mp/index.co";
            }

    }

    function grup(){
        var bogval=document.getElementById("bottom_grup").value;
        console.log(bogval);

        if(bogval==0){
            location.href="https://www.cj.net/";
        }else if(bogval==1){
            location.href="https://www.cj.co.kr/kr/about/business/bio";
        }else if(bogval==2){
            location.href="http://www.cjenc.co.kr/kr/Default.asp";
        }else if(bogval==3){
            location.href="https://www.cjolivenetworks.co.kr:449";
        }
    }