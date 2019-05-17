var mongoose = require('mongoose');
const userSchema = require('../models/user');
var config = require('../config');

var settings = mongoose.createConnection('mongodb://' + config.MONGO_USER + ':' + config.MONGO_PASSWORD + '@' + '192.168.67.13:27017/settings', { useNewUrlParser: true });
var User = settings.model('User', mongoose.Schema(userSchema.userSchema), 'users');

var service = require('./service'); 

module.exports.signup = function(req, res) {
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
};
