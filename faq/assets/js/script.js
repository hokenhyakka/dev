document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;

    if (hash) {
        const targetLi = document.querySelector(hash);

        if (targetLi) {
            const detailsElement = targetLi.querySelector('details');
            if (detailsElement) {
                detailsElement.open = true;
            }
        }
    }
});
