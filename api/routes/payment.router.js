const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllPayment,
  updatePayment,
  createPayment
} = require('../controllers/payment.controller')


// router.get('/', getAllPayment)
// router.put('/:id', updatePayment)
// router.post('/', createPayment)


router.get('/', authUser, getAllPayment)
router.put('/:id', authUser, updatePayment)
router.post('/', authUser, createPayment)

module.exports = router