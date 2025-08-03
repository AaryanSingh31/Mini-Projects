const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const userError = document.getElementById("user-error");
const passError = document.getElementById("pass-error");
const togglePassword = document.getElementById("toggle-password");

// Show/Hide password toggle
togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  passwordInput.setAttribute("type", type === "password" ? "text" : "password");
  togglePassword.textContent = type === "password" ? "🙈" : "👁️";
});

// Login button click
loginBtn.addEventListener("click", () => {
  userError.textContent = "";
  passError.textContent = "";

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  let valid = true;

  if (username === "") {
    userError.textContent = "Username or phone number is required.";
    valid = false;
  }

  if (password === "") {
    passError.textContent = "Password is required.";
    valid = false;
  } else if (password.length < 6) {
    passError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    alert("Login successful! (This is just a demo)");
    usernameInput.value = "";
    passwordInput.value = "";
  }
});
