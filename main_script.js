window.addEventListener("scroll", function () {
    var scrollArrow = document.querySelector(".scroll-arrow-container");
    if (window.pageYOffset > 100) {
        scrollArrow
            .classList
            .add("show-arrow");
    } else {
        scrollArrow
            .classList
            .remove("show-arrow");
    }
});
