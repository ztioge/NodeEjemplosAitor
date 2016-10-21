var google = require('googleapis');
var calendar = google.calendar('v3');
var OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = '303921745655-j15t0dk5f4rnnffvlo1hmc1mcsq3rqtn.apps.googleusercontent.com';
var CLIENT_SECRET = 'nPHtDJvneebCpN2a9CZvHKi1';
var REDIRECT_URL = 'https://developers.google.com/oauthplayground';

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

oauth2Client.setCredentials({
  access_token: 'ya29.-ADtYiWbxSUJLsLMQPqd8PP1bCt7aLHG3_LV2eojR7Rm-m27ptUdeeklU4hgHzEIZqM4t2X2P0hOtA',
  refresh_token: '1/MKpiHggtCegbNS1se3VG-452HEtKaBuZHekgNGla9f4MEudVrK5jSpoR30zcRFq6',
  expiry_date: (new Date()).getTime() // this create a new access token
});

var scopes = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.readonly'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scopes: scopes // If you only need one scope you can pass it as string
});


calendar.calendarList.list({auth: oauth2Client}, function(err, response) {
    console.log('error:', err, 'inserted:', response);
});

