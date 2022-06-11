LipstickX=0;
LipstickY=0;
function preload(){
    lip_lipstick= loadImage('')
}

function setup(){
        canvas = createCanvas(300, 300);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(300,300);
        video.hide();
        poseNet = ml5.poseNet(video , modelLoaded);
        poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Intialized');
}
function gotPoses(results) {
if (results.length > 0) {
    console.log(results);
    LipstickX=results[0].pose.Lipstick.x;
    LipstickY=results[0].pose.Lipstick.y;
    console.log("Lipstick x =" + LipstickX);
    console.log("Lipstick y =" + LipstickY);
}
}

function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
   // circle(LipstickX,LipstickY,10);
    image(lip_lipstick,LipstickX-10,LipstickY-10,20,20);
}

function take_snapshot(){
    save('myfilterimage.jpg');
}