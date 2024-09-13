const swiper = new Swiper(".slider", {
    loop: true,
    speed: 1300,
    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: ".swiper-pagination",
    },
});

const recommendSwiper = new Swiper(".recommend__slider", {
    loop: true,
    speed: 1000,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 4000,
    },

    pagination: {
        el: ".swiper-pagination",
    },
});

/* for connection slides */
document.querySelectorAll(".connection__slider").forEach((slider) => {
    const ulElement = slider.querySelector("ul");
    if (ulElement) {
        const clonedUl = ulElement.cloneNode(true);
        ulElement.parentNode.appendChild(clonedUl);
    }
});


