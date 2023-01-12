const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", submitForm);

const dataFormAfterSubmit = {};

function submitForm(event) {
  event.preventDefault();
  const EMAIL = event.currentTarget.elements.email.value;
  const PASSWORD = event.currentTarget.elements.password.value;

  if (EMAIL === "" || PASSWORD === "") {
    alert("Заповніть всі поля форми");
  } else {
    dataFormAfterSubmit.email = EMAIL;
    dataFormAfterSubmit.password = PASSWORD;
  }
  console.log("Данні користувача з форми: ", dataFormAfterSubmit);
  formEl.reset();
}
