var img;
var x;
var speed;

function preload() {
	img = loadImage("background.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = 0;
	speed = 5;
}

function draw() {
	image(img, 0, 0, windowWidth, windowHeight);


	stroke(255);
	fill(0);
	ellipse(x, height/2, 100, 100);

	x = x + speed;

	if (x > width || x < 0) {
		speed = speed * -1;
	}
}