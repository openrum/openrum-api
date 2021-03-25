/* eslint no-console: 0 */
const dotenv = require('dotenv');
const spdy = require('spdy');
const fs = require('fs');
const util = require('util');

const debug = util.debuglog('replica');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const app = require('./app');

const server = app();
const PORT = process.env.PORT || 5100;

const SSL = process.env.SSL || false;
if (SSL) {
  const options = {
    key: fs.readFileSync(`${__dirname}/config/ssl/server.key`),
    cert: fs.readFileSync(`${__dirname}/config/ssl/server.crt`)
  };

  spdy
    .createServer(options, server)
    .listen(PORT, (error) => {
      if (error) {
        console.log(error);
        debug(error);
        return process.exit(1);
      }
      console.log(`Listening on port: ${PORT}.`);
    });
} else {
  server.listen(PORT, () => console.log(`Listening on ${PORT}`));
}
