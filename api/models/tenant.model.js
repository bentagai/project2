const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tenantSchema = new Schema({

    "name": { type: String, required: true },
    "surname": { type: String, required: true },
    "document": { type: String, required: true },
    "beginDate": { type: String, required: true },
    "property": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    }
})

const tenantModel = mongoose.model('tenant', tenantSchema)
module.exports = tenantModel