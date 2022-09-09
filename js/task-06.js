const inputRef = document.querySelector("input#validation-input");
const lengthRef = Number(inputRef.dataset.length);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== lengthRef) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}

inputRef.addEventListener("blur", onInputBlur);
