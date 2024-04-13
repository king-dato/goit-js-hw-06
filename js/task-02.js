// Array containing a list of ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Get a reference to the unordered list element with the id "ingredients" in the HTML document
let ul = document.getElementById("ingredients");

// Loop through each item (ingredient) in the 'ingredients' array
for (let ingredient of ingredients) {
  // Create a new list item element for each ingredient
  let li = document.createElement("li");

  // Set the text content of the list item to the current ingredient
  li.innerText = ingredient;

  // Append the newly created list item to the unordered list
  ul.appendChild(li);
}
