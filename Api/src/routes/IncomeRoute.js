const{addIncome}= require('../Controllers/IncomesExpenses');
const express = require('express');
const router= express.Router();


router.post('/',addIncome);




module.exports= router;