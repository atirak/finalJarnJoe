const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_BillRepair');



CoinRouter.route('/').get(function (req, res) {
    Coin.findOne(function (err, BillRepair){
       if(err){
         console.log(err);
       }
       else {
         res.render('billRepair', {BillRepair: BillRepair});
       }
     });
 });

 module.exports = CoinRouter;



 