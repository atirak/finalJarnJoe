const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TRN_BillLicense = new Schema({

    name:String,
    lastname:String,

    phone:String,
    licensePlate:String,
   total: Number,
    date:String,
   type:String
    
   
    },{
        collection: 'TRN_BillLicense '
    });

    module.exports = mongoose.model('TRN_BillLicense ', TRN_BillLicense );