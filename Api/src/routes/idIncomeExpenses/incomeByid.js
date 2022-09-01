const {incomeID}= require('../../Controllers/IncomesExpenses');
const express = require('express');
const router= express.Router();


router.get('/:id', incomeID)


module.exports= router;

