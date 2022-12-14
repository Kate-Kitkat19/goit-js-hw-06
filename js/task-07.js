const inputRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");
textRef.style.fontSize = inputRef.value + "px";

function onInputChange(event) {
  const fontSize = event.currentTarget.value;
  textRef.style.fontSize = `${fontSize}px`;
}

inputRef.addEventListener("input", onInputChange);
