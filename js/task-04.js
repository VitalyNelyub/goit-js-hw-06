
const finalValue = document.querySelector('#value');

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener("click", removeValueFromCounter);

function removeValueFromCounter() {
  console.log("minus");
  counterValue -= 1;
  finalValue.textContent = counterValue;
}

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", addValueToCounter);

function addValueToCounter() {
  console.log("plus");
  counterValue += 1;
   finalValue.textContent = counterValue;
}


