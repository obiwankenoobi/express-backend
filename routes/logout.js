var express = require('express');
var router = express.Router();
var {User} = require('../db/models/UserSchema');
var passport = require('passport');


/* GET users listing. */
router.post('/', passport.authenticate('local'), function(req, res) {
    User.findOneAndUpdate(
        {username: req.body.username}, 
        {login:false},
        {new:true},
        (err, userAcc) => {
            if (err) {
                res.send(err)
            } else {
                //req.logout();
                res.send({msg:'logged out', user:req.user})
            }
        });
    
    //res.send('logged out')
});

module.exports = router;