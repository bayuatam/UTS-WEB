const Transaction = require('../models/transaction');

exports.getAllTransactions = (req, res) => {
  Transaction.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getTransactionById = (req, res) => {
  const id = req.params.id;
  Transaction.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
};

exports.createTransaction = (req, res) => {
  const data = req.body;
  Transaction.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Transaksi berhasil ditambahkan', id: result.insertId });
  });
};

exports.updateTransaction = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Transaction.update(id, data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Transaksi berhasil diperbarui' });
  });
};

exports.deleteTransaction = (req, res) => {
  const id = req.params.id;
  Transaction.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Transaksi berhasil dihapus' });
  });
};
