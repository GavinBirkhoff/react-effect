/*! react-effect v1.0.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-effect"] = factory(require("react"));
	else
		root["react-effect"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../components sync recursive ^\\.\\/[^_][\\w-]+\\/style\\/index\\.tsx?$":
/*!*******************************************************************************!*\
  !*** D:/DEV-github/resc/components sync ^\.\/[^_][\w-]+\/style\/index\.tsx?$ ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/style/index.tsx": "../../../components/button/style/index.tsx",
	"./icon/style/index.tsx": "../../../components/icon/style/index.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../components sync recursive ^\\.\\/[^_][\\w-]+\\/style\\/index\\.tsx?$";

/***/ }),

/***/ "../../../components/button/style/index.less":
/*!*************************************************************!*\
  !*** D:/DEV-github/resc/components/button/style/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/button/style/index.tsx":
/*!************************************************************!*\
  !*** D:/DEV-github/resc/components/button/style/index.tsx ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _icon_style___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icon/style/ */ "../../../components/icon/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "../../../components/button/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../../components/icon/style/index.less":
/*!***********************************************************!*\
  !*** D:/DEV-github/resc/components/icon/style/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/icon/style/index.tsx":
/*!**********************************************************!*\
  !*** D:/DEV-github/resc/components/icon/style/index.tsx ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "../../../components/icon/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../../../components/index.tsx":
/*!***********************************************!*\
  !*** D:/DEV-github/resc/components/index.tsx ***!
  \***********************************************/
/*! exports provided: touchEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _touch_effect_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./touch-effect/index */ "../../../components/touch-effect/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touchEffect", function() { return _touch_effect_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

var ENV = "development";

if (ENV !== "production" && ENV !== "test" && typeof console !== "undefined" && console.warn && typeof window !== "undefined") {
  // tslint:disable-next-line:no-console
  console.warn("You are using a whole package of react-effect");
} // export { default as Button } from "./button/index"
// export { default as List } from "./list/index"
// export { default as Switch } from "./switch/index"




/***/ }),

/***/ "../../../components/style/index.less":
/*!******************************************************!*\
  !*** D:/DEV-github/resc/components/style/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/style/index.tsx":
/*!*****************************************************!*\
  !*** D:/DEV-github/resc/components/style/index.tsx ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css/normalize.css */ "../../normalize.css/normalize.css");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/touch-effect/index.tsx":
/*!************************************************************!*\
  !*** D:/DEV-github/resc/components/touch-effect/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TouchEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TouchEffect = /*#__PURE__*/function (_React$Component) {
  _inherits(TouchEffect, _React$Component);

  var _super = _createSuper(TouchEffect);

  function TouchEffect() {
    var _this;

    _classCallCheck(this, TouchEffect);

    _this = _super.apply(this, arguments);
    _this.state = {
      active: false
    };

    _this.onTouchStart = function (e) {
      _this.triggerEvent("TouchStart", true, e);
    };

    _this.onTouchMove = function (e) {
      _this.triggerEvent("TouchMove", false, e);
    };

    _this.onTouchEnd = function (e) {
      _this.triggerEvent("TouchEnd", false, e);
    };

    _this.onTouchCancel = function (e) {
      _this.triggerEvent("TouchCancel", false, e);
    };

    _this.onMouseDown = function (e) {
      // pc simulate mobile
      _this.triggerEvent("MouseDown", true, e);
    };

    _this.onMouseUp = function (e) {
      _this.triggerEvent("MouseUp", false, e);
    };

    _this.onMouseLeave = function (e) {
      _this.triggerEvent("MouseLeave", false, e);
    };

    return _this;
  }

  _createClass(TouchEffect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.disabled && this.state.active) {
        this.setState({
          active: false
        });
      }
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(type, isActive, ev) {
      var eventType = "on".concat(type);
      var children = this.props.children;

      if (children.props[eventType]) {
        children.props[eventType](ev);
      }

      if (isActive !== this.state.active) {
        this.setState({
          active: isActive
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          activeClassName = _this$props.activeClassName,
          activeStyle = _this$props.activeStyle;
      var events = disabled ? undefined : {
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd,
        onTouchCancel: this.onTouchCancel,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseLeave
      };
      var child = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);

      if (!disabled && this.state.active) {
        var _child$props = child.props,
            style = _child$props.style,
            className = _child$props.className;

        if (activeStyle !== false) {
          if (_typeof(activeStyle) === "object") {
            style = _extends(_extends({}, style), activeStyle);
          }

          className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, activeClassName);
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](child, _extends({
          className: className,
          style: style
        }, events));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](child, events);
    }
  }]);

  return TouchEffect;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TouchEffect.defaultProps = {
  disabled: false
};

/***/ }),

/***/ "../../../index.js":
/*!***********************************!*\
  !*** D:/DEV-github/resc/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the entry file for `npm run dist`
 */

/**
 * build for `dist/react-effect.css`
 */
var req = __webpack_require__("../../../components sync recursive ^\\.\\/[^_][\\w-]+\\/style\\/index\\.tsx?$");

req.keys().forEach(function (mod) {
  req(mod);
});
/**
 * build for `dist/react-effect.js`
 */

module.exports = __webpack_require__(/*! ./components/index */ "../../../components/index.tsx");

/***/ }),

/***/ "../../classnames/index.js":
/*!***********************************************************!*\
  !*** D:/DEV-github/resc/node_modules/classnames/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../normalize.css/normalize.css":
/*!*******************************************************************!*\
  !*** D:/DEV-github/resc/node_modules/normalize.css/normalize.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi D:/DEV-github/resc/index ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DEV-github\resc\index */"../../../index.js");


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-effect.js.map