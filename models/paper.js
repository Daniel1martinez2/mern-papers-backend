const mongodb = require('mongodb')
const getDb = require('../util/database').getDb;

class Paper{
  constructor({name, description, tags, link,  id}){
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.link = link;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  static getPapers(){
    const db = getDb();
    return db.collection('papers').find({}).toArray();
  }

  static deletePaperById = (id) => {
    const db = getDb();
    return db
      .collection('papers')
      .deleteOne({_id: new mongodb.ObjectId(id)})
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