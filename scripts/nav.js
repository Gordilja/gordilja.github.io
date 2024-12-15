const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("open");
});