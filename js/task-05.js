const inputRef = document.querySelector("input#name-input");
const outputRef = document.querySelector("span#name-output");

function onInputChange(event) {
  const text = event.currentTarget.value;
  if (event.currentTarget.value !== "") {
    outputRef.textContent = text.trim();
  } else {
    outputRef.textContent = "Anonymous";
  }
}

inputRef.addEventListener("input", onInputChange);
