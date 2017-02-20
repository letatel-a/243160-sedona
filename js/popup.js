var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");

button.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("search-form-show");
    popup.classList.remove("search-form-error");
});

popup.addEventListener("submit", function(event) {
    if (!arrival.value || !departure.value) {
        event.preventDefault();
        popup.classList.remove("search-form-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("search-form-error");
    }
});