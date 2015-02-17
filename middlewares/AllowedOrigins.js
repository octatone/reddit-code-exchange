var config = require('../config.json');

var allowedOrigins = config.allowedOrigins;

module.exports = function *AllowedOrigins (next) {

  var origin = this.request.headers.origin;
  var isAllowed = allowedOrigins.indexOf(origin) > -1;
  if (isAllowed) {
    yield next;
  }
  else {
    this.status = 422;
  }
};