// database example
// http://sequelizejs.com/articles/heroku

var express = require('express');
var app = express();

// body-parser for post request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// https://www.npmjs.org/package/validator
var validator = require('validator');


// database config
var Sequelize = require('sequelize');
var db = null;

if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database 
    db = new Sequelize(process.env.DATABASE_URL);
  } else {
    // the application is executed on the local machine ... use mysql
	// var db = new sqlze('databasename', 'username', 'password',{
	db = new Sequelize('test', 'peru', 'peru',{
		dialect: 'mysql',
		port: 3306
	});
  }
 
//
db
	.authenticate()
	.complete(function(err){
		if(!!err) {
			console.log('Unable to connect to database: ', err);
		} else {
			console.log('Connection OK!');
		}
	});
//

// app.get('/createTableUsers', function(req, res) {

/*
	// Raw query
	db.query('CREATE TABLE users (userid SERIAL CONSTRAINT firstkey PRIMARY KEY,name varchar(40),surname varchar(40),age integer);').success(function(rows){
		// no errors
		console.log(rows);
		res.json(rows);
		// res.json(JSON.stringify(rows));
	});

});
*/


app.get('/users', function(req, res) {

	var id = req.params.id;
	// Raw query
	db.query('SELECT * FROM users').success(function(rows){
		// no errors
		console.log(rows);
		res.json(rows);
		// res.json(JSON.stringify(rows));
	});

});


app.get('/users/id/:id', function(req, res) {

	var id = req.params.id;
	if (!validator.isInt(id)) {
		res.status(500).json({"error":"user id must be numeric"});
	} else {
		// Raw query
		db.query('SELECT * FROM users WHERE userid='+ id).success(function(rows){
			// no errors
			console.log(rows);
			res.json(rows);
			// res.json(JSON.stringify(rows));
		});
	}

});


app.get('/users/names', function(req, res) {

	// Raw query
	db.query('SELECT name FROM users').success(function(rows){
		// no errors
		console.log(rows);
		res.json(rows);
		// res.json(JSON.stringify(rows));
	});

});


// insert
// curl --data "name=<name>&surname=<surname>&age=<age>" http://localhost:3000/user/add
app.post('/user/add', function(req, res) {
	
	var name = req.body.name;
	var surname = req.body.surname;
	var age = req.body.age;

	// validate 
	// TODO

	var sql = 'INSERT INTO users (name, surname, age) VALUES (\''+name+'\', \''+surname+'\', \''+age+'\');';

	console.log(sql);

	db
		.query(sql, null, {raw:true})

		.success(function(rows){
			// no errors
			console.log({"msg":"insert OK", "sql":sql});
			res.json({"msg":"insert OK", "sql":sql});
			// res.json(JSON.stringify(rows));
	});

});

// delete user
app.get('/users/delete/:id', function(req, res) {

	var id = req.params.id;
	if (!validator.isInt(id)) {
		res.status(500).json({"error":"user id must be numeric"});
	} else {
		// Raw query
		db.query('DELETE FROM users WHERE userid='+ id).success(function(rows){
			// no errors
			console.log({"msg":"delete OK", "id":id});
			res.json({"msg":"delete OK", "id":id});
			// res.json(JSON.stringify(rows));
		});
	}

});


var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Listening in port %d', server.address().port);
});