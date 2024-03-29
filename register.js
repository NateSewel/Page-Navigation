/** @format */

const nameInput = document.getElementById("nameInput")
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = nameInput.value
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value


    if (!nameValue) {
        return alert("Username is required!")
    }

    if (!emailValue) {
        return alert("Email is required!")
    }

    if (passwordValue.length < 6) {
        return alert("Password should be more than 6 characters")
    }

    const userInfo = { emailValue, nameValue, passwordValue };
    localStorage.setItem ("userInfo", JSON.stringify(userInfo))
    window.location = "http://127.0.0.1:5500/home.html";

    alert("Registration successful");
})