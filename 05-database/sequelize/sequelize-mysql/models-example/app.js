// http://sequelizejs.com/docs/1.7.8/models#definition

var express = require('express');
var app = express();

// body-parser for post request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var sqlze = require('sequelize');
// var db = new sqlze('databasename', 'username', 'password',{
var db = new sqlze('test', 'peru', 'peru',{
	dialect: 'mysql',
	port: 3306
});



var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Listening in port %d', server.address().port);
});