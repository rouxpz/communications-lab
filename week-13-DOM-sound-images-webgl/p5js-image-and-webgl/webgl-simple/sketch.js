var rads;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	rads = 0;
}

function draw() {

	background(150);

	translate(0, 0, 400);
	rotateY(rads);

	//ambientLight(255, 255, 255);
	//directionalLight(255, 255, 255, 200, 200, 600);
	
	pointLight(255, 255, 255, mouseX, mouseY, 500);
	specularMaterial(255, 0, 0);
	box();

	rads += 0.05;

}