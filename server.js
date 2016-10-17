require('dotenv').config({ silent: true });

const port = process.env.PORT || 3000;
const app = require('./config/application');
const models = require('./models');
/**
 * Initializing server
 */

models.sequelize.sync().then(function () {
  app.listen(port, '0.0.0.0', function (err) {
    if (err) {
      console.error(err);
    }
    console.info('==> 🌎 Listening on http://0.0.0.0:%s/', port);
  });
});
