var express = require('express');
var router = express.Router();
const db = require('../db/db'); // Import the database connection

// GET artworks
router.get('/', (req, res) => {
  db.all('SELECT * FROM Artwork', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});


// router.post('/', (req, res) => {
//   const { title, description, imageUrl } = req.body;
//   const query = 'INSERT INTO artworks (title, description, imageUrl) VALUES (?, ?, ?)';
//   db.run(query, [title, description, imageUrl], function (err) {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json({ id: this.lastID });
//   });
// });

module.exports = router;