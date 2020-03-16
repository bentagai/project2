const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllTenant,
  updateTenant,
  deleteTenant,
  createTenant
} = require('../controllers/tenant.controller')

router.get('/', authUser, getAllTenant)
router.put('/:id', authUser, updateTenant)
router.delete('/:id', authUser, deleteTenant)
router.post('/', authUser, createTenant)

module.exports = router