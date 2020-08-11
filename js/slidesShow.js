let active = 0;
const li = document.getElementsByClassName("achievement-home-li");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");

leftArrow.addEventListener("click", function () {
    if (active === -1) {
        active = li.length - 1;
    }
    console.log(active);
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("active-li");
    }
    li[active].classList.add("active-li");
    active = active - 1;
});
rightArrow.addEventListener("click", function () {
    if (active === li.length) {
        active = 0;
    }
    console.log(active);
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("active-li");
    }
    li[active].classList.add("active-li");
    active = active + 1;
});
