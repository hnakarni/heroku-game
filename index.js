require("dotenv").config();
const express = require('express');

const mongoose = require('mongoose');

console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("db is connected");
});

const port = process.env.PORT || 8181;

const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log("something wrong");
        return false;
    }
    console.log("Server is connected");
})