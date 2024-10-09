const mySwiper = new Swiper(".shop-one__slider", {
    loop: true,
    speed: 600,
    autoplay:{
        delay: 4000,
    },

    pagination: {
        el: ".swiper-pagination",
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector("body[data-pref][data-shop]");
    const prefValue = mainElement.getAttribute("data-pref");
    const shopValue = mainElement.getAttribute("data-shop");

    const matchingElements = mainElement.querySelectorAll(
        `[data-pref="${prefValue}"], [data-shop="${shopValue}"]`
    );
    matchingElements.forEach((el) => el.classList.add("current"));
});


document.addEventListener('DOMContentLoaded', function() {
    var h1Text = document.querySelector('h1').textContent;
    var firstH2 = document.querySelector('.shop-one__message h2');
    
    if (firstH2) {
        firstH2.insertAdjacentText('afterbegin', h1Text);
    }
});

const eventList = document.querySelector('.shop-one__event-list');

if (eventList) {
    eventList.querySelectorAll('.category').forEach(function(category) {
        if (category.classList.contains('info')) {
            category.textContent = 'インフォメーション';
        } else if (category.classList.contains('campaign')) {
            category.textContent = 'キャンペーン';
        } else if (category.classList.contains('event')) {
            category.textContent = 'イベント';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var emailLink = document.querySelector('[data-shop="email"] a');
    var mainTag = document.querySelector('body');
    
    if (emailLink && mainTag) {
        var shopName = mainTag.getAttribute('data-shop') || "default";
        var domain = "@izumi-ld.co.jp";

        if (shopName === "gakugeidai") {
            shopName = "gakudai";
        } else if (shopName === "takahata") {
            shopName = "takahatafudou";
        } else if(shopName == "tamasenta") {
            shopName = "tama";
        } else if (shopName == "omiya") {
            shopName = "oomiya";
        } else if (shopName == "kohoku") {
            shopName = "kouhoku";
        } else if (shopName == "sagamiono") {
            shopName = "sagamioono";
        } else if (shopName == "dotica") {
            shopName = "umeda-dotika";
        } else if (shopName == "higashiosaka") {
            shopName = "higashioosaka";
        } 

        var email = shopName + domain;
        emailLink.textContent = email;

        emailLink.addEventListener("click", function(event) {
            event.preventDefault();

            var subject = encodeURIComponent("サイトからのお問い合わせ");
            var body = encodeURIComponent("お名前（フルネーム）：");

            var mailtoLink = 'mailto:' + encodeURIComponent(email) + '?subject=' + subject + '&body=' + body;
            window.location.href = mailtoLink;
        });
    }
});
