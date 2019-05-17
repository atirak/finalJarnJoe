const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema Validation
const BillRepair = new Schema({
    "name": String,
    "lastname" : String,
    "phonenumber": String,
    "listItem": String,
    "count": Number,
    "price": Number
    
},{
    collection: 'TRN_BillRepair'
});


module.exports = mongoose.model('BillRepair', BillRepair);;