const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_TaxInvoiceLicense');

CoinRouter.route('/').get(function (req, res) {
    Coin.findOne(function (err, TaxInvoiceLicense){
       if(err){
         console.log(err);
       }
       else {
         res.render('taxInvoiceLicense', {TaxInvoiceLicense: TaxInvoiceLicense});
       }
     });
 });

 module.exports = CoinRouter;