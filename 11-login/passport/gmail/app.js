// google login example
// http://passportjs.org/guide/configure/
// https://github.com/jaredhanson/passport-google-oauth
// http://scotch.io/tutorials/javascript/easy-node-authentication-google
// https://cloud.google.com/

// TESTING!!!!

var express = require('express');
var app = express();

var session = require('express-session');

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(session({ secret: 'dasjdhuueneud8jndsuswhjndh',
                  saveUninitialized: true,
                  resave: true }));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// public files
app.use(express.static(__dirname + '/public'));



passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/google/callback",
    // https://developers.google.com/+/api/oauth#login-scopes
    // scope: 'https://www.googleapis.com/auth/plus.login'
    scope: 'https://www.googleapis.com/auth/userinfo.email'
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    // return done(null, profile.id);
    return done(null, profile.emails[0].value); //email
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


// to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login.html');
}


// // ensure all routes authentication
// app.all('*', isLoggedIn);


app.get('/auth/google', passport.authenticate('google'));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login.html' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


app.get('/', isLoggedIn, function(req, res) {
    res.send('login OK! <br> Hello ' + req.user);
});


// route for logging out
// http://stackoverflow.com/questions/12909332/how-to-logout-of-an-application-where-i-used-oauth2-to-login-with-google
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});