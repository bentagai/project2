const ExpensesModel = require('../models/expenses.model')
const { handleError } = require('../utils')

module.exports = {
  getAllExpenses,
  createExpenses
}

function getAllExpenses (req, res) {
  ExpensesModel
    .find({ property: res.locals.property._id })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createExpenses (req, res) {
  ExpensesModel
    .create({ property: res.locals.property._id, task: req.body.expenses })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
