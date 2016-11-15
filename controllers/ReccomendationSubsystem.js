'use strict';

var url = require('url');


var ReccomendationSubsystem = require('./ReccomendationSubsystemService');


module.exports.initPOST = function initPOST (req, res, next) {
  ReccomendationSubsystem.initPOST(req.swagger.params, res, next);
};

module.exports.recommendGET = function recommendGET (req, res, next) {
  ReccomendationSubsystem.recommendGET(req.swagger.params, res, next);
};
