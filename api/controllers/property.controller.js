const PropertyModel = require('../models/property.model')
const { handleError } = require('../utils')

module.exports = {
  getAllProperty,
  updateProperty,
  deleteProperty,
  createProperty
}

function getAllProperty (req, res) {
  PropertyModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createProperty (req, res) {
  PropertyModel
    .create(req.body)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteProperty (req, res) {
  PropertyModel
    //.remove({ _id: req.params.id }) 
    .remove(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateProperty (req, res) {
  PropertyModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}