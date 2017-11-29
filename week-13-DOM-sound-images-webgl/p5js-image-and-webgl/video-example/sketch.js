var fingers, button;
var playing = true;

function setup() {
	fingers = createVideo("fingers.mp4");
	createCanvas(640, 240);
	button = createButton("play");
	button.mousePressed(toggleVid);	
	fingers.loop();
	fingers.hide();
}

function draw() {
	background(0);
	
	image(fingers, 320, 0);
	filter('INVERT');
	
	image(fingers, 0, 0);

}

function toggleVid() {
	if (playing) {
		fingers.pause();
		button.html('play');
	} else {
		fingers.loop();
		button.html('pause');
	}

	playing = !playing;
	console.log(playing);
}