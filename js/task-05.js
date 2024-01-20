// Get the input#name-input element
const nameInput = document.querySelector("#name-input");

// Get the span#name-output element
const nameOutput = document.querySelector("#name-output");

// Add a listener for the input event on the nameInput
nameInput.addEventListener("input", (event) => {
  // Get the current value of the input
  const name = event.target.value;

  // If the input is empty, display "Anonymous" in the nameOutput
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    // Otherwise, display the input value in the nameOutput
    nameOutput.textContent = name;
  }
});
