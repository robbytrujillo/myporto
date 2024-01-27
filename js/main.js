const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const iconBars = document.querySelector(".icon-bars");
const iconClose = document.querySelector(".icon-close");

function displayMenu() {
  if (menu.classList.contains("tampil")) {
    menu.classList.remove("tampil");
    iconBars.computedStyleMap.display = "inline";
    iconClose.computedStyleMap.display = "none";
  } else {
    menu.classList.add("tampil");
    iconBars.computedStyleMap.display = "none";
    iconClose.computedStyleMap.display = "inline";
  }
}
