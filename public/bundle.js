/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _newentry = __webpack_require__(186);

var _newentry2 = _interopRequireDefault(_newentry);

var _todolist = __webpack_require__(187);

var _todolist2 = _interopRequireDefault(_todolist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//dont need these, imported it in index.html using script tags
//import React from 'react';
//import ReactDOM from 'react-dom';
//import $ from 'jquery';
var apiUrl = __dirname + 'api/todos/test';

// get api

$.getJSON(apiUrl, function (data) {
  console.log(data);
});

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(_newentry2.default, null),
    React.createElement(
      'div',
      null,
      React.createElement(_todolist2.default, null)
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.querySelector('.container'));
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// dont need to import babel. already imported in index.html

var NewEntry = function NewEntry() {
  return React.createElement(
    "div",
    null,
    "Hi from NewEntry"
  );
};

exports.default = NewEntry;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _todoentries = __webpack_require__(188);

var _todoentries2 = _interopRequireDefault(_todoentries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(props) {
  return React.createElement(
    'div',
    null,
    'Hi from TodoList',
    React.createElement(_todoentries2.default, null)
  );
};

exports.default = TodoList;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var TodoEntries = function TodoEntries() {
  return React.createElement(
    "div",
    null,
    "Hi from TodoEntries"
  );
};

exports.default = TodoEntries;

/***/ })

/******/ });