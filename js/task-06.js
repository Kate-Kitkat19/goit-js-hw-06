const inputRef = document.querySelector("input#validation-input");
const lengthRef = Number(inputRef.dataset.length);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== lengthRef) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
}

inputRef.addEventListener("blur", onInputBlur);
