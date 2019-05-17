const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://projectweb:p12345@ds117806.mlab.com:17806/choktaweeauto');

const showSaleIncomeRouter = require('./routes/showSaleIncomeRouter');
const profitDocumentRouter = require('./routes/profitDocumentRouter');
const showBuyIncome = require('./routes/showBuyIncome');
const taxinvoiceBuy = require('./routes/taxinvoiceBuy');
const bargainRouter = require('./routes/bargainRouter');
const manageUserRouter = require('./routes/manageUserRouter');
const home = require('./routes/home');
const billBuyRouter = require('./routes/billBuyRouter');
const billSaleRouter = require('./routes/billSaleRouter');
const billRepairRouter = require('./routes/billRepairRouter');
const billLicenseRouter = require('./routes/billLicenseRouter');
const repairInvoiceRouter = require('./routes/repairInvoiceRouter');



app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/showSaleIncome',showSaleIncomeRouter);
app.use('/profitDocument', profitDocumentRouter);
app.use('/showBuyIncome',showBuyIncome);
app.use('/taxinvoiceBuy',taxinvoiceBuy);
app.use('/bargain',bargainRouter);
app.use('/manageUser', manageUserRouter);
app.use('/home', home);
app.use('/repairInvoice', repairInvoiceRouter);
app.use('/billBuy', billBuyRouter);
app.use('/billSale', billSaleRouter);
app.use('/billRepair', billRepairRouter);
app.use('/billLicense', billLicenseRouter);
app.use('/repairInvoice', repairInvoiceRouter);

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});


 app.get('/home', (req, res) => {
  res.render('home');
 });

 app.listen(port, function(){
  console.log('Node js Express js Tutorial at port', port);
});


