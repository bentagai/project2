const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllExpenses,
  createExpenses
} = require('../controllers/expenses.controller')

router.get('/', authUser, getAllExpenses)
router.post('/', authUser, createExpenses)

module.exports = router