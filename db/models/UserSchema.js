const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = mongoose.Schema({
  email: { type: String, index: true, unique: true, required: true },
  active: { type: Boolean } // the user activate his account
});

UserSchema.plugin(uniqueValidator);
UserSchema.plugin(passportLocalMongoose, {
  findByUsername: function(model, queryParameters) {
    // Add additional query parameter - AND condition - active: true
    queryParameters.active = true;
    return model.findOne(queryParameters);
  }
});

const User = mongoose.model("userTest", UserSchema);
module.exports = { User };
