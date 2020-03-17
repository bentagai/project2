const TenantModel = require('../models/tenant.model')
const { handleError } = require('../utils')

module.exports = {
  getAllTenant,
  updateTenant,
  deleteTenant,
  createTenant
}

function getAllTenant (req, res) {
  TenantModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createTenant (req, res) {
  TenantModel
    .create(req.body)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteTenant (req, res) {
  TenantModel
    .remove({ _id: req.params.id }) 
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateTenant (req, res) {
  TenantModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
