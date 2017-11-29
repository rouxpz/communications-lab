var zoom = 400;
var img;

function preload() {
	img = loadImage("images/globe.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(0);
	texture(img);
	translate(0, 0, zoom);
	rotateY(frameCount*0.05);
	sphere();

}

function keyPressed() {
	if (key === '1') {
		zoom = zoom - 50;
	} else if (key === '2') {
		zoom = zoom + 50;
	}
}