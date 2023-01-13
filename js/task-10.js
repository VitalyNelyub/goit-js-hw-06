const placeForCreateEl = document.getElementById("boxes");
const inputEl = document.querySelector("number");
const createElem = document.querySelector("button[data-create]");
const removeElem = document.querySelector("button[data-destroy]");

console.log(createElem);
console.log(removeElem);



inputEl.addEventListener("change", currentNumber);
let counterCreateElement = 0;


function currentNumber(event) {
  counterCreateElement = event.value
  console.log(counterCreateElement);
}
createElem.addEventListener("click");
removeElem.addEventListener("click");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {}

function destroyBoxes() {}
