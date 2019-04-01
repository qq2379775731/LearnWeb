var btn = document.getElementById("colorBtn");
/*btn.addEventListener("click", function(){
	if (document.body.style.background == "purple") {
		document.body.style.background = "white";
	} else {
		document.body.style.background = "purple";
	}
})*/

btn.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})