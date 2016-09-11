require('dotenv').config({ silent: true });

const port = process.env.PORT || 3000;
const app = require('./config/express-app');

/**
 * Initializing server
 */
app.listen(port, '0.0.0.0', function(err) {
    if (err) {
        console.error(err);
    }
    console.info('==> 🌎 Listening on http://0.0.0.0:%s/', port);
});
