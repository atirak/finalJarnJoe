const express = require('express');
const app = express();
const dataCustomerLicense = express.Router();
const MST_Customer = require('../models/MST_Customer');




dataCustomerLicense.route('/').get(function (req, res) {
  MST_Customer.find(function (err, build){
      if(err){
        console.log(err);
      }
      else {
        res.render('dataCustomerLicense');
      }
    });
});

dataCustomerLicense.route('/create').get(function (req, res) {
   res.render('create');
 });

 dataCustomerLicense.route('/post').post(function (req, res) {
   const MST_customer = new MST_Customer(req.body);
   console.log(MST_customer);
   MST_customer.save()
     .then(MST_customer => {
     res.redirect('/dataCustomerLicense'); 
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
 dataCustomerLicense.route('/update/:id').post(function (req, res) {
  MST_Customer.findById(req.params.id, function(err, MST_customer) {
     if (!MST_customer)
       return next(new Error('Could not load Document'));
     else {
       // do your updates here
       MST_customer.name = req.body.name;
       MST_customer.namefull = req.body.namefull;
 
       MST_customer.save().then(MST_Customer => {
           res.redirect('/dataCustomerLicense');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });
// ---------------------------------------------delete------------------------------------------
dataCustomerLicense.route('/delete/:id').get(function (req, res) {
  MST_customer.findByIdAndRemove({_id: req.params.id},
        function(err, MST_customer){
         if(err) res.json(err);
         else res.redirect('/dataCustomerLicense');
     });
 });

module.exports = dataCustomerLicense;