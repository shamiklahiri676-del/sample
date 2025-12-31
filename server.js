const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (e.g., login.html)
app.use(express.static('.'));

// Login API endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Invalid credentials.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
