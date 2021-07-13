$(function () {
  // *******Side Menu*******
  // Side Menu Height
  let $sideMenuH = $("html").outerHeight(true);
  $("#black").css("height", $sideMenuH);
  $("#mobile").css("height", $sideMenuH);

  // Side Menu Click
  $("#categoryIcon").click(function (event) {
    $("#categoryMenu").stop().animate({ left: "50%", "margin-left": "-50%" }, 500);
    $("body").on(
      "scroll touchmove mousewheel",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      },
      { passive: false }
    );
    $("body").css("overflow", "hidden");
  });

  // Side Menu Close
  $("#black").click(function () {
    $("#categoryMenu").stop().animate({ left: "-1000%" }, 300);
    $("body").css("overflow", "auto");
    $("body").off("scroll touchmove mousewheel");
  });

  // QnA Data
  $.fn.qnaData = function () {
    $.ajax({
      url: "./json/qanda.json",
      cache: false,
      type: "GET",
      dataType: "JSON",
      success: function ($data, $done) {
        $.fn.qna($data);
      },
      error: function () {
        console.log("QnA Data Error");
      },
    });
  };
  $.fn.qnaData();

  $.fn.qna = function ($data) {
    let $li = "";
    $.map($data, function ($i, $j) {
      let $date = "";
      let $text = "";
      $.map($data[$j], function ($i, $j) {
        switch ($j) {
          case "q_date":
            $date = $i.substr(0, 10);
            break;
          case "q_subject":
            $text = $i.substr(0, 10) + "...\u00A0";
            break;
        }
      });
      $li += "<li><span>" + $text + "</span><span>" + $date + "</span></li>";
    });
    $("#boardList").append($li);
  };

  // *******Floor Button*******
  let $screenHeigh = $(window).innerHeight();
  $(window).scroll(function () {
    let $windowScroll = $(this).scrollTop();
    let $top = 0;
    if ($windowScroll == 0) {
      $top = $screenHeigh - 100;
    } else {
      $top = $screenHeigh + $windowScroll - 100;
    }
    $("#scrollTop")
      .stop()
      .animate(
        {
          top: $top + "px",
        },
        500
      );
  });
  $("#scrollTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });

  // *******Header*******
  // Search Button Toggle
  $("#searchIcon").click(function () {
    $("#topSearch").slideToggle(500);
  });

  // Main Banner
  let $num = 0;
  let $bannerTimer = function () {
    $("#bannerWrapper>span").fadeOut(300);
    $("#bannerWrapper>span").eq($num).fadeIn(300);
    $num++;
    if ($num > 2) {
      $num = 0;
    }
    setTimeout($bannerTimer, 4000);
  };
  setTimeout($bannerTimer(), 4000);

  // *******Main*******
  // NewPet Data
  $.fn.newPetData = function () {
    $.ajax({
      url: "./json/new_pet.json",
      cache: false,
      type: "GET",
      dataType: "JSON",
      success: function ($data, $done) {
        $.fn.newPet($data);
      },
      error: function () {
        console.log("newPet Data Error");
      },
    });
  };
  $.fn.newPetData();

  $.fn.newPet = function ($data) {
    let $cat = "";
    let $dog = "";
    $.map($data, function ($i, $j) {
      if ($i["pet_part"] == "cat") {
        $cat += '<li><label><img src="' + $i["pet_img"] + '" alt="" /><span>' + $i["pet_title"] + "</span></label></li>";
      } else if ($i["pet_part"] == "dog") {
        $dog += '<li><label><img src="' + $i["pet_img"] + '" alt="" /><span>' + $i["pet_title"] + "</span></label></li>";
      }
    });
    $("#dog").append($dog);
    $("#cat").append($cat);
  };

  // NewPet Title Click Event
  $("#catTitle").click(function () {
    if ($("#catProducts").css("display") == "none") {
      $("#catProducts").css("display", "inline-flex");
      $("#dogProducts").css("display", "none");
      $(".newpet").css("height", "432px");
      $(".new").css("height", "302px");
      $("#catTitle").css("background-color", "white");
      $("main").css("height", "2400px");
    }
  });
  $("#dogTitle").click(function () {
    if ($("#dogProducts").css("display") == "none") {
      $("#catProducts").css("display", "none");
      $("#dogProducts").css("display", "inline-flex");
      $(".newpet").css("height", "280px");
      $(".new").css("height", "152px");
      $("#catTitle").css("background-color", "transparent");
      $("main").css("height", "2248px");
    }
  });

  // Best Product Data
  $.fn.bestProductData = function () {
    $.ajax({
      url: "./json/best_product.json",
      cache: false,
      type: "GET",
      dataType: "JSON",
      success: function ($data, $done) {
        $.fn.bestProduct($data);
      },
      error: function () {
        console.log("Best Product Data Error");
      },
    });
  };
  $.fn.bestProductData();

  $.fn.bestProduct = function ($data) {
    let $best = "";
    $.map($data["best_product"], function ($i, $j) {
      $best =
        '<label class="bestProductWrapper"><span><img src="' +
        $i["product_img"] +
        '" alt="" /></span><div><span>' +
        $i["product_nm"] +
        "</span><span>" +
        $i["product_sample"] +
        "</span><span>" +
        $i["product_money"] +
        "</span></div></label>";
      $("#bestProductWrapper").append($best);
    });
  };

  // *******Footer*******
  // Review Data
  $.fn.reviewData = function () {
    $.ajax({
      url: "./json/review.json",
      cache: false,
      type: "GET",
      dataType: "JSON",
      success: function ($data, $done) {
        $.fn.review($data);
      },
      error: function () {
        console.log("Review Data Error");
      },
    });
  };
  $.fn.reviewData();

  $.fn.review = function ($data) {
    let $revSpan = "";
    $.map($data["reviews"], function ($i, $j) {
      if ($i[0].length > 15) {
        $revSpan = "<span>" + $i[0].substr(0, 15) + "..." + "</span>";
      } else {
        $revSpan = "<span>" + $i[0] + "</span>";
      }
      $("#review").append($revSpan);
    });
  };

  // Reviw Rolling
  $.fn.reviewRolling = function () {
    $("#review")
      .stop()
      .animate(
        {
          top: "-40px",
        },
        300,
        function () {
          let $rClone = $("#review>span").eq(0).clone();
          $("#review>span").eq(0).remove();
          $("#review").append($rClone);
          $("#review").css("top", "0px");
        }
      );
  };

  let $reviewTimer = setInterval(function () {
    $.fn.reviewRolling();
  }, 4000);
  setTimeout($reviewTimer, 4000);
});
