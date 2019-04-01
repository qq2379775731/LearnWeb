var p1Button= document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var winDisplay = document.getElementById("winDisplay");
var inputNumber = document.querySelector("input");
var winScore = 5;
var p1Score = 0;
var p2Score = 0;
var winGame = false;

p1Button.addEventListener("click", function() {
	if (!winGame) {
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score === winScore) {
			p1Display.classList.add("win");
			winGame = true;
		}
	}
});

p2Button.addEventListener("click", function() {
	if (!winGame) {
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score === winScore) {
			p2Display.classList.add("win");
			winGame = true;
		}
	}
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	winGame = false;
	p1Display.classList.remove("win");
	p2Display.classList.remove("win");
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
}

resetButton.addEventListener("click", function() {
	reset();
})

inputNumber.addEventListener("change", function() {
	winDisplay.textContent = this.value;
	winScore = Number(this.value);
})


