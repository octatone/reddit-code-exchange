var debug = require('debug')('rce:config:config');
var env = process.env;

var config = {
  'clientID': env.CLIENT_ID,
  'clientSecret': env.CLIENT_SECRET,
  'redirectURI': env.REDIRECT_URI,
  'allowedOrigin': env.ALLOWED_ORIGIN
};

debug(config);

module.exports = config;