const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === 'password123') {
    return res.json({ token: 'mock-jwt-token' });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router; 