// Select all <button> elements on my page
let buttons = document.querySelectorAll("button");

// Select first HTML element with class of score
let scoreElement = document.querySelector("span");

// Keep track of score
let score = 0;

// Define check function
function check(event) {
  // Find clicked button
  let button = event.target;

  // Get class name of button
  let name = button.className;

  if (name == "correct") {
    // If answer is correct
    button.style.background = "green";

    // Update score
    score = score + 1;

    // Display score on page
    scoreElement.textContent = score;
  } else {
    // If answer is wrong
    button.style.background = "red";
  }

  // Disable other buttons
  for (let button of buttons) {
    button.disabled = true;
  }
}

// For each button on my list
for (let button of buttons) {
  // Run check function when its clicked
  button.onclick = check;
}
