// PASSWORD=<passwordToTest> node app.js

// https://www.npmjs.org/package/bcrypt-nodejs
var bcrypt = require('bcrypt-nodejs');

var password = process.env.PASSWORD;

bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
});

// Load hash from your password DB.
var hash = '$2a$10$OW1Z1hY8iYYnp5jCISFcFOsAbH6ECsWWfqxwim00hsdUVqXkIMyeu';

bcrypt.compare(password, hash, function(err, res) {
    console.log(res);
});
