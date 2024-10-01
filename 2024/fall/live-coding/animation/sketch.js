let x = 100;
let y = 100;
let step = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("DeepPink");
  circle(x, y, 100);

  // invert direction
  if (y > windowHeight || y < 0) {
    step = step * -1;
  }

  y = y + step;
}
