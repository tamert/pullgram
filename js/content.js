$(function () {

    var artim = 500;
    console.log(document.URL);
    console.log(document.URL.indexOf("instagram.com"));
    console.log(document.URL.indexOf("www.instagram.com"));
    if (document.URL.indexOf("instagram.com") > 0) {

        $("body").append('<div style="position:fixed;top:0px;left:0px;padding:10px;z-index:999999"><button id="takip_et" class="_jvpff _k2yal _988x3 _i46jh _nv5lf" type="button">Follow All</button> <button id="unfollowjs" class="_jvpff _k2yal _988x3 _i46jh _nv5lf" type="button">Unfollow not Following</button><button id="unfollowalljs" class="_jvpff _k2yal _988x3 _i46jh _nv5lf" type="button">UnFollow All</button>  <br> <a href="https://tinysay.com">Tamer Agaoglu</a></div>');

        $("#unfollowjs").click(function () {
            var sayac = 100;
            $(".js-actionable-user").each(function (index) {
                durumu = $(this).find(".FollowStatus");
                if (durumu.length == 0) {
                    var butonu;
                    sayac = sayac + artim;
                    butonu = $(this).find(".user-actions-follow-button");
                    setTimeout(function () {
                        butonu.click();
                    }, sayac);
                }

            });
        });


        $("#unfollowalljs").click(function () {

            var sayac = 100;

            $(".js-actionable-user").each(function (index) {


                var butonu;
                sayac = sayac + artim;
                butonu = $(this).find(".user-actions-follow-button");

                setTimeout(function () {

                    butonu.click();
                    console.log(butonu);

                }, sayac);

            });
        });


        $("#takip_et").click(function () {
            var sayac = 100;
            $(".not-following").each(function (index) {
                var butonu;
                sayac = sayac + artim;
                butonu = $(this).find(".user-actions-follow-button");
                setTimeout(function () {
                    butonu.click();
                }, sayac);
            });

        });


    }


});






