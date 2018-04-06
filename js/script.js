var open = document.querySelector(".hotel-button");
var popup = document.querySelector(".search-form");

document.documentElement
  .classList.replace('no-js', 'js');

open.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.toggle("form-open");
 });
