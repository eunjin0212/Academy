$(function () {
    $.fn.footer = function () {
        $.ajax({
            url: "./json/hello_copyright.json",
            cache: false,
            type: "GET",
            dataType: "JSON",
            success: function ($footer_arrays, $node) {
                $.each($footer_arrays, function ($a1, $a2) {
                    $.map($footer_arrays[$a1], function ($footer_d, $foter_key) {
                        switch ($foter_key) {
                            case "company":
                                $("#" + $foter_key).text("COMPANY : " + $footer_d);
                                break;
                            case "owner":
                                $("#" + $foter_key).text("OWNER : " + $footer_d);
                                break;
                            case "officer":
                                $("#" + $foter_key).text("PRIVACY OFFICER : " + $footer_d);
                                break;
                            case "business_no":
                                $("#" + $foter_key).text("BUSINESS NO : " + $footer_d);
                                break;
                            case "mail_order_license":
                                $("#" + $foter_key).text("MAIL ORDER LICENSE: " + $footer_d);
                                break;
                            case "address":
                                $("#" + $foter_key).text("ADDRESS:" + $footer_d);

                                break;
                            case "cs_center":
                                $("#" + $foter_key).text($footer_d);
                                break;
                            case "account_bank":
                                $.each($footer_d, function ($d1, $d2) {
                                    $("#foter_bank" + $d1).text($d2["bank_name"]);
                                });
                                break;
                            case "account_bankno":
                                $.each($footer_d, function ($d1, $d2) {
                                    $("#foter_bankno" + $d1).text($d2["bank_no"]);
                                });
                                break;
                        }
                    });
                });
            },
            error: function () {
                console.log("footer-error");
            },
        });
    };
    $.fn.footer();

    var $footer_timers;
    var $footer_n = 1;

    $.fn.footer_set = function () {
        $footer_timers = setInterval(function () {
            $("#foorter_time" + $footer_n).fadeOut(function () {
                if ($footer_n > 2) {
                    $footer_n = 1;
                }
                $("#foorter_time" + $footer_n).fadeIn();
            });

            $footer_n++;
        }, 3000);
    };
    $.fn.footer_set();
});

let foor_ajex;
function windowck() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
}
function fileopen() {
    if (foor_ajex.readyState == XMLHttpRequest.DONE && foor_ajex.status == 200) {
        foor_file(this);
    }
}
