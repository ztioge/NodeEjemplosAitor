var express = require('express');
var app = express();

var request = require('request');

// **********************************************


app.get('/', function (req, res) {

	// Donostia. Zubiri-Manteo
	var url = 'http://api.openweathermap.org/data/2.5/weather?lat=43.3276658&lon=-1.9711435&appid=2de143494c0b295cca9337e1e96b00e0';

	var request = require('request');
	request({url:url, json:"true"}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.json(body);
			//res.json(body.main.temp)
		} else {
			res.json({error:"request error"});
		}
	});

});



var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});