var video;
var button;

function setup() {
  video = createCapture(VIDEO);
  // The above function actually makes a separate video
  // element on the page.  The line below hides it since we are
  // drawing the video to the canvas
  //video.hide();

  createCanvas(640, 480);
  background(0);

  button = createButton("Snap photo!");
  button.position(10, 490);
  button.mousePressed(snap);
}

function snap() {
	image(video, 0, 0, 640, 480);
}