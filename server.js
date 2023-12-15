const express = require('express');
const path = require('path');
const app = express();

// Serve static files such as JavaScript, CSS, and images
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); // Adjust the path as necessary
});

// ... (rest of your server code, such as the POST route for login)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
