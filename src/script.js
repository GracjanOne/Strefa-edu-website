const contact_button = document.getElementById("contact-button");
const contact_form = document.getElementById("contact-window-container");
const cancel_button = document.getElementById("closeButton");
const close_button = document.getElementById("linkCloseButton");
const link_window = document.getElementsByClassName("links-window")[0];

const zsip = document.getElementById("zsip-link");

contact_button.addEventListener("click", function (event) {
  event.preventDefault();
  contact_form.style.opacity = "1";
  contact_form.style.visibility = "visible";
  contact_form.style.transition = "0.4s";
  window.scrollBy(0, 350);
});

cancel_button.addEventListener("click", function (event) {
  contact_form.style.opacity = "0";
  contact_form.style.visibility = "hidden";
});

close_button.addEventListener("click", function (event) {
  link_window.style.opacity = "0";
  link_window.style.visibility = "hidden";
});

zsip.addEventListener("click", function(event)
{
 event.preventDefault();
 link_window.style.opacity = "1";
 link_window.style.visibility = "visible";
 link_window.style.transition = "0.4s";
});
