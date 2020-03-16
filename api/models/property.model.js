const mongoose = require('mongoose')
const Schema = mongoose.Schema
const propertySchema = new Schema({

  "street": {type: String, required: true},
  "letter": {type: String},
  "city": {type: String, required: true},
  "postalCode": {type: Number, required: true},
  "garage": {type: String},
  "storageRoom": {type: String},
  "monthlyRental": {type: Number, required: true}
})

const propertyModel = mongoose.model('property', propertySchema)
module.exports = propertyModel

