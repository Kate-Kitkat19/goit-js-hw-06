const inputRef = document.querySelector("input#name-input");
const outputRef = document.querySelector("span#name-output");

function onInputChange(event) {
  if (event.currentTarget.value !== "") {
    outputRef.textContent = event.currentTarget.value;
  } else {
    outputRef.textContent = "Anonymous";
  }
}

inputRef.addEventListener("input", onInputChange);
