var debug = require('debug')('rce:controllers:Exchange');
var config = require('../config.json');
var request = require('koa-request');

function postOptions () {

  var code = this.request.body.code;
  var clientID = config.clientID;
  var clientSecret = config.clientSecret;
  return {
    'url': 'https://www.reddit.com/api/v1/access_token',
    'form': {
      'grant_type': 'authorization_code',
      'redirect_uri': config.redirectURI,
      'code': code
    },
    'headers': {
      'Authorization': 'Basic ' + (new Buffer(clientID + ':' + clientSecret).toString('base64'))
    },
    'json': true
  };
}

module.exports = function *Exchange () {

  var response = yield request.post(postOptions.call(this));
  debug(response.statusCode, response.body);
  this.status = response.statusCode;
  this.body = response.body;
};