let express = require('express');
let consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
.include('./app/routes')
.then('./config/dbConnection.js')
.then('./app/models')
.into(app);

module.exports = app;