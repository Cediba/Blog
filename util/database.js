const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let db;

exports.mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://user01:user01@cluster0-s10gx.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            db = client.db('ciccc');
            callback();
        }).catch(err => {
            console.log(err);
        });
};

exports.getDB = () => {
    if (db) {
        return db;
    } else {
        throw err;
    }
};