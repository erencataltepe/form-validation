const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

email.addEventListener("input", () => {
  if (!email.validity.valid) {
    emailError.className = "error active";
  } else {
    emailError.className = "error hidden";
  }
});
