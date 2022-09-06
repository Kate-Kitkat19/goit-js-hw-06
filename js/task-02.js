const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = [];

ingredients.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  ingredientsList.push(listItem);
});

const listRef = document.querySelector("#ingredients");
listRef.append(...ingredientsList);
