const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema Validation
const BillLicense = new Schema({
    "name": String,
    "lastname" : String,
    "phonenumber": String,
    "listItem": String,
    "count": Number,
    "price": Number
    
},{
    collection: 'TRN_BillLicense'
});


module.exports = mongoose.model('BillLicense', BillLicense);;