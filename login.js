document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const span = document.getElementsByClassName('close')[0];

    // Show modal when login button is clicked
    loginBtn.onclick = function () {
        modal.style.display = 'block';
    }

    // Close modal when '×' is clicked
    span.onclick = function () {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Simple client-side validation (for demonstration purposes only)
    if (username === 'admin' && password === 'password') {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login successful!';
        // Redirect to a different page or do something else on successful login
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Invalid username or password.';
    }
});
