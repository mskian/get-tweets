## Get Tweets

<p>Scrape tweets from the user Timeline</p>

<p align="center">
<img src="https://raw.githubusercontent.com/mskian/get-tweets/master/screenshot.gif">
</p>

## Requirements

- Node.JS 6 or 8x
- GIT to clone this Respo
- Twitter Developer Account to Create a Keys and Tokens

## Get CONSUMER KEY & ACCESS ID

- Apply for Twitter developer Account - https://developer.twitter.com/
- After Getting Approval Create an APP and Generate your Tokens and Keys - https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html

## Installation

- Install via GIT

```
git clone https://github.com/mskian/get-tweets.git
cd get-tweets
npm install
rename .env.example to .env
```

- Add your Twitter APP's Tokens and Keys in .env File

```
CONSUMERKEY = <CONSUMER KEY>
CONSUMERSECRET = <CONSUMER SECRET>
TOKEN = <ACCESS TOKEN KEY>
TOKENSECRET = <ACCESS TOKEN SECRET>
```

- Execute the Script with Arguments

```
node app.js --username twitter_username
```

Defaults to twitter username `inspire_us` if no arguments are supplied.



## Customization

File `app.js`

```javascript
var statuses = 'https://api.twitter.com/1.1/statuses/user_timeline.json?count=10'; // count - list the no of tweets you want to Display
```

## License

MIT
