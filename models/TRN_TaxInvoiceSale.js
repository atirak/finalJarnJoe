const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxInvoiceSale = new Schema({

    "name": String,
    "lastname": String,
    "phonenumber": String,
    "listItem": String,
    "count": Number,
    "price": Number
},{
    collection: 'TRN_BillSale'
});

module.exports = mongoose.model('TaxInvoiceSale', TaxInvoiceSale);