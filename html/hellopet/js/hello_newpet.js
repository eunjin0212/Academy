$(function () {
    $.get("./json/hello_newpet.json", function ($data) {
        let $newpet_outline = "";
        let $newpet_html = "";
        let $newpet_img, $newpet_title, $newpet_back, $newpet_icon;
        $data.map(function (z, x) {
            $($data[x]).map(function (q, w) {
                $newpet_img = "<img src='" + $data[x]["pet_img"] + "'>";
                $newpet_title = "<div class='newpet_gallery_title'>\
                <span>" + $data[x]["pet_title"] + "</span><span>" + $data[x]["pet_explanation"] + "</span></div>";
                $newpet_back = "<span></span>";
                $newpet_icon =
                    "<div class='newpet_gallery_icon'>\
                <span><img src='./newpets/screen.svg'></span>\
                <span><img src='./newpets/heart.svg'></span>\
                <span><img src='./newpets/bag.svg'></span></div>";
                $newpet_html = "<span>" + $newpet_back + $newpet_img + $newpet_title + $newpet_icon + "</span>";
                $newpet_outline = $newpet_html;
            });
            $("#newpet_gallery").append($newpet_outline);
        });
        $("#newpet_gallery>span").mouseenter(function () {
            let $newpet_index = $(this).index();
            $("#newpet_gallery>span:eq(" + $newpet_index + ")>.newpet_gallery_title").css("display", "block");
            $("#newpet_gallery>span:eq(" + $newpet_index + ")>.newpet_gallery_icon").css("display", "block");
            $("#newpet_gallery>span:eq(" + $newpet_index + ")>span").css("display", "block");
        });
        $("#newpet_gallery>span").mouseleave(function () {
            let $newpet_index = $(this).index();
            $("#newpet_gallery>span:eq(" + $newpet_index + ")>.newpet_gallery_title").css("display", "none");
            $("#newpet_gallery>span:eq(" + $newpet_index + ")>.newpet_gallery_icon").css("display", "none");
            $("#newpet_gallery>span:eq(" + $newpet_index + ")>span").css("display", "none");
        });
    });
});
