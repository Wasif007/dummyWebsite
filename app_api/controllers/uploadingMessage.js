var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.sendingEmail = function(req, res) {


    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ar1363721@gmail.com', // Your email id
            pass: 'wasifateeq0' // Your password
        }
    });

var mailOptions = {
    from: req.body.email, // sender address
    to: req.body.email, // list of receivers
    subject:req.body.name, // Subject line
    text: req.body.message //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
sendJSONresponse(res,200,{"message":"Mail sent"});
    };
});
};