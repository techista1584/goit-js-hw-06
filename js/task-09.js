function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Select the body, span, and button elements
const body = document.querySelector("body");
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

// Add a click event listener to the button element
button.addEventListener("click", () => {
  // Generate a random color using the getRandomHexColor function
  const randomColor = getRandomHexColor();

  // Update the background color of the body element
  body.style.backgroundColor = randomColor;

  // Update the text content of the span element
  color.textContent = randomColor;
});
