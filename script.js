const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

const scrollTop = document.querySelector(".scroll-Top");

function getScrollPercentage() {

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (maxScroll === 0) {
        return 0;
    }

    const percentage = window.scrollY / maxScroll * 100;

    return percentage;
}

window.addEventListener("scroll", () => {
    if (getScrollPercentage() >= 75) {
        scrollTop.classList.add("visible");
    }
    else {
        scrollTop.classList.remove("visible");
    }
});

scrollTop.addEventListener("click", () => {
    window.scrollTo(0,0);
});