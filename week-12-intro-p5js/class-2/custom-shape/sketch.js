var rads = 0;

function setup() {
	createCanvas(1000, 500);

}

function draw() {
	background(200);

	fill(50);
	stroke(255);


	push();
	translate(125, 200);
	rotate(rads);
	beginShape();
	vertex(-25, -100);
	vertex(-25, 100);
	vertex(25, 0);
	vertex(50, 0);
	vertex(-5, -100);
	endShape();
	pop();

	rads += 0.05;


}