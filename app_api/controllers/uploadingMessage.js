var mongoose = require('mongoose');

var nodemailer = require("nodemailer");

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.sendingEmail = function(req, res) {


// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "ar1363721@gmail.com",
        pass: "wasifateeq0"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
   from: req.body.email, // sender address
    to: "ar1363721@gmail.com", // list of receivers
    subject: req.body.name, // Subject line
    text: req.body.message // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
};