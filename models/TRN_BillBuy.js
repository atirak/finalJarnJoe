const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema Validation
const BillBuy = new Schema({
    "name": String,
    "lastname" : String,
    "phonenumber": String,
    "listItem": String,
    "count": Number,
    "price": Number
    
},{
    collection: 'TRN_BillBuy'
});


module.exports = mongoose.model('BillBuy', BillBuy);;