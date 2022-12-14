const  {Router} = require('express');
const create = require('../routes/postRoute');
const getUsers= require('../routes/getUsers');
const auth= require('../routes/auth');
const userById= require('../routes/user');
const addIncome= require('../routes/IncomeRoute');
const addExpenses= require('../routes/ExpensesRoute');
const editIncome = require('../routes/Edit/editIncomeRoute');
const editExpenses = require('../routes/Edit/editExpensesRoute');
const deleteIncome= require('../routes/Delete/deleteIncome');
const deleteExpenses= require('../routes/Delete/deleteExpenses');
const incomeId= require('./idIncomeExpenses/incomeByid');
const expensesId= require('./idIncomeExpenses/expensesById')

const router = Router();

router.use('/createUser',create);
router.use('/users', getUsers);
router.use('/login', auth);
router.use('/user', userById);
router.use('/income',addIncome);
router.use('/expenses', addExpenses);
router.use('/editIncome', editIncome);
router.use('/editExpenses', editExpenses);
router.use('/deleteIncome', deleteIncome);
router.use('/deleteExpenses', deleteExpenses);
router.use('/incomeId', incomeId);
router.use('/expensesId', expensesId);

module.exports = router;