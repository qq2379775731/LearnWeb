var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
	alert("You Got it Already");
}
else if (guess > secretNumber) {
	alert("Too Large");
}
else if (guess < secretNumber) {
	alert("Too Small");
}