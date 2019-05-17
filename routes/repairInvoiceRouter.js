const express = require('express');
const app = express();
const repairInvoiceRouter = express.Router();
const MST_RepairInvoice = require('../models/MST_RepairInvoice');

repairInvoiceRouter.route('/').get(function (req, res) {
    MST_RepairInvoice.find(function (err, build){
      if(err){
        console.log(err);
      }
      else {
        res.render('repairInvoice');
      }
    });
});

repairInvoiceRouter.route('/create').get(function (req, res) {
   res.render('create');
 });

repairInvoiceRouter.route('/post').post(function (req, res) {
   const mst_repairInvoice = new MST_RepairInvoice(req.body);
   console.log(mst_repairInvoice);
   mst_repairInvoice.save()
     .then(mst_repairInvoice => {
     res.redirect('/repairInvoice'); 
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
 repairInvoiceRouter.route('/update/:id').post(function (req, res) {
    MST_RepairInvoice.findById(req.params.id, function(err, mst_repairInvoice) {
     if (!mst_repairInvoice)
       return next(new Error('Could not load Document'));
     else {
       // do your updates here
       mst_repairInvoice.name = req.body.name;
       mst_repairInvoice.namefull = req.body.namefull;
 
       mst_repairInvoice.save().then(MST_RepairInvoice => {
           res.redirect('/repairInvoice');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });
// ---------------------------------------------delete------------------------------------------
repairInvoiceRouter.route('/delete/:id').get(function (req, res) {
    mst_repairInvoice.findByIdAndRemove({_id: req.params.id},
        function(err, mst_repairInvoice){
         if(err) res.json(err);
         else res.redirect('/repairInvoice');
     });
 });

module.exports = repairInvoiceRouter;