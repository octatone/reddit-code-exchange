'use strict';

var debug = require('debug')('rce:controllers:Token');
var config = require('../config.json');
var request = require('koa-request');

function postOptions () {

  var refreshToken = this.request.body.refreshToken
  var clientID = config.clientID;
  var clientSecret = config.clientSecret;
  return {
    'url': 'https://www.reddit.com/api/v1/access_token',
    'form': {
      'grant_type': 'refresh_token',
      'refresh_token': refreshToken
    },
    'headers': {
      'Authorization': 'Basic ' + (new Buffer(clientID + ':' + clientSecret).toString('base64'))
    },
    'json': true
  };
}

module.exports = function *AccessToken () {

  var response = yield request.post(postOptions.call(this));
  debug(response.statusCode, response.body);
  this.status = response.statusCode;
  this.body = response.body;
};