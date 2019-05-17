const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
      done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },

  function (req, username, password, done) {
    User.findOne({'email': username}, function (err, user) {
        if (err) { return done(err); }
        if (!user || !user.validatePassword(password)){
            return done(null, false, req.flash('loginMessage', 'Invalid user or password'));
        }
        return done(null, user);
    });
  }));
}