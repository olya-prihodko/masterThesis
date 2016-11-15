'use strict';

exports.calculateFitnessPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * processModelID (BigDecimal)
  * processTemplateID (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "processTemplateID" : 1.3579000000000001069366817318950779736042022705078125,
    "processModelID" : 1.3579000000000001069366817318950779736042022705078125,
    "conformance" : 1.3579000000000001069366817318950779736042022705078125
  },
  "status" : {
    "code" : 1.3579000000000001069366817318950779736042022705078125,
    "message" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.calculateSimilarityPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * processTemplateID_1 (BigDecimal)
  * processTemplateID_2 (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "similarity" : 1.3579000000000001069366817318950779736042022705078125,
    "processTemplateID_2" : 1.3579000000000001069366817318950779736042022705078125,
    "processTemplateID_1" : 1.3579000000000001069366817318950779736042022705078125
  },
  "status" : {
    "code" : 1.3579000000000001069366817318950779736042022705078125,
    "message" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateClusterPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * processTemplateJson (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
    "processModelID" : "",
    "workflowInstancesID" : [ "" ],
    "stepTemplates" : "",
    "ID" : 1.3579000000000001069366817318950779736042022705078125,
    "clusterID" : 1.3579000000000001069366817318950779736042022705078125,
    "title" : "aeiou",
    "userID" : [ "" ],
    "domainID" : 1.3579000000000001069366817318950779736042022705078125
  } ],
  "status" : {
    "code" : 1.3579000000000001069366817318950779736042022705078125,
    "message" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

