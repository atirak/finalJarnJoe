const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_TaxInvoiceRepair');

CoinRouter.route('/').get(function (req, res) {
    Coin.findOne(function (err, TaxInvoiceRepair){
       if(err){
         console.log(err);
       }
       else {
         res.render('taxInvoiceRepair', {TaxInvoiceRepair: TaxInvoiceRepair});
       }
     });
 });

 module.exports = CoinRouter;