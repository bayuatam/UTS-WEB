const db = require('../config/db');

const Account = {
  getAll: (callback) => {
    db.query('SELECT * FROM accounts ORDER BY id ASC', callback);
  },
  create: (no_akun, nama_akun, callback) => {
    db.query('INSERT INTO accounts (no_akun, nama_akun) VALUES (?, ?)', [no_akun, nama_akun], callback);
  },
};

module.exports = Account;
