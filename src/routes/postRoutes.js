const express = require('express');
const router = express.Router();

// Example route to create a post
router.post('/create', (req, res) => {
  res.send('Post created');
});

// Example route to get all posts
router.get('/', (req, res) => {
  res.send('All posts');
});

module.exports = router;
