document.addEventListener("DOMContentLoaded", function () {
    const h1Content = document.querySelector("h1").textContent;
    const currentDirectory = document.querySelector(".currentDirectory");
    if (currentDirectory) {
        currentDirectory.textContent = h1Content;
    }
});

const tagTextMap = {
    station: "駅チカ",
    parking: "駐車場",
    openAtNight: "19時以降OK",
    openOnWeekends: "土日祝営業",
    kids: "キッズスペース",
    femaleStaff: "女性スタッフ",
    onlineApp: "オンライン相談",
};

const elements = document.querySelectorAll("[data-tag]");
if (elements.length > 0) {
    elements.forEach(function (element) {
        const tagValue = element.getAttribute("data-tag");

        if (tagTextMap[tagValue]) {
            element.textContent = tagTextMap[tagValue];
        }
    });
}
