 $(document).ready(function () {
        $(".banners").mouseenter(() => {
          $(".on").css("display", "block");
        });
        $(".banners").mouseleave(() => {
          $(".on").css("display", "none");
        });

        let $bannerL = $(".banner_ol>li").length;
        let $banner_wid = $(".banner_ol").width();
        let $total_wid = $bannerL * $banner_wid;

        $(".banner_ol").css("width", $total_wid + "px");
        let $node = 0;

        $(".leftBtn").click(() => {
          $node--;
          // disc

          let $i = 2;
          while ($i > -1) {
            $(".disc>li")
              .eq($i)
              .css({ "background-color": "lightblue", width: "20px" });
            $i--;
          }
          $(".disc>li")
            .eq($node)
            .css({ "background-color": "lightcoral", width: "60px" });

          //banner
          let $left = $node * $banner_wid;
          if ($node === -1) {
            $node = 1;
            $left = $node * $banner_wid;
          }

          $(".banner_ol").animate(
            {
              left: -$left + "px",
            },
            500
          );
        });

        $(".rightBtn").click(() => {
          $node++;
          if ($node > 1) {
            $node = 0;
          }
          // disc
          let $j = 2;
          while ($j > -1) {
            $(".disc>li")
              .eq($j)
              .css({ "background-color": "lightblue", width: "20px" });
            $j--;
          }
          $(".disc>li")
            .eq($node)
            .css({ "background-color": "lightcoral", width: "60px" });

          //banner
          let $left = $node * $banner_wid;

          $(".banner_ol").animate(
            {
              left: -$left + "px",
            },
            500
          );
          console.log("banner", $node);
        });
      });