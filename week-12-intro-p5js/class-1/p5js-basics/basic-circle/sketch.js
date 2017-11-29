var x;

function setup() {
	createCanvas(600, 400);
	x = 0;
}

function draw() {
	background(200);
	stroke(255, 0, 0);
	fill(100, 200, 100);
	ellipse(x, 200, 100, 100);
  	x = x + 1;
}