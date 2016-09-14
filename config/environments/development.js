var express = require('express');
var path = require('path');
var logger = require('morgan');
var PrettyError = require('pretty-error');

module.exports = function (app) {

// Logs
  app.use(logger('dev'));

// Error handling
  const pe = new PrettyError();
  pe.skipNodeFiles();
  pe.skipPackage('express');

  app.use(function (err, req, res, next) {
    console.error(pe.render(err));
    next();
  });


  app.use(express.static(path.join(__dirname, './../../app')));

  /* GET home page. */
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './../../app/index.html'));
  });

};