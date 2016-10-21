var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Kaixo');
});

// http://localhost:3000/hello.txt?q=xxxxxx
app.get('/hello.txt', function(req, res) {

	var q = req.query.q;
	console.log(q);

    res.send('Hello World: ' + q);
});

app.get('/hola.txt', function(req, res) {
	console.log("he ejecutado /hola.txt");
    res.send('Hola Mundo!');
});

app.get('/kaixo.txt', function(req, res) {
    res.send('Kaixo Mundua');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});