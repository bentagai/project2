const mongoose = require('mongoose')
const Schema = mongoose.Schema
const paymentSchema = new Schema({
  "property": {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property'
    },
  "type" : {type: String, enum: 
        ['electricity', 
        'water',
        'propertyTax',
        'homeownersAssn',
        'insurance',
        'other']
        , required: true},
  "date": {type: Date, required: true},
  "amount": {type: Number, required: true}
})

const paymentModel = mongoose.model('expenses', paymentSchema)
module.exports = paymentModel