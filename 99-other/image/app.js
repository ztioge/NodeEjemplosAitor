var express = require('express');
var app = express();

// public files
app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});