const express = require('express');
const app = express();
const CoinRouter = express.Router();
const User = require('../models/MST_Customer');
const Emp = require('../models/User.model');
const Car = require('../models/TRN_CarStock.model');
const Order = require('../models/OrderSale.model');

// CoinRouter.route('/:id').get(function (req, res) {
//     const id = req.params.id;
//     Coin.findById(id, function (err, bargain){
//         res.render('bargain', {bargain: bargain});
//     });
//   });
userID = ""
empID = ""
carID = ""
id_order=""
CoinRouter.route('/').get(function (req, res) {
    console.log("userID :"+userID)
    User.findOne({id_customer:userID}, function (err, user) {
        Emp.findById(empID, function (err, emp) {
            Car.findById(carID, function (err, car) {
                console.log(user)
                const OrderSale = new Order({ID_OrderSale:id_order,
                    nameCus:user.name+" "+user.lastname,
                    nameEmp:emp.name+" "+emp.lastname,
                    brand:car.brand,
                    generation:car.generation,
                    yearofcar:car.yearofcar,
                    color:car.color,
                    licensePlate:car.licensePlate,
                    price:car.price
                  });
                  car.status = "sold out"
                  car.save()
                  OrderSale.save()
                res.render('bargain', { cus: user, emp: emp, car: car });
            });
        });
    });
});



CoinRouter.route('/bill').get(function (req, res) {
    Order.findOne({ID_OrderSale:id_order},function (err, BillBuy){
       if(err){
         console.log(err);
       }
       else {
         res.render('billBuy', {BillBuy: BillBuy});
       }
     });
 });

module.exports = CoinRouter;