const express = require('express');
const app = express();
const saveDataCar = express.Router();
const TRN_CarStock = require('../models/TRN_CarStock.model');

saveDataCar.route('/').get(function (req, res) {
    TRN_CarStock.find(function (err, build){
      if(err){
        console.log(err);
      }
      else {
        res.render('saveDataCar', {build: build});
      }
    });
});

saveDataCar.route('/create').get(function (req, res) {
   res.render('create');
 });

 saveDataCar.route('/post').post(function (req, res) {
   const TRN_carstock = new TRN_CarStock(req.body);
   console.log(TRN_carstock );
   TRN_carstock .save()
     .then(TRN_carstock  => {
     res.redirect('/bargain'); 
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
 });
// -------------------------------------Edit--------------------------------------------------
// CoinRouter.route('/edit/:id').get(function (req, res) {
//    const id = req.params.id;
//    Coin.findById(id, function (err, coin){
//        res.render('edit', {coin: coin});
//    });
//  });

 //---------------------------------------Update-----------------------------------------------
 saveDataCar.route('/update/:id').post(function (req, res) {
    TRN_CarStock.findById(req.params.id, function(err, TRN_carstock ) {
     if (!TRN_carstock )
       return next(new Error('Could not load Document'));
     else {
       // do your updates here
       TRN_carstock .name = req.body.name;
       TRN_carstock .namefull = req.body.namefull;
 
       TRN_carstock .save().then(TRN_CarStock => {
           res.redirect('/saveDataCar');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });
// ---------------------------------------------delete------------------------------------------
saveDataCar.route('/delete/:id').get(function (req, res) {
    TRN_carstock .findByIdAndRemove({_id: req.params.id},
        function(err, TRN_carstock ){
         if(err) res.json(err);
         else res.redirect('/saveDataCar');
     });
 });

module.exports = saveDataCar;