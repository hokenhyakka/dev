// ボタンアニメーション
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('#btn').removeClass('DownMove');
        $('#btn').addClass('UpMove');
    } else {
        if ($('#btn').hasClass('UpMove')) {
            $('#btn').removeClass('UpMove');
            $('#btn').addClass('DownMove');
        }
    }
}

$(window).scroll(function () {
    PageTopAnime();
});

$(window).on('load', function () {
    PageTopAnime();
});

// ボタンアニメーション

// タブアニメーション
function GethashID(hashIDName) {
    if (hashIDName) {
        $('.tab li').find('a').each(function () {
            var idName = $(this).attr('href');
            if (idName == hashIDName) {
                var parentElm = $(this).parent();
                $('.tab li').removeClass("active");
                $(parentElm).addClass("active");
                $(".tab_menu").removeClass("is-active");
                $(hashIDName).addClass("is-active");
            }
        });
    }
}

$('.tab a').on('click', function () {
    var idName = $(this).attr('href');
    GethashID(idName);
    return false;
});

$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active");
    $('.tab_menu:first-of-type').addClass("is-active");
    var hashName = location.hash;
    GethashID(hashName);
});
// タブアニメーション
