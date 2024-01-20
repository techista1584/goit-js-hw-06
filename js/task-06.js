// Select the input element
const input = document.querySelector("#validation-input");

// Get the required length from the data-length attribute
const length = Number(input.dataset.length);

// Add a blur event listener to the input element
input.addEventListener("blur", () => {
  // Get the value of the input element
  const value = input.value;

  // Check if the value length matches the required length
  if (value.length === length) {
    // If yes, add the valid class and remove the invalid class
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    // If no, add the invalid class and remove the valid class
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
