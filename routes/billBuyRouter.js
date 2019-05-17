const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/TRN_BillBuy');
const Order = require('../models/OrderSale.model');


id_order=""
CoinRouter.route('/').get(function (req, res) {
  Order.findOne({ID_OrderSale:id_order},function (err, BillBuy){
       if(err){
         console.log(err);
       }
       else {
         res.render('billBuy', {BillBuy: BillBuy});
       }
     });
 });

 CoinRouter.route('/invoice').get(function (req, res) {
  Order.findOne({ID_OrderSale:id_order},function (err, BillBuy){

     if(err){
       console.log(err);
     }
     else {
       res.render('taxInvoiceBuy', {TaxInvoiceBuy: BillBuy});
     }
   });
});

 module.exports = CoinRouter;



 