require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static('public'));

// Example API route
app.get('/api/weather', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
