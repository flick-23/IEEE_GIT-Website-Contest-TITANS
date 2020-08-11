const options = {
    threshold: 0.4,
};
const headerObserver = new IntersectionObserver(function (
    entries,
    headerObserver
) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("fly_up_fast");
        }
    });
},
options);
document.querySelectorAll(".fly").forEach((one) => {
    headerObserver.observe(one);
});
// headerObserver.observe(document.getElementById("membership"));
// ###################################### scrollindicator ############################

let scrolled =
    Math.abs(
        window.scrollY / (window.innerHeight - document.body.scrollHeight)
    ) * 100;
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
