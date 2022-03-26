const mongodb = require('mongodb')
const getDb = require('../util/database').getDb;

class Paper{
  constructor({name, description, tags, id}){
    this.name = name;
    this.description = description;
    this.tags = tags;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  static getPapers(){
    const db = getDb();
    return db.collection('papers').find({}).toArray();
  }

  save(){
    const db = getDb();
    let dbOperation;
    if(this._id){
      //update the product
      dbOperation = db.collection('papers')
      .updateOne({_id: new mongodb.ObjectId(this._id)}, { $set: this });
    }else{
      dbOperation = db.collection('papers').insertOne(this);
    }
    return dbOperation 
  }
}

module.exports = Paper;