
// Get the list of ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Get the ul#ingredients element
const list = document.getElementById("ingredients");

// Create a document fragment to hold the li elements
const fragment = document.createDocumentFragment();

// Loop through the ingredients array
for (let ingredient of ingredients) {
  // Create a new li element
  let li = document.createElement("li");
  // Set its text content to the ingredient name
  li.textContent = ingredient;
  // Add the item class to the element
  li.classList.add("item");
  // Append the li element to the fragment
  fragment.appendChild(li);
}

// Insert all li elements to the list in a single operation
list.appendChild(fragment);

