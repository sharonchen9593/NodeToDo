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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _newentry = __webpack_require__(186);

var _newentry2 = _interopRequireDefault(_newentry);

var _todolist = __webpack_require__(187);

var _todolist2 = _interopRequireDefault(_todolist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //dont need these, imported it in index.html using script tags
//import React from 'react';
//import ReactDOM from 'react-dom';
//import $ from 'jquery';


var apiUrl = __dirname + 'api/todos/test';
// get api


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      return (
        // $.getJSON(apiUrl)
        // .then((data) => {
        //   this.setState({ data: data })
        // })
        $.ajax({
          url: apiUrl,
          type: 'GET',
          contentType: 'application/json',
          success: function success(data) {
            _this2.setState({
              data: data
            });
          },
          error: function error() {
            console.log("error getting");
          }
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_newentry2.default, { getData: this.getData.bind(this) }),
        React.createElement(
          'ul',
          null,
          React.createElement(_todolist2.default, { todos: this.state.data, getData: this.getData.bind(this) })
        )
      );
    }
  }]);

  return App;
}(React.Component);

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
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// dont need to import babel. already imported in index.html

var NewEntry = function (_React$Component) {
  _inherits(NewEntry, _React$Component);

  function NewEntry(props) {
    _classCallCheck(this, NewEntry);

    return _possibleConstructorReturn(this, (NewEntry.__proto__ || Object.getPrototypeOf(NewEntry)).call(this, props));
  }

  _createClass(NewEntry, [{
    key: "onButtonClick",
    value: function onButtonClick(event) {
      var _this2 = this;

      event.preventDefault();
      var newItem = $(".entrybox").val();
      $.ajax({
        url: __dirname + "api/todo",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ todo: newItem, isDone: false, hasAttachment: false }),
        success: function success(data) {
          _this2.props.getData();
          $(".entrybox").val('');
        },
        error: function error() {
          console.log("error deleting");
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "form",
        null,
        "New Entry: ",
        React.createElement("input", { type: "text", className: "entrybox" }),
        React.createElement(
          "button",
          { onClick: function onClick(event) {
              return _this3.onButtonClick(event);
            } },
          " Submit "
        )
      );
    }
  }]);

  return NewEntry;
}(React.Component);

;

exports.default = NewEntry;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

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

  if (props.todos.length > 0) {
    return React.createElement(
      'div',
      null,
      props.todos.map(function (todo) {
        return React.createElement(_todoentries2.default, { todo: todo, key: todo._id, getData: props.getData });
      })
    );
  } else {
    return React.createElement(
      'div',
      null,
      'empty'
    );
  }
};

exports.default = TodoList;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoEntries = function (_React$Component) {
  _inherits(TodoEntries, _React$Component);

  function TodoEntries(props) {
    _classCallCheck(this, TodoEntries);

    return _possibleConstructorReturn(this, (TodoEntries.__proto__ || Object.getPrototypeOf(TodoEntries)).call(this, props));
  }

  _createClass(TodoEntries, [{
    key: "complete",
    value: function complete() {
      var _this2 = this;

      var complete = confirm("remove " + this.props.todo.todo + " from list?");
      if (complete) {
        $.ajax({
          url: __dirname + "api/todo",
          type: 'DELETE',
          contentType: 'application/json',
          data: JSON.stringify({ id: this.props.todo._id }),
          success: function success(data) {
            _this2.props.getData();
          },
          error: function error() {
            console.log("error deleting");
          }
        });
      } else {
        console.log("keep");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "li",
        { onClick: function onClick() {
            return _this3.complete();
          } },
        this.props.todo.todo
      );
    }
  }]);

  return TodoEntries;
}(React.Component);

;

exports.default = TodoEntries;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })

/******/ });