
// make an array
var subject = ["She", "He", "It"];

var adjective = ["\n red", "\n funny", "\n stinky", "\n blue", "\n orange", "dark", "sad", "sadness"];
var adjective2 = ["red", "funny", "stinky", "blue", "orange", "dark", "sad", "sadness"];

var verb = ["eats", "likes", "hates", "fights", "runs", "cooks"];
var verb2 = ["eats", "likes", "hates", "fights", "runs", "cooks"];

var object = ["people", "memes", "love", "hate", "Double Bacon Cheese Burgers"];
var object2 = ["people", "memes", "love", "hate", "Double Bacon Cheese Burgers"];


 
 
function setup() {
	createCanvas(windowWidth, windowHeight);
 
	background(0);
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(80);
 
	// create random integer (whole #) for nouns
	var randoSubject = int(random(subject.length));
	// for adjectives
	var randoAdj = int(random(adjective.length));
	var randoAdj2 = int(random(adjective2.length));
	
	var randoVerb = int(random(verb.length));
	var randoVerb2 = int(random(verb2.length));

	var randoObject = int(random(object.length));
	var randoObject2 = int(random(object2.length));


	// create a full string with intro text
	var fullString1 = subject[randoSubject] +" really " + verb[randoVerb] + " " +adjective[randoAdj] +" " + object[randoObject] + "\n and also " + verb2[randoVerb2] + " " + object2[randoObject2];
 	var fullString2 = 
	// draw random text from things to screen
	text(fullString1, width/2, height/2);
	

}
 
function draw() {
  
}