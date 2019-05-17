const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bargain = new Schema({
    
    nameC: { type: String },
    lnameC: { type: String },
    nameE: { type: String },
    lnameE: { type: String },
    doctype: { type: String },
    date: { type: String },
    type: { type: String },
    brand: { type: String },
    model: { type: String },
    year: { type: String },
    color: { type: String },
    license: { type: String },
    price: { type: Number }
    
},{
    collection: 'TRN_Bargain'
});

module.exports = mongoose.model('Bargain', Bargain);