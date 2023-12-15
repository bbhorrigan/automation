document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submit

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you would add the logic to verify the username and password,
    // For example, sending a request to a server for validation
    console.log('Attempting to login with', username, password);

    // If validation is successful, you might redirect to your main page
    // window.location.href = 'main.html'; // Redirect to the main content page
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submit

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example of sending the credentials to a server endpoint
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // If login is successful, redirect to the SIP Forge main page
            window.location.href = 'forge.html'; // Redirect to the SIP Forge main content page
        } else {
            // Handle failed login attempt here
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
