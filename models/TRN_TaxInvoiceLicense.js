const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxInvoiceLicense = new Schema({

    "name": String,
    "lastname": String,
    "phonenumber": String,
    "listItem": String,
    "count": Number,
    "price": Number
},{
    collection: 'TRN_BillLicense'
});

module.exports = mongoose.model('TaxInvoiceLicense', TaxInvoiceLicense);