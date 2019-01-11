var answer = prompt("are you ok?");

while (answer.indexOf("yes") == -1) {
	answer = prompt("are you ok?");
}

alert("Yeah you make it");