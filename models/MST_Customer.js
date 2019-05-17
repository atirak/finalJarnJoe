const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MST_Customer = new Schema({
    id_customer :{ type: String },
    name  : { type: String },
    lastname : { type: String },
    gender  : { type: String },
    birth : { type: String },
    cardID : { type: String },
    phonenumber : { type: String },
    address: { type: String},
    typeCustomer : { type: String }
    
},{
    
    collection: 'MST_Customer'
    
});

module.exports = mongoose.model('MST_Customer', MST_Customer);