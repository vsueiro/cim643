let video;
let bodyPose;
let bubbles = [];

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
  }

  render() {
    noStroke();
    fill("Turquoise");
    circle(this.x, this.y, this.size);
  }

  float() {
    // move it up
    this.y = this.y - random(2, 4);
    // make it smaller
    this.size = this.size - 0.75;

    if (this.size < 0) {
      this.size = 0;
    }
  }
}

function preload() {
  bodyPose = ml5.bodyPose("MoveNet", { flipped: true });
}

function setup() {
  createCanvas(600, 400);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  bodyPose.detectStart(video, handle);
}

function draw() {
  background("Indigo");

  for (let bubble of bubbles) {
    bubble.float();
    bubble.render();
  }
}

function handle(poses) {
  if (Math.random() < 0.25) {
    return;
  }

  for (let pose of poses) {
    let x = pose.nose.x;
    let y = pose.nose.y;

    let bubble = new Bubble(x, y);
    bubbles.push(bubble);
  }
}
