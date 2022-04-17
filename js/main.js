const menu = document.querySelector('.header__navbar--links');
const menuButton = document.querySelector('.header__navbar--icons');
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    overlay.classList.toggle("show");
})

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    overlay.classList.toggle("show");
});