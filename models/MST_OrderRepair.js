const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MST_OrderRepair = new Schema({

   
    brand: { type: String },
    generation: { type: String },
    date: { type: String },
    color: { type: String },
    licensePlate : { type: String },
    status: { type: String },
    price: { type: Number },
    employee : { type: String },
    problem : { type: String }
    
   
    },{
        collection: 'MST_OrderRepair'
    });

    module.exports = mongoose.model('MST_OrderRepair', MST_OrderRepair);