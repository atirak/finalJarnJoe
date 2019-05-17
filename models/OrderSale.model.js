const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSale = new Schema({
    
    ID_OrderSale: { type: Number },
    ID_CarStock: { type: Number },
    date: { type: String },
    price: { type: Number },
    ID_Customer: { type: Number },
    ID_Employee: { type: Number },
    ID_Partner: { type: Number },
    ID_Bargain: { type: Number },
    ID_Bill: { type: Number },
    ID_Reciept: { type: Number }
},{
    collection: 'TRN_OrderSale'
});

module.exports = mongoose.model('OrderSale', OrderSale);