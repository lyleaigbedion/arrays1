// make an array
var objects = ["Quarter", "Circle", "Forward", "punching nazis."];
var verbs =
var subject =
var adjective = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(0);
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(50);
	
	// create random integer
	// int() forces a whole number
	// random(3) is upto but not including 3
	var randoSub = int(random(subject.length));
	var randoAdj = int(random(adjective.length));
	//log our random number to the console
	//console.log(rando);

	background(0);
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(50);

	var fullString = "I really like " + things[rando] + "\n and also" + adjective[randoAdj] " trains.";

	//draw random text from things to screen
	text(fullString, width/2, height/2)
}

function draw() {
  
}