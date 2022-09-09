const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const outputRef = document.querySelector("#name-output");
console.log(outputRef);

function onInputChange(event) {
  if (event.currentTarget.value !== "") {
    outputRef.textContent = event.currentTarget.value;
  } else {
    outputRef.textContent = "Anonymous";
  }
}

inputRef.addEventListener("input", onInputChange);
