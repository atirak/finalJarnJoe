var express = require('express');
var router = express.Router();
const TRN_OrderRenewLicense = require("../models/TRN_OrderRenewLicense");

/* GET home page. */

  
router.get('/showLicenseIncome', function(req, res, next) {
	TRN_OrderRenewLicense.find(function(err,doc) { 
    if (err) return next(err);
    res.render('showLicenseIncome', {TRN_OrderRenewLicense:doc });
});
});




module.exports = router;
