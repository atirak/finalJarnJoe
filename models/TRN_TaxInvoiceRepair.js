const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxInvoiceRepair = new Schema({

    "name": String,
    "lastname": String,
    "phonenumber": String,
    "listItem": String,
    "count": Number,
    "price": Number
},{
    collection: 'TRN_BillRepair'
});

module.exports = mongoose.model('TaxInvoiceRepair', TaxInvoiceRepair);