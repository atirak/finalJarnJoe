const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MST_OrderRepair = new Schema({

   
    licensePlate:String,
    price: Number,
    date:String,
   problem:String
    
   
    },{
        collection: 'MST_OrderRepair'
    });

    module.exports = mongoose.model('MST_OrderRepair', MST_OrderRepair);