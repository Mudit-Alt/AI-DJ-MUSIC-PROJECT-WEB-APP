leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
music_1 = '';
music_2 = '';
one_status = '';
two_status = '';
left_Score = 0;
right_Score = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("You Did It!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        left_Score = results[0].pose.keypoints[9].score;
        right_Score = results[0].pose.keypoints[10].score;
        console.log("Left score = " + left_Score + "Right score = " + right_Score);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#46e2bb")
    stroke('#46e2bb')
    one_status = music_1.isPlaying();
    two_status = music_2.isPlaying();

    if (left_Score > 0.2) {
        circle(leftWristX, leftWristY, 20)
        if (two_status){
            music_2.stop()
        }
        if (one_status == false) {
            music_1.play()
            document.getElementById("song_name").innerHTML = "Harry Potter Theame"
        }

    }
    if (right_Score > 0.2) {
        circle(rightWristX, rightWristY, 20)
        if (one_status){
            music_1.stop()
        }
        if (two_status == false) {
            music_2.play()
            document.getElementById("song_name").innerHTML = "Pink Venom"
        }

    }
}

function preload() {
    music_1 = loadSound('music.mp3')
    music_2 = loadSound('song1.mp3')
}
