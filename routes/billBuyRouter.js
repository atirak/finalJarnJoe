const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_BillBuy');



CoinRouter.route('/').get(function (req, res) {
    Coin.findOne(function (err, BillBuy){
       if(err){
         console.log(err);
       }
       else {
         res.render('billBuy', {BillBuy: BillBuy});
       }
     });
 });

 module.exports = CoinRouter;



 