var colorCode      = document.querySelector("h3");
var	colorGradient1 = document.querySelector(".color1");
var	colorGradient2 = document.querySelector(".color2");
var gradient       = document.getElementById("demoColor");



colorPick();
function colorPick(){
	gradient.style.background = 
	"linear-gradient(to right,"
	 + colorGradient1.value 
	 +"," 
	 + colorGradient2.value 
	 +")";
	 colorCode.textContent = "CSS Code: " + gradient.style.background;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomGradient(){
	var rnd1 = getRandomColor();
	var rnd2 = getRandomColor();
	gradient.style.background = 
	"linear-gradient(to right,"
	 + rnd1
	 +"," 
	 + rnd2
	 +")";
	 colorCode.textContent = gradient.style.background;
	 colorGradient1.value = rnd1;
	 colorGradient2.value = rnd2;
}

function randomColorOne(){
	var rnd = getRandomColor();
	gradient.style.background = 
	"linear-gradient(to right,"
	 + rnd
	 +"," 
	 + colorGradient2.value
	 +")";
	 colorCode.textContent = gradient.style.background;
	 colorGradient1.value = rnd;	
}

function randomColorTow(){
	var rnd = getRandomColor();
	gradient.style.background = 
	"linear-gradient(to right,"
	 + colorGradient1.value
	 +"," 
	 + rnd
	 +")";
	 colorCode.textContent = gradient.style.background;
	 colorGradient2.value = rnd;
	
}



colorGradient1.addEventListener("input",colorPick);
colorGradient2.addEventListener("input",colorPick);

function rndDiraction(){
	var options = [ 
	"to right", "to left", "to bottom", "to top", 
	"to bottom right", "to bottom left", 
	"to top right", "to top left" 
	];
    
    var diraction = options[Math.floor(Math.random() * 8)]

	gradient.style.background = 
	"linear-gradient(" + diraction  +"," + colorGradient1.value  +","  + colorGradient2.value  +")";
	colorCode.textContent = gradient.style.backg
	colorCode.textContent = gradient.style.background;
 	return diraction;
}



// function diractionPick(){
// 	var list = querySelectorAll(.li);
// 	var options = [ 
// 	"to right", "to left", "to bottom", "to top", 
// 	"to bottom right", "to bottom left", 
// 	"to top right", "to top left" 
// 	];
// 	var	diraction = "";

// 	for (i=0;i<8,i++){

// 	}

// 	gradient.style.background = 
// 	"linear-gradient(to bottom,"
// 	 + colorGradient1.value 
// 	 +"," 
// 	 + colorGradient2.value 
// 	 +")";
// 	 colorCode.textContent = gradient.style.background;
// }