var mongoose = require('mongoose');

var User = mongoose.model('User');

var service = require('./service'); 

module.exports.signup = function(req, res) {
  //var user = User.findOne({'email': req.body.email});
  User.findOne({'email': req.body.email}, function(err, result) {
    if (err) {
      return res.status(400).send(err);
    }

    if (result) {
      return res.status(400).send(err);
    } else {
      token = service.createToken(req.body.email, req.body.role)
      User
      .create({email: req.body.email, password: req.body.password, role: req.body.role, token: token}, function(err, user) { 
        if (err) {
          return res.status(400).send(err); 
        }
        return res
        .status(200)
        .send({token}); 
      });
    }
  });
};
