const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
//set the config
dotenv.config();

const dataBaseName = 'mernApp';
let _db;

const mongodbUri = process.env.DB_URI;

const mongoConnect = (callback) => {
  callback();
  // console.log(mongodbUri, '👀')
  // MongoClient.connect(`${mongodbUri}${dataBaseName}?retryWrites=true&w=majority`)
  // .then(client => {
  //   console.log('Connected ✨');
  //   _db = client.db();
  // })
  // .catch(err => {
  //   console.log(err, '🍎');
  //   throw err;
  // });
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