const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_BillSale');



CoinRouter.route('/').get(function (req, res) {
    Coin.findOne(function (err, BillSale){
       if(err){
         console.log(err);
       }
       else {
         res.render('billSale', {BillSale: BillSale});
       }
     });
 });

 module.exports = CoinRouter;



 