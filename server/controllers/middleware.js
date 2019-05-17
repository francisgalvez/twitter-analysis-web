var jwt = require('jsonwebtoken'); 
var config = require('../config');

exports.ensureAuthenticated = function(req, res, next) {
  if(!req.headers.authorization) { 
    return res
    .status(403)
    .send({message: "Error: request with no headers."});
  }

  var token = req.headers.authorization.split(" ")[1]; 
  var payload = jwt.verify(token, config.TOKEN_SECRET, function(err, payload) {
    if (err) {
      switch (err.name) { 
        case 'JsonWebTokenError':
          return res.status(401).send({message: "Error: Incorrect token."});
        case 'TokenExpiredError':
          return res.status(401).send({message: "Error: Expired token."});
        default:
          return res.status(401).send(err);
      }
    }
    req.user = payload.sub;
    req.role = payload.rol;
    next(); 
  });
}