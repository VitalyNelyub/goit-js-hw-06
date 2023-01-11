
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", currentName);

function currentName(event) {
  if (event.currentTarget.value === "") {
    return nameOutput.textContent = "Anonymous";
  } else {
    return nameOutput.textContent = event.currentTarget.value;
  }
}
