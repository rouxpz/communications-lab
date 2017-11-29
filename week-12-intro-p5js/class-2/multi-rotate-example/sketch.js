var squares = [];

function setup() {
	createCanvas(1000, 500);
}

function draw() {
	background(200);

	for (var i = 0; i < squares.length; i++) {
		squares[i].display();
	}
}

function mousePressed() {
	var s = new Square();
	s.x = mouseX;
	s.y = mouseY;
	squares.push(s);
}

function Square() {
	this.x;
	this.y;
	this.rads = 0;
	this.increase = random(0.01, 0.4);
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);

	this.display = function() {

		fill(this.r, this.g, this.b);
		stroke(255);

		push();
		translate(this.x, this.y);
		rectMode(CENTER);
		rotate(this.rads);
		rect(0, 0, 50, 50);
		pop();

		this.rads += this.increase;
	}
}