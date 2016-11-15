'use strict';

var url = require('url');


var TemplateManagementSubsystem = require('./TemplateManagementSubsystemService');


module.exports.mergePOST = function mergePOST (req, res, next) {
  TemplateManagementSubsystem.mergePOST(req.swagger.params, res, next);
};

module.exports.mergeReccomendationPOST = function mergeReccomendationPOST (req, res, next) {
  TemplateManagementSubsystem.mergeReccomendationPOST(req.swagger.params, res, next);
};
