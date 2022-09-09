function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input[type="number"]');
const outputRef = document.querySelector("div#boxes");

function createBoxes(amount) {
  amount = event.currentTarget.value;
  const numbersArray = [];
  for (let i = 0; i < amount; i++) {
    numbersArray.push(i);
    console.log(numbersArray);
  }
  const markup = numbersArray.forEach(() => document.createElement("div"));
  console.log(markup);
}

inputRef.addEventListener("change", createBoxes);
