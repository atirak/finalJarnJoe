const express = require('express');
const app = express();
const registerRouter = express.Router();
const User = require('../models/User.model');

registerRouter.route('/').get(function (req, res) {
  res.render('register', { error: "" });
});

registerRouter.route('/').post(function (req, res) {
  const dataUser = new User(req.body);
  var id = req.body.user
  var pass = req.body.password
  var repass = req.body.repassword

  User.findOne({ user: id }, function (err, user) {
    if (user) {
      res.render('register', { error: "ชื่อผู้ใช้ซ้ำ" })
    } else {
      dataUser.save();
      res.redirect('login');
    }
  })
});

module.exports = registerRouter;