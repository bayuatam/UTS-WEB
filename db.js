const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // default user di Laragon
  password: '', // default password biasanya kosong
  database: 'kas_app',
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi gagal:', err);
    return;
  }
  console.log('MySQL Connected');
});

module.exports = db;
