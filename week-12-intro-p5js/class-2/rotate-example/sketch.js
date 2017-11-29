var rads;

function setup() {
	createCanvas(1000, 500);
	rads = 0;
}

function draw() {
	background(200);

	fill(50);
	stroke(255);

	push();
	translate(mouseX, mouseY);
	rectMode(CENTER);
	rotate(rads);
	rect(0, 0, 150, 150);
	pop();

	rads += 0.05;

}