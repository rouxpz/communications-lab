var sx;
var sy;
var cx;
var cy;

function setup() {
	createCanvas(1000, 500);
	sx = 0;
	sy = height/4;
	cx = 0;
	cy = 3*(height/4);
}

function draw() {
	background(200);

	fill(50);
	stroke(255);
	rectMode(CENTER);
	rect(sx, sy, 50, 50);

	fill(150);
	ellipse(cx, cy, 50, 50);

	sx++;

	// if (sx >= width/2) {
	// 	cx += 3;
	// }

	if (frameCount >= 180) {
		cx += 3;
	}
}