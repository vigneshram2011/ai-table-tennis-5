function preload() {}

function setup() {
	canvas = createCanvas(700, 600);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(700, 600);
	video.hide();
    
	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on('pose', gotPoses);
}

function modalLoaded() {
	console.log("Model Loaded!!!");
}

function draw() {

}