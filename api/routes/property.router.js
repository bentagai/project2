const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllProperties,
  updateProperties,
  deleteProperties,
  createProperties
} = require('../controllers/property.controller')

router.get('/', authUser, getAllProperties)
router.put('/:id', authUser, updateProperties)
router.delete('/:id', authUser, deleteProperties)
router.post('/', authUser, createProperties)

module.exports = router