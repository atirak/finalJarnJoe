const express = require('express');
const app = express();
const dataCustomerBuy = express.Router();
const MST_Customer = require('../models/MST_Customer');


dataCustomerBuy.route('/').get(function (req, res) {
  
   
  MST_Customer.find(function (err, build){
      if(err){
        console.log(err);
      }
      else {
        res.render('dataCustomerBuy', {build: build});
      }
    });
});

dataCustomerBuy.route('/create').get(function (req, res) {
   res.render('create');
 });

userID=""
carID = ""
id_order=""
 dataCustomerBuy.route('/post').post(function (req, res) {
  MST_Customer.find(function(err,custo){
    const id_customer = custo.length+1
    id_order = id_customer
    const MST_customer = new MST_Customer({id_customer:id_customer,
      cardID:req.body.cardID,
      name:req.body.name,
      lastname:req.body.lastname,
      gender:req.body.gender,
      birth:req.body.birth,
      phonenumber:req.body.phonenumber,
      address:req.body.address,
      typeCustomer:req.body.typeCustomer
    });

    
    console.log("userID : "+id_customer) 
    userID = id_customer
    MST_customer.save()
    .then(MST_customer => {
    res.redirect('/bargain'); 
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
  })
  
 });
// -------------------------------------Edit--------------------------------------------------
// CoinRouter.route('/edit/:id').get(function (req, res) {
//    const id = req.params.id;
//    Coin.findById(id, function (err, coin){
//        res.render('edit', {coin: coin});
//    });
//  });

 //---------------------------------------Update-----------------------------------------------
 dataCustomerBuy.route('/update/:id').post(function (req, res) {
  MST_Customer.findById(req.params.id, function(err, MST_customer) {
     if (!MST_customer)
       return next(new Error('Could not load Document'));
     else {
       // do your updates here
       MST_customer.name = req.body.name;
       MST_customer.namefull = req.body.namefull;
 
       MST_customer.save().then(MST_Customer => {
           res.redirect('/dataCustomerBuy');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });
// ---------------------------------------------delete------------------------------------------
dataCustomerBuy.route('/delete/:id').get(function (req, res) {
  MST_customer.findByIdAndRemove({_id: req.params.id},
        function(err, MST_customer){
         if(err) res.json(err);
         else res.redirect('/dataCustomerBuy');
     });
 });

module.exports = dataCustomerBuy;