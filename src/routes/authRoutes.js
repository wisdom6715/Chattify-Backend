const express = require('express');
const router = express.Router();

// Example route
router.post('/register', (req, res) => {
  res.send('User registration route');
});

module.exports = router;
