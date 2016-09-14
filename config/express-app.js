var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// Load environment config
require(path.join(__dirname, 'environments', process.env.NODE_ENV || 'development'))(app);

module.exports = app;
