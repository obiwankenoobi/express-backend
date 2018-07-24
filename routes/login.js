var express = require('express');
var router = express.Router();
var passport = require('passport');
var {User} = require('../db/models/UserSchema');





    router.post('/' ,passport.authenticate('local'), function(req, res) {
        User.findOneAndUpdate(
            {username: req.body.username}, 
            {login:true},
            {new:true},
            (err, userAcc) => {
                if (err) {
                    console.log('err', err)
                    res.send(err)
                } else {
                    res.send({msg:'you logged in', user:req.user})
                }
            });
    });
    


module.exports = router;