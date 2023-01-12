
const currentFontSize = document.querySelector("#font-size-control");
const changeFontSize = document.querySelector("#text");

// console.log(currentFontSize.value);

currentFontSize.addEventListener("change", changeSize);

function changeSize() {
  changeFontSize.style.fontSize = `${currentFontSize.value}px`;
}
