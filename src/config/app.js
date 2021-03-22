const dotenv = require('dotenv');

const HOST = process.env.HOST || 'localhost';

/* ---- database ---- * */
const MONGO_URL = process.env.MONGO_URL || 'mongodb://root:root@mongo:27017/';

exports = {
  HOST,
  MONGO_URL
}
