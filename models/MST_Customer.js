const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema Validation
const Customer = new Schema({
    "ID_Customer": Number,
    "name": String,
    "lastname": String,
    "gender": String,
    "birth": Date,
    "cordId": "",
    "phonenumber": String,
    "typeCustomer": String,
},{
    collection: 'MST_Customer'
});

module.exports = mongoose.model('Customer', Customer);