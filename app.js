form.addEventListener('submit', e => {
    const passwordInput = document.getElementById('password');
    const passwordConfirmationInput = document.getElementById('password_confirmation');
    const validationMessage = document.getElementById('validation-message');

    const password = passwordInput.value;
    const passwordConfirmation = passwordConfirmationInput.value;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasCapitalLetter || !hasNumber || !isLengthValid) {
        validationMessage.innerText = 'Password must contain a capital letter, a number, and be at least 6 characters long.';
        e.preventDefault();
    } else if (password !== passwordConfirmation) {
        validationMessage.innerText = 'Passwords do not match.';
        e.preventDefault();
    } else {
        // Only redirect when all conditions are met
        window.location.href = 'http://127.0.0.1:5500/submitted.html';
    }
});