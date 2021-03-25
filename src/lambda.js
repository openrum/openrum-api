const Mongo = require('./utils/database');
const processData = require('./utils/processData');
const { MONGO_COLLECTION } = require('./config/app');

exports.handler = (event, context, callback) => {
  const userAgent = event.headers['User-Agent'];
  if (/bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent)) {
    callback(null, { statusCode: 204 });
  }

  const response = {
    statusCode: 204,
    headers: {
      'Access-Control-Allow-Headers':
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Requested-With',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    }
  };

  const body = JSON.parse(event.body);
  if (body.browser && body.device && body.origin) {
    const item = processData.getItem(body);

    const mongo = Mongo.connect(MONGO_COLLECTION);
    try {
      const result = mongo.insert(item);
      result.then(() => {
        response.statusCode = 204;
        callback(null, response);
      });
    } catch (e) {
      response.statusCode = 500;
      callback(null, response);
    }
  } else {
    response.statusCode = 400;
    callback(null, response);
  }
};
