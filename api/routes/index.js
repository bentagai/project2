const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const propertyRouter = require('./property.router')
const tenantRouter = require('./tenant.router')
const paymentRouter = require('./payment.router')
const expensesRouter = require('./expenses.router')

const { authUser } = require('../utils') // Authenticated Route

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/property', propertyRouter)
router.use('/tenant', tenantRouter)
router.use('/payment', paymentRouter)
router.use('/expenses', expensesRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
