'use strict';

var url = require('url');


var DataAcsessSubsystem = require('./DataAcsessSubsystemService');


module.exports.actionTemplateGET = function actionTemplateGET (req, res, next) {
  DataAcsessSubsystem.actionTemplateGET(req.swagger.params, res, next);
};

module.exports.actionTemplatePOST = function actionTemplatePOST (req, res, next) {
  DataAcsessSubsystem.actionTemplatePOST(req.swagger.params, res, next);
};

module.exports.clusterGET = function clusterGET (req, res, next) {
  DataAcsessSubsystem.clusterGET(req.swagger.params, res, next);
};

module.exports.clusterPOST = function clusterPOST (req, res, next) {
  DataAcsessSubsystem.clusterPOST(req.swagger.params, res, next);
};

module.exports.domainGET = function domainGET (req, res, next) {
  DataAcsessSubsystem.domainGET(req.swagger.params, res, next);
};

module.exports.domainPOST = function domainPOST (req, res, next) {
  DataAcsessSubsystem.domainPOST(req.swagger.params, res, next);
};

module.exports.fitnessGET = function fitnessGET (req, res, next) {
  DataAcsessSubsystem.fitnessGET(req.swagger.params, res, next);
};

module.exports.fitnessPOST = function fitnessPOST (req, res, next) {
  DataAcsessSubsystem.fitnessPOST(req.swagger.params, res, next);
};

module.exports.processModelGET = function processModelGET (req, res, next) {
  DataAcsessSubsystem.processModelGET(req.swagger.params, res, next);
};

module.exports.processModelPOST = function processModelPOST (req, res, next) {
  DataAcsessSubsystem.processModelPOST(req.swagger.params, res, next);
};

module.exports.processTemplateGET = function processTemplateGET (req, res, next) {
  DataAcsessSubsystem.processTemplateGET(req.swagger.params, res, next);
};

module.exports.processTemplatePOST = function processTemplatePOST (req, res, next) {
  DataAcsessSubsystem.processTemplatePOST(req.swagger.params, res, next);
};

module.exports.similarityGET = function similarityGET (req, res, next) {
  DataAcsessSubsystem.similarityGET(req.swagger.params, res, next);
};

module.exports.similarityPOST = function similarityPOST (req, res, next) {
  DataAcsessSubsystem.similarityPOST(req.swagger.params, res, next);
};

module.exports.stepTemplateGET = function stepTemplateGET (req, res, next) {
  DataAcsessSubsystem.stepTemplateGET(req.swagger.params, res, next);
};

module.exports.stepTemplatePOST = function stepTemplatePOST (req, res, next) {
  DataAcsessSubsystem.stepTemplatePOST(req.swagger.params, res, next);
};
