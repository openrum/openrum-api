const dotenv = require('dotenv');
require('dotenv').config();

const HOST = process.env.HOST || 'localhost';

/* ---- database ---- * */
const MONGO_URL = process.env.MONGO_URL || 'mongodb://root:root@mongo:27017/';

const MONGO_DATABASE = process.env.MONGO_DATABASE || 'rum';
const MONGO_COLLECTION = process.env.MONGO_DATABASE || 'rum-entries';

module.exports = {
  HOST,
  MONGO_URL,
  MONGO_DATABASE,
  MONGO_COLLECTION
};
