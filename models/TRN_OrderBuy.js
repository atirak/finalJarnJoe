const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TRN_OrderBuy = new Schema({
    list:String,
    date:String,
    price:Number
    },{
        collection: 'TRN_OrderBuy'
    });

    module.exports = mongoose.model('TRN_OrderBuy', TRN_OrderBuy);