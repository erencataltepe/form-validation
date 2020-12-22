const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");

const emailError = document.getElementById("email-error");
const countryError = document.getElementById("country-error");
const zipCodeError = document.getElementById("zipcode-error");
const passwordError = document.getElementById("password-error");
const rePasswordError = document.getElementById("repassword-error");

email.addEventListener("input", () => {
  if (!email.validity.valid) {
    emailError.className = "error active";
  } else {
    emailError.className = "error hidden";
  }
});

country.addEventListener("input", () => {
  if (!country.validity.valid) {
    countryError.className = "error active";
  } else {
    countryError.className = "error hidden";
  }
});

zipCode.addEventListener("input", () => {
  if (!zipCode.validity.valid) {
    zipCodeError.className = "error active";
  } else {
    zipCodeError.className = "error hidden";
  }
});

password.addEventListener("input", () => {
  if (!password.validity.valid) {
    passwordError.className = "error active";
  } else {
    passwordError.className = "error hidden";
  }
});

rePassword.addEventListener("input", () => {
  if (password.value !== rePassword.value) {
    rePasswordError.className = "error active";
  } else {
    rePasswordError.className = "error hidden";
  }
});
