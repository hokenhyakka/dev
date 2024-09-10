document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.getElementsByClassName('region-tab');
    const panels = document.getElementsByClassName('region-panel');

    const urlParams = new URLSearchParams(window.location.search);
    const activeTabParam = urlParams.get('region');
    
    if (activeTabParam) {
        const targetTab = document.querySelector(`.region-tab[data-tab='${activeTabParam}']`);
        if (targetTab) {
            activateTab(targetTab);
        }
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch);
    }

    function tabSwitch() {
        activateTab(this);

        const tabParam = this.getAttribute('data-tab');
        const newUrl = `${window.location.pathname}?region=${tabParam}`;
        window.history.replaceState(null, null, newUrl);
    }

    function activateTab(tab) {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].setAttribute('aria-selected', 'false');
            panels[i].setAttribute('aria-hidden', 'true');
        }

        tab.setAttribute('aria-selected', 'true');
        const index = Array.prototype.indexOf.call(tabs, tab);
        panels[index].setAttribute('aria-hidden', 'false');
    }
});