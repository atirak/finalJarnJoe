const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MST_Customer = new Schema({
    name: { type: String },
    lastname: { type: String },
    gender: { type: String },
    birth: { type: String },
    cardID: { type: String },
    phonenumber: { type: String },
    typeCustomer: { type: String },
    address: {type: String}
},{
    collection: 'MST_Customer'
});

    module.exports = mongoose.model('MST_Customer', MST_Customer);