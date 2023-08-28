/** ToDo
 * Responsywność aktualności
 * Dokończyć responsywność strefy szkoły
 * Powiększyć fonty tytułów stref
 * Powiekszyć source w strefach
 * 
 */
/** Bugs
 * Czasami aside-title jest po lewej stronie zamiast po środku
 */


const contact_button = document.getElementById("contact-button");
const contact_form = document.getElementById("contact-window-container");
const cancel_button = document.getElementById("closeButton");
const close_button = document.getElementById("linkCloseButton");
const link_window = document.getElementsByClassName("links-window")[0];
const jawor_link_window =
  document.getElementsByClassName("jawor-links-window")[0];
const bolkow_link_window = document.getElementsByClassName(
  "bolkow-links-window"
)[0];
const zsip = document.getElementById("zsip-link");
const jawor = document.getElementById("jawor-link");
const bolkow = document.getElementById("bolkow-link");
const jawor_close = document.getElementById("JaworlinkCloseButton");
const contact_window = document.getElementById("contact-window");

const bolkow_close = document.getElementById("BolkowlinkCloseButton");
const burger = document.getElementById("burger-menu");
const nav = document.querySelector("#navbar-container");
const navClose = document.querySelector("#close-button");
contact_button.addEventListener("click", function (event) {
  event.preventDefault();
  contact_form.style.opacity = "1";
  contact_form.style.visibility = "visible";
  contact_form.style.transition = "0.4s";
  nav.style.display = "none"
});

cancel_button.addEventListener("click", function (event) {
  contact_form.style.opacity = "0";
  contact_form.style.visibility = "hidden";
});

close_button.addEventListener("click", function (event) {
  link_window.style.opacity = "0";
  link_window.style.visibility = "hidden";
});

zsip.addEventListener("click", function (event) {
  event.preventDefault();
  link_window.style.opacity = "1";
  link_window.style.visibility = "visible";
  link_window.style.transition = "0.4s";
});
jawor.addEventListener("click", function (event) {
  event.preventDefault();
  jawor_link_window.style.opacity = "1";
  jawor_link_window.style.visibility = "visible";
  jawor_link_window.style.transition = "0.4s";
});
jawor_close.addEventListener("click", function (event) {
  jawor_link_window.style.opacity = "0";
  jawor_link_window.style.visibility = "hidden";
});
bolkow.addEventListener("click", function (event) {
  event.preventDefault();
  bolkow_link_window.style.opacity = "1";
  bolkow_link_window.style.visibility = "visible";
  bolkow_link_window.style.transition = "0.4s";
});
bolkow_close.addEventListener("click", function (event) {
  bolkow_link_window.style.opacity = "0";
  bolkow_link_window.style.visibility = "hidden";
});
burger.addEventListener("click", function (e) {
  e.preventDefault;
  nav.style.display = "flex";
});
navClose.addEventListener("click", (event) => {
  event.preventDefault;
  nav.style.display = "none";
});
let width = window.innerWidth;
let aside = document.querySelector("aside");
let middleContainer = document.querySelector("#middle-container");
let responisveAside = aside;
let aboutTitle = document.querySelector("#aside-title");
if (width <= 481) {
  middleContainer.append(aboutTitle);
  aside.style.display = "none";
  middleContainer.append(responisveAside);
  responisveAside.style.display = "block";
}


