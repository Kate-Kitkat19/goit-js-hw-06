const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector("#value");
let counterValue = 0;

function increaseValue() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function decreaseValue() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

incrementBtn.addEventListener("click", increaseValue);
decrementBtn.addEventListener("click", decreaseValue);
