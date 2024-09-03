window.onload = function() {
    const regions = ['tokyo', 'saitama', 'kanagawa', 'chiba', 'ibaraki', 'hokkaido', 'miyagi', 'aichi', 'osaka', 'kyoto', 'hyogo'];
    const currentUrl = window.location.href;

    regions.forEach(region => {
        if (currentUrl.endsWith(`shop/${region}/`)) {
            const newUrl = `../../shop/?pref=${region}`;
            window.location.href = newUrl;
        }
    });
};


/* header dup */
const handleResize = () => {
    if (window.matchMedia("(min-width: 1361px)").matches) {
        const headerContainer = document.querySelector("#header .container");
        if (headerContainer) {
            let stickyHeader = document.querySelector(".header--stick");
            if (!stickyHeader) {
                const containerClone = headerContainer.cloneNode(true);
                stickyHeader = document.createElement("div");
                stickyHeader.classList.add("header");
                stickyHeader.classList.add("header--stick");
                stickyHeader.appendChild(containerClone);
                headerContainer.parentElement.insertAdjacentElement(
                    "afterend",
                    stickyHeader
                );
            }
        }
    } else {
        const stickyHeader = document.querySelector(".header--stick");
        if (stickyHeader) {
            stickyHeader.remove();
        }
    }
};
handleResize();
window.addEventListener("resize", handleResize);
handleResize();
window.addEventListener("resize", handleResize);


/* header stick */
const stickyHeader = document.querySelector(".header--stick");

if (stickyHeader) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.scrollY;

        if (currentScrollTop <= 20) {
            stickyHeader.classList.remove("is-visible");
        } else if (currentScrollTop > lastScrollTop) {
            stickyHeader.classList.add("is-visible");
        } else {
            stickyHeader.classList.remove("is-visible");
        }
        lastScrollTop = currentScrollTop;
    });
}


/* header responsive */
function moveExts() {
    const exts = document.querySelector('.header__exts');
    const navUl = document.querySelector('.header__nav ul');
    const headerInner = document.querySelector('.header__inner');

    if (window.innerWidth <= 1360 && exts && navUl) {
        navUl.appendChild(exts);
    } else if (window.innerWidth > 1360 && exts && !headerInner.contains(exts)) {
        headerInner.appendChild(exts);
    }
}
window.addEventListener('resize', moveExts);
window.addEventListener('DOMContentLoaded', moveExts);

/* header shop */
document.addEventListener('DOMContentLoaded', function() {
    function updateText() {
        const shopLink = document.querySelector('.header__shop a');
        const originalText = 'お近くの店舗を探す';
        const updatedText = '店舗を探す';

        if (shopLink) {
            const imgElement = shopLink.querySelector('img');
            let currentText = shopLink.textContent.trim();

            if (window.innerWidth <= 450 && currentText === originalText) {
                shopLink.textContent = updatedText;
                if (imgElement) {
                    shopLink.appendChild(imgElement);
                }
            } else if (window.innerWidth > 450 && currentText === updatedText) {
                shopLink.textContent = originalText;
                if (imgElement) {
                    shopLink.appendChild(imgElement);
                }
            }
        }
    }

    updateText();
    window.addEventListener('resize', updateText);
});




/* header btn */
const headerBtn = document.getElementById("header__btn");
const header = document.getElementById("header");
const headerNav = document.getElementById("header__nav");

headerBtn.addEventListener("click", function () {
    if (headerBtn.classList.contains("is-active")) {
        headerBtn.classList.remove("is-active");
        header.classList.remove("is-active");
        headerNav.classList.remove("is-active");
    } else {
        headerBtn.classList.add("is-active");
        header.classList.add("is-active");
        headerNav.classList.add("is-active");
    }
});

headerNav.addEventListener("click", function () {
    if (headerBtn.classList.contains("is-active")) {
        headerBtn.classList.remove("is-active");
        header.classList.remove("is-active");
        headerNav.classList.remove("is-active");
    }
});

const headerMenuItems = document.querySelectorAll("header nav ul li a");
headerMenuItems.forEach(function (headerMenuItem) {
    headerMenuItem.addEventListener("click", function () {
        headerBtn.classList.remove("is-active");
        header.classList.remove("is-active");
    });
});


/* back to top */
document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: document.getElementById('body').offsetTop,
        behavior: 'smooth'
    });
    history.replaceState(null, null, ' ');
});

/* target=_blank */
document.querySelectorAll('a').forEach(function(link) {
    const url = link.getAttribute('href');
    if (url && url.startsWith('https') && !url.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
    }
});

/* voice__list */
let voiceSwiper;
function updateVoiceListClass() {
    const voiceList = document.querySelector(".voice__list");

    if (!voiceList) return;

    if (window.innerWidth <= 769) {
        voiceList.classList.add("voice__slider");

        if (!voiceSwiper) {
            voiceSwiper = new Swiper(".voice__slider", {
                loop: true,
                speed: 600,
                autoplay: {
                    delay: 4000,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
    } else {
        voiceList.classList.remove("voice__slider");

        if (voiceSwiper) {
            voiceSwiper.destroy(true, true);
            voiceSwiper = null;
        }
    }
}
window.addEventListener("resize", updateVoiceListClass);
window.addEventListener("DOMContentLoaded", updateVoiceListClass);

/* faq__list */
const faqLists = document.querySelectorAll('.faq__list');

faqLists.forEach(faqList => {
    faqList.querySelectorAll('details').forEach(details => {
        const content = details.querySelector('div');

        details.addEventListener('toggle', function () {
            if (details.open) {
                let maxHeight = 0;
                const animateOpen = setInterval(() => {
                    maxHeight += 10;
                    content.style.maxHeight = maxHeight + 'px';
                    if (maxHeight >= content.scrollHeight) {
                        clearInterval(animateOpen);
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                }, 20);
            } else {
                let maxHeight = content.scrollHeight;
                const animateClose = setInterval(() => {
                    maxHeight -= 10;
                    content.style.maxHeight = maxHeight + 'px';
                    if (maxHeight <= 0) {
                        clearInterval(animateClose);
                        content.style.maxHeight = '0';
                    }
                }, 20);
            }
        });
    });
});

