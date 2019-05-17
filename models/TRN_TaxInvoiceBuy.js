const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxInvoiceBuy = new Schema({

    "name": String,
    "lastname": String,
    "phonenumber": String,
    "listItem": String,
    "count": Number,
    "price": Number
},{
    collection: 'TRN_BillBuy'
});

module.exports = mongoose.model('TaxInvoiceBuy', TaxInvoiceBuy);