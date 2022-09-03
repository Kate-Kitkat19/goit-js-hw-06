const mainItems = document.querySelectorAll(".item");
const totalNumber = mainItems.length;
const message = `Number of categories: ${totalNumber}`;

console.log(message);

mainItems.forEach((item) => {
  const nameOfCategory = item.querySelector("h2");
  console.log(`Category: ${nameOfCategory.textContent}`);
  const numberOfSubitems = item.querySelectorAll("li").length;
  console.log(`Elements: ${numberOfSubitems}`);
});
