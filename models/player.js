const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
});


const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;