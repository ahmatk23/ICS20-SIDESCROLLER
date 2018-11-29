
var person;

function setup() {
	createCanvas(640, 360);
	person = new Person();

}

var x = 0;


function draw() {
	background(51);
	translate(-100, 0);
	person.update();
	person.display();

	fill(255, 0, 100);
	rect(400, height-50, 50, 50);


}
