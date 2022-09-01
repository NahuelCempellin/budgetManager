const {expensesID}= require('../../Controllers/IncomesExpenses');
const express = require('express');
const router= express.Router();


router.get('/', expensesID)


module.exports= router;
