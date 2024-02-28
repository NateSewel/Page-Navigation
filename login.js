/** @format */

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");

function getUserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  emailInput.value = info?.emaialValue;
  passwordInput.value = info?.passwordValue;
}

getUserInfo();

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const correctData = {
    email: "nathanielisewede@gmail.com",
    password: "12345",
  };

  const emaialValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (!emaialValue) {
    return alert("Email is required");
  }

  if (!passwordValue) {
    return alert("Password is required");
  }

  if (emaialValue !== correctData.email) {
    return alert("No account exists with email provided");
  }

  if (passwordValue !== correctData.password) {
    return alert("Wrong password");
  }

  const userInfo = { emaialValue, passwordValue };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  window.location = "http://127.0.0.1:5500/home.html";

  alert("User logged in");
});
