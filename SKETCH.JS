function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

var person;

function setup() {
	createCanvas(640, 360);
	person = new Person();

}

function keyPressed() {
	if (key == ' ') {
	var jump = createVector(0 , -5);
		person.applyForce(jump);
	}
	
}


function draw() {
	background(51);
	
	translate(-person.pos.x+50, 0);

	var gravity=createVector(0, 0.1);
	person.applyForce(gravity);
	
	
	person.update();
	person.edges();
	person.display();

	fill(255, 0, 100);
	rect(400, height-50, 50, 50);


}
