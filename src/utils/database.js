const mongodb = require('mongodb');
const { MONGO_URL, MONGO_DATABASE } = require('../config/app');

class MongoDatabase {
  constructor(collection) {
    this.mongo = mongodb.MongoClient;
    this.collection = collection;
  }

  async insert(item) {
    const result = await this.mongo.connect(MONGO_URL, { useUnifiedTopology: true }, (err, client) => {
      const dbo = client.db(MONGO_DATABASE);
      dbo.collection(this.collection).insertOne(item);
    });
    return result;
  }
}
class Mongo {
  static connect(database, collection) {
    if (!Mongo.instance) {
      Mongo.instance = new MongoDatabase(database, collection);
    }
    return Mongo.instance;
  }
}
module.exports = Mongo;
