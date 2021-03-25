const express = require('express');
const util = require('util');
const bodyParser = require('body-parser');
const Mongo = require('./utils/database');
const processData = require('./utils/processData');
const { MONGO_COLLECTION } = require('./config/app');

const debug = util.debuglog('replica');


function create() {
  const app = express();

  app.use(bodyParser.json({ type: '*/*' }));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.status(200);
    res.send('🍹');
  });

  app.post('/', (req, res) => {
    debug(req);

    const { headers, body } = req;

    const userAgent = headers['User-Agent'];
    if (/bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent)) {
      res.status(204);
    } else {
      debug(body);
      if (body.browser && body.device && body.origin) {
        const item = processData.getItem(body);
        const mongo = Mongo.connect(MONGO_COLLECTION);
        try {
          const result = mongo.insert(item);
          result.then(() => {
            res.status(204);
            res.send();
          });
        } catch (e) {
          res.status(500);
          res.send();
        }
      } else {
        res.status(400);
        res.send();
      }
    }
  });

  return app;
}

module.exports = create;
