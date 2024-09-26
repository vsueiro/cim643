function setup() {
  createCanvas(windowWidth, windowHeight);

  background("DeepPink");
}

function draw() {
  fill("Indigo");
  stroke("DeepPink");

  let size = dist(mouseX, mouseY, pmouseX, pmouseY) * 2;

  circle(mouseX, mouseY, size);
}
