// http://expressjs.com/api.html#res.cookie
// http://expressjs.com/api.html#req.cookies

var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

// http://localhost:3000/setcookie
app.get('/setcookie', function(req, res) {

    //res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

    // The maxAge option is a convenience option for setting "expires" relative to the current time in milliseconds. The following is equivalent to the previous example.
    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true });

    // An object may be passed which is then serialized as JSON, which is automatically parsed by the bodyParser() middleware.
    res.cookie('cart', { items: [1,2,3] });
    res.cookie('cart', { items: [1,2,3] }, { maxAge: 900000 });

    res.send('Cookie created');
});

// http://localhost:3000/readcookie
app.get('/readcookie', function(req, res) {
    var rememberme = "rememberme:" + req.cookies.rememberme;
    var cart = "cart:" + JSON.stringify(req.cookies.cart);

    res.send(rememberme + "<br />" + cart.toString());
});


// http://localhost:3000/readcookie
app.get('/clearcookie', function(req, res) {
    res.clearCookie('name');
    res.clearCookie('rememberme');
    res.clearCookie('cart');
    res.send();
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});
