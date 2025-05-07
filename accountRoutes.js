const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/', accountController.getAccounts);
router.post('/', accountController.createAccount);
router.get("/:id", accountController.getAccountById);

module.exports = router;
