function setup() {

  var text = createP("This is a paragraph element.");
  text.position(400, 150);
  var canvas = createCanvas(300, 200);

}

// A simple animation
function draw() {
  background(200);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}