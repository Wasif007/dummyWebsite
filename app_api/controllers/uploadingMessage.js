var mongoose = require('mongoose');
var mail = require("nodemailer").mail;


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.sendingEmail = function(req, res) {
mail({
    from: req.body.email, // sender address
    to: "ar1363721@gmail.com", // list of receivers
    subject: req.body.name, // Subject line
    text: req.body.message // plaintext body
    
});
 
};