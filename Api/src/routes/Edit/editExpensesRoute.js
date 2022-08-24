const {editExpenses} = require('../../Controllers/IncomesExpenses');
const express= require('express');
const router= express.Router();

router.put('/', editExpenses)


module.exports = router;