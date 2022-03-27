const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
//set the config
dotenv.config();

const dataBaseName = 'mernApp';
let _db;

const mongodbUri = process.env.MONGODB_URI;

const mongoConnect = async (callback) => {
  try {
    const client = await MongoClient.connect(`${mongodbUri}${dataBaseName}?retryWrites=true&w=majority`);
    console.log('Connected ✨');
    _db = client.db();
  } catch (error) {
    console.log(error, '🍎');
    throw error;
  }
};

const getDb = () => {
  if (_db){
    return _db;
  }
  throw 'No database found';
}

// const getDb = () =>  _db || new Exception('No database found');

exports.mongoConnect = mongoConnect; 
exports.getDb = getDb; 