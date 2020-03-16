const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tenantSchema = new Schema({

    "name": { type: String, required: true },
    "surname": { type: String, required: true },
    "document": { type: String, required: true },
    "beginDate": { type: Date, required: true },
    "property": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    }
})

const tenantSchema = mongoose.model('tenant', tenantSchema)
module.exports = tenantSchema