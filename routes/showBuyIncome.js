var express = require('express');
var router = express.Router();
const OrderBuy = require("../models/TRN_OrderBuy");
/* GET users listing. */

router.route('/').get(function(req,res,next) {
	OrderBuy.find(function(err,doc) {
    if (err) return next(err);
    res.render('showBuyIncome',{OrderBuy:doc,a:a});
	
	});
});

module.exports = router;
