const Player = require('../models/player');

module.exports.home = (req,res) =>{
    return res.render('home');
}

module.exports.insertAdmin = (req,res) =>{
    Player.create(req.body,function(err){
        if(err){
            console.log("data is not stored");
            return false;
        }
        return res.redirect('/');
    })
}