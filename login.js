document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('name');
    const passwordInput = document.getElementById('pass');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const showPasswordCheckbox = document.getElementById('show-password');

    showPasswordCheckbox.addEventListener('change', () => {
        passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        usernameError.textContent = '';
        passwordError.textContent = '';

        let isValid = true;

        if (usernameInput.value.length < 5) {
            isValid = false;
            usernameError.textContent = 'Username must be at least 5 characters long.';
        }

        if (passwordInput.value.length < 12) {
            isValid = false;
            passwordError.textContent = 'Password must be at least 12 characters long.';
        }

        if (isValid) {
            console.log('Form is valid. Submitting...');
            loginForm.submit();
        }
    });
});