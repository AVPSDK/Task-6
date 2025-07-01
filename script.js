document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop form from submitting

        clearErrors();

        let isValid = true;

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required");
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, "Enter a valid email");
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            showError(messageInput, "Message is required");
            isValid = false;
        }

        if (isValid) {
            const successMessage = document.getElementById("success-message");
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.display = "block";
            form.reset();
        }
    });

    function showError(input, message) {
        const error = document.createElement("p");
        error.className = "error-message";
        error.textContent = message;

        // Insert error after input
        input.insertAdjacentElement("afterend", error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach(error => error.remove());

        const successMessage = document.getElementById("success-message");
        if (successMessage) successMessage.style.display = "none";
    }
});
