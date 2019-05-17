const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_TaxInvoiceSale');

CoinRouter.route('/').get(function (req, res) {
    Coin.findOne(function (err, TaxInvoiceSale){
       if(err){
         console.log(err);
       }
       else {
         res.render('taxInvoiceSale', {TaxInvoiceSale: TaxInvoiceSale});
       }
     });
 });

 module.exports = CoinRouter;