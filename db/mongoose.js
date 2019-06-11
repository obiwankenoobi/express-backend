const mongoose = require("mongoose");

//@@@@@@@@@@@@@ if you use local host @@@@@@@@@@@@@@@@@
const url = process.env.MONGO_DB_ADDRESS;
console.log("process.env.MONGO_DB_ADDRESS", process.env.MONGO_DB_ADDRESS);
mongoose.connect(
  url,
  { useNewUrlParser: true },
  console.log("connected to mongo")
);

//@@@@@@@@@@@@@ if you dont use local host @@@@@@@@@@@@@@@@@

// mongoose.connect(process.env.MONGO_DB_ADDRESS, {
//     auth: {
//       user: process.env.MONGO_USERNAME,
//       password: process.env.MONGO_PASSWORD
//     }
//   })
//   .then(() => console.log('connection successful'))
//   .catch((err) => console.error(err));

//@@@@@@@@@@@@@ if you dont use local host @@@@@@@@@@@@@@@@@

mongoose.Promise = global.Promise;

module.exports = { mongoose };
