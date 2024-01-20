// Select the ul#categories element
const categories = document.querySelector("#categories");

// Count and display the number of li.item elements
const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

// Loop through each li.item element
items.forEach((item) => {
  // Find and display the element header text
  const header = item.querySelector("h2").textContent;
  console.log(`Category: ${header}`);

  // Find and display the number of elements in the category
  const elements = item.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});
