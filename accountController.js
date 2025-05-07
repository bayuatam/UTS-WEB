const Account = require('../models/account');
const db = require("../config/db");


exports.getAccounts = (req, res) => {
  Account.getAll((err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};

exports.createAccount = (req, res) => {
  const { no_akun, nama_akun } = req.body;
  if (!no_akun || !nama_akun) return res.status(400).json({ message: 'Lengkapi semua field' });

  Account.create(no_akun, nama_akun, (err, result) => {
    if (err) return res.status(400).json({ message: err.message });
    res.status(201).json({ message: 'Akun berhasil ditambahkan' });
  });
};

exports.getAccountById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM accounts WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching account", error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(results[0]);
  });
};
