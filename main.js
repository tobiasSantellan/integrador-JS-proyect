const d = document;

const header = d.querySelector(".header");

const headerScroll = () => {
     (window.scrollY > 0) ? header.style.backgroundColor = "#090909" : header.style.backgroundColor = "transparent"
    }

const init = () => {
    window.addEventListener("scroll", headerScroll)
}

init();