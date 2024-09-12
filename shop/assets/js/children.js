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
    const mainElement = document.querySelector("main[data-pref][data-shop]");
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
    
    if (emailLink) {
        var pageURL = window.location.pathname;
        var pathSegments = pageURL.split("/").filter(function(segment) { return segment.length > 0; }); 
        var directoryName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "default"; 
        var domain = "@izumi-ld.co.jp";

        var email = directoryName + domain;
        emailLink.textContent = email;

        emailLink.addEventListener("click", function(event) {
            event.preventDefault();

            var mailtoLink = 'mailto:' + encodeURIComponent(email);
            window.location.href = mailtoLink;
        });
    }
});