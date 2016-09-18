var path = require('path');
var logger = require('morgan');
var PrettyError = require('pretty-error');

var indexPath = path.join(process.cwd(), 'app/index.html');
module.exports = function (app) {

// Logs
  app.use(logger('dev'));

// Error handling
  const pe = new PrettyError();
  pe.skipNodeFiles();
  pe.skipPackage('express');

  /* GET home page. */
  app.get('*', function (req, res) {
    res.sendFile(indexPath);
  });

  app.use(function (err, req, res, next) {
    console.error(pe.render(err));
    next();
  });

};