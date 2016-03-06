/**
   * //https://www.instagram.com/smena8m/media/?min_id=1045341392067624850_3108326  adresinden min_id yi döndürerek bir kişinin tüm postlarına ve buna yapılmş comment ve likelara ulaşılabiliniyor

   * @todo: Etiketlerden alınacak resimlerin listesi fonksiyon
        Tür Post
        post_url:https://www.instagram.com/query/
        fonksiyon tanımı: function get_image_list_from_tags(tag,media_after=null) return json data
        post dataları:
      q:ig_hashtag(saat) { media.after(1198494240513664468, 12) {
  count,
  nodes {
    caption,
    code,
    comments {
      count
    },
    date,
    dimensions {
      height,
      width
    },
    display_src,
    id,
    is_video,
    likes {
      count
    },
    owner {
      id
    },
    thumbnail_src
  },
  page_info
}
 }
ref:tags::show
        */


/**
        * @todo: kullanıcının resimlerinin listesi fonksiyon 
        Tür get
        get_url:https://www.instagram.com/{username}/media/
        fonksiyon tanımı: function get_image_list_from_user(username,min_id=null) return json data
        get dataları:
            min_id:min_id
        */


/**
        * @todo: resimlerden like edenleri çekmek 
        Tür get
        get_url:https://www.instagram.com/p/{media_id}/?__a=1
        fonksiyon tanımı: function get_users_likes(media_id) return array (user_ids_sadece like edenlerin comentlere gerek yok)
        get dataları:
            __a:1
        */


/**
        * @todo: resimlere comment atanları çekmek edenleri çekmek 
        Tür post
        post_url:https://www.instagram.com/query/
        fonksiyon tanımı: function get_users_comments(media_id,comments_before=null) return json data
        post dataları:
         q:ig_shortcode(BChMMpYJFK1) {
  comments.before(
          1198445883585482876,
          20
        ) {
    count,
    nodes {
      id,
      created_at,
      text,
      user {
        id,
        profile_pic_url,
        username
      }
    },
    page_info
  }
}
ref:media::show
Name

        */

window.start = true;

$(function () {

    var artim = 500;
    console.log(document.URL);
    console.log(document.URL.indexOf("instagram.com"));
    console.log(document.URL.indexOf("www.instagram.com"));
    if (document.URL.indexOf("instagram.com") > 0) {
        var mainSwf = chrome.extension.getURL('img/main.swf');
        $("body").append('<a class="button-pull" href="#"><span></span></a><nav class="pushmenu pushmenu-left"> <h3>PULLGRAM</h3> <a href="#" style="color:#FFF; font-weight: normal;" class="test">Test Server</a> <a href="#" style="color:#FFF; font-weight: normal;" class="keep-user">Get Followers</a> <div class="content"> <div class="pure-g"> <div class="pure-u-1-2"> <h1 style="padding-top:10px; font-size:13px !important; color:#FFF; text-align:center;"> Queue</h1> <div style="margin-top:10px; padding:0px 5px; 0px 0px"> <p class="button-secondary pure-button full" style="font-size:35px;">0</p></div></div> <div class="pure-u-1-2"><h1 style="padding-top:10px; font-size:13px !important; color:#FFF; text-align:center;"> Processed</h1> <div style="margin-top:10px; padding:0px 5px; 0px 0px"> <p class="button-success pure-button full" style="font-size:35px;">0</p>  </div>  </div> <div style="text-align: center; margin:10px;"> <object width="220" height="50" data="'+mainSwf+'">Alertnative Content Here</object> </div> </div> </div></nav>');

        /**
         * @todo: bunun gibi oluşturuyoruz.. ide bunu direk iş tanımı olarak görüyor...
         */

        $menuLeft = $('.pushmenu-left');
        $nav_list = $('a.button-pull');

        $nav_list.click(function() {
            $(this).toggleClass('active');
            $('.pushmenu-push').toggleClass('pushmenu-push-toright');
            $menuLeft.toggleClass('pushmenu-open');
        });


        $('.test').on('click', function (e) {
            e.preventDefault();


            var jqxhr = $.get( 'https://httpbin.org/?veri=1&veri=2', function() {
                    console.log( "success" );
                })
                .done(function(data) {
                    console.log(data);
                })
                .fail(function() {
                    console.log( "error" );
                })
                .always(function() {
                    console.log( "finished" );
                });
            jqxhr.always(function() {
                console.log( "second finished" );
            });

            return false;
        });

        /*$('a.button-pull').on('click', function (e) {
            e.preventDefault();
            $('.wrap, a').toggleClass('active');
            return false;
        });*/

        $('.keep-user').click(function (e) {
            e.preventDefault();
            btn = $(this);
            btn.removeClass('pure-button-primary').add('pure-button-danger');
            btn.html('Stop');
            $("a[href*='/?tagged=']").each(function () {
                var link = $(this).attr('href') + '&__a=1';

                // ilk 12 tane çek
                $.getJSON(link, function (data) {

                    console.log(data);



                });
            });
        });
    }

});


        /*
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
         */





/*



 var link = $( "a[href*='/?tagged=']").eq(0).attr('href')+'&__a=1';
 $.getJSON( link, function( data ) {
 console.log(data);
 });

 function escapeRegExp(str) {
 return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
 }

 function replaceAll(str, find, replace) {
 return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
 }

 ig_shortcodes = 'ig_shortcode(BCeKpqWOsRp)+%7B%0A++comments.before(%0A++++++++++1197635690653467744%2C%0A++++++++++99%0A++++++++)+%7B%0A++++count%2C%0A++++nodes+%7B%0A++++++id%2C%0A++++++created_at%2C%0A++++++text%2C%0A++++++user+%7B%0A++++++++id%2C%0A++++++++profile_pic_url%2C%0A++++++++username%0A++++++%7D%0A++++%7D%2C%0A++++page_info%0A++%7D%0A%7D%0A';


 ig_shortcodes = replaceAll(ig_shortcodes, '+', ' ');

 console.log(ig_shortcodes);

 //(

 //ig_shortcode    =  { 'ig_shortcode(BCeKpqWOsRp) { comments.before( 1197638113811940560, 50 ) { count, nodes { id, created_at, text, user { id, profile_pic_url, username } }, page_info } }' };

 $.post('/query', { q: decodeURIComponent(ig_shortcodes), ref: 'media::show' }, function(response) {
 // Do something with the request
 }, 'json');

 */



