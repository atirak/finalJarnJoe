const express = require('express');
const manageUserRouter = express.Router();
const User = require('../models/User.model');

manageUserRouter.route('/').get(function (req, res) {
   res.render('forgetPassword', { error: "" });
  });

manageUserRouter.route('/').post(function (req, res) {
    User.updateOne({user: req.body.user}, {$set: {password: req.body.password}}, function (err, product) {
        
       if (err) {
        console.log("success")
        res.redirect('login');
      } else {
        res.render('forgetPassword', { error: "false" });
      }
    });
  });


  
  module.exports = manageUserRouter;