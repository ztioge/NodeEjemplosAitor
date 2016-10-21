  // http://socket.io/
// https://github.com/guille/chat-example.git

/*
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
*/

// express
var express = require('express');
var app = express();
var http = require('http').Server(app);

// socket.io
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
});

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "127.0.0.1"

http.listen(port, ipaddress, function() {
    //
    console.log('listening on ' + ipaddress + ':' + port);
});