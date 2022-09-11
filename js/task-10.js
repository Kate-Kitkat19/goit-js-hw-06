function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input[type="number"]');
const outputRef = document.querySelector("div#boxes");
const divsArray = [];
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  amount = inputRef.value;
  const numbersArray = [];
  for (let i = 0; i < amount; i += 1) {
    numbersArray.push(i);
  }
  let width = 30;
  numbersArray.forEach(() => {
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    width += 10;
    element.style.width = `${width}px`;
    element.style.height = `${width}px`;
    divsArray.push(element);
  });
  outputRef.append(...divsArray);
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", () => {
  outputRef.innerHTML = "";
  inputRef.value = "";
  divsArray.length = 0;
});
