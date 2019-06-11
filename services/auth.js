//routes/auth.js
const jwt = require("jsonwebtoken");
const { User } = require("../db/models/UserSchema");

class Auth {
  // signup method
  static login(req, res, next) {
    const { username } = req.body;
    const user = {
      username
    };
    const token = jwt.sign(user, process.env.COOKIE_SECRET);
    return res.status(200).json({ user, token });
  }

  // signup method
  static signup(req, res, next) {
    const {
      body: { username, password }
    } = req;

    User.register(
      new User({
        username,
        password
      }),
      password,
      (error, account) => {
        if (error) {
          return res.status(500).json({ message: "ERR", error });
        }
        return res.status(200).json({ message: "OK", account });
      }
    );
  }
}

module.exports = { Auth };
