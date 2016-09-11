var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var rootPath = path.join(process.cwd());

var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
// Serving assets from public folder
app.use(express.static(path.join(rootPath, 'public')));

//app.use(cookieParser());

// Load environment config
require(path.join(__dirname, 'environments', process.env.NODE_ENV || 'development'))(app);

module.exports = app;
