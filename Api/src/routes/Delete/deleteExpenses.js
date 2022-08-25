const {deleteExpenses} = require('../../Controllers/IncomesExpenses');
const express= require('express');
const router= express.Router();

router.delete('/', deleteExpenses)


module.exports = router;