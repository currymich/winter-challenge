// External Packages
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const crypto = require("crypto");
const { validPassword, genPassword } = require("../services/authHelpers");

module.exports = (app) => {
  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (error, user, info) => {
      if (error) {
        res.send(error);
      } else if (!user) {
        res.send(info);
      } else {
        res.send({ user });
        next(null, user);
      }
    })(req, res, next);
  });

  app.post("/api/signup", (req, res, next) => {
    const { salt, hash } = genPassword(req.body.password);

    User.create(
      {
        name: req.body.name,
        email: req.body.email,
        team: req.body.team,
        password: hash,
        salt: salt,
      },
      (err, user) => {
        passport.authenticate("local", (error, user, info) => {
          if (error) {
            res.send(error);
          } else if (!user) {
            res.send(info);
          } else {
            res.send({ user });
            next(null, user);
          }
        })(req, res, next);
      }
    );
  });

  // visiting this route clears logged in user
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  //use this route to test which user is logged in (testing purposes)
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  //returns a list of all users
  app.get("/api/users", async (req, res) => {
    const userList = await User.find();
    res.send(userList);
  });
};
