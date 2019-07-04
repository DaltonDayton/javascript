// Uses a separate function if change needs to be used in multiple places
// var button = document.querySelector("button");

// function changeBG() {
//     document.body.classList.toggle("bg-change");
// }

// button.addEventListener("click", changeBG);

// Single use event

var button = document.querySelector("button");

button.addEventListener("click", function() {
    document.body.classList.toggle("bg-change");
});
