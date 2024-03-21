const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const titles = document.getElementsByClassName("title");
const asideSection = document.getElementById("aside");
const mainSection = document.getElementById("main");
const logo = document.getElementById("logo");
const nav = document.getElementById("nav");

let toggle = false;

function toggleBtn() {
    console.log(toggle);
    console.log("hello");
    if (toggle) {
        toggle = false;
        openBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
        asideSection.classList.add("w-1/5");
        asideSection.classList.add("scrollable-container")
        mainSection.classList.add("w-4/5");
        logo.classList.add("w-1/5");
        nav.classList.add("w-4/5");
        for (let i = 0; i < titles.length; i++) {
            titles[i].classList.remove("hidden");
        }
    } else {
        toggle = true;
        openBtn.classList.add("hidden");
        closeBtn.classList.remove("hidden");
        asideSection.classList.remove("w-1/5");
        asideSection.classList.remove("scrollable-container")
        mainSection.classList.remove("w-4/5");
        logo.classList.remove("w-1/5");
        nav.classList.remove("w-4/5");
        for (let i = 0; i < titles.length; i++) {
            titles[i].classList.add("hidden");
        }
    }
}
