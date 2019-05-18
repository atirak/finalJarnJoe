const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TRN_CarStock = new Schema({
    brand: { type: String },
    datereceive: { type: String },
    generation : { type: String },
    color: { type: String },
    licensePlate: { type: String },
    yearofcar : { type: String },
    status : { type: String },
    price : { type: String }
   
    },{
        collection: 'TRN_CarStock'
    });

    module.exports = mongoose.model('TRN_CarStock', TRN_CarStock);