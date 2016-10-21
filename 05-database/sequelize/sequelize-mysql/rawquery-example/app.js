// database example
// http://sequelizejs.com/articles/getting-started

var express = require('express');
var app = express();

// body-parser for post request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// https://www.npmjs.org/package/validator
var validator = require('validator');

var sqlze = require('sequelize');
// var db = new sqlze('databasename', 'username', 'password',{
var db = new sqlze('test', 'peru', 'peru',{
	dialect: 'mysql',
	port: 3306
});

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


app.get('/users/:id', function(req, res) {

	var id = req.params.id;
	if (!validator.isInt(id)) {
		res.status(500).json({"error":"user id must be numeric"});
	} else {
		// Raw query
		db.query('SELECT * FROM users WHERE idusers='+ id).success(function(rows){
			// no errors
			console.log(rows);
			res.json(rows);
			// res.json(JSON.stringify(rows));
		});
	}

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
		db.query('DELETE FROM users WHERE idusers='+ id).success(function(rows){
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