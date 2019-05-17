const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSale = new Schema({
    
    ID_OrderSale: { type: Number },
    nameCus: { type: String },
    nameEmp: { type: String },
    price: { type: Number },
    brand: { type: String },
    generation: { type: String },
    yearofcar: { type: String },
    color: { type: String },
    licensePlate: { type: String }

   
},{
    collection: 'TRN_OrderSale'
});

module.exports = mongoose.model('OrderSale', OrderSale);