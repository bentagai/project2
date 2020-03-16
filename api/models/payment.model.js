const mongoose = require('mongoose')
const Schema = mongoose.Schema
const paymentSchema = new Schema({
  "property": {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true
    },
  "year": {type: Number, required: true},
  "month": {type: Number, required: true},
  "amount": {type: Number, required: true},
})

const paymentSchema = mongoose.model('payment', paymentSchema)
module.exports = paymentSchema