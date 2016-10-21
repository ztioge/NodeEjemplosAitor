var Twitter = require('twitter');
var request = require('request');

if(!process.env.CONSUMER_KEY) {
  var env = require('./env.js')
}

var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

/*
va+r params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
*/

var mqttserver = "http://mqtt-zmwebdev.rhcloud.com";

function bidali(url) {
      request({url:url}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log("Argia agindua bidalia");
        } else {
          console.log(error);
        }
      });
}

client.stream('statuses/filter', {track: '#zmwebdev'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);

    if (tweet.text.indexOf("piztu") > -1) {
    	console.log("Argia piztuko da");
      bidali(mqttserver + "/argia/piztu");
    }

    if (tweet.text.indexOf("itzaldu") > -1) {
      console.log("Argia itzalduko da")
      bidali(mqttserver + "/argia/itzaldu");
    }

  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
