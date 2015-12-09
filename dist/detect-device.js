(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DetectDevice"] = factory();
	else
		root["DetectDevice"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.devices = undefined;
	exports.detect = detect;

	var _devices = __webpack_require__(1);

	var _devices2 = _interopRequireDefault(_devices);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// re-export device list
	exports.devices = _devices2.default;
	function detect() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var dppx = options.dppx || detectDPPX();
	  var width = options.width || window.screen.width * dppx;
	  var height = options.height || window.screen.height * dppx;

	  for (var i = _devices2.default.length - 1; i >= 0; i--) {
	    var device = _devices2.default[i];
	    if (device.width === width && device.height === height && device.dppx === dppx) {
	      return device;
	    }
	  }

	  return null;
	}

	function detectDPPX() {
	  return window.devicePixelRatio || (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches ? 2 : 1) || 1;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "Apple iPhone 1, 3G, 3GS",
			"width": 320,
			"height": 480,
			"diagonal": 3.5,
			"ppi": 163,
			"dppx": 1
		},
		{
			"name": "Apple iPhone 4, 4S",
			"width": 640,
			"height": 960,
			"diagonal": 3.5,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Apple iPhone 5",
			"width": 640,
			"height": 1136,
			"diagonal": 4,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Apple iPhone 6",
			"width": 750,
			"height": 1334,
			"diagonal": 4.7,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Apple iPhone 6 Plus",
			"width": 1080,
			"height": 1980,
			"diagonal": 5.5,
			"ppi": 401,
			"dppx": 2.46
		},
		{
			"name": "Apple iPad mini",
			"width": 1024,
			"height": 768,
			"diagonal": 7.9,
			"ppi": 163,
			"dppx": 1
		},
		{
			"name": "Apple iPad mini Retina",
			"width": 2048,
			"height": 1536,
			"diagonal": 7.9,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Apple iPad 1, 2",
			"width": 1024,
			"height": 768,
			"diagonal": 9.7,
			"ppi": 132,
			"dppx": 1
		},
		{
			"name": "Apple iPad 3",
			"width": 2048,
			"height": 1536,
			"diagonal": 9.7,
			"ppi": 264,
			"dppx": 2
		},
		{
			"name": "Apple iPad Retina",
			"width": 2048,
			"height": 1536,
			"diagonal": 9.7,
			"ppi": 264,
			"dppx": 2
		},
		{
			"name": "Apple iPad Air",
			"width": 2048,
			"height": 1536,
			"diagonal": 9.7,
			"ppi": 264,
			"dppx": 2
		},
		{
			"name": "Galaxy Nexus",
			"width": 1280,
			"height": 720,
			"diagonal": 4.65,
			"ppi": 316,
			"dppx": 2
		},
		{
			"name": "Google Nexus 4",
			"width": 1280,
			"height": 768,
			"diagonal": 4.7,
			"ppi": 320,
			"dppx": 2
		},
		{
			"name": "Google Nexus 5",
			"width": 1920,
			"height": 1080,
			"diagonal": 4.95,
			"ppi": 445,
			"dppx": 3
		},
		{
			"name": "Google Nexus 6",
			"width": 2560,
			"height": 1440,
			"diagonal": 5.96,
			"ppi": 493,
			"dppx": 3
		},
		{
			"name": "Google Nexus 10",
			"width": 2560,
			"height": 1600,
			"diagonal": 10.055,
			"ppi": 300,
			"dppx": 2
		},
		{
			"name": "HTC One",
			"width": 1080,
			"height": 1920,
			"diagonal": 4.7,
			"ppi": 468,
			"dppx": 3
		},
		{
			"name": "HTC One Max",
			"width": 1080,
			"height": 1920,
			"diagonal": 5.9
		},
		{
			"name": "Motorola Moto G",
			"width": 720,
			"height": 1280,
			"diagonal": 4.5,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Motorola Moto X",
			"width": 720,
			"height": 1280,
			"diagonal": 4.7,
			"ppi": 312,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S III",
			"width": 1280,
			"height": 720,
			"diagonal": 4.8,
			"ppi": 306,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S4",
			"width": 1920,
			"height": 1080,
			"diagonal": 5,
			"ppi": 441,
			"dppx": 3
		},
		{
			"name": "Samsung Galaxy S5",
			"width": 1920,
			"height": 1080,
			"diagonal": 5.1,
			"ppi": 432,
			"dppx": 3
		},
		{
			"name": "Nokia Lumia 1020",
			"width": 768,
			"height": 1280,
			"diagonal": 4.5,
			"ppi": 432,
			"dppx": 1.6667
		},
		{
			"name": "Nokia Lumia 920",
			"width": 768,
			"height": 1280,
			"diagonal": 4.5,
			"ppi": 332,
			"dppx": 1.6667
		},
		{
			"name": "Nokia Lumia 928",
			"width": 768,
			"height": 1280,
			"diagonal": 4.5,
			"ppi": 332,
			"dppx": 1.6667
		},
		{
			"name": "OnePlus One",
			"width": 1080,
			"height": 1920,
			"diagonal": 5.5,
			"ppi": 401,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S6, S6 Edge",
			"width": 1440,
			"height": 2560,
			"diagonal": 5.1,
			"ppi": 577,
			"dppx": 4
		},
		{
			"name": "Samsung Galaxy S3",
			"width": 720,
			"height": 1280,
			"diagonal": 4.8,
			"ppi": 306,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S2",
			"width": 480,
			"height": 800,
			"diagonal": 4.3,
			"ppi": 217,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S",
			"width": 480,
			"height": 800,
			"diagonal": 4,
			"ppi": 233,
			"dppx": 1
		},
		{
			"name": "LG G2",
			"width": 1080,
			"height": 1920,
			"diagonal": 5.2,
			"ppi": 424,
			"dppx": 3
		},
		{
			"name": "LG G3",
			"width": 1440,
			"height": 2560,
			"diagonal": 5.5,
			"ppi": 538,
			"dppx": 3
		},
		{
			"name": "LG G4",
			"width": 1440,
			"height": 2560,
			"diagonal": 5.5,
			"ppi": 538,
			"dppx": 3
		}
	];

/***/ }
/******/ ])
});
;