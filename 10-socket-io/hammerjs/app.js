var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8888);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/proba.html');
});

app.get('/proba.html', function (req, res) {
  res.sendfile(__dirname + '/proba.html');
});

app.get('/proba.css', function (req, res) {
  res.sendfile(__dirname + '/proba.css');
});

app.get('/jquery-1.9.0.js', function (req, res) {
  res.sendfile(__dirname + '/jquery-1.9.0.js');
});

app.get('/hammer.js', function (req, res) {
  res.sendfile(__dirname + '/hammer/hammer.js');
});


app.get('/proba.js', function (req, res) {
  res.sendfile(__dirname + '/proba.js');
});

app.get('/probasocketio.js', function (req, res) {
  res.sendfile(__dirname + '/probasocketio.js');
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });

  // socket.broadcast.emit('user connected');

  socket.on('my other event', function (data) {
    console.log(data);
  });

  socket.on('mezua', function (data) {
    console.log(data);
    // socket.broadcast.emit(data);
    socket.broadcast.emit('mezua', data);

  });


});






