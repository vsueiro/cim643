function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(250, 220, 255);
}

function draw() {
  fill(255, 220, 255);
  strokeWeight(2);
  stroke(0, 0, 255);

  let size = dist(mouseX, mouseY, pmouseX, pmouseY) * 2;

  circle(mouseX, mouseY, size);
}
