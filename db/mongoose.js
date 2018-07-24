let MongoClient = require('mongodb').MongoClient;
let mongoose = require('mongoose');
let config = require('../routes/config')



//@@@@@@@@@@@@@ if you use local host @@@@@@@@@@@@@@@@@
var url = "mongodb://localhost:27017/db";
mongoose.connect(url, { useNewUrlParser: true }, console.log('connected to mongo'));



//@@@@@@@@@@@@@ if you dont use local host @@@@@@@@@@@@@@@@@

// mongoose.connect(mongoUrl, {
//     auth: {
//       user: config.mongoUsername,
//       password: config.mongoPw
//     }
//   })
//   .then(() => console.log('connection successful'))
//   .catch((err) => console.error(err));

//@@@@@@@@@@@@@ if you dont use local host @@@@@@@@@@@@@@@@@

mongoose.Promise = global.Promise;


module.exports = {mongoose};