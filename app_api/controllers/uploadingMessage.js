var mongoose = require('mongoose');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.sendingEmail = function(req, res) {
  
  sendJSONresponse(res,200,{"Message ":req.body.name+" "+req.body.email+" "+req.body.message});

};