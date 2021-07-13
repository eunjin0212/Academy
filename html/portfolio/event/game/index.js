$(function () {
  let $okct = 0; //성공
  let $errorct = 5; //실패

  $("#start").click(function () {
    $("#dark").fadeOut(1000);
    $("#count").css("display", "block");
  });

  $("#ca_aw").click(function () {
    $errorct--;
    if ($errorct > -1) {
      $("#countImg").attr("src", "./image/no_" + $errorct + ".png");
    } else if ($errorct == 0) {
      $.fn.alerts(2);
    }
  });

  $(".aw").click(function () {
    let $ct = $(this).index();
    $(".aw:eq(" + $ct + ")>img").attr("src", "./image/answer.gif");
    $okct++;
    if ($okct == 5) {
      setTimeout($.fn.alerts(1), 1000);
    }
  });

  $.fn.alerts = function (ct_part) {
    if (ct_part === 1) {
      $("#count").css("display", "none");
      alert("정답을 모두 맞추셨습니다.");
      location.href = "http://eunjin9639.dothome.co.kr/portfolio/event/game/eventform/index.html";
    } else if (ct_part === 2) {
      alert("틀린그림 찾기에 실패 하셨습니다.");
      $(".aw").css("display", "none");
      confirm("다시 도전하시겠습니까?", function () {
        if (confirm === true) {
          location.reload();
        } else {
          location.href = "http://eunjin9639.dothome.co.kr/portfolio/shop/index.html";
        }
      });
    }
  };
});
