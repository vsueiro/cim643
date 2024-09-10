// Select all <button> elements on my page
let buttons = document.querySelectorAll("button");

// Select first HTML element with class of score
let scoreElement = document.querySelector(".score");

// Keep track of score
let score = 0;

// Define check function
function check(event) {
  // Find clicked button
  let button = event.target;

  // Find current question
  let question = button.parentElement;

  // Get class name of button
  let name = button.className;

  // If answer is correct
  if (name == "correct") {
    // Paint button green
    button.style.background = "green";

    // Update score
    score = score + 1;

    // Display score on page
    scoreElement.textContent = score;
  }

  // If answer is wrong
  else {
    // Paint button green
    button.style.background = "red";

    // Find the explanation element
    let explanation = question.querySelector(".explanation");

    // If an explanation exists
    if (explanation) {
      // Show explanation
      explanation.style.display = "block";
    }
  }

  // Find all button elements inside current question
  let questionButtons = question.querySelectorAll("button");

  // Disable other buttons
  for (let button of questionButtons) {
    button.disabled = true;
  }
}

// For each button on my list
for (let button of buttons) {
  // Run check function when its clicked
  button.onclick = check;
}
