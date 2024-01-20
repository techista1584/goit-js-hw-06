const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Get the ul.gallery element
const gallery = document.querySelector(".gallery");

// Create an empty string to store the markup
let markup = "";

// Loop through the images array
for (const image of images) {
  // Create a template string for each image element
  const imageElement = `
    <li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}" width="640" height="480" />
    </li>
  `;

  // Add the image element to the markup
  markup += imageElement;
}

// Insert the markup to the gallery list in one operation
gallery.insertAdjacentHTML("beforeend", markup);


