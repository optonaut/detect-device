var DetectDevice =
/******/ (function(modules) { // webpackBootstrap
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

	'use strict';

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
	function detect(width, height, ppi, dppx) {
	  width = width || window.innerWidth;
	  height = height || window.innerHeight;
	  ppi = ppi || detectPPI();
	  dppx = dppx || detectDPPX();

	  for (var i = _devices2.default.length - 1; i >= 0; i--) {
	    var device = _devices2.default[i];
	    if (device.w === width && device.h === height && device.ppi === ppi && device.dppx === dppx) {
	      return device;
	    }
	  }

	  return null;
	}

	function detectPPI() {
	  var div = document.createElement('div');
	  // give element an absolute size of one inch
	  div.style.width = '1in';
	  div.style.position = 'absolute';
	  div.style.left = '-100%';
	  div.style.top = '-100%';
	  var body = document.getElementsByTagName('body')[0];
	  body.appendChild(div);
	  var ppi = document.defaultView.getComputedStyle(div, null).getPropertyValue('width');
	  body.removeChild(div);
	  return parseFloat(ppi);
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
			"w": 320,
			"h": 480,
			"d": 3.5,
			"ppi": 163,
			"dppx": 1
		},
		{
			"name": "Apple iPhone 4, 4S",
			"w": 640,
			"h": 960,
			"d": 3.5,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Apple iPhone 5",
			"w": 640,
			"h": 1136,
			"d": 4,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Apple iPhone 6",
			"w": 750,
			"h": 1334,
			"d": 4.7,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Apple iPhone 6 Plus",
			"w": 1080,
			"h": 1980,
			"d": 5.5,
			"ppi": 401,
			"dppx": 2.46
		},
		{
			"name": "Apple iPad mini",
			"w": 1024,
			"h": 768,
			"d": 7.9,
			"ppi": 163,
			"dppx": 1
		},
		{
			"name": "Apple iPad mini Retina",
			"w": 2048,
			"h": 1536,
			"d": 7.9,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Apple iPad 1, 2",
			"w": 1024,
			"h": 768,
			"d": 9.7,
			"ppi": 132,
			"dppx": 1
		},
		{
			"name": "Apple iPad 3",
			"w": 2048,
			"h": 1536,
			"d": 9.7,
			"ppi": 264,
			"dppx": 2
		},
		{
			"name": "Apple iPad Retina",
			"w": 2048,
			"h": 1536,
			"d": 9.7,
			"ppi": 264,
			"dppx": 2
		},
		{
			"name": "Apple iPad Air",
			"w": 2048,
			"h": 1536,
			"d": 9.7,
			"ppi": 264,
			"dppx": 2
		},
		{
			"name": "Galaxy Nexus",
			"w": 1280,
			"h": 720,
			"d": 4.65,
			"ppi": 316,
			"dppx": 2
		},
		{
			"name": "Google Nexus 4",
			"w": 1280,
			"h": 768,
			"d": 4.7,
			"ppi": 320,
			"dppx": 2
		},
		{
			"name": "Google Nexus 5",
			"w": 1920,
			"h": 1080,
			"d": 4.95,
			"ppi": 445,
			"dppx": 3
		},
		{
			"name": "Google Nexus 6",
			"w": 2560,
			"h": 1440,
			"d": 5.96,
			"ppi": 493,
			"dppx": 3
		},
		{
			"name": "Google Nexus 10",
			"w": 2560,
			"h": 1600,
			"d": 10.055,
			"ppi": 300,
			"dppx": 2
		},
		{
			"name": "HTC One",
			"w": 1080,
			"h": 1920,
			"d": 4.7,
			"ppi": 468,
			"dppx": 3
		},
		{
			"name": "HTC One Max",
			"w": 1080,
			"h": 1920,
			"d": 5.9
		},
		{
			"name": "Motorola Moto G",
			"w": 720,
			"h": 1280,
			"d": 4.5,
			"ppi": 326,
			"dppx": 2
		},
		{
			"name": "Motorola Moto X",
			"w": 720,
			"h": 1280,
			"d": 4.7,
			"ppi": 312,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S III",
			"w": 1280,
			"h": 720,
			"d": 4.8,
			"ppi": 306,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S4",
			"w": 1920,
			"h": 1080,
			"d": 5,
			"ppi": 441,
			"dppx": 3
		},
		{
			"name": "Samsung Galaxy S5",
			"w": 1920,
			"h": 1080,
			"d": 5.1,
			"ppi": 432,
			"dppx": 3
		},
		{
			"name": "Nokia Lumia 1020",
			"w": 768,
			"h": 1280,
			"d": 4.5,
			"ppi": 432,
			"dppx": 1.6667
		},
		{
			"name": "Nokia Lumia 920",
			"w": 768,
			"h": 1280,
			"d": 4.5,
			"ppi": 332,
			"dppx": 1.6667
		},
		{
			"name": "Nokia Lumia 928",
			"w": 768,
			"h": 1280,
			"d": 4.5,
			"ppi": 332,
			"dppx": 1.6667
		},
		{
			"name": "OnePlus One",
			"w": 1080,
			"h": 1920,
			"d": 5.5,
			"ppi": 401,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S6, S6 Edge",
			"w": 1440,
			"h": 2560,
			"d": 5.1,
			"ppi": 577,
			"dppx": 4
		},
		{
			"name": "Samsung Galaxy S3",
			"w": 720,
			"h": 1280,
			"d": 4.8,
			"ppi": 306,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S2",
			"w": 480,
			"h": 800,
			"d": 4.3,
			"ppi": 217,
			"dppx": 2
		},
		{
			"name": "Samsung Galaxy S",
			"w": 480,
			"h": 800,
			"d": 4,
			"ppi": 233,
			"dppx": 1
		},
		{
			"name": "LG G2",
			"w": 1080,
			"h": 1920,
			"d": 5.2,
			"ppi": 424,
			"dppx": 3
		},
		{
			"name": "LG G3",
			"w": 1440,
			"h": 2560,
			"d": 5.5,
			"ppi": 538,
			"dppx": 3
		},
		{
			"name": "LG G4",
			"w": 1440,
			"h": 2560,
			"d": 5.5,
			"ppi": 538,
			"dppx": 3
		}
	];

/***/ }
/******/ ]);