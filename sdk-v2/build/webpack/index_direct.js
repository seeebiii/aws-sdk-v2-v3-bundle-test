/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 159:
/***/ ((module) => {

"use strict";
module.exports = awssdk;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
const DynamoDB = __webpack_require__(159);

const dynamodb = new DynamoDB({apiVersion: '2012-08-10'});

dynamodb.getItem({/*...*/}, function (err, data) {
  // this code is invoked as soon as the result is available
  dynamodb.updateItem({/*...*/}, function (err, data) {
    // if you nest many callback you might end up in "callback hell"
  });
});

})();

/******/ })()
;