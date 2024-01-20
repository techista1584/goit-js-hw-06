// Get the list of categories
let categories = document.getElementById("categories");

// Get the number of categories
let numCategories = categories.children.length;

// Display the number of categories in the console
console.log("Number of categories: " + numCategories);

// Loop through each category
for (let i = 0; i < numCategories; i++) {
  // Get the current category
  let category = categories.children[i];

  // Get the category name
  let categoryName = category.querySelector("h2").textContent;

  // Get the number of elements in the category
  let numElements = category.querySelectorAll("li").length;

  // Display the category name and the number of elements in the console
  console.log("Category: " + categoryName);
  console.log("Elements: " + numElements);
}

