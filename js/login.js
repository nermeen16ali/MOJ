document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordField = document.getElementById("password");
  const toggleIcon = togglePassword.querySelector("img");

  togglePassword.addEventListener("click", function () {
    const isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";

    toggleIcon.src = isPassword
      ? "images/hidepass.svg"
      : "images/password_toggle.svg";
    toggleIcon.alt = isPassword ? "Hide Password" : "Show Password";
  });
});
document.querySelectorAll(".close-all").forEach((button) => {
  button.addEventListener("click", function () {
    var modals = document.querySelectorAll(".modal.show");
    modals.forEach((modal) => {
      var bsModal = bootstrap.Modal.getInstance(modal);
      if (bsModal) bsModal.hide();
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".otp-input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && index > 0 && !e.target.value) {
        inputs[index - 1].focus();
      }
    });

    input.addEventListener("keypress", (e) => {
      if (!/\d/.test(e.key)) {
        e.preventDefault();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const otpModal = document.getElementById("choice1Modal");
  const firstInput = document.querySelector(".otp-input");

  if (otpModal) {
    otpModal.addEventListener("shown.bs.modal", function () {
      if (firstInput) {
        firstInput.focus();
      }
    });
  }
});
