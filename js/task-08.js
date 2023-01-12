const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", submitForm);

const dataFormAfterSubmit = {};

function submitForm(event) {
  event.preventDefault();
  const USER_EMAIL = event.currentTarget.elements.email.value;
  const USER_PASSWORD = event.currentTarget.elements.password.value;

  if (USER_EMAIL === "" || USER_PASSWORD === "") {
    alert("Обов'язково заповніть всі поля форми");
  } else {
    dataFormAfterSubmit.email = USER_EMAIL;
    dataFormAfterSubmit.password = USER_PASSWORD;
  }
  console.table(dataFormAfterSubmit);
  formEl.reset();
}
