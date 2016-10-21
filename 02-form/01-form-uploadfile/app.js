/*
http://expressjs.com/en/api.html

In Express 4, req.files is no longer available on the req object by default. 
To access uploaded files on the req.files object, use a multipart-handling middleware 
like busboy, multer, formidable, multiparty, connect-multiparty, or pez.
*/
var express = require('express');
var app = express();

// body-parser for POST
// https://github.com/expressjs/body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// public files
app.use(express.static(__dirname + '/public'));

var multer  = require('multer')
// first option:
// var upload = multer({dest: __dirname + '/public/uploads/'})

// other option, renaming file:

var storage = multer.diskStorage({
  destination: __dirname + '/public/uploads/',
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now())
    cb(null, file.originalname)
  }
})

// Other option: using buffer
// var storage = multer.memoryStorage()

var upload = multer({ storage: storage })



// **********************************************

app.get('/', function (req, res) {
  //res.sendFile(__dirname + '/public/hello.html');
  // http://expressjs.com/4x/api.html#res.redirect
  res.redirect('hello.html');
});

// POST /user/
app.post('/upload', upload.single('image'), function (req, res) {
    // req.file is the `avatar` file 
    // req.body will hold the text fields, if there were any 
    console.log("POST /user");
    res.send('File uploaded');
});


// ************************************************


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});
