
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
const ingredientsList = document.querySelector("#ingredients");

// Create an empty array to store the li elements
const items = [];

// Loop through the ingredients array
for (const ingredient of ingredients) {
  // Create a li element
  const item = document.createElement("li");

  // Add the ingredient name as its text content
  item.textContent = ingredient;

  // Add the item class to the element
  item.classList.add("item");

  // Push the item to the items array
  items.push(item);
}

// Insert all li elements to the ul#ingredients list in a single operation
ingredientsList.append(...items);

