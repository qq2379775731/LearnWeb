var someObject = {};

someObject._name = "Hedwig";

someObject.age = 6;

var prop = "color";
someObject[prop] = "red";

//错误方式
//someObject.123 = true;
var abc = 123;
someObject[abc] = 123; 

var dogSpace = {};
dogSpace.spake = function (){
	console.log("WOOF");
}

var catSpace = {};
catSpace.spake = function() {
	console.log("MEOW");
}