'use strict';

var debug = require('debug')('rce:controllers:Exchange');
var config = require('../config/config');
var request = require('koa-request');

function postOptions (context) {

  var code = context.request.body.code;
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

  var response = yield request.post(postOptions(this));
  debug(response.statusCode, response.body);
  this.status = response.statusCode;
  this.body = response.body;
};