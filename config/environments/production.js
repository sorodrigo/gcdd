var path = require('path');

var indexPath = path.join(process.cwd(), 'app/index.html');
module.exports = function (app) {
  
  app.get('*', function (req, res) {
    res.sendFile(indexPath);
  });

  app.use(function (err, req, res, next) {
    console.error(err);
    next();
  });

};