const swiper = new Swiper(".slider", {
    loop: true,
    speed: 600,
    autoplay: {
        delay: 4000,
    },

    pagination: {
        el: ".swiper-pagination",
    },
});

const recommendSwiper = new Swiper(".recommend__slider", {
    loop: true,
    speed: 600,
    centeredSlides: true,
    // slidesPerView: 4,
    slidesPerView: 'auto',
    autoplay: {
        delay: 4000,
    },

    pagination: {
        el: ".swiper-pagination",
    },
});

document.querySelectorAll(".connection__slider").forEach((slider) => {
    const ulElement = slider.querySelector("ul");
    if (ulElement) {
        const clonedUl = ulElement.cloneNode(true);
        ulElement.parentNode.appendChild(clonedUl);
    }
});


