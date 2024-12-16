var express = require('express');
var router = express.Router();
const db = require('../db/db'); // Import the database connection

// GET artworks
router.get('/', (req, res) => {
  db.all('SELECT * FROM Type', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

module.exports = router;