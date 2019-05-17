var express = require('express');
var router = express.Router();
const Taxinvoice = require("../models/TRN_TaxinvoiceBuy");

router.route('/').get(function(req,res,next) {
	Taxinvoice.find(function(err,doc) {
    if (err) return next(err);
    res.render('taxinVoiceBuy',{Taxinvoice:doc});
		
	});
});
// router.route('/').post((req, res) => {  
    
//     Taxinvoice.find({Taxinvoice: req.body.id}).then(emps => {
          
//           sum += Taxinvoice.price;
//           Taxinvoice.sum = this.sum;
//           res.render('taxinVoiceBuy', Taxinvoice);
          
//     }).catch(err => {
      
//       res.render('login', { error: 'false' })
//     })
    
// })


module.exports = router;
