const router = require('express').Router()
//const { authUser } = require('../utils') // Authenticated Route

const {
  getAllProperty,
  updateProperty,
  deleteProperty,
  createProperty
} = require('../controllers/property.controller')

router.get('/', getAllProperty)
router.put('/:id', updateProperty)
router.delete('/:id', deleteProperty)
router.post('/', createProperty)

// router.get('/', authUser, getAllProperty)
// router.put('/:id', authUser, updateProperty)
// router.delete('/:id', authUser, deleteProperty)
// router.post('/', authUser, createProperty)

module.exports = router