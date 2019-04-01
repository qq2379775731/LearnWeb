var colorDisplay = document.querySelector("#colorDisplay");
var	resultDisplay = document.querySelector("#resultDisplay");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
// var easyButton = document.querySelector("#easyButton");
// var hardButton = document.querySelector("#hardButton");
var modeButtons = document.querySelectorAll(".modeButtons");
var mode = {"Easy": 3, "Hard": 6, "Expert": 12};
var numSquares = 6;

var colors = [];
var pickedColor;

init();

function init() {
	setupSquares();
	setupModeButtons();
	setupResetButton();
	resetGame();
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				// win the game
				resultDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				// make all color to clickedColor
				changeColor();
			} else {
				resultDisplay.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var j = 0; j < modeButtons.length; j++) {
				modeButtons[j].classList.remove("selected");
			}
			this.classList.add("selected");
			numSquares = mode[this.textContent];
			resetGame();
		}); 	
	}
	/*easyButton.addEventListener("click", function() {
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
		numSquares = 3;
		resetGame();
	});

	hardButton.addEventListener("click", function() {
		hardButton.classList.add("selected");
		easyButton.classList.remove("selected");
		numSquares = 6;
		resetGame();
	})*/
}

function setupResetButton() {
	resetButton.addEventListener("click", resetGame);
}

function resetGame() {
	colors = generateRandomColors(numSquares);
	pickedColor = generatePickedColor(numSquares);
	h1.style.backgroundColor = "steelblue";
	resultDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";	
		} else {
			squares[i].style.display = "none";	
		}
	}
}

function changeColor() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = pickedColor;
}

function generatePickedColor(degree) {
	return colors[Math.floor(Math.random() * degree)];
}

function generateRandomColors(degree) {
	var arr = [];
	for(var i = 0; i < degree; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//generate RGB
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}