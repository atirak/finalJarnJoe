const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://login:login123@ds062818.mlab.com:62818/autoosell');

const showSaleIncomeRouter = require('./routes/showSaleIncomeRouter');
const profitDocumentRouter = require('./routes/profitDocumentRouter');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/showSaleIncome',showSaleIncomeRouter);
app.use('/profitDocument', profitDocumentRouter);

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});


 app.get('/home', (req, res) => {
  res.render('home');
 });

 app.listen(port, function(){
  console.log('Node js Express js Tutorial at port', port);
});


