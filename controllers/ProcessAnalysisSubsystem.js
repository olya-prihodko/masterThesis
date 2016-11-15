'use strict';

var url = require('url');


var ProcessAnalysisSubsystem = require('./ProcessAnalysisSubsystemService');


module.exports.calculateFitnessPOST = function calculateFitnessPOST (req, res, next) {
  ProcessAnalysisSubsystem.calculateFitnessPOST(req.swagger.params, res, next);
};

module.exports.calculateSimilarityPOST = function calculateSimilarityPOST (req, res, next) {
  ProcessAnalysisSubsystem.calculateSimilarityPOST(req.swagger.params, res, next);
};

module.exports.updateClusterPOST = function updateClusterPOST (req, res, next) {
  ProcessAnalysisSubsystem.updateClusterPOST(req.swagger.params, res, next);
};
