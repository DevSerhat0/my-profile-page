const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

const scrollTop = document.querySelector(".scroll-Top");

window.addEventListener("scroll", () => {
    if (scrollY > 1200) {
        scrollTop.classList.add("visible");
    }
    else {
        scrollTop.classList.remove("visible");
    }
});

scrollTop.addEventListener("click", () => {
    window.scrollTo(0,0);
});