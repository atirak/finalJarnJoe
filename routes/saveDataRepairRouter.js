const express = require('express');
const app = express();
const saveDataRepairRouter = express.Router();
const MST_OrderRepair = require('../models/MST_OrderRepair');

saveDataRepairRouter.route('/').get(function (req, res) {
  MST_OrderRepair.find(function (err, build){
      if(err){
        console.log(err);
      }
      else {
        res.render('saveDataRepair', {build: build});
      }
    });
});

saveDataRepairRouter.route('/create').get(function (req, res) {
   res.render('create');
 });

 saveDataRepairRouter.route('/post').post(function (req, res) {
   const MST_orderRepair = new MST_OrderRepair(req.body);
   console.log(MST_orderRepair);
   MST_orderRepair.save()
     .then(MST_orderRepair => {
     res.redirect('/saveDataCustomerRepair'); //เปลี่ยน path ต่อไป
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
 });


module.exports = saveDataRepairRouter;