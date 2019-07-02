// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var stringGuess = prompt("Guess a number.");
var guess = Number(stringGuess);
// Check guess
if (guess === secretNumber) {
    alert("That's correct.");
}
// otherwise, check if higher
else if (guess > secretNumber) {
    alert("Too high. Guess again.");
}
// otherwise, check if lower
else {
    alert("Too low. Guess again.");
}
