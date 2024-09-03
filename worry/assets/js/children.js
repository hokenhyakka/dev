document.addEventListener("DOMContentLoaded", function() {
    var mainElement = document.querySelector("main");
    if (mainElement) {
        var worryValue = mainElement.getAttribute("data-worry");
        if (worryValue) {
            var listItems = document.querySelectorAll(".worry__list [data-worry]");
            listItems.forEach(function(item) {
                if (item.getAttribute("data-worry") === worryValue) {
                    item.classList.add("is-active");
                }
            });
        }
    }
});
