
var express = require('express');
var app = express();

// body-parser for POST
var bodyParser = require('body-parser');

// nodemailer
// https://github.com/andris9/Nodemailer
var nodemailer = require('nodemailer');


// email info
var email = process.env.EMAIL;
var password = process.env.PASSWORD;

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: email,
        pass: password
    }
});




// POST /sendmail
// curl --data "to=<email>, ..." http://localhost:3000/sendmail
app.post('/sendmail', function(req, res) {

	// You can use the same transporter object for all e-mails

	// setup e-mail data with unicode symbols
	var mailOptions = {
		from: email, // sender address
		to: 'zmwebdev@gmail.com', // list of receivers
		subject: 'Hello', // Subject line
		text: 'Hello world', // plaintext body
		html: '<b>Hello world</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
		}else{
			console.log('Message sent: ' + info.response);
		}
	});


    //res.send('User ' + req.body.name + ' added');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});