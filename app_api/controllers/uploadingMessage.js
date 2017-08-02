var mongoose = require('mongoose');
const nodemailer = require('nodemailer');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.sendingEmail = function(req, res) {

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "ar1363721@gmail.com",
        pass: "wasifateeq0"
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: req.body.email, // sender address
    to: 'wasifateeq007@hotmail.com', // list of receivers
    subject: 'Flying Horse', // Subject line
    text: "Name is "+req.body.name+" Message is ":req.body.message, // plain text body
     // html body
};

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
});
  return sendJSONresponse(res,200,{"Message ":req.body.name+" "+req.body.email+" "+req.body.message});

};