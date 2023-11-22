let form = document.getElementById("form");

let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPhone = document.getElementById("phone")

let emailRegex = new RegExp ( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/);
let nameRegex = new RegExp ( /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/);
let phoneRegex = new RegExp ( /^[0-9]$/ );

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isValidEmail()) return;
  if (!isValidName()) return;
  if (!isValidPhone()) return;

  form.submit();
})

inputName.addEventListener("input", () => {
  verifyInput("invalidName", isValidName);
});

inputEmail.addEventListener("input", () => {
  verifyInput("invalidEmail", isValidEmail);
});

inputPhone.addEventListener("input", () => {
  verifyInput("invalidPhone", isValidPhone);
})

function verifyInput (id, isValid ) {
  message = document.getElementById(id);
  if (isValid()){
    message.style.display = "none";
  } else {
    message.style.display = "block";
  }
}

function isValidName() {
  if (inputName.value.length == 0 || !nameRegex.test(inputName.value) ) {
    return false;
  }
  return true;
}

function isValidEmail() {
  if(inputEmail.value.length == 0 || !emailRegex.test(inputEmail.value)){
    return false;
  }
  return true;
}

function isValidPhone() {
  if (inputPhone.value.length < 8 || inputPhone.value < 0) {
    return false;
  }
  return true;
}