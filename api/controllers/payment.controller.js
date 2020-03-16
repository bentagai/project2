const PaymentModel = require('../models/payment.model')
const { handleError } = require('../utils')

module.exports = {
  getAllPayment,
  updatePayment,
  createPayment
}

function getAllPayment (req, res) {
  PaymentModel
    .find({ property: res.locals.property._id })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createPayment (req, res) {
  PaymentModel
    .create({ property: res.locals.property._id, task: req.body.payment })
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