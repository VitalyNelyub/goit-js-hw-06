const changeBodyColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeBodyColorBtn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let foo = getRandomHexColor;

function changeColor() {
  currentColor.textContent = foo();
  document.body.style.backgroundColor = foo();
}



