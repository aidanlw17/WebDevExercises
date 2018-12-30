var buttonOne = document.querySelector("button");
var buttonTwo = document.querySelectorAll("button")[1];
var body = document.querySelector("body");
var flashing = false;

buttonOne.addEventListener("click", function() {
	buttonOne.classList.toggle("toggled");
});

buttonTwo.addEventListener("click", function() {
	if(flashing) {
		clearInterval(chaos);
		body.style.background = "black";
	} else {
	var chaos = setInterval(function() {
	var rgba = [];
	for(var i = 0; i<4; i++) {
		rgba[i] = String(Math.floor(Math.random() * 255));
	}
	body.style.background = "rgba(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + "," + rgba[3] + ")";
	}, 400);
	flashing = true;
	}
});







// function randomNum() {
// 	Math.floor((Math.random() * 255) + 1);
// }

// function randomColor() {
// 	var colors = [Math.floor(Math.random() * 255)]
// }

