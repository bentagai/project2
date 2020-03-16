const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllTenants,
  updateTenants,
  deleteTenants,
  createTenants
} = require('../controllers/tenant.controller')

router.get('/', authUser, getAllTenants)
router.put('/:id', authUser, updateTenants)
router.delete('/:id', authUser, deleteTenants)
router.post('/', authUser, createTenants)

module.exports = router