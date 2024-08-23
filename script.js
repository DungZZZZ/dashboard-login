document.addEventListener('DOMContentLoaded', function() {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function(event) {
        let hasError = false;

        // Validate username field
        if (usernameField.value.trim() === "") {
            usernameField.classList.add('input-error');
            usernameField.focus();
            hasError = true;
        } else {
            usernameField.classList.remove('input-error');
        }

        // Validate password field
        if (passwordField.value.trim() === "") {
            passwordField.classList.add('input-error');
            if (!hasError) {
                passwordField.focus();
            }
            hasError = true;
        } else {
            passwordField.classList.remove('input-error');
        }

        // If there are errors, prevent the default button action
        if (hasError) {
            event.preventDefault();
            console.log('Form has errors. Please fill out all fields.');
        } else {
            console.log('Form Submitted: OK');
        }
    });
});