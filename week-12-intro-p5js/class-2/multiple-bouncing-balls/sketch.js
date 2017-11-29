var yPos = [];
var xPos = [];
var speed = [];

function setup() {
	createCanvas(640, 480);

  for (var i = 0; i < 10; i++) {
    xPos[i] = random(width);
    speed[i] = random(10);
    yPos[i] = 0;
  }
}

function draw() {
  background(150);
  stroke(255);
  fill(50);

  for (var i = 0; i < 10; i++) {
    ellipse(xPos[i], yPos[i], 50, 50);

    yPos[i] += speed[i];

    if (yPos[i] >= height || yPos[i] <= 0) {
      speed[i] = speed[i] * -1;
    }
  }
}