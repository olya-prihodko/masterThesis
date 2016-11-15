'use strict';

exports.actionTemplateGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iD (BigDecimal)
  * stepTemplateID (BigDecimal)
  * processTemplateID (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
    "alternativeTitle" : [ "aeiou" ],
    "ID" : 1.3579000000000001069366817318950779736042022705078125,
    "title" : "aeiou",
    "type" : "aeiou",
    "required" : true,
    "validation" : "aeiou"
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

exports.actionTemplatePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * actionTemplateJson (String)
  * iD (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
    "alternativeTitle" : [ "aeiou" ],
    "ID" : 1.3579000000000001069366817318950779736042022705078125,
    "title" : "aeiou",
    "type" : "aeiou",
    "required" : true,
    "validation" : "aeiou"
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

exports.clusterGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iD (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "role" : "aeiou",
    "domain" : "",
    "referenceTemplate" : "",
    "ID" : 1.3579000000000001069366817318950779736042022705078125,
    "department" : "aeiou",
    "user" : ""
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

exports.clusterPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * clusterJson (String)
  * iD (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "role" : "aeiou",
    "domain" : "",
    "referenceTemplate" : "",
    "ID" : 1.3579000000000001069366817318950779736042022705078125,
    "department" : "aeiou",
    "user" : ""
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

exports.domainGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iD (BigDecimal)
  * userID (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "domain" : "aeiou",
    "referenceTemplate" : "",
    "ID" : 1.3579000000000001069366817318950779736042022705078125
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

exports.domainPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * domain (String)
  * iD (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "domain" : "aeiou",
    "referenceTemplate" : "",
    "ID" : 1.3579000000000001069366817318950779736042022705078125
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

exports.fitnessGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * processModelID (BigDecimal)
  * processTemplateID (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "processTemplateID" : 1.3579000000000001069366817318950779736042022705078125,
    "processModelID" : 1.3579000000000001069366817318950779736042022705078125,
    "conformance" : 1.3579000000000001069366817318950779736042022705078125
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

exports.fitnessPOST = function(args, res, next) {
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

exports.processModelGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iD (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
    "model" : "aeiou",
    "ID" : 1.3579000000000001069366817318950779736042022705078125
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

exports.processModelPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iD (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
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
    "processModel" : {
      "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
      "model" : "aeiou",
      "ID" : 1.3579000000000001069366817318950779736042022705078125
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

exports.processTemplateGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userID (BigDecimal)
  * iD (BigDecimal)
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

exports.processTemplatePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * processTemplateJson (String)
  * iD (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
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

exports.similarityGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * processTemplateID_1 (BigDecimal)
  * processTemplateID_2 (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "similarity" : 1.3579000000000001069366817318950779736042022705078125,
    "processTemplateID_2" : 1.3579000000000001069366817318950779736042022705078125,
    "processTemplateID_1" : 1.3579000000000001069366817318950779736042022705078125
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

exports.similarityPOST = function(args, res, next) {
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

exports.stepTemplateGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iD (BigDecimal)
  * processTemplateID (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
    "ID" : 1.3579000000000001069366817318950779736042022705078125,
    "blockedBy" : "",
    "actions" : "",
    "assignTo" : ""
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

exports.stepTemplatePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * stepTemplateJson (String)
  * iD (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "alternativeID" : [ 1.3579000000000001069366817318950779736042022705078125 ],
    "ID" : 1.3579000000000001069366817318950779736042022705078125,
    "blockedBy" : "",
    "actions" : "",
    "assignTo" : ""
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

