const {deleteExpenses} = require('../../Controllers/IncomesExpenses');
const express= require('express');
const router= express.Router();

router.put('/', deleteExpenses)


module.exports = router;