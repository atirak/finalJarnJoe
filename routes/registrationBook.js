var express = require('express');
var router = express.Router();
const TRN_BillLicense = require("../models/TRN_BillLicense");

/* GET home page. */
router.get('/', function(req, res, next) {
    TRN_BillLicense.find(function(err,doc) { 
        if (err) return next(err);
  res.render('registrationBook', { TRN_BillLicense:doc });
});
});

module.exports = router;


