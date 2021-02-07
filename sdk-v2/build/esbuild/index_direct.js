// index_direct.js
var DynamoDB = require("aws-sdk/clients/dynamodb");
var dynamodb = new DynamoDB({apiVersion: "2012-08-10"});
dynamodb.getItem({}, function(err, data) {
  dynamodb.updateItem({}, function(err2, data2) {
  });
});
