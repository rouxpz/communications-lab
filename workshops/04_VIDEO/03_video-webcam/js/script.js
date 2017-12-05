var cam, canvas;

var width, height;

window.onload = function(){
	cam = document.getElementById('cam');
	canvas = document.getElementById('canvas');

	canvas.setAttribute('width', 640);
	canvas.setAttribute('height', 480);

	setupMedia();
};

function setupMedia(){
	navigator.mediaDevices.getUserMedia({video: true}).then(function(stream){
		cam.srcObject = stream;
		cam.play();
	}).catch(function(err){
		console.log(err);
	});
}

function setupCanvas(){
	setInterval(takePhotos, 1000);
}

function takePhotos(){
	var context = canvas.getContext('2d');

	context.drawImage(cam, 0, 0, canvas.width, canvas.height);

	var data = canvas.toDataURL('img/png');

	var newImg = document.createElement('IMG');
	newImg.src = data;
	newImg.className = "outputImg";
	var randHue = Math.floor(Math.random() * 360);
	newImg.style.filter = "hue-rotate(" + randHue + "deg)";

	document.getElementById('output').append(newImg);
}