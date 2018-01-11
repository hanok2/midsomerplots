var request = require('request');

var twitter = {};

twitter.oauth = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};


/**
 * Sends a Twitter Direct message with POST direct_messages/events/new
 * @param {Object} message_event  valid Direct Message event
 * @param {requestCallback} callback  function to pass response to
 * @returns {void}
 */
twitter.send_direct_message = function (message_event, callback) {

  console.log('sending message:', message_event.event.message_create.message_data);

  // request options
  let request_options = {
    url: 'https://api.twitter.com/1.1/direct_messages/events/new.json',
    oauth: twitter.oauth,
    json: true,
    headers: {
      'content-type': 'application/json'
    },
    body: message_event
  };

  // POST request to send Direct Message
  request.post(request_options, function (error, response, body) {
    if(callback) {
      callback(error, response, body);
    }
  });
};


/**
 * Retieves user ID for access tokens in config
 * and adds it to twitter object
 * @returns {void}
 */
function get_user_id() {

  let request_options = {
    url: 'https://api.twitter.com/1.1/account/verify_credentials.json',
    oauth: twitter.oauth
  };

  // get current user info
  request.get(request_options, function (error, response, body) {

    if (error) {
      console.log('Error retreiving user data.');
      console.log(error);

      return;
    }

    var user_id = JSON.parse(body).id_str;
    twitter.user_id = user_id;
  });
}

get_user_id();


module.exports = twitter;
