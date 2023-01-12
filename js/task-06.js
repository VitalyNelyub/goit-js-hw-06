const inputFormEl = document.querySelector("#validation-input");
console.log(inputFormEl);

inputFormEl.addEventListener("blur", validLength);


function validLength() {
  if (inputFormEl.value.length == inputFormEl.dataset.length) {
    inputFormEl.classList.add("valid");
    inputFormEl.classList.remove("invalid");
  } else {
    console.log(alert("В полі має бути 6 символів"))
    inputFormEl.classList.remove("valid");
    inputFormEl.classList.add("invalid");
  }
}
