// index.js
var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB({apiVersion: "2012-08-10"});
dynamodb.getItem({}, function(err, data) {
  dynamodb.updateItem({}, function(err2, data2) {
  });
});
