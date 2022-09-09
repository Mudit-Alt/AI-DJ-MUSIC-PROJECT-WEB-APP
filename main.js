leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
music_1 = '';
music_ = '';

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("You Did It!")
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function draw() {
    image(video, 0, 0, 500, 400);
}

function preload() {
    music_1 = loadSound('music.mp3')
    music_2 = loadSound('song1.mp3')    
}
