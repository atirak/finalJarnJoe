const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/Bargain.model');

// CoinRouter.route('/:id').get(function (req, res) {
//     const id = req.params.id;
//     Coin.findById(id, function (err, bargain){
//         res.render('bargain', {bargain: bargain});
//     });
//   });

CoinRouter.route('/').get(function (req, res) {
    const id = '5cde95c6fb6fc00aaf7605df';
    Coin.findById(id, function (err, bargain){
        res.render('bargain', {bargain: bargain});
    });
  });
   


module.exports = CoinRouter;