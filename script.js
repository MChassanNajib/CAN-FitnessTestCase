const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");

hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());
