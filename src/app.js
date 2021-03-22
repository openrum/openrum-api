const mongodb = require('mongodb');
const { MONGO_URL } = require('./config/app');
const express = require('express');
const util = require('util');
const debug = util.debuglog('replica');

const mongoClient = mongodb.MongoClient;

function create() {
  const app = express();

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
      // @Gonza fill in with data to insert on mongo
    }
  });

  return app;
}

module.exports = create;

// exports.handler = (event, context, callback) => {
//   const userAgent = event.headers['User-Agent'];
//   if (/bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent)) {
//     callback(null, { statusCode: 204 });
//   }
//   const body = JSON.parse(event.body);
//   if (body.browser && body.device && body.origin) {
//     const today = new Date();
//     const ttl = new Date();
//     ttl.setMonth(ttl.getMonth() + 3);
//
//     mongoClient.connect(MONGO_URL, (err, client) => {
//       const response = {
//         statusCode: 204,
//         headers: {
//           'Access-Control-Allow-Headers':
//           'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Requested-With',
//           'Access-Control-Allow-Origin': '*',
//           'Content-Type': 'text/plain'
//         }
//       };
//       if (err) {
//         response.statusCode = 500;
//         response.body = 'Could not connect to database';
//         callback(null, response);
//       } else {
//         const item = {
//           fcp: (body.firstContenfulPaint ?
//             parseInt(body.firstContenfulPaint, 10) : 0),
//           firstPaint: (body.firstPaint ? parseInt(body.firstPaint, 10) : 0),
//           lcp: (body.largestContentfulPaint ?
//             parseInt(body.largestContentfulPaint, 10) : 0),
//           compression: (body.compressionRatio ? parseFloat(body.compressionRatio) : 1),
//           dnsLookup: (body.dnsLookup ? parseInt(body.dnsLookup, 10) : 0),
//           domContentLoaded: (body.domContentLoaded ? parseInt(body.domContentLoaded, 10) : 0),
//           domLoad: (body.domLoad ? parseInt(body.domLoad, 10) : 0),
//           fullyLoad: (body.fullyLoad ? parseInt(body.fullyLoad, 10) : 0),
//           iToC: (body.iteractiveToComplete ? parseInt(body.iteractiveToComplete, 10) : 0),
//           loadTime: (body.loadTime ? parseInt(body.loadTime, 10) : 0),
//           origin: body.origin,
//           pageLoadTime: (body.pageLoadTime ? parseInt(body.pageLoadTime, 10) : 0),
//           requestResponseTime: (body.requestResponseTime ? parseInt(body.requestResponseTime, 10) : 0),
//           requestTime: (body.requestTime ? parseInt(body.requestTime, 10) : 0),
//           responseTime: (body.responseTime ? parseInt(body.responseTime, 10) : 0),
//           timeToInteractive: (body.timeToInteractive ? parseInt(body.timeToInteractive, 10) : 0),
//           ttfb: (body.ttfb ? parseInt(body.ttfb, 10) : 0),
//           latency: (parseInt(body.latency, 10) ? parseInt(body.latency, 10) : 0),
//           browser: body.browser,
//           cls: (body.cls ? parseFloat(body.cls.toFixed(3)) : -1),
//           device: body.device,
//           date: today.toISOString().slice(0, 10),
//           timestamp: today.getTime(),
//           connectionType: (body.effectiveConnectionType ?
//             body.effectiveConnectionType : ''),
//           ttl: ttl.getTime()
//         };
//         const dbo = client.db('rum');
//         dbo.collection('rum-entries').insertOne(item, (error, res) => {
//           if (error) {
//             response.statusCode = 500;
//             response.body = 'Could not save';
//           }
//           callback(null, response);
//         });
//       }
//     });
//   }
//   callback(null, { statusCode: 400 });
// };
