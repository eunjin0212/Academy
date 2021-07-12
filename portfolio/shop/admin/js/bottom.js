$(function () {
  $("#cpCheck").click(function () {
    let $cpno = $("#info_cpno").text();
    let $cpNumber = $cpno.replaceAll("-", "");
    // console.log($cpNumber);
    let $url = "http://www.ftc.go.kr/bizCommPop.do?wrkr_no=" + $cpNumber;
    window.open($url, "biz", "width=700, height=500");
  });

  $.fn.bottom = function () {
    $.ajax({
      url: "admin_info.json",
      cache: false,
      type: "GET",
      dataType: "JSON",
      success: function ($data) {
        $.fn.printCopyright($data);
      },
      error: function () {
        Error("Bottom JSON Data Error!");
      },
    });

    $.fn.printCopyright = function ($copyright) {
      $.each($copyright[0], function ($key, $text) {
        switch ($key) {
          case $key:
            $(`#${$key}`).append($text);
            $(`#${$key}` + "1").val($text);
            break;
        }
      });
    };
  };

  $.fn.bottom();
});
