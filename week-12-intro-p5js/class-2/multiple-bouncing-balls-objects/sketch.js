var balls = [];

function setup() {
	createCanvas(1000, 500);

}

function draw() {
	background(200);

	for (var i = 0; i < balls.length; i++) {
		balls[i].display();
	}

}

function mousePressed() {
	var b = new Ball();
	b.x = mouseX;
	b.y = mouseY;
	b.speed = random(5);
	b.d = random(10, 50);
	b.fill = color(random(255), random(255), random(255));

	balls.push(b);
}

function Ball() {
	this.x;
	this.y;
	this.speed;
	this.fill;
	this.d;

	this.display = function() {
		stroke(255);
		fill(this.fill);
		ellipse(this.x, this.y, this.d, this.d);

		this.y = this.y + this.speed;

		if (this.y >= height || this.y <= 0) {
			this.speed = this.speed * -1;
		}
	}
}