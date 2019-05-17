const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TRN_OrderRenewLicense = new Schema({

   name:String,
   phone:String,
   price:Number,
   license:String,
    date:String,
    CC: String,
    carType: String,
    carAge: String,
    type: String
   

    
   
    },{
        collection: 'TRN_OrderRenewLicense'
    });

    var User = mongoose.model('TRN_OrderRenewLicense', TRN_OrderRenewLicense);
    module.exports = User;