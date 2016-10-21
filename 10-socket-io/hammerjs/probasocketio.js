// var socket = io.connect('http://localhost:8888');
// location.hostname
// location.host
// var socket1 = io.connect('http://192.168.1.33:8888');


var sURL = "http://" + location.host;
var socket = io.connect(sURL);

socket.on('news', function (data) {
	console.log(data);
	// console.log(location.origin);
	socket.emit('my other event', { my: 'data' });
});

// socket.on('aldaketa', function (data) {
// 	console.log(data);
// 	// socket.emit('my other event', { my: 'data' });
// });

socket.on('mezua', function (data) {
	console.log(data);
	document.getElementById(data).style.background = 'red';
	if (data == "bat") {
		document.getElementById("bi").style.background = 'yellow';
		document.getElementById("hiru").style.background = 'yellow';
	} else if (data == "bi") {
		document.getElementById("bat").style.background = 'yellow';
		document.getElementById("hiru").style.background = 'yellow';

	} else if (data == "hiru") {
		document.getElementById("bat").style.background = 'yellow';
		document.getElementById("bi").style.background = 'yellow';
	}

});

socket.on('user connected', function (data) {
	console.log('user connected');
	// socket.emit('my other event', { my: 'data' });
});



function send(msg) {
	socket.emit('mezua', msg);
}

