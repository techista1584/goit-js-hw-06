// Get the counter element
const counter = document.querySelector("#counter");

// Get the value element
const value = document.querySelector("#value");

// Create a variable, counterValue, that will store the current counter value and initialize it with 0
let counterValue = 0;

// Add listeners for clicks on the buttons
counter.addEventListener("click", (event) => {
  // Get the button that was clicked
  const button = event.target;

  // Check if the button has the data-action attribute
  if (button.hasAttribute("data-action")) {
    // Get the action of the button
    const action = button.dataset.action;

    // If the action is decrement, decrease the counter value by one
    if (action === "decrement") {
      counterValue -= 1;
    }

    // If the action is increment, increase the counter value by one
    if (action === "increment") {
      counterValue += 1;
    }

    // Update the interface with the new value of the counterValue
    value.textContent = counterValue;
  }
});
