const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({

    name: { type: String },
    lastname: { type: String },
    gender: { type: String},
    birth: { type: String},
    phoneNumber: { type: String},
    typeEmployee: { type: String},
    user: { type: String},
    password : { type: String}
},{
    collection: 'MST_Employee'
});

module.exports = mongoose.model('User', User);
