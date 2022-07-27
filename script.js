/* var body = document.getElementById("body"); 
var colorOne = document.querySelector(".colorOne"); 
var colorTwo = document.querySelector(".colorTwo"); 
var css = document.getElementsByTagName('h3'); 

colorOne.addEventListener('input', function(){
	body.style.background = 'linear-gradient(to right, ' + 
	colorOne.value + ', ' + 
	colorTwo.value + ');'; 
}); 
colorTwo.addeventListener('input', function(){
	body.style.background = 'linear-gradient(to right, ' + 
	colorOne.value + ', ' + 
	colorTwo.value + ');'; 
});  */
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);