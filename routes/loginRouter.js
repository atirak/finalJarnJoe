const express = require('express');
const bcrypt = require('bcrypt')
const LoginRouter = express.Router();
const User = require('../models/User.model');

LoginRouter.route('/').get(function (req, res) {
  res.render('login', { error: "" });
});

LoginRouter.route("/").post((req, res) => {
  var user = req.body.user
  var password = req.body.password
  User.findOne({ user: user, password: password }, function (err, user) {
    if(user){
      res.render('home')
    }else{
      res.render('login', { error: "ข้อมูลไม่ถูกต้อง" });
    }
  })
})

module.exports = LoginRouter;