/* jshint esversion: 6 */

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blog = require('./controllers/database.js');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("./public"));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine' , 'ejs');

app.use(expressLayouts);

app.set('port' , process.env.PORT || 8101);

require('./controllers/routes.js')(app,blog);

app.listen(app.get('port'),function(){
  console.log(`Listening on port ${app.get('port')}`);
});
