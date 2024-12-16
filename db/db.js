const sqlite3 = require('sqlite3').verbose();

// Initialize and export the database connection
const db = new sqlite3.Database('C:/Users/isabe/Documents/repositories/WK_website/database/wk_database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;