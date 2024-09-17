document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.getElementsByClassName('pref-tab');
    const panels = document.getElementsByClassName('pref-panel');

    const urlParams = new URLSearchParams(window.location.search);
    const activeTabParam = urlParams.get('pref');
    
    if (activeTabParam) {
        const targetTab = document.querySelector(`.pref-tab[data-tab='${activeTabParam}']`);
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
        const newUrl = `${window.location.pathname}?pref=${tabParam}`;
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


const phoneNumbers = {
    yaesu: "0120-561-966",
    akabane: "0120-561-990",
    shinkoiwa: "0120-561-866",
    sunamo: "0120-561-149",
    shinagawa: "0120-561-370", 
    osaki: "0120-561-366",
    shinjuku: "0120-251-390",
    gakugeidai: "0120-561-320",
    kyodo: "0120-561-595",
    tamagawa: "0120-561-779",
    hikarigaoka: "0120-561-891",
    kichijoji: "0120-561-262",
    fucyu: "0120-377-077",
    kokubunji: "0120-341-975", 
    kodaira: "0120-515-304",
    lalaporttachihi: "0120-561-265",
    takahata: "0120-561-727", 
    tamadaira: "0120-561-002",
    machida: "0120-561-922",
    hibarigaoka: "0120-561-477",
    tamasenta: "0120-561-299",
    cocoon: "0120-561-884",
    omiya: "0120-561-671",
    musashiurawa: "0120-800-971",
    kawaguchi: "0120-378-168",
    misato: "0120-708-840",
    koshigaya: "0120-561-336",
    kawagoe: "0120-561-774",
    wakaba: "0120-561-886",
    asaka: "0120-512-700",
    lalaportfujimi: "0120-561-778",
    tokorozawa: "0120-399-066",
    kumagaya: "0120-330-181",
    atrekawasaki: "0120-561-445",
    musashikosugi: "0120-561-388",
    mizonokuchi: "0120-561-288",
    saginuma: "0120-561-235",
    shinyokohama: "0120-561-766",
    hiyoshi: "0120-561-974",
    kohoku: "0120-561-973",
    nakayama: "0120-070-058",
    tsurumi: "0120-561-995",
    honmoku: "0120-706-202",
    kamioka: "0120-561-989",
    noukendai: "0120-561-344",
    tennocho: "0120-561-344",
    yamato: "0120-561-386",
    lalaportebina: "0120-561-992",
    hashimoto: "0120-561-331",
    sagamiono: "0120-561-533",
    chiba: "0120-561-652",
    abiko: "0120-561-799",
    myoden: "0120-561-578",
    kamagaya: "0120-593-800",
    ariokashiwa: "0120-561-314",
    kashiwa: "0120-561-353",
    moriya: "0120-561-367",
    tsukuba: "0120-258-355",
    "sapporo-sakaemachi": "0120-305-166",
    "sapporo-tokyu": "0120-161-868",
    natori: "0120-561-324",
    nagamachi: "0120-561-364",
    tagajo: "0120-260-196",
    sunroad: "0120-461-015",
    chikusa: "0120-113-148",
    obu: "0120-561-744",
    dotica: "0120-561-261",
    abeno: "0120-561-553",
    esaka: "0120-561-663",
    yamada: "0120-576-325",
    lalaportexpocity: "0120-561-161",
    kadoma: "0120-833-234",
    kuzuha: "0120-561-422",
    higashiosaka: "0120-561-175",
    lalaportsakai: "0120-664-577",
    senboku: "0120-561-550",
    lalaportizumi: "0120-561-664",
    izumifuchu: "0120-628-131",
    kyoto: "0120-561-858", 
    sannomiya: "0120-561-787",
    nishinomiya: "0120-386-276",
    itamikounoike: "0120-628-228"
};

const shopElements = document.querySelectorAll('[data-shop]');

shopElements.forEach(shopEl => {
    const shopType = shopEl.getAttribute('data-shop');
    const telNumElement = shopEl.querySelector('[data-shop="telNum"]');
    
    if (phoneNumbers[shopType] && telNumElement) {
        const phoneNumber = phoneNumbers[shopType];
        const phoneNumberForHref = phoneNumber.replace(/-/g, '');

        if (telNumElement.tagName.toLowerCase() === 'a') {
            
            telNumElement.href = `tel:${phoneNumberForHref}`;
            if (!telNumElement.textContent.trim()) {
                telNumElement.textContent = phoneNumber;
            }
        } else {
            const anchorElement = telNumElement.querySelector('a');
            if (anchorElement) {
                anchorElement.href = `tel:${phoneNumberForHref}`;
                if (!anchorElement.textContent.trim()) {
                    anchorElement.textContent = phoneNumber;
                }
            } else {
                telNumElement.textContent = phoneNumber;
            }
        }
    }
});s