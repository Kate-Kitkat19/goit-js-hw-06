function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector("button.change-color");
const outputForColor = document.querySelector("span.color");

function onBtnClick() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  outputForColor.textContent = color;
}

buttonRef.addEventListener("click", onBtnClick);
