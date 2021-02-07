/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: external "dynamodb"
const external_dynamodb_namespaceObject = dynamodb;
;// CONCATENATED MODULE: ./index_send.js


const client = new external_dynamodb_namespaceObject.DynamoDBClient({apiVersion: '2012-08-10'});

async function demo() {
  await client.send(new external_dynamodb_namespaceObject.GetItemCommand(/*...*/));
  await client.send(new external_dynamodb_namespaceObject.UpdateItemCommand(/*...*/));
}

demo()
.then(() => console.log('done'))
.catch(() => process.exit(1));

/******/ })()
;