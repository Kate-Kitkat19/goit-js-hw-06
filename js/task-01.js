const mainItems = document.querySelectorAll(".item");
const totalNumber = mainItems.length;
const message = `Number of categories: ${totalNumber}`;

console.log(message);

let numberOfSubitems = [];
numberOfSubitems = [...mainItems].forEach((item) => item.querySelector("h2"));
console.log(numberOfSubitems);

// _______________________________________________

// const categoryNames = document.querySelectorAll("h2");
// console.log(categoryNames);
// const lists = [...categoryNames].map((category) => category.children);
// [...lists].map((list) => console.log(list));

// const itemsAll = document.querySelectorAll("li").length;
// console.log(itemsAll);

// const names = [];
// categoryNames.forEach((name) => names.push(name.textContent));
// console.log(names);
