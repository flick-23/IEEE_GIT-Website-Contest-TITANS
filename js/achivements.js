const options = {
    threshold: 0.8,
};
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("animation");
        }
    });
}, options);
document.querySelectorAll(".achievements-li").forEach(function (one) {
    observer.observe(one);
});
// ###################################### scrollindicator ############################

let scrolled =
    Math.abs(
        window.scrollY / (window.innerHeight - document.body.scrollHeight)
    ) * 100;
console.log(scrolled);
if (
    !(
        scrolled == 0 &&
        window.innerHeight <=
            Math.max(
                document.documentElement.clientHeight || 0,
                window.innerHeight || 0
            )
    )
) {
    document.getElementById("indicator").style.width = `100%`;
    document.getElementById("indicator").classList.add("corners");
} else {
    document.getElementById("indicator").classList.remove("corners");
    document.getElementById("indicator").style.width = `0%`;
}
console.log(window.scrollY);
window.addEventListener("scroll", function () {
    scrolled =
        Math.abs(
            window.scrollY / (window.innerHeight - document.body.scrollHeight)
        ) * 100;
    if (scrolled >= 98) {
        document.getElementById("indicator").classList.add("corners");
    } else {
        document.getElementById("indicator").classList.remove("corners");
    }
    document.getElementById("indicator").style.width = `${scrolled}%`;
});
