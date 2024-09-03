const express = require('express');
const router = express.Router();

// Example route
router.post('/send', (req, res) => {
  res.send('Message sent');
});

module.exports = router;
