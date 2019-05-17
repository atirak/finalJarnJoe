const express = require('express');
const manageUserRouter = express.Router();
const User = require('../models/User.model');

manageUserRouter.route('/').get(function (req, res) {
   res.render('forgetPassword');
  });

manageUserRouter.route('/update').post(function (req, res) {
    User.updateOne({user: req.body.user}, {$set: {password: req.body.password}}, function (err, product) {
        if (err) return next(err);
        console.log("success")
       // res.send('Product udpated.');
    });
  });

  module.exports = manageUserRouter;