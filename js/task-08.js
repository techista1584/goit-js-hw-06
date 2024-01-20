// Select the form element
const form = document.querySelector(".login-form");

// Add a submit event listener to the form element
form.addEventListener("submit", (event) => {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Create an empty object to store the field values
  const formData = {};

  // Loop through the form elements
  for (const element of form.elements) {
    // Check if the element is an input
    if (element.tagName === "INPUT") {
      // Check if the element has a value
      if (element.value) {
        // Add the field name and value to the object
        formData[element.name] = element.value;
      } else {
        // If the element has no value, display an alert and return
        alert("All fields must be filled in");
        return;
      }
    }
  }

  // Display the object with the entered data in the console
  console.log(formData);

  // Clear the values of the form fields using the reset method
  form.reset();
});

