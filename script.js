document.addEventListener('DOMContentLoaded', function() {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginButton = document.getElementById('login-button');

    //Placeholder appears or disappears on click 
    function handleFocus(event) {
        event.target.dataset.placeholder = event.target.placeholder;
        event.target.placeholder = '';
        event.target.classList.add('input-focused');
    }

    function handleBlur(event) {
        if (event.target.value.trim() === '') {
            event.target.placeholder = event.target.dataset.placeholder;
            event.target.classList.remove('input-focused');
        }
    }

    usernameField.addEventListener('focus', handleFocus);
    usernameField.addEventListener('blur', handleBlur);

    passwordField.addEventListener('focus', handleFocus);
    passwordField.addEventListener('blur', handleBlur);

    // Handle Enter key as a form submission
    function handleEnterKey(event) {
        if (event.key === "Enter") {
            loginButton.click();
        }
    }

    usernameField.addEventListener('keydown', handleEnterKey);
    passwordField.addEventListener('keydown', handleEnterKey);

    // Existing click handler for the login button
    loginButton.addEventListener('click', function(event) {
        let hasError = false;

        // Validate username field
        if (usernameField.value.trim() === "") {
            usernameField.classList.add('input-error');
            showErrorMessage(usernameField, "This can't be empty!")
            usernameField.focus();
            hasError = true;
        } else {
            usernameField.classList.remove('input-error');
            hideErrorMessage(usernameField);
        }

        // Validate password field
        if (passwordField.value.trim() === "") {
            passwordField.classList.add('input-error');
            showErrorMessage(passwordField, "This can't be empty!")
            if (!hasError) {
                passwordField.focus();
            }
            hasError = true;
        } else {
            passwordField.classList.remove('input-error');
            hideErrorMessage(passwordField);
        }

        // If there are errors, prevent default button action
        if (hasError) {
            event.preventDefault();
            console.log('Form has errors. Please fill out all fields.');
        } else {
            console.log('Form Submitted: OK');
            // Handle successful login here
        }
    });


    function showErrorMessage(inputField, message) {
        let errorMessage = inputField.parentElement.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            inputField.parentElement.appendChild(errorMessage);
        }
        errorMessage.textContent = message;
    }

    function hideErrorMessage(inputField) {
        const errorMessage = inputField.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = '';
        }
    }
});