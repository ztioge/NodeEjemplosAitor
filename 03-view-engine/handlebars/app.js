// view engine example

var express = require('express'),
	exphbs  = require('express-handlebars');

var app = express();

// using default layout
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// change default layouts dir
//app.engine('handlebars', exphbs({layoutsDir:'views/layouts/'}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// set template default dir
//app.set('views', __dirname + '/views');


app.get('/', function (req, res) {
    res.render('home');
});

// with layouts
app.get('/with-layout', function (req, res) {
    res.render('home', {layout:'main'});
});


app.get('/table', function (req, res) {
    res.render('table', {name: 'Koxme'});
});

app.get('/table-array', function (req, res) {
	var users = {users: [
						{name: 'Peru'},
						{name: 'Koxme'}
						]};
    res.render('table2', users);
});


app.get('/table-array-title', function (req, res) {
    var users = {title:'Nombres',
                 users: [
                        {name: 'Peru'},
                        {name: 'Koxme'}
                        ]};
    res.render('table2', users);
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});