var express = require('express');
var router = express.Router();
const db = require('../db/db'); // Import the database connection

// GET artworks
router.get('/', (req, res) => {
  db.all('SELECT ' +
    'art.*, type.Description as TypeDescription, category.Description as CategoryDescription ' +
    'FROM ' +
    'Artwork art ' +
    'INNER JOIN ArtworkType type ON art.Type = type.TypeId ' +
    'INNER JOIN CategoryType category ON art.Category = category.CategoryId'
    , [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});


router.post('/', (req, res) => {
  const { Category, Description, ImagePath, Name, Price, Size, Type} = req.body;
  const query = 'INSERT INTO Artwork (Category, Description, ImagePath, Name, Price, Size, Type) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.run(query, [Category, Description, ImagePath, Name, Price, Size, Type], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

module.exports = router;