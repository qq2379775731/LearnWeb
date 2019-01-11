var isEven = function(num) {
	if (num % 2 ==0) {
		return true;
	}
	else return false;
}

var factorial = function(num) {
	var sum = 1;
	while (num>0) {
		sum *= num;
		num--;
	} 
	return sum;
}

var kebabToSnake = function(str) {
	return str.replace(/-/gi,"_");
}

console.log(kebabToSnake("abc-bcd"));