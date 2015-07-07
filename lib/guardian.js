var request = require('request');
var querystring = require('querystring');
var changecase = require('change-case');


var BASE_URL = 'http://content.guardianapis.com/';


function Guardian(){}

Guardian.prototype.config = function config(obj){
  this.apiKey = obj.apiKey
};

Guardian.prototype._changeCase = function _changeCase(obj){
  var output = {};
  var keys = Object.keys(obj);

  keys.forEach(function(key){
    output[changecase.param(key)] = obj[key];
  });

  return output;
};

Guardian.prototype._makeCall = function(type, query){
  return new Promise(function(resolve, reject){
    query = this._changeCase(query);
    query['api-key'] = this.apiKey;
    var url = BASE_URL + type +'?' + querystring.stringify(query);

    request.get(url, function(err, response, body){
      if (err) {
        return reject(err);
      }

      resolve(body);
    });
  }.bind(this));
};

Guardian.prototype.content = function content(query){
  return this._makeCall('search', query);
};


Guardian.prototype.sections = function sections(query){
  return this._makeCall('sections', query);
};


Guardian.prototype.tags = function tags(query){
  return this._makeCall('tags', query);
};


module.exports = new Guardian();
