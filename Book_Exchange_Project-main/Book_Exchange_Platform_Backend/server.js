const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for your frontend
app.use(cors({ origin: 'http://localhost:3000' }));

// Handle preflight (OPTIONS) requests
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

// Signup endpoint
app.post('/signup', (req, res) => {
    const { email, username, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Dummy response for testing
    res.status(200).json({ message: 'Signup successful!' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
