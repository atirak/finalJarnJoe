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

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/showSaleIncome',showSaleIncomeRouter);
app.use('/profitDocument', profitDocumentRouter);
app.use('/showBuyIncome',showBuyIncome);
app.use('/taxinvoiceBuy',taxinvoiceBuy);
app.use('/bargain',bargainRouter);
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});


 app.get('/home', (req, res) => {
  res.render('home');
 });

 app.listen(port, function(){
  console.log('Node js Express js Tutorial at port', port);
});


