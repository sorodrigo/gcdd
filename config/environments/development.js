var path = require('path');
var logger = require('morgan');
var PrettyError = require('pretty-error');

var routes = require('./../../routes/index');

module.exports = function (app) {

// Logs
    app.use(logger('dev'));

    app.use(routes);

// Error handling
    const pe = new PrettyError();
    pe.skipNodeFiles();
    pe.skipPackage('express');

    app.use(function (err, req, res, next) {
        console.error(pe.render(err));
        next();
    });

};