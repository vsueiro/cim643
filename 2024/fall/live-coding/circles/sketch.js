// Run only once
function setup() {
  // Create a <canvas> element as big as the window
  createCanvas(windowWidth, windowHeight);

  // Paint it pink
  background("DeepPink");

  // Pick a fill color
  fill("Indigo");

  // Pick a stroke color
  stroke("DeepPink");
}

// Run every frame
function draw() {
  // Get distance from current to previous mouse position
  let distance = dist(mouseX, mouseY, pmouseX, pmouseY);

  // Make size proportional to that distance (but bigger)
  let size = distance * 2;

  // Draw a circle where the mouse is
  circle(mouseX, mouseY, size);
}
