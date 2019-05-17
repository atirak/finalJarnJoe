const express = require('express');
const app = express();
const newLicense = express.Router();
const TRN_OrderRenewLicense  = require('../models/TRN_OrderRenewLicense');




newLicense.route('/').get(function (req, res) {
  TRN_OrderRenewLicense.find(function (err, build){
      if(err){
        console.log(err);
      }
      else {
        res.render('newLicense');
      }
    });
});

newLicense.route('/create').get(function (req, res) {
   res.render('create');
 });

 newLicense.route('/post').post(function (req, res) {
   const TRN_OrderRenewlicense  = new TRN_OrderRenewLicense (req.body);
   console.log(TRN_OrderRenewlicense );
   TRN_OrderRenewlicense .save()
     .then(TRN_OrderRenewlicense  => {
     res.redirect('/newLicense'); 
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
 newLicense.route('/update/:id').post(function (req, res) {
  TRN_OrderRenewLicense .findById(req.params.id, function(err, TRN_OrderRenewlicense ) {
     if (!TRN_OrderRenewlicense )
       return next(new Error('Could not load Document'));
     else {
       // do your updates here
       TRN_OrderRenewlicense .name = req.body.name;
       TRN_OrderRenewlicense .namefull = req.body.namefull;
 
       TRN_OrderRenewlicense .save().then(TRN_OrderRenewLicense  => {
           res.redirect('/newLicense');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });
// ---------------------------------------------delete------------------------------------------
newLicense.route('/delete/:id').get(function (req, res) {
  TRN_OrderRenewlicense .findByIdAndRemove({_id: req.params.id},
        function(err, TRN_OrderRenewlicense ){
         if(err) res.json(err);
         else res.redirect('/newLicense');
     });
 });

module.exports = newLicense;