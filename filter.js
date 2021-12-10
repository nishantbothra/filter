noseX = 0;
noseY = 0;

function preload() {
    nose_filter = loadImage("https://i.postimg.cc/Cx7z2tyV/download-removebg-preview.png");
    mous_filter = loadImage("https://i.postimg.cc/vT5Wxz4H/download-12-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function gotPose(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('Model is loaded');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(nose_filter, noseX - 15, noseY - 10, 30, 20);
    image(mous_filter, noseX - 35, noseY - 8, 70, 70);
}

function snap_pic() {
    save("myIMAGE.png");
}



























































