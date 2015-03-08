'use strict';

var debug = require('debug')('rce:middlewares:AllowedOrigin');
var config = require('../config/config');
var allowedOrigin = config.allowedOrigin;

module.exports = function *AllowedOrigin (next) {

  var origin = this.request.headers.origin;
  var isAllowed = allowedOrigin === origin;
  if (isAllowed) {
    debug('origin allowed');
    yield next;
  }
  else {
    debug('origin not allowed');
    this.status = 422;
  }
};