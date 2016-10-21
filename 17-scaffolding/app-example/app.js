var express = require('express')
  , app = express()
  
var session = require('express-session')
app.use(session({ resave: true, saveUninitialized: true, secret: 'uwotm8' }))

var db = require('./models/db')

app.engine('handlebars', require('express-handlebars'))
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use('/comments', require('./controllers/comments'))
app.use('/session', require('./controllers/session'))

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/mydatabase', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000
    var ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "127.0.0.1"

    var server = app.listen(port, ip, function(){
      console.log('Listening in port %d', server.address().port);
    });
    
  }
})