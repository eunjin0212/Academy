$(document).ready(function () {
  let $img;
  let $data = [5000, 100, 200, 2000, 1000, 100, 500, 300];

  $("#game_btn").mouseover(function () {
    $("#game_btn>img").attr("src", "./img/event_start_on.png");
  });

  $("#game_btn").mouseout(function () {
    $("#game_btn>img").attr("src", "./img/event_start_off.png");
  });

  let $location = 0; //오브젝트 최초 위치

  $("#game_btn").click(function () {
    $("#msg").slideUp(800);
    let $randomNum = Math.ceil(Math.random() * 360);
    $location = $location + 1800; //도는 횟수 5바퀴
    let $msg = $.fn.rotate($location, $randomNum);
    setTimeout(function () {
      $("#alert").slideDown(800);
      $("#alert").html("당첨 " + $data[$msg] + " 마일리지");
      console.log("msg", $msg, "data", $data);
    }, 5500);
  });

  // 각도 다시 잴것
  $.fn.rotate = function ($location, $randomNum) {
    let $node = 0;
    if ($randomNum > 24 && $randomNum <= 65) {
      $node = 1;
    } else if ($randomNum >= 70 && $randomNum <= 110) {
      $node = 2;
    } else if ($randomNum >= 115 && $randomNum <= 155) {
      $node = 3;
    } else if ($randomNum >= 160 && $randomNum <= 200) {
      $node = 4;
    } else if ($randomNum >= 205 && $randomNum <= 245) {
      $node = 1;
    } else if ($randomNum >= 250 && $randomNum <= 290) {
      $node = 5;
    } else if ($randomNum >= 295 && $randomNum <= 335) {
      $node = 6;
    } else if (
      ($randomNum >= 340 && $randomNum <= 360) ||
      ($randomNum == 0 && $randomNum < 25)
    ) {
      $node = 0;
    } else {
      $node = 0;
    }
    let $rotates = $location + $randomNum;
    $(".game_pan").css({ transform: "rotate(" + $rotates + "deg)" });
    return $node;
  };
});
