const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const menuNav = document.querySelector(".nav__menu");
const menuItem = document.querySelector(".menu__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    menuNav.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    menuNav.classList.remove("open");

    showMenu = false;
  }
}
