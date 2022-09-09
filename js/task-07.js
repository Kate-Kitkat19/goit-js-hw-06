const inputRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

function onInputChange(event) {
  const fontSize = event.currentTarget.value;
  textRef.style.fontSize = `${fontSize}px`;
}

inputRef.addEventListener("input", onInputChange);
