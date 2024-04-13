// Get a NodeList of all elements with the class "item" in the HTML document
let categories = document.querySelectorAll(".item");

// Output the number of categories found
console.log(`Number of categories: ${categories.length}`);

// Iterate over each element in the NodeList using a for...of loop
for (let category of categories) {
  // Output the name of each category using the innerText property of its first child element
  console.log(`Category: ${category.firstElementChild.innerText}`);

  // Output the number of elements (items) within each category
  // Access the <ul> element containing the items using the nextElementSibling property of the first child element
  // Count the number of child elements (items) within the <ul> element using the children property
  console.log(
    `Elements: ${category.firstElementChild.nextElementSibling.children.length}`
  );
}
