// Select the input and span elements
const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// Add an input event listener to the input element
input.addEventListener("input", () => {
  // Get the value of the input element
  const value = input.value;

  // Update the font-size property of the span element
  text.style.fontSize = `${value}px`;
});
