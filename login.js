
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const userValue = username.value.trim();
        const passValue = password.value.trim();

        if (userValue === "" || passValue === "") {
            alert("Please fill in all fields.");
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phoneRegex.test(userValue) && !emailRegex.test(userValue)) {
            alert("Enter a valid phone number or email.");
            return;
        }
        const dummyUser = "test@example.com";
        const dummyPass = "123456";

        if (userValue === dummyUser && passValue === dummyPass) {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid credentials. Try again.");
        }
    });

});