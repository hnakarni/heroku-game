const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/gitProject");

const db = mongoose.connection;

db.once('open', function(err){
    if(err){
        console.log("db is not connected");
        return false;
    }
    console.log("db is connected");
})
module.exports = db;