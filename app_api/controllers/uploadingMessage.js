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
            user: 'hasanwaseem901@gmail.com', // Your email id
            pass: '025885200258' // Your password
        }
    });0

var mailOptions = {
    from: req.body.email, // sender address
    to: 'wasifateeq007@hotmail.com', // list of receivers
    subject:req.body.email, // Subject line
    text:"Name is "+req.body.name+" Message is " +req.body.message //, // plaintext body
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