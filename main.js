function setup(){
   canvas= createCanvas(500,400);
   canvas.position(700,75);
   video= createCapture(VIDEO);
   video.size(400,500);
   poseNet=ml5.poseNet(video,gotResults);
   poseNet.on("pose",gotPoses);
}
function draw(){
   background('#4f0f30');
}
function gotResults(){
   console.log("it worked my dumb science");
}
function gotPoses(results){
   if(results.length>0){
      console.log(results);
   }
}