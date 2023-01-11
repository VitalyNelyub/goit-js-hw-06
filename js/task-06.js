const inputFormEl = document.querySelector("#validation-input");
console.log(inputFormEl);

inputFormEl.addEventListener("blur", validLength);


function validLength() {
  if (inputFormEl.value.length == inputFormEl.dataset.length) {
    inputFormEl.classList.add("valid");
    inputFormEl.classList.remove("invalid");
  } else {
    inputFormEl.classList.remove("valid");
    inputFormEl.classList.add("invalid");
  }
}
