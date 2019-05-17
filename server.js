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
const taxinvoiceBuy = require('./routes/taxinvoiceBuyRouter');
const bargainRouter = require('./routes/bargainRouter');
const manageUserRouter = require('./routes/manageUserRouter');
const home = require('./routes/home');
const billBuyRouter = require('./routes/billBuyRouter');
const billSaleRouter = require('./routes/billSaleRouter');
const billRepairRouter = require('./routes/billRepairRouter');
const billLicenseRouter = require('./routes/billLicenseRouter');
const repairInvoiceRouter = require('./routes/repairInvoiceRouter');
var dataCustomerBuy = require('./routes/dataCustomerBuy');
var saveDataCar = require('./routes/saveDataCar');
var showRepairIncome = require('./routes/showRepairIncome');
var showLicenseIncome = require('./routes/showLicenseIncome');
var registrationBook = require('./routes/registrationBook');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const taxInvoiceLicenseRouter = require('./routes/taxInvoiceLicenseRouter');
const taxInvoiceRepairRouter = require('./routes/taxInvoiceRepairRouter');
const taxInvoiceSaleRouter = require('./routes/taxInvoiceSaleRouter');
const manageCarStock = require('./routes/manageCarStock');
const dataCustomerSale = require('./routes/dataCustomerSale');

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
app.use('/dataCustomerBuy',dataCustomerBuy);
app.use('/saveDataCar',saveDataCar);
app.use('/showRepairIncome', showRepairIncome);
app.use('/showLicenseIncome', showLicenseIncome);
app.use('/registrationBook', registrationBook);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/taxInvoiceLicense', taxInvoiceLicenseRouter);
app.use('/taxInvoiceRepair', taxInvoiceRepairRouter);
app.use('/taxInvoiceSale', taxInvoiceSaleRouter);
app.use('/manageCarStock', manageCarStock);
app.use('/dataCustomerSale',dataCustomerSale);

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});


 app.get('/home', (req, res) => {
  res.render('home');
 });

 app.listen(port, function(){
  console.log('Node js Express js Tutorial at port', port);
});


