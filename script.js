document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate the form
    validateForm();
});

// Function to validate the form
function validateForm() {
    // Reset error messages
    resetErrors();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check conditions
    if (fullName.length < 5) {
        showError('fullNameError', 'Name must be at least 5 characters');
    }

    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email');
    }

    if (phone.length !== 10 || phone === '123456789') {
        showError('phoneError', 'Enter a valid 10-digit phone number');
    }

    if (password.length < 8 || password === 'password' || password === fullName) {
        showError('passwordError', 'Password is not strong');
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
    }

    // If no errors, submit the form
    if (checkErrors()) {
        // Display success message
        alert('Form submitted successfully!');
        
        // Reset the form
        resetForm();
    }
}

// Function to show an error message for a specific element
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

// Function to reset all error messages
function resetErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.innerText = '';
    });
}

// Function to check if there are any errors
function checkErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    let hasErrors = false;

    errorElements.forEach(element => {
        if (element.innerText !== '') {
            hasErrors = true;
        }
    });

    return !hasErrors;
}

// Function to reset the form
function resetForm() {
    document.getElementById('myForm').reset();
}
