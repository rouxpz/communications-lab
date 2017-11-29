var s;

function setup() {
	createCanvas(windowWidth, windowHeight);
	s = color(255, 0, 0);
	background(250);
}

function draw() {
	stroke(s);
	strokeWeight(3);
	line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
	s = color(random(255), random(255), random(255));
}

function keyPressed() {
	if (key === " ") {
		background(250);
	}
}