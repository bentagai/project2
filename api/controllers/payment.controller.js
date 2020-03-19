const PaymentModel = require('../models/payment.model')
const { handleError } = require('../utils')

module.exports = {
  getAllPayment,
  updatePayment,
  createPayment
}

function getAllPayment (req, res) {
  PaymentModel
    .find()
    .populate('property')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createPayment (req, res) {
  PaymentModel
    .create(req.body)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updatePayment (req, res) {
  PaymentModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}