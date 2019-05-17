const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TRN_OrderRenewLicense = new Schema({

    name:String,
    phone:String,
    license:String,
   price: Number,
    date:String,
   type:String
    
   
    },{
        collection: 'TRN_OrderRenewLicense'
    });

    module.exports = mongoose.model('TRN_OrderRenewLicense', TRN_OrderRenewLicense);