const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

dynamodb.getItem({/*...*/}, function (err, data) {
  // this code is invoked as soon as the result is available
  dynamodb.updateItem({/*...*/}, function (err, data) {
    // if you nest many callback you might end up in "callback hell"
  });
});
