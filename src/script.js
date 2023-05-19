const contact_button = document.getElementById("contact-button");
const contact_form = document.getElementById("contact-window-container");
const cancel_button = document.getElementById("closeButton");
contact_button.addEventListener("click", function (event) {
  event.preventDefault();
  contact_form.style.opacity = "1";
  contact_form.style.visibility = "visible";
  contact_form.style.transition = "0.4s";
  window.scrollBy(0, 350);
});
closeButton.addEventListener("click", function (event) {
  contact_form.style.opacity = "0";
  contact_form.style.visibility = "hidden";
});
