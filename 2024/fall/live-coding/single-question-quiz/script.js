let buttons = document.querySelectorAll("button");

function check(event) {
  let text = event.target.textContent;

  if (text == "Java") {
    alert("Correct");
  } else {
    alert("Wrong");
  }
}

for (let button of buttons) {
  button.onclick = check;
}
