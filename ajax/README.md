# AJAX

## js에서 보내기

```
function bannerEffect() {
  let ajaxData
  var effect = "F"
  function ajax() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest()
    }
  }
  function effectGet() {
    if (ajaxData.readState == XMLHttpRequest.DONE && ajaxData.status == 200) {
      let res = this.response
    }
  }
  ajaxData = ajax()
  ajaxData.onreadystatechange = effectGet
  ajaxData.open("GET", "./banner_effect.php", true)
  ajaxData.setRequestHeader("content-type", "application/x-www-form-urlencoded")
  ajaxData.send(effect)
}
```

## jq에서 보내기

```
$(function () {
    $("#banner_effect").click(function(){
        $.ajax({
          type:"GET",
          cache:false,
          url:"banner_effect.php",
          data:{effect:"R"},
          dataType:"JSON",
          success:function(response){
            console.log(response);
          },
          error:function(){
            console.log("접근 오류!!");
          }
        });
    });
  });
```
