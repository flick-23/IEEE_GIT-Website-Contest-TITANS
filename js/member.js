const options = {
    threshold: 0.6,
};
const headerObserver = new IntersectionObserver(function (
    entries,
    headerObserver
) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.getElementById("join-img").classList.add("fadeLeft");
            document.getElementById("join-heading").classList.add("fadeDown");
            document.getElementById("join-text").classList.add("fadeRight");
            document.getElementById("join-btn").classList.add("fadeUp");
        }
    });
},
options);

headerObserver.observe(document.getElementById("membership"));
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
