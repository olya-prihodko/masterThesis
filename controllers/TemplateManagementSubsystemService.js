'use strict';

exports.mergePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * type (String)
  * objectID_1 (BigDecimal)
  * objectID_2 (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "models" : {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "model" : "aeiou",
      "ID" : 1.3579000000000001069366817318950779736042022705078125
    },
    "processTemplate" : {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "processModelID" : "",
      "workflowInstancesID" : [ "" ],
      "stepTemplates" : "",
      "ID" : 1.3579000000000001069366817318950779736042022705078125,
      "clusterID" : 1.3579000000000001069366817318950779736042022705078125,
      "title" : "aeiou",
      "userID" : [ "" ],
      "domainID" : 1.3579000000000001069366817318950779736042022705078125
    },
    "stepTemplates" : {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "ID" : 1.3579000000000001069366817318950779736042022705078125,
      "blockedBy" : "",
      "actions" : "",
      "assignTo" : ""
    },
    "actionTemplates" : {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "alternativeTitle" : [ "aeiou" ],
      "ID" : 1.3579000000000001069366817318950779736042022705078125,
      "title" : "aeiou",
      "type" : "aeiou",
      "required" : true,
      "validation" : "aeiou"
    }
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

exports.mergeReccomendationPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * domainID (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "processTemplates" : [ [ {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "processModelID" : "",
      "workflowInstancesID" : [ "" ],
      "stepTemplates" : "",
      "ID" : 1.3579000000000001069366817318950779736042022705078125,
      "clusterID" : 1.3579000000000001069366817318950779736042022705078125,
      "title" : "aeiou",
      "userID" : [ "" ],
      "domainID" : 1.3579000000000001069366817318950779736042022705078125
    } ] ],
    "stepTemplates" : [ [ {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "ID" : 1.3579000000000001069366817318950779736042022705078125,
      "blockedBy" : "",
      "actions" : "",
      "assignTo" : ""
    } ] ],
    "processModels" : [ [ {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "model" : "aeiou",
      "ID" : 1.3579000000000001069366817318950779736042022705078125
    } ] ],
    "actionTemplates" : [ [ {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "alternativeTitle" : [ "aeiou" ],
      "ID" : 1.3579000000000001069366817318950779736042022705078125,
      "title" : "aeiou",
      "type" : "aeiou",
      "required" : true,
      "validation" : "aeiou"
    } ] ]
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

