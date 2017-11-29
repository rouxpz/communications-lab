var rads;

function setup() {
	createCanvas(1000, 500);
	rads = 0;
}

function draw() {
	background(225);
	stroke(255);
	fill(100);
	rectMode(CENTER);

	push();
	translate(width/3, height/2);
	rotate(rads);
	rect(0, 0, 100, 100);
	pop();

	push();
	translate(mouseX, mouseY);
	rotate(rads);
	rect(0, 0, 100, 100);
	pop();

	rads = rads - 0.05;

}