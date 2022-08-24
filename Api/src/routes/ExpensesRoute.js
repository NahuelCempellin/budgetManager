const{addExpenses}= require('../Controllers/IncomesExpenses');
const express = require('express');
const router= express.Router();


router.post('/',addExpenses);




module.exports= router;