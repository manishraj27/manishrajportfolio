console.log("Script is running");

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav__menu");
let isMenuOpen = false;

const toggleMenu = () => {
  isMenuOpen ? closeMenu() : openMenu();
};

const openMenu = () => {
  navMenu.style.right = "0";
  isMenuOpen = true;
};

const closeMenu = () => {
  navMenu.style.right = "-100%";
  isMenuOpen = false;
};

navToggle.addEventListener("click", toggleMenu);
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");

  if (homeLink) {
    homeLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.reload();
    });
  }
});





