const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllPayments,
  updatePayments,
  createPayments
} = require('../controllers/payments.controller')

router.get('/', authUser, getAllPayments)
router.put('/:id', authUser, updatePayments)
router.post('/', authUser, createPayments)

module.exports = router