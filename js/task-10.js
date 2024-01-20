function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select the input, buttons, and boxes elements
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

// Define the initial size of the first box
const initialSize = 30;

// Add a click event listener to the create button
createButton.addEventListener("click", () => {
  // Get the number of boxes to create from the input value
  const amount = Number(input.value);

  // Create an array of boxes
  const boxesArray = [];

  // Loop through the amount of boxes
  for (let i = 0; i < amount; i++) {
    // Create a new div element
    const box = document.createElement("div");

    // Calculate the size of the box based on the initial size and the index
    const size = initialSize + i * 10;

    // Set the width and height of the box
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    // Set the random background color of the box
    box.style.backgroundColor = getRandomHexColor();

    // Push the box to the array
    boxesArray.push(box);
  }

  // Append the array of boxes to the boxes element
  boxes.append(...boxesArray);
});

// Add a click event listener to the destroy button
destroyButton.addEventListener("click", () => {
  // Clear the contents of the boxes element
  boxes.innerHTML = "";
});

