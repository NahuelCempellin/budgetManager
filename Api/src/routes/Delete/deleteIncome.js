const {deleteIncome} = require('../../Controllers/IncomesExpenses');
const express= require('express');
const router= express.Router();

router.put('/', deleteIncome)


module.exports = router;