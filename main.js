music_1 = ""
music_2 = ""

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 400);
}

function preload() {
    music_1 = loadSound('music.mp3')
    music_2 = loadSound('song1.mp3')    
}