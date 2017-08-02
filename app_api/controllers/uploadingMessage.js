var mongoose = require('mongoose');
var nodemailer = require('nodemailer');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.sendingEmail = function(req, res) {

var transporter = nodemailer.createTransport();
transporter.sendMail({
    from: req.body.email,
    to: 'ar1363721@gmail.com',
    subject: req.body.name,
    text: req.body.message
});
 
};