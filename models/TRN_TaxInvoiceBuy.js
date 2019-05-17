const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TRN_TaxInvoiceBuy = new Schema({
    list:String,
    count:Number,
    price:Number,
    sum:Number
    },{
        collection: 'TRN_TaxInvoiceBuy'
    });

    module.exports = mongoose.model('TRN_TaxInvoiceBuy', TRN_TaxInvoiceBuy);