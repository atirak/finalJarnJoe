const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_BillLicense');



CoinRouter.route('/').get(function (req, res) {
    Coin.findOne(function (err, BillLicense){
       if(err){
         console.log(err);
       }
       else {
         res.render('billLicense', {BillLicense: BillLicense});
       }
     });
 });

 module.exports = CoinRouter;



 