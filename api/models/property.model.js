const mongoose = require('mongoose')
const Schema = mongoose.Schema
const propertySchema = new Schema({

  "tenant": {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tenant',
      required: true
    },  
  "street": {type: String, required: true},
  "letter": {type: String},
  "city": {type: String, required: true},
  "postalCode": {type: Number, required: true},
  "garage": {type: String},
  "storageRoom": {type: String},
  "monthlyRental": {type: Number, required: true}
})

const propertySchema = mongoose.model('property', propertySchema)
module.exports = propertySchema