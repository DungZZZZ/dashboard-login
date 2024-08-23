document.addEventListener('DOMContentLoaded', function() {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginButton = document.getElementById('login-button');

    //Placeholder appears or disappears on click 
    function handleClick(event) {
        event.target.dataset.placeholder = event.target.placeholder;
        event.target.placeholder = '';
    }

    function handleBlur(event) {
        if (event.target.value.trim() === '') {
            event.target.placeholder = event.target.dataset.placeholder;
        }
    }

    usernameField.addEventListener('focus', handleClick);
    usernameField.addEventListener('blur', handleBlur);

    passwordField.addEventListener('focus', handleClick);
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

        // If there are errors, prevent default button action
        if (hasError) {
            event.preventDefault();
            console.log('Form has errors. Please fill out all fields.');
        } else {
            console.log('Form Submitted: OK');
            // Handle successful login here
        }
    });
});