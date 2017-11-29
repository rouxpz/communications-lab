var x;
var speed = 3;

function setup() {
	createCanvas(600, 400);
	x = 0;
}

function draw() {
	background(200);
	stroke(255);
	fill(100, 100, 100);
	ellipse(x, height/2, 100, 100);

	x = x + speed;

	if (x >= width || x <= 0) {
		speed = speed*-1;
	} 
}