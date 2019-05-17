var jwt = require('jsonwebtoken'); 
var moment = require('moment'); 
var config = require('../config'); 

exports.createToken = function(user) { 
    var payload = {
        sub: user, 
        iat: moment().unix()
    };
    return jwt.sign(payload, config.TOKEN_SECRET); 
};