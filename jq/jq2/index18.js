$(function () {
  const $menus = [
    {
      main_menu: "훈련과정",
      menu_list: [
        "국민내일배움카드 훈련 과정",
        "디지털 신기술 훈련 과정",
        "기업 훈련과정",
        "디지털 기초 역량 훈련",
      ],
    },
    {
      main_menu: "지원제도",
      menu_list: [
        "정부 지원사업 안내",
        "정부 부처별 지원사업 안내",
        "일 학습 병행",
      ],
    },
    {
      main_menu: "일자리, 직업정보",
      menu_list: ["구인정보", "자격정보", "학과정보"],
    },
    {
      main_menu: "지식정보센터",
      menu_list: ["인재뱅크", "훈련기관평가정보", "훈련/고용통계"],
    },
  ];
  // console.log 로 지식 정보 센터에 있는 훈련/고용통계 글자를 찍어보세요
  // console.log($menus[3]["menu_list"][2]);
  // 대메뉴 console.log 출력
  $($menus).map(function ($a, $b) {
    // 대메뉴 파트
    let $html = "<li>" + $b["main_menu"] + "</li>";
    let $html2 = '<ol class="olcss" id="olcss' + $a + '"></ol>';
    let $ids = "#olcss" + $a; // #olcss0 ~ #olcss3

    $("#ulcss").append($html);
    $("#ulcss>li").eq($a).append($html2);

    $($b["menu_list"]).map(function ($c, $d) {
      let $html3 = "<li>" + $d + "</li>";
      $($ids).append($html3);
    });
  });

  $("#ulcss>li").tap(function () {
    let $nd = $(this).index();
    //$(".olcss").slideUp(500);
    $("#olcss" + $nd).slideToggle(500);
  });

  $("#tbtn").tap(function () {
    let $offset = $("#main").offset().left;
    if ($offset == 0) {
      $("#main").animate(
        {
          left: "70%",
        },
        600
      );
    } else {
      $("#main").animate(
        {
          left: "0%",
        },
        600
      );
    }
  });
});
