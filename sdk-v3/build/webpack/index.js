/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: external "dynamodb"
const external_dynamodb_namespaceObject = dynamodb;
;// CONCATENATED MODULE: ./index.js


const index_dynamodb = new external_dynamodb_namespaceObject.DynamoDB({apiVersion: '2012-08-10'});

async function demo() {
  const data = await index_dynamodb.getItem({/*...*/}); // no .promise() needed anymore!
  await index_dynamodb.updateItem({/*...*/});
}

demo()
.then(() => console.log('done'))
.catch(() => process.exit(1));

/******/ })()
;