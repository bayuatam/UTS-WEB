const db = require('../config/db');

const Transaction = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM transactions';
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM transactions WHERE id = ?';
    db.query(sql, [id], callback);
  },

  create: (data, callback) => {
    const sql = `INSERT INTO transactions (tanggal, no_bukti, diterima_dari, untuk_keperluan, jumlah, akun_id) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [data.tanggal, data.no_bukti, data.diterima_dari, data.untuk_keperluan, data.jumlah, data.akun_id];
    db.query(sql, values, callback);
  },

  update: (id, data, callback) => {
    const sql = `UPDATE transactions SET tanggal = ?, no_bukti = ?, diterima_dari = ?, 
                 untuk_keperluan = ?, jumlah = ?, akun_id = ? WHERE id = ?`;
    const values = [data.tanggal, data.no_bukti, data.diterima_dari, data.untuk_keperluan, data.jumlah, data.akun_id, id];
    db.query(sql, values, callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM transactions WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Transaction;
