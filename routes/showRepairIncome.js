var express = require('express');
var router = express.Router();
const MST_OrderRepair = require("../models/MST_OrderRepair");

/* GET home page. */
router.get('/', function(req, res, next) {
    MST_OrderRepair.find(function(err,doc) { 
        if (err) return next(err);
  res.render('showRepairIncome', { MST_OrderRepair:doc  });
});
});






module.exports = router;
