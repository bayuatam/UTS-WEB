const express = require("express");
const cors = require("cors");
const accountRoutes = require("./routes/accountRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/accounts", accountRoutes);
app.use("/api/transactions", transactionRoutes);

// ✅ Tambahkan ini di bawah route yang lain
app.get("/", (req, res) => {
  res.send("API Berjalan ✅, bayu pratama");
});

module.exports = app;
