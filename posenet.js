leftEyeX=0;
leftEyeY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(400,400);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
background("#800080");
fill ("#e75480");
stroke("#0000FF");
document.getElementById("square_side").innerHTML="width and heigth of the square="+difference+"px";
square(leftEyeX,leftEyeY,difference);
}
function modelLoaded(){
console.log("modelLoaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftEyeX=results[0].pose.leftEye.x;
    leftEyeY=results[0].pose.leftEye.y;
    console.log(leftEyeX,leftEyeY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    console.log(rightWristX,leftWristX);
    difference=floor(leftWristX-rightWristX);
}
}
function back(){
    window.location="index.html";
}
