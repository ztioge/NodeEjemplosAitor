// http://mongoosejs.com/docs/index.html

// connection
var mongoose = require('mongoose');
var user = process.env.USER;
var password = process.env.PASSWORD;

// express
var express = require('express');
var app = express();

// database connection
// Mongolabs eguneratu egin dute 3.0 bertsiora eta ScramSHA1 encriptazio sistema erabiltzen dute...Konexioan aipatu egin behar da:
// https://github.com/controlacceso/control_acceso/issues/314
mongoose.connect('mongodb://'+user+':'+password+'@ds033400.mongolab.com:33400/zmwebdev-test',{authMechanism: 'ScramSHA1'});
//mongoose.connect('mongodb://'+user+':'+password+'@ds033400.mongolab.com:33400/zmwebdev-test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	console.log('Database connection OK!');
});

// schema
var kittySchema = mongoose.Schema({
    name: String,
    age: Number
},{ collection : 'kittens' });

// model
var Kitten = mongoose.model('Kitten', kittySchema);

// remove all kittens
// http://mongoosejs.com/docs/api.html#query_Query-remove
app.get('/kittens/removeall', function(req, res){
  // remove all documents
  Kitten.remove({}, function (err, numberAffected) {
    if (err) {
      res.send('Error');
    } else {
      // removed!
      res.send(numberAffected + ' Kittens removed!');
    }
  });

});


// remove one kitten
app.get('/kittens/remove/:name', function(req, res){
  // remove all documents
  Kitten.remove({name: req.params.name}, function (err) {
    if (err) {
      res.send('Error');
    } else {
      // removed!
      res.send(req.params.name + ' removed!');
    }
  });

});

// save: add documment
// http://mongoosejs.com/docs/api.html#model_Model-save
app.get('/kittens/add/:name', function(req, res){
  var kitten = new Kitten({ name: req.params.name, age:0 });
  console.log(kitten.name); // 'Silence'

  kitten.save(function (err, kittenadded, numberAffected) {
    if (err) {
      console.error(err);
      res.send('Error');
    } else {
      console.log('kitten created:');
      console.log(kittenadded);
      res.json(kittenadded);
    }
  });

});

app.get('/kittens/add/:name/:age', function(req, res){
  var kitten = new Kitten({ name: req.params.name, age:req.params.age });
  console.log(kitten.name); // 'Silence'

  kitten.save(function (err, kittenadded, numberAffected) {
    if (err) {
      console.error(err);
      res.send('Error');
    } else {
      console.log('kitten created:');
      console.log(kittenadded);
      res.json(kittenadded);
    }
  });

});

// find
// http://mongoosejs.com/docs/api.html#model_Model.find
app.get('/kittens/findall', function(req, res){
    // find all
    Kitten.find({}, function (err, kittens) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find all kittens:');
        console.log(kittens);
        res.json(kittens);
      }
    });

});

app.get('/kittens/find/:name', function(req, res){
    // find all
    Kitten.find({ name: req.params.name }, function (err, kittens) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find all kittens:');
        console.log(kittens);
        res.json(kittens);
      }
    });

});

app.get('/kittens/findagelte/:val', function(req, res){
    // $lte selects the documents where the value of the field is less than or equal to (i.e. <=) the specified value.
    // https://docs.mongodb.org/manual/reference/operator/query/lte/#op._S_lte
    Kitten.find({ age: { $lte : req.params.val } }, function (err, kittens) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find all kittens:');
        console.log(kittens);
        res.json(kittens);
      }
    });

});

app.get('/kittens/findnamestartwith/:val', function(req, res){
    // https://docs.mongodb.org/manual/reference/operator/query/regex/
    Kitten.find({ name: { $regex: ".b*." } }, function (err, kittens) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find all kittens:');
        console.log(kittens);
        res.json(kittens);
      }
    });

});

app.get('/kittens/findAllName/', function(req, res){
    // find all
    Kitten.find({ }, 'name', function (err, kittens) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find all kittens:');
        console.log(kittens);
        res.json(kittens);
      }
    });

});

app.get('/kittens/findAllNamev2/', function(req, res){
    // find all
    Kitten.find({ }, {'name':1}, function (err, kittens) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find all kittens:');
        console.log(kittens);
        res.json(kittens);
      }
    });

});

app.get('/kittens/findAllNameNoId/', function(req, res){
    // find all
    Kitten.find({ }, '-_id name', function (err, kittens) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find all kittens:');
        console.log(kittens);
        res.json(kittens);
      }
    });

});

app.get('/kittens/findAllNameNoIdv2/', function(req, res){
    // find all
    Kitten.find({ }, {'_id':0, 'name':1}, function (err, kittens) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find all kittens:');
        console.log(kittens);
        res.json(kittens);
      }
    });

});

// update: http://mongoosejs.com/docs/api.html#model_Model.update
// http://docs.mongodb.org/manual/reference/method/db.collection.update/
app.get('/kittens/update/:name/:age', function(req, res){
    // find all
    Kitten.update({ name: req.params.name }, { $set: { age: req.params.age }}, {}, function (err, numberAffected, raw) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('numberAffected:');
        console.log(numberAffected);
        res.json(raw);
      }
    });

});

// update: http://mongoosejs.com/docs/api.html#model_Model.update
app.get('/kittens/findoneandupdate/:name/:age', function(req, res){
    // find all
    Kitten.findOneAndUpdate({ name: req.params.name }, { $set: { age: req.params.age }}, function (err, kitten) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('kitten:', kitten);
        res.json(kitten);
      }
    });

});

// AVG age
app.get('/kittens/avg', function(req, res){
    // find all
    Kitten.aggregate([{ $group: { _id: "$name", average: { $avg: "$age" } }}], function (err, kitten) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('kitten:', kitten);
        res.json(kitten);
      }
    });

});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});
