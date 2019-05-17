const express = require('express');
const manageUserRouter = express.Router();
const User = require('../models/User.model');

manageUserRouter.route('/').get(function (req, res) {
  res.render('forgetPassword', { error: "" });
});

// manageUserRouter.route('/update').post(function (req, res) {
//   User.updateOne({ user: req.body.user }, { $set: { password: req.body.password } }, function (err, product) {
//     if (err) return next(err);
//     console.log("success")
//     // res.send('Product udpated.');
//   });
// });

manageUserRouter.route('/').post(function (req, res) {
  const dataUser = new User(req.body);
  var user = req.body.user
  var password = req.body.password
  var newpassword = req.body.confirmNewPassword
  User.findOne({ user: user }, function (err, users) {
    
    if (users) {
      console.log("have user")
      if (password == newpassword) {
        console.log("match")
        User.updateOne({ user: req.body.user }, { $set: { password: req.body.password } }, function (err, product) {
          if (err) return next(err);
          console.log("success")
          res.redirect('login');
        });
      } else {
        res.render('forgetPassword', { error: "password do not match" })
        console.log("match")
      }
    } else {
      console.log("no have user")
      res.render('forgetPassword', { error: "ชื่อผู้ใช้ซ้ำ" })
    }
  });
});

module.exports = manageUserRouter;