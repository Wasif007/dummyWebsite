var mongoose = require('mongoose');
var Inv = mongoose.model('Inventory');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.inventoryList = function(req, res) {
  Inv.find({}, function(err, inventoryDocs) {
    if (!err){ 
sendJSONresponse(res,200,inventoryDocs);
    } else {
    	throw err;
    }
});
};

module.exports.inventoryAdd = function(req, res) {
 Inv.create({
    name: req.body.name,
    quantity: req.body.quantity,
    size: req.body.size,
    colour:req.body.colour,
    article:req.body.article,
    article_type:req.body.article_type,
    price:req.body.price
  }, function(err, inventoryAdded) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      console.log(inventoryAdded);
      sendJSONresponse(res, 200, inventoryAdded);
    }
  });
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