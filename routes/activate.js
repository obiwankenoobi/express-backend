var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('./config');
var {User} = require('../db/models/UserSchema');



router.get('/:token/:email' , (req, res) => { 
    var token = req.params.token;
    let email = req.params.email
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.JWTsecret, function(err, decoded) { // using the token we passed to authonticate the account
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    User.findOneAndUpdate(
        {email: email}, 
        {active:true},
        {new:true},
        (err, userAcc) => {
            if (err) {
                res.send(err)
            } else {
                res.send('Thank you! (:')
            }
        });
    })
})

module.exports = router;