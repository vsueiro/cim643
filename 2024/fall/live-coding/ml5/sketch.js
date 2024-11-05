let video;
let bodyPose;

function preload() {
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(600, 400);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  bodyPose.detectStart(video, handle);

  background("gray");
  console.log(bodyPose);
}

function draw() {}

function handle(poses) {
  if (poses.length > 0) {
    for (let pose of poses) {
      let x = pose.nose.x;
      let y = pose.nose.y;
      circle(x, y, 20);
    }
  }
}
