const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema Validation
const MST_RepairInvoice = new Schema({
    "ID_RepairInvoice": Number,
    "license": String,
    "date": Date,
    "color": String,
    "brand": String,
    "name": String,
    "lastname": String,
    "state": String,
    "listFilterMachine": Boolean,
    "listOilFilter": Boolean,
    "listAirCleaning": Boolean,
    "listBrakeRepair": Boolean,
    "listGrease": Boolean,
    "listChangeTires": Boolean,
    "listAirConditionerRepair": Boolean,
    "listGasket": Boolean,
    "listChangeWiperBlade": Boolean
},{
    collection: 'MST_RepairInvoice'
});

module.exports = mongoose.model('MST_RepairInvoice', MST_RepairInvoice);