var google = require('googleapis');
var drive = google.drive('v2');
var OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = '303921745655-j15t0dk5f4rnnffvlo1hmc1mcsq3rqtn.apps.googleusercontent.com';
var CLIENT_SECRET = 'nPHtDJvneebCpN2a9CZvHKi1';
var REDIRECT_URL = 'https://developers.google.com/oauthplayground';

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

oauth2Client.setCredentials({
  access_token: 'ya29.-ADW88wX_bGREwi3jMsXdXAeAAzmY0ZK0hZj4PJ6EOy4cb8OTH6Z_Lzbbjiw9QNztBB9NT1jM_RSqQ',
  refresh_token: '1/MKpiHggtCegbNS1se3VG-452HEtKaBuZHekgNGla9f4MEudVrK5jSpoR30zcRFq6',
  expiry_date: (new Date()).getTime() // this create a new access token
});

var scopes = [
  'https://www.googleapis.com/auth/drive'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scopes: scopes // If you only need one scope you can pass it as string
});

//oauth2Client.refreshAccessToken(function(err, tokens) {
  // your access_token is now refreshed and stored in oauth2Client
  // store these new tokens in a safe place (e.g. database)

  // insertion example
  drive.files.insert({
    resource: {
      title: 'Test',
      mimeType: 'text/plain'
    },
    media: {
      mimeType: 'text/plain',
      body: 'Hello World'
    },
    auth: oauth2Client
  }, function(err, response) {
    console.log('error:', err, 'inserted:', response);
  });


//});

