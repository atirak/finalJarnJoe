const express = require('express');
const app = express();
const SaveDataCustomerRepairRouter = express.Router();
const MST_Customer = require('../models/MST_Customer');

SaveDataCustomerRepairRouter.route('/').get(function (req, res) {
    MST_Customer.find(function (err, build){
      if(err){
        console.log(err);
      }
      else {
        res.render('saveDataCustomerRepair', {build: build});
      }
    });
});

SaveDataCustomerRepairRouter.route('/create').get(function (req, res) {
   res.render('create');
 });

 SaveDataCustomerRepairRouter.route('/post').post(function (req, res) {
   const MST_customer = new MST_Customer(req.body);
   console.log(MST_customer);
   MST_customer.save()
     .then(MST_customer => {
     res.redirect('/saveDataRepair'); 
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
 });


module.exports = SaveDataCustomerRepairRouter;