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
      res.render('register', { error: "ชื่อผู้ใช้ไม่ถูกต้อง" })
    } else {
      dataUser.save();
      res.redirect('login');
    }
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


module.exports = registerRouter;




// const express = require('express');
// const bcrypt = require('bcrypt')
// const registerRouter = express.Router();
// const User = require('../models/User.model');

// // const Coin = require('../models/OrderSale.model');

// registerRouter.route('/').get(function (req, res) {
//   res.render('register');
// });

// registerRouter.route('/').post(function (req, res) {
//   var name = req.body.name;
//   var lastname = req.body.lastName;
//   var gender = req.body.gender;
//   var birth =req.body.birth;
//   var phone = req.body.phoneNumber;
//   var type = req.body.typeEmployee;
//   var user = req.body.user;
//   var password = req.body.password;

// });

// module.exports = registerRouter;
