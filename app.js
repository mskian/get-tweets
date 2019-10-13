'use strict';

const args = require('yargs').argv;

const Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
	consumer_key: process.env.CONSUMERKEY,
	consumer_secret: process.env.CONSUMERSECRET,
	access_token_key: process.env.TOKEN,
	access_token_secret: process.env.TOKENSECRET
});

var twuser = args.username || 'inspire_us'; // twitter user

var statuses = 'https://api.twitter.com/1.1/statuses/user_timeline.json?count=5'; // count - list the no of tweets you want to Display
   
var params = {screen_name: twuser};
client.get(statuses, params, function(error, tweets) {
	if (!error) {
		//console.log(tweets);
		const group = tweets.map(g => [
			g.text
		]);
		var data = JSON.stringify(group, null, 2);
		console.log(data.replace(/\[|\]|"|,/g, ''));
	}
});