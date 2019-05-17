const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_TaxInvoiceBuy');

CoinRouter.route('/').get(function (req, res) {
    Coin.findOne(function (err, TaxInvoiceBuy){
       if(err){
         console.log(err);
       }
       else {
         res.render('taxInvoiceBuy', {TaxInvoiceBuy: TaxInvoiceBuy});
       }
     });
 });

 module.exports = CoinRouter;