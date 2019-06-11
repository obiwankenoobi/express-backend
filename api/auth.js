const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const { Auth } = require("../services/auth");
const passport = require("passport");

// login method
router.post("/login", passport.authenticate("local"), Auth.login);

// route to signup
router.post(
  "/signup",
  [
    check("username").isEmail(),
    check("password").isLength({ min: 8 }),
    check("companyName").isLength({ min: 6 })
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log({ error: errors.array() });
      return res.status(422).json({ errors: errors.array() });
    }

    Auth.signup(req, res, next);
  }
);

// sample to test private route
router.get(
  "/private",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => res.status(200).json({ msg: "OK", user: req.user })
);

module.exports = router;
