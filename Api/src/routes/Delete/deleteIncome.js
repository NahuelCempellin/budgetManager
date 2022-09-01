const {deleteIncome} = require('../../Controllers/IncomesExpenses');
const express= require('express');
const router= express.Router();

router.delete('/', deleteIncome)


module.exports = router;