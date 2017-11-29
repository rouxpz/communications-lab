var osc;
var x;
var freq;
var amp;

function setup() {

  createCanvas(700, 400);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.start();

  x = 0;
}

function draw() {

  background(200);

  x = mouseX;

  stroke(0)
  fill(150);

  ellipse(x, height/2, 50, 50);

  freq = map(x, 0, width, 150, 880);
  osc.freq(freq);

  amp = map(x, 0, width, 0, 1);
  osc.amp(amp);
  
}
