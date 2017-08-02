var mongoose = require('mongoose');

var sendmail = require('sendmail')();
 
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.sendingEmail = function(req, res) {



sendmail({
    from: req.body.email, // sender address
    to: "ar1363721@gmail.com", // list of receivers
    subject: req.body.name, // Subject line
    text: req.body.message ,// html body,
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});

};