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
  Inv.remove({}, function(err,removed) {
sendJSONresponse(res,200,{
	"Message":" Deleted all data"
})
});
};

module.exports.inventoryUpdate = function(req, res) {
 if(req.params.article)
  
  {
  Inv.findOne({article:req.params.article}, function(err, docs) {
    if(!docs)
    {
      return sendJSONresponse(res,401,{
        "Message":"No stock found"
      })
    }
    if (docs){ 
return sendJSONresponse(res,200,docs);
    } else {
 return sendJSONresponse(res,404,{
"Message":"Something Went Wrong"
});
    }
});
  }
  else
  {
    sendJSONresponse(res,404,{
      "Message":"Article provided is not in DataBase"
    })
  }
};