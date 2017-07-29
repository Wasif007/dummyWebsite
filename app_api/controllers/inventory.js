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

module.exports.inventoryAdd = function(req, res) {
 sendJSONresponse(res,200,{
 	"Message":"Hello Add"
 })
};

module.exports.inventoryDelete = function(req, res) {
 sendJSONresponse(res,200,{
 	"Message":"Hello Delete"
 })
};

module.exports.inventoryUpdate = function(req, res) {
 sendJSONresponse(res,200,{
 	"Message":"Hello Update"
 })
};