var mongoose = require('mongoose');
var Inv = mongoose.model('Inventory');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.inventoryList = function(req, res) {
 sendJSONresponse(res,200,{
 	"Message":"Hello"
 })
};