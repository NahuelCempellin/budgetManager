const {editIncome} = require('../../Controllers/IncomesExpenses');
const express= require('express');
const router= express.Router();

router.put('/', editIncome)


module.exports = router;