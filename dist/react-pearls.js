/*! react-pearls v0.1.1 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-pearls"] = factory(require("react"), require("react-dom"));
	else
		root["react-pearls"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
  !*** D:/PRO-github/resc/components sync ^\.\/[^_][\w-]+\/style\/index\.tsx?$ ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./activity-indicator/style/index.tsx": "../../../components/activity-indicator/style/index.tsx",
	"./button/style/index.tsx": "../../../components/button/style/index.tsx",
	"./checkbox/style/index.tsx": "../../../components/checkbox/style/index.tsx",
	"./dock-content/style/index.tsx": "../../../components/dock-content/style/index.tsx",
	"./flex/style/index.tsx": "../../../components/flex/style/index.tsx",
	"./icon/style/index.tsx": "../../../components/icon/style/index.tsx",
	"./list-view/style/index.tsx": "../../../components/list-view/style/index.tsx",
	"./list/style/index.tsx": "../../../components/list/style/index.tsx",
	"./nav-bar/style/index.tsx": "../../../components/nav-bar/style/index.tsx",
	"./progress/style/index.tsx": "../../../components/progress/style/index.tsx",
	"./rp-checkbox/style/index.tsx": "../../../components/rp-checkbox/style/index.tsx",
	"./rp-swipeout/style/index.tsx": "../../../components/rp-swipeout/style/index.tsx",
	"./search-bar/style/index.tsx": "../../../components/search-bar/style/index.tsx",
	"./segmented-control/style/index.tsx": "../../../components/segmented-control/style/index.tsx",
	"./swipe-action/style/index.tsx": "../../../components/swipe-action/style/index.tsx",
	"./switch/style/index.tsx": "../../../components/switch/style/index.tsx",
	"./white-space/style/index.tsx": "../../../components/white-space/style/index.tsx",
	"./wing-blank/style/index.tsx": "../../../components/wing-blank/style/index.tsx"
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

/***/ "../../../components/_util/getDataAttr.tsx":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/components/_util/getDataAttr.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") {
      prev[key] = props[key];
    }

    return prev;
  }, {});
});

/***/ }),

/***/ "../../../components/_util/getLocale.tsx":
/*!*********************************************************!*\
  !*** D:/PRO-github/resc/components/_util/getLocale.tsx ***!
  \*********************************************************/
/*! exports provided: getComponentLocale, getLocaleCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentLocale", function() { return getComponentLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleCode", function() { return getLocaleCode; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getComponentLocale(props, context, componentName, getDefaultLocale) {
  var locale = {};

  if (context && context.antLocale && context.antLocale[componentName]) {
    locale = context.antLocale[componentName];
  } else {
    var defaultLocale = getDefaultLocale();
    locale = defaultLocale["default"] || defaultLocale;
  }

  var result = _extends({}, locale);

  if (props.locale) {
    result = _extends(_extends({}, result), props.locale);

    if (props.locale.lang) {
      result.lang = _extends(_extends({}, locale.lang), props.locale.lang);
    }
  }

  return result;
}
function getLocaleCode(context) {
  var localeCode = context.antLocale && context.antLocale.locale; // Had use LocaleProvide but didn't set locale

  if (context.antLocale && context.antLocale.exist && !localeCode) {
    return "zh-cn";
  }

  return localeCode;
}

/***/ }),

/***/ "../../../components/activity-indicator/index.tsx":
/*!******************************************************************!*\
  !*** D:/PRO-github/resc/components/activity-indicator/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivityIndicator; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* tslint:disable:jsx-no-multiline-js */



var ActivityIndicator = /*#__PURE__*/function (_React$Component) {
  _inherits(ActivityIndicator, _React$Component);

  var _super = _createSuper(ActivityIndicator);

  function ActivityIndicator() {
    _classCallCheck(this, ActivityIndicator);

    return _super.apply(this, arguments);
  }

  _createClass(ActivityIndicator, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          animating = _this$props.animating,
          toast = _this$props.toast,
          size = _this$props.size,
          text = _this$props.text;
      var wrapClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-lg"), size === "large"), _defineProperty(_classnames, "".concat(prefixCls, "-sm"), size === "small"), _defineProperty(_classnames, "".concat(prefixCls, "-toast"), !!toast), _classnames));
      var spinnerClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-spinner"), _defineProperty({}, "".concat(prefixCls, "-spinner-lg"), !!toast || size === "large"));

      if (animating) {
        if (toast) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
            className: wrapClass
          }, text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
            className: "".concat(prefixCls, "-content")
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            className: spinnerClass,
            "aria-hidden": "true"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            className: "".concat(prefixCls, "-toast")
          }, text)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
            className: "".concat(prefixCls, "-content")
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            className: spinnerClass,
            "aria-label": "Loading"
          })));
        } else {
          return text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
            className: wrapClass
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            className: spinnerClass,
            "aria-hidden": "true"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            className: "".concat(prefixCls, "-tip")
          }, text)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
            className: wrapClass
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            className: spinnerClass,
            "aria-label": "loading"
          }));
        }
      } else {
        return null;
      }
    }
  }]);

  return ActivityIndicator;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


ActivityIndicator.defaultProps = {
  prefixCls: "pm-activity-indicator",
  animating: true,
  size: "small",
  panelColor: "rgba(34,34,34,0.6)",
  toast: false
};

/***/ }),

/***/ "../../../components/activity-indicator/style/index.less":
/*!*************************************************************************!*\
  !*** D:/PRO-github/resc/components/activity-indicator/style/index.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/activity-indicator/style/index.tsx":
/*!************************************************************************!*\
  !*** D:/PRO-github/resc/components/activity-indicator/style/index.tsx ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/activity-indicator/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/button/index.tsx":
/*!******************************************************!*\
  !*** D:/PRO-github/resc/components/button/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var touch_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! touch-effect */ "../../touch-effect/build/touch-effect.es.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "../../../components/icon/index.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === "string";
} // Insert one space between two chinese characters automatically.


function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, {}, child.props.children.split("").join(" "));
  }

  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split("").join(" ");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, child);
  }

  return child;
}

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _a = this.props,
          children = _a.children,
          className = _a.className,
          prefixCls = _a.prefixCls,
          type = _a.type,
          size = _a.size,
          inline = _a.inline,
          disabled = _a.disabled,
          icon = _a.icon,
          loading = _a.loading,
          activeStyle = _a.activeStyle,
          activeClassName = _a.activeClassName,
          onClick = _a.onClick,
          restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);

      var iconType = loading ? "loading" : icon;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-primary"), type === "primary"), _defineProperty(_classnames, "".concat(prefixCls, "-ghost"), type === "ghost"), _defineProperty(_classnames, "".concat(prefixCls, "-warning"), type === "warning"), _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === "small"), _defineProperty(_classnames, "".concat(prefixCls, "-inline"), inline), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classnames, "".concat(prefixCls, "-icon"), !!iconType), _classnames));
      var kids = react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, insertSpace);
      var iconEl;

      if (typeof iconType === "string") {
        iconEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          "aria-hidden": "true",
          type: iconType,
          size: size === "small" ? "xxs" : "md",
          className: "".concat(prefixCls, "-icon")
        });
      } else if (iconType) {
        var rawCls = iconType.props && iconType.props.className;
        var cls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("pm-icon", "".concat(prefixCls, "-icon"), size === "small" ? "pm-icon-xxs" : "pm-icon-md");
        iconEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](iconType, {
          className: rawCls ? "".concat(rawCls, " ").concat(cls) : cls
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](touch_effect__WEBPACK_IMPORTED_MODULE_2__["default"] // tslint:disable-next-line:jsx-no-multiline-js
      , {
        activeClassName: activeClassName || (activeStyle ? "".concat(prefixCls, "-active") : undefined),
        disabled: disabled,
        activeStyle: activeStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", _extends({
        role: "button",
        className: wrapCls
      }, restProps, {
        onClick: disabled ? undefined : onClick,
        "aria-disabled": disabled
      }), iconEl, kids));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Button.defaultProps = {
  prefixCls: "pm-button",
  size: "large",
  inline: false,
  disabled: false,
  loading: false,
  activeStyle: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../../components/button/style/index.less":
/*!*************************************************************!*\
  !*** D:/PRO-github/resc/components/button/style/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/button/style/index.tsx":
/*!************************************************************!*\
  !*** D:/PRO-github/resc/components/button/style/index.tsx ***!
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

/***/ "../../../components/checkbox/AgreeItem.tsx":
/*!************************************************************!*\
  !*** D:/PRO-github/resc/components/checkbox/AgreeItem.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgreeItem; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_getDataAttr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/getDataAttr */ "../../../components/_util/getDataAttr.tsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ "../../../components/checkbox/Checkbox.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var AgreeItem = /*#__PURE__*/function (_React$Component) {
  _inherits(AgreeItem, _React$Component);

  var _super = _createSuper(AgreeItem);

  function AgreeItem() {
    _classCallCheck(this, AgreeItem);

    return _super.apply(this, arguments);
  }

  _createClass(AgreeItem, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          style = _a.style,
          restProps = __rest(_a, ["style"]);

      var prefixCls = restProps.prefixCls,
          className = restProps.className;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-agree"), className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({}, Object(_util_getDataAttr__WEBPACK_IMPORTED_MODULE_2__["default"])(restProps), {
        className: wrapCls,
        style: style
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, restProps, {
        className: "".concat(prefixCls, "-agree-label")
      })));
    }
  }]);

  return AgreeItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


AgreeItem.defaultProps = {
  prefixCls: "pm-checkbox"
};

/***/ }),

/***/ "../../../components/checkbox/Checkbox.tsx":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/components/checkbox/Checkbox.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rp_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rp-checkbox */ "../../../components/rp-checkbox/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Checkbox = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _super.apply(this, arguments);
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          style = _a.style,
          restProps = __rest(_a, ["className", "style"]);

      var prefixCls = restProps.prefixCls,
          children = restProps.children;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-wrapper"), className); // Todo: wait for https://github.com/developit/preact-compat/issues/422, then we can remove class below

      if ("class" in restProps) {
        /* tslint:disable:no-string-literal */
        delete restProps["class"];
      }

      var mark = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", {
        className: wrapCls,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_rp_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], restProps), children);

      if (this.props.wrapLabel) {
        return mark;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_rp_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], this.props);
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


Checkbox.defaultProps = {
  prefixCls: "pm-checkbox",
  wrapLabel: true
};

/***/ }),

/***/ "../../../components/checkbox/CheckboxItem.tsx":
/*!***************************************************************!*\
  !*** D:/PRO-github/resc/components/checkbox/CheckboxItem.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxItem; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list */ "../../../components/list/index.tsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ "../../../components/checkbox/Checkbox.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var ListItem = _list__WEBPACK_IMPORTED_MODULE_2__["default"].Item; // eslint-disable-next-line @typescript-eslint/no-empty-function

function noop() {}

var CheckboxItem = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckboxItem, _React$Component);

  var _super = _createSuper(CheckboxItem);

  function CheckboxItem() {
    _classCallCheck(this, CheckboxItem);

    return _super.apply(this, arguments);
  }

  _createClass(CheckboxItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _a = this.props,
          listPrefixCls = _a.listPrefixCls,
          onChange = _a.onChange,
          disabled = _a.disabled,
          checkboxProps = _a.checkboxProps,
          onClick = _a.onClick,
          restProps = __rest(_a, ["listPrefixCls", "onChange", "disabled", "checkboxProps", "onClick"]);

      var prefixCls = restProps.prefixCls,
          className = restProps.className,
          children = restProps.children;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-item"), className, _defineProperty({}, "".concat(prefixCls, "-item-disabled"), disabled === true)); // Note: if not omit `onChange`, it will trigger twice on check listitem

      if (!disabled) {
        ;
        restProps.onClick = onClick || noop;
      }

      var extraProps = {};
      ["name", "defaultChecked", "checked", "onChange", "disabled"].forEach(function (i) {
        if (i in _this.props) {
          extraProps[i] = _this.props[i];
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ListItem, _extends({}, restProps, {
        prefixCls: listPrefixCls,
        className: wrapCls,
        thumb: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, checkboxProps, extraProps))
      }), children);
    }
  }]);

  return CheckboxItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


CheckboxItem.defaultProps = {
  prefixCls: "pm-checkbox",
  listPrefixCls: "pm-list",
  checkboxProps: {}
};

/***/ }),

/***/ "../../../components/checkbox/index.tsx":
/*!********************************************************!*\
  !*** D:/PRO-github/resc/components/checkbox/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgreeItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgreeItem */ "../../../components/checkbox/AgreeItem.tsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "../../../components/checkbox/Checkbox.tsx");
/* harmony import */ var _CheckboxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckboxItem */ "../../../components/checkbox/CheckboxItem.tsx");



_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"].CheckboxItem = _CheckboxItem__WEBPACK_IMPORTED_MODULE_2__["default"];
_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"].AgreeItem = _AgreeItem__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "../../../components/checkbox/style/index.less":
/*!***************************************************************!*\
  !*** D:/PRO-github/resc/components/checkbox/style/index.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/checkbox/style/index.tsx":
/*!**************************************************************!*\
  !*** D:/PRO-github/resc/components/checkbox/style/index.tsx ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _list_style___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../list/style/ */ "../../../components/list/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "../../../components/checkbox/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../../components/dock-content/index.tsx":
/*!************************************************************!*\
  !*** D:/PRO-github/resc/components/dock-content/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var DockContent = /*#__PURE__*/function (_React$Component) {
  _inherits(DockContent, _React$Component);

  var _super = _createSuper(DockContent);

  function DockContent() {
    _classCallCheck(this, DockContent);

    return _super.apply(this, arguments);
  }

  _createClass(DockContent, [{
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: wrapCls
      }, this.createDockContent());
    }
  }, {
    key: "dockable",
    value: function dockable(d) {
      // prefer given JSX with highest priority
      // otherwise try to find from existing dockables
      var jsx = d.jsx;

      if (jsx === undefined) {
        // something is wrong, no valid JSX nor CSS found
        if (d.style === undefined) jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "?");else {
          // CSS string or React style ?
          if (typeof d.style === "string") jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
            className: d.style
          });else jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
            style: d.style
          });
        }
      }

      if (d.style !== undefined) {
        // CSS string or React style ?
        if (typeof d.style === "string") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: d.style
        }, jsx);else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          style: d.style
        }, jsx);
      }

      if (jsx instanceof Array) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(this.props.prefixCls, "-sub")
      }, jsx);
      return jsx;
    }
  }, {
    key: "createDock",
    value: function createDock(dock, dockbar, container, style) {
      var _classnames, _classnames2;

      var last = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var userCSS = typeof style === "string" ? style : "";
      var userStyle = typeof style !== "string" ? style : undefined;
      var preContainer = "pm-container";
      var preDockbar = "pm-dockbar";
      var containerCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(preContainer, (_classnames = {}, _defineProperty(_classnames, "".concat(preContainer, "-top"), dock === "top"), _defineProperty(_classnames, "".concat(preContainer, "-right"), dock === "right"), _defineProperty(_classnames, "".concat(preContainer, "-bottom"), dock === "bottom"), _defineProperty(_classnames, "".concat(preContainer, "-left"), dock === "left"), _defineProperty(_classnames, "".concat(preContainer, "-last"), last), _classnames));
      var dockbarCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(preDockbar, userCSS, (_classnames2 = {}, _defineProperty(_classnames2, "".concat(preDockbar, "-top"), dock === "top"), _defineProperty(_classnames2, "".concat(preDockbar, "-right"), dock === "right"), _defineProperty(_classnames2, "".concat(preDockbar, "-bottom"), dock === "bottom"), _defineProperty(_classnames2, "".concat(preDockbar, "-left"), dock === "left"), _classnames2));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: containerCls
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: dockbarCls,
        style: userStyle
      }, dockbar), container);
    }
  }, {
    key: "createDockContent",
    value: function createDockContent() {
      var _this = this;

      // how the dockbar(s) around the main view are arranged
      var key = 1;
      var dock = this.props.layout.map(function (e) {
        return {
          dock: e.dock,
          style: e.style,
          jsx: e.dockables.map(function (d) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](_this.dockable(d), {
              key: key++
            });
          })
        };
      });

      if (dock.length > 0) {
        var create = function create(d) {
          var first = d[0];
          if (d.length === 1) return _this.createDock(first.dock, first.jsx, _this.props.children, first.style, true);
          return _this.createDock(first.dock, first.jsx, create(d.splice(1)), first.style);
        };

        return create(dock);
      }

      return this.props.children;
    }
  }]);

  return DockContent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

DockContent.defaultProps = {
  prefixCls: "pm-dock"
};
/* harmony default export */ __webpack_exports__["default"] = (DockContent);

/***/ }),

/***/ "../../../components/dock-content/style/index.less":
/*!*******************************************************************!*\
  !*** D:/PRO-github/resc/components/dock-content/style/index.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/dock-content/style/index.tsx":
/*!******************************************************************!*\
  !*** D:/PRO-github/resc/components/dock-content/style/index.tsx ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _icon_style___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icon/style/ */ "../../../components/icon/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "../../../components/dock-content/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../../components/flex/Flex.tsx":
/*!***************************************************!*\
  !*** D:/PRO-github/resc/components/flex/Flex.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Flex; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var Flex = /*#__PURE__*/function (_React$Component) {
  _inherits(Flex, _React$Component);

  var _super = _createSuper(Flex);

  function Flex() {
    _classCallCheck(this, Flex);

    return _super.apply(this, arguments);
  }

  _createClass(Flex, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _a = this.props,
          direction = _a.direction,
          wrap = _a.wrap,
          justify = _a.justify,
          align = _a.align,
          alignContent = _a.alignContent,
          className = _a.className,
          children = _a.children,
          prefixCls = _a.prefixCls,
          style = _a.style,
          restProps = __rest(_a, ["direction", "wrap", "justify", "align", "alignContent", "className", "children", "prefixCls", "style"]);

      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-dir-row"), direction === "row"), _defineProperty(_classnames, "".concat(prefixCls, "-dir-row-reverse"), direction === "row-reverse"), _defineProperty(_classnames, "".concat(prefixCls, "-dir-column"), direction === "column"), _defineProperty(_classnames, "".concat(prefixCls, "-dir-column-reverse"), direction === "column-reverse"), _defineProperty(_classnames, "".concat(prefixCls, "-nowrap"), wrap === "nowrap"), _defineProperty(_classnames, "".concat(prefixCls, "-wrap"), wrap === "wrap"), _defineProperty(_classnames, "".concat(prefixCls, "-wrap-reverse"), wrap === "wrap-reverse"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-start"), justify === "start"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-end"), justify === "end"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-center"), justify === "center"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-between"), justify === "between"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-around"), justify === "around"), _defineProperty(_classnames, "".concat(prefixCls, "-align-start"), align === "start"), _defineProperty(_classnames, "".concat(prefixCls, "-align-center"), align === "center"), _defineProperty(_classnames, "".concat(prefixCls, "-align-end"), align === "end"), _defineProperty(_classnames, "".concat(prefixCls, "-align-baseline"), align === "baseline"), _defineProperty(_classnames, "".concat(prefixCls, "-align-stretch"), align === "stretch"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-start"), alignContent === "start"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-end"), alignContent === "end"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-center"), alignContent === "center"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-between"), alignContent === "between"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-around"), alignContent === "around"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-stretch"), alignContent === "stretch"), _classnames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({
        className: wrapCls,
        style: style
      }, restProps), children);
    }
  }]);

  return Flex;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Flex.defaultProps = {
  prefixCls: "pm-flexbox",
  align: "center"
};

/***/ }),

/***/ "../../../components/flex/FlexItem.tsx":
/*!*******************************************************!*\
  !*** D:/PRO-github/resc/components/flex/FlexItem.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlexItem; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var FlexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(FlexItem, _React$Component);

  var _super = _createSuper(FlexItem);

  function FlexItem() {
    _classCallCheck(this, FlexItem);

    return _super.apply(this, arguments);
  }

  _createClass(FlexItem, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          prefixCls = _a.prefixCls,
          style = _a.style,
          restProps = __rest(_a, ["children", "className", "prefixCls", "style"]);

      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-item"), className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({
        className: wrapCls,
        style: style
      }, restProps), children);
    }
  }]);

  return FlexItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


FlexItem.defaultProps = {
  prefixCls: "pm-flexbox"
};

/***/ }),

/***/ "../../../components/flex/index.tsx":
/*!****************************************************!*\
  !*** D:/PRO-github/resc/components/flex/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flex */ "../../../components/flex/Flex.tsx");
/* harmony import */ var _FlexItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlexItem */ "../../../components/flex/FlexItem.tsx");


_Flex__WEBPACK_IMPORTED_MODULE_0__["default"].Item = _FlexItem__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Flex__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../components/flex/style/index.less":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/components/flex/style/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/flex/style/index.tsx":
/*!**********************************************************!*\
  !*** D:/PRO-github/resc/components/flex/style/index.tsx ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/flex/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/icon/index.tsx":
/*!****************************************************!*\
  !*** D:/PRO-github/resc/components/icon/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadSprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadSprite */ "../../../components/icon/loadSprite.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Icon = /*#__PURE__*/function (_React$Component) {
  _inherits(Icon, _React$Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_loadSprite__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          type = _a.type,
          className = _a.className,
          size = _a.size,
          restProps = __rest(_a, ["type", "className", "size"]);

      var cls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, "pm-icon", "pm-icon-".concat(type), "pm-icon-".concat(size));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("svg", _extends({
        className: cls
      }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("use", {
        xlinkHref: "#".concat(type)
      }));
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Icon.defaultProps = {
  size: "md"
};

/***/ }),

/***/ "../../../components/icon/loadSprite.tsx":
/*!*********************************************************!*\
  !*** D:/PRO-github/resc/components/icon/loadSprite.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable:max-line-length */
// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
var svgSprite = function svgSprite(contents) {
  return "\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    id=\"__RE_MOBILE_SVG_SPRITE_NODE__\"\n    style=\"display:none;overflow:hidden;width:0;height:0\"\n  >\n    <defs>\n      ".concat(contents, "\n    </defs>\n  </svg>\n");
}; // both minified by https://github.com/svg/svgo


var icons = {
  "check": '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z"/></svg>',
  "check-circle": '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z" fill-rule="evenodd"/></svg>',
  "check-circle-o": '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z"/></g></svg>',
  "cross": '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z"/></svg>',
  "cross-circle": '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M24.34 22.22l-7.775-7.775a1.5 1.5 0 1 0-2.12 2.12l7.773 7.775-7.774 7.775a1.5 1.5 0 1 0 2.12 2.12l7.775-7.773 7.774 7.774a1.5 1.5 0 1 0 2.12-2.12L26.46 24.34l7.774-7.774a1.5 1.5 0 1 0-2.12-2.12l-7.776 7.773z"/></g></svg>',
  "cross-circle-o": '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.8-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.72 7.723c-.727.728-.56 1.646-.066 2.177.493.532 1.553.683 2.31-.174l7.588-7.584 7.644 7.623c.796.798 1.608.724 2.21.145.605-.58.72-1.442-.074-2.24l-7.657-7.67 7.545-7.52c.81-.697.9-1.76.297-2.34-.92-.885-1.85-.338-2.264.078l-7.685 7.667z" fill-rule="evenodd"/></svg>',
  // Todo: simplify direction to 2, use css transform
  "left": '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M16.247 21.4L28.48 9.165l2.12 2.12-10.117 10.12L30.6 31.524l-2.12 2.12-12.233-12.232.007-.006z"/></svg>',
  "right": '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M30.6 21.4L18.37 9.165l-2.12 2.12 10.117 10.12-10.118 10.118 2.12 2.12 12.234-12.232-.005-.006z"/></svg>',
  "down": '<svg viewBox="0 0 44 44"><path d="M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.07-.282 2.496l11.37 10.793-.04.04 2.088 2.195L23.3 31.52l12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z" fill-rule="evenodd"/></svg>',
  "up": '<svg viewBox="0 0 44 44"><path fill="none" d="M-1-1h46v46H-1z"/><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M23.417 14.23L11.184 26.46l2.12 2.12 10.12-10.117 10.118 10.118 2.12-2.12L23.43 14.228l-.006.005z"/></svg>',
  "loading": '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
  "search": '<svg viewBox="0 0 44 44"><path d="M32.98 29.255l8.915 8.293L39.603 40l-8.86-8.242a15.952 15.952 0 0 1-10.753 4.147C11.16 35.905 4 28.763 4 19.952 4 11.142 11.16 4 19.99 4s15.99 7.142 15.99 15.952c0 3.472-1.112 6.685-3 9.303zm.05-9.21c0 7.123-5.7 12.918-12.88 12.918-7.176 0-13.015-5.795-13.015-12.918 0-7.12 5.84-12.917 13.017-12.917 7.178 0 12.88 5.797 12.88 12.917z" fill-rule="evenodd"/></svg>',
  "ellipsis": '<svg viewBox="0 0 44 44"><circle cx="21.888" cy="22" r="4.045"/><circle cx="5.913" cy="22" r="4.045"/><circle cx="37.863" cy="22" r="4.045"/></svg>',
  "ellipsis-circle": '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M22.13.11C10.05.11.255 9.902.255 21.983S10.05 43.86 22.13 43.86s21.875-9.795 21.875-21.876S34.21.11 22.13.11zm0 40.7c-10.396 0-18.825-8.43-18.825-18.826S11.735 3.16 22.13 3.16c10.396 0 18.825 8.428 18.825 18.824S32.525 40.81 22.13 40.81z"/><circle cx="21.888" cy="22.701" r="2.445"/><circle cx="12.23" cy="22.701" r="2.445"/><circle cx="31.546" cy="22.701" r="2.445"/></g></svg>',
  "exclamation-circle": '<svg viewBox="0 0 64 64"><path d="M59.58 40.89L41.193 9.11C39.135 5.382 35.723 3 31.387 3c-3.11 0-6.52 2.382-8.58 6.11L4.42 40.89c-2.788 4.635-3.126 8.81-1.225 12.22C5.015 56.208 7.572 58 13 58h36.773c5.428 0 9.21-1.792 11.03-4.89 1.9-3.41 1.565-7.583-1.224-12.22zm-2.452 11c-.635 1.694-3.802 2.443-7.354 2.443H13c-3.59 0-5.493-.75-6.13-2.444-1.71-2.41-1.374-5.263 0-8.557l18.387-31.777c2.116-3.168 4.394-4.89 6.13-4.89 2.96 0 5.238 1.722 7.354 4.89l18.387 31.777c1.374 3.294 1.713 6.146 0 8.556zm-25.74-33c-.405 0-1.227.835-1.227 2.443v15.89c0 1.608.823 2.444 1.227 2.444 1.628 0 2.452-.836 2.452-2.445v-15.89c0-1.607-.825-2.443-2.453-2.443zm0 23.22c-.405 0-1.227.79-1.227 1.223v2.445c0 .434.823 1.222 1.227 1.222 1.628 0 2.452-.788 2.452-1.222v-2.445c0-.434-.825-1.222-2.453-1.222z" fill-rule="evenodd"/></svg>',
  "info-circle": '<svg viewBox="0 0 44 44"><circle cx="13.828" cy="19.63" r="1.938"/><circle cx="21.767" cy="19.63" r="1.938"/><circle cx="29.767" cy="19.63" r="1.938"/><path d="M22.102 4.16c-9.918 0-17.958 7.147-17.958 15.962 0 4.935 2.522 9.345 6.48 12.273v5.667l.04.012a2.627 2.627 0 1 0 4.5 1.455h.002l5.026-3.54c.628.06 1.265.094 1.91.094 9.92 0 17.96-7.146 17.96-15.96C40.06 11.306 32.02 4.16 22.1 4.16zm-.04 29.902c-.902 0-1.78-.08-2.642-.207l-5.882 4.234c-.024.024-.055.04-.083.06l-.008.005a.51.51 0 0 1-.284.095.525.525 0 0 1-.525-.525l.005-6.375c-3.91-2.516-6.456-6.544-6.456-11.1 0-7.628 7.107-13.812 15.875-13.812s15.875 6.184 15.875 13.812-7.107 13.812-15.875 13.812z"/></svg>',
  "question-circle": '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M21.186 3c-10.853 0-19.36 8.506-19.36 19.358C1.827 32.494 10.334 41 21.187 41c10.133 0 18.64-8.506 18.64-18.642C39.827 11.506 31.32 3 21.187 3m15.64 19c0 8.823-7.178 16-16 16s-16-7.177-16-16 7.178-16 16-16 16 7.177 16 16z"/><path d="M22.827 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-15.48c0 .957-.203 1.822-.61 2.593-.427.792-1.117 1.612-2.073 2.457-.867.734-1.453 1.435-1.754 2.096-.302.7-.453 1.693-.453 2.98a.828.828 0 0 1-.823.854.828.828 0 0 1-.584-.22.877.877 0 0 1-.24-.635c0-1.305.168-2.38.506-3.227.336-.883.93-1.682 1.78-2.4 1.01-.883 1.71-1.692 2.1-2.428.336-.645.503-1.38.503-2.21-.02-.935-.3-1.7-.85-2.288-.655-.717-1.62-1.075-2.897-1.075-1.506 0-2.596.535-3.27 1.6-.46.754-.688 1.645-.688 2.677a.92.92 0 0 1-.266.66.747.747 0 0 1-.56.25.73.73 0 0 1-.584-.194c-.16-.164-.24-.393-.24-.69 0-1.82.585-3.272 1.755-4.357C18.645 11.486 19.928 11 21.434 11h.293c1.452 0 2.638.414 3.56 1.24 1.028.903 1.54 2.163 1.54 3.78z"/></g></svg>',
  "voice": '<svg viewBox="0 0 38 33"><g fill-rule="evenodd"><path d="M17.838 28.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014 0-.027.005-.04.005-.015 0-.028-.006-.042-.006H3.562c-.734 0-.903-.203-.903-.928v-12.62c0-.49.057-.8.66-.8H9.1c.694 0 1.76-.28 6.4-3.63.83-.596 1.638-1.196 2.337-1.722V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983 1.552-4.152 3.125C10.34 6.21 9.243 6.664 9.02 6.737H3.676c-.027 0-.053.003-.08.004H1.183c-.608 0-1.1.487-1.1 1.086V25.14c0 .598.492 1.084 1.1 1.084h8.71c.22.08 1.257.55 4.605 3.24 1.947 1.562 3.694 3.088 3.712 3.103.25.22.568.333.89.333.186 0 .373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z" mask="url(#mask-2)"/><path d="M31.42 16.475c0-3.363-1.854-6.297-4.606-7.876-.125-.067-.42-.193-.625-.193-.613 0-1.11.488-1.11 1.09 0 .404.22.764.55.952 2.13 1.19 3.566 3.44 3.566 6.024 0 2.627-1.486 4.913-3.677 6.087-.32.19-.53.54-.53.935 0 .602.495 1.09 1.106 1.09.26.002.568-.15.568-.15 2.835-1.556 4.754-4.538 4.754-7.96" mask="url(#mask-4)"/><path d="M30.14 3.057c-.205-.122-.41-.22-.658-.22-.608 0-1.1.485-1.1 1.084 0 .434.26.78.627.978 4.042 2.323 6.76 6.636 6.76 11.578 0 4.938-2.715 9.248-6.754 11.572-.354.19-.66.55-.66.993 0 .6.494 1.085 1.102 1.085.243 0 .438-.092.65-.213 4.692-2.695 7.848-7.7 7.848-13.435 0-5.723-3.142-10.718-7.817-13.418" mask="url(#mask-6)"/></g></svg>',
  "plus": '<svg viewBox="0 0 30 30"><path d="M14 14H0v2h14v14h2V16h14v-2H16V0h-2v14z" fill-rule="evenodd"/></svg>',
  "minus": '<svg viewBox="0 0 30 2"><path d="M0 0h30v2H0z" fill-rule="evenodd"/></svg>',
  "dislike": '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path fill="#FFF" d="M47 22h2v6h-2zm-24 0h2v6h-2z"/><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"/></g></svg>',
  "fail": '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path d="M22 22l28.304 28.304m-28.304 0L50.304 22" stroke="#FFF" stroke-width="2"/></g></svg>',
  "success": '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"/></g></svg>'
};

var renderSvgSprite = function renderSvgSprite() {
  var symbols = Object.keys(icons).map(function (iconName) {
    var svgContent = icons[iconName].split("svg")[1];
    return "<symbol id=".concat(iconName).concat(svgContent, "symbol>");
  }).join("");
  return svgSprite(symbols);
};

var loadSprite = function loadSprite() {
  if (!document) {
    return;
  }

  var existing = document.getElementById("__RE_MOBILE_SVG_SPRITE_NODE__");
  var mountNode = document.body;

  if (!existing) {
    mountNode.insertAdjacentHTML("afterbegin", renderSvgSprite());
  }
};

/* harmony default export */ __webpack_exports__["default"] = (loadSprite);

/***/ }),

/***/ "../../../components/icon/style/index.less":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/components/icon/style/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/icon/style/index.tsx":
/*!**********************************************************!*\
  !*** D:/PRO-github/resc/components/icon/style/index.tsx ***!
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
  !*** D:/PRO-github/resc/components/index.tsx ***!
  \***********************************************/
/*! exports provided: ActivityIndicator, Button, Checkbox, DockContent, Flex, Icon, List, ListView, NavBar, Progress, RpCheckbox, Swipeout, SearchBar, SegmentedControl, SwipeAction, Switch, WhiteSpace, WingBlank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activity_indicator_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-indicator/index */ "../../../components/activity-indicator/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityIndicator", function() { return _activity_indicator_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/index */ "../../../components/button/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _checkbox_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox/index */ "../../../components/checkbox/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox_index__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _dock_content_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dock-content/index */ "../../../components/dock-content/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DockContent", function() { return _dock_content_index__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flex_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flex/index */ "../../../components/flex/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _flex_index__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/index */ "../../../components/icon/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _list_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/index */ "../../../components/list/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list_index__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _list_view_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-view/index */ "../../../components/list-view/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return _list_view_index__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _nav_bar_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-bar/index */ "../../../components/nav-bar/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return _nav_bar_index__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _progress_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress/index */ "../../../components/progress/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress_index__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _rp_checkbox_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rp-checkbox/index */ "../../../components/rp-checkbox/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RpCheckbox", function() { return _rp_checkbox_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _rp_swipeout_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rp-swipeout/index */ "../../../components/rp-swipeout/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swipeout", function() { return _rp_swipeout_index__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _search_bar_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-bar/index */ "../../../components/search-bar/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _search_bar_index__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _segmented_control_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./segmented-control/index */ "../../../components/segmented-control/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SegmentedControl", function() { return _segmented_control_index__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _swipe_action_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./swipe-action/index */ "../../../components/swipe-action/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwipeAction", function() { return _swipe_action_index__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _switch_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./switch/index */ "../../../components/switch/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch_index__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _white_space_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./white-space/index */ "../../../components/white-space/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhiteSpace", function() { return _white_space_index__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _wing_blank_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wing-blank/index */ "../../../components/wing-blank/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WingBlank", function() { return _wing_blank_index__WEBPACK_IMPORTED_MODULE_17__["default"]; });

var ENV = "development";

if (ENV !== "production" && ENV !== "test" && typeof console !== "undefined" && console.warn && typeof window !== "undefined") {
  // tslint:disable-next-line:no-console
  console.warn("You are using a whole package of react-pearls");
}




















/***/ }),

/***/ "../../../components/list-view/index.tsx":
/*!*********************************************************!*\
  !*** D:/PRO-github/resc/components/list-view/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pearls_virtual_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pearls-virtual-list */ "../../react-pearls-virtual-list/build/react-pearls-virtual-list.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var ListView = /*#__PURE__*/function (_React$Component) {
  _inherits(ListView, _React$Component);

  var _super = _createSuper(ListView);

  function ListView() {
    var _this;

    _classCallCheck(this, ListView);

    _this = _super.apply(this, arguments);

    _this.scrollTo = function () {
      var _this$listviewRef;

      return (_this$listviewRef = _this.listviewRef).scrollTo.apply(_this$listviewRef, arguments);
    };

    _this.getInnerViewNode = function () {
      return _this.listviewRef.getRef();
    };

    return _this;
  }

  _createClass(ListView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          restProps = __rest(_a, ["prefixCls", "className"]);

      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_pearls_virtual_list__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        ref: function ref(el) {
          return _this2.listviewRef = el;
        },
        className: wrapCls
      }, restProps));
    }
  }]);

  return ListView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


ListView.defaultProps = {
  prefixCls: "pm-list-view",
  listPrefixCls: "pm-list",
  width: "auto"
};

/***/ }),

/***/ "../../../components/list-view/style/index.less":
/*!****************************************************************!*\
  !*** D:/PRO-github/resc/components/list-view/style/index.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/list-view/style/index.tsx":
/*!***************************************************************!*\
  !*** D:/PRO-github/resc/components/list-view/style/index.tsx ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _list_style___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../list/style/ */ "../../../components/list/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "../../../components/list-view/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../../components/list/ListItem.tsx":
/*!*******************************************************!*\
  !*** D:/PRO-github/resc/components/list/ListItem.tsx ***!
  \*******************************************************/
/*! exports provided: Brief, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brief", function() { return Brief; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var touch_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! touch-effect */ "../../touch-effect/build/touch-effect.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* tslint:disable:jsx-no-multiline-js */





var Brief = /*#__PURE__*/function (_React$Component) {
  _inherits(Brief, _React$Component);

  var _super = _createSuper(Brief);

  function Brief() {
    _classCallCheck(this, Brief);

    return _super.apply(this, arguments);
  }

  _createClass(Brief, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "pm-list-brief",
        style: this.props.style
      }, this.props.children);
    }
  }]);

  return Brief;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var ListItem = /*#__PURE__*/function (_React$Component2) {
  _inherits(ListItem, _React$Component2);

  var _super2 = _createSuper(ListItem);

  function ListItem(props) {
    var _this;

    _classCallCheck(this, ListItem);

    _this = _super2.call(this, props);

    _this.onClick = function (ev) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          platform = _this$props.platform;
      var isAndroid = platform === "android";

      if (!!onClick && isAndroid) {
        if (_this.debounceTimeout) {
          clearTimeout(_this.debounceTimeout);
          _this.debounceTimeout = null;
        }

        var Item = ev.currentTarget;
        var RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
        var ClientRect = ev.currentTarget.getBoundingClientRect();
        var pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
        var pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
        var coverRippleStyle = {
          width: "".concat(RippleWidth, "px"),
          height: "".concat(RippleWidth, "px"),
          left: "".concat(pointX, "px"),
          top: "".concat(pointY, "px")
        };

        _this.setState({
          coverRippleStyle: coverRippleStyle,
          RippleClicked: true
        }, function () {
          _this.debounceTimeout = setTimeout(function () {
            _this.setState({
              coverRippleStyle: {
                display: "none"
              },
              RippleClicked: false
            });
          }, 1000);
        });
      }

      if (onClick) {
        onClick(ev);
      }
    };

    _this.state = {
      coverRippleStyle: {
        display: "none"
      },
      RippleClicked: false
    };
    return _this;
  }

  _createClass(ListItem, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _classnames3,
          _classnames4,
          _this2 = this;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          activeStyle = _a.activeStyle,
          error = _a.error,
          align = _a.align,
          wrap = _a.wrap,
          disabled = _a.disabled,
          children = _a.children,
          multipleLine = _a.multipleLine,
          thumb = _a.thumb,
          extra = _a.extra,
          arrow = _a.arrow,
          onClick = _a.onClick,
          restProps = __rest(_a, ["prefixCls", "className", "activeStyle", "error", "align", "wrap", "disabled", "children", "multipleLine", "thumb", "extra", "arrow", "onClick"]);

      var platform = restProps.platform,
          otherProps = __rest(restProps, ["platform"]);

      var _this$state = this.state,
          coverRippleStyle = _this$state.coverRippleStyle,
          RippleClicked = _this$state.RippleClicked;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-item"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-item-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-item-error"), error), _defineProperty(_classnames, "".concat(prefixCls, "-item-top"), align === "top"), _defineProperty(_classnames, "".concat(prefixCls, "-item-middle"), align === "middle"), _defineProperty(_classnames, "".concat(prefixCls, "-item-bottom"), align === "bottom"), _classnames));
      var rippleCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-ripple"), _defineProperty({}, "".concat(prefixCls, "-ripple-animate"), RippleClicked));
      var lineCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-line"), (_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefixCls, "-line-multiple"), multipleLine), _defineProperty(_classnames3, "".concat(prefixCls, "-line-wrap"), wrap), _classnames3));
      var arrowCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-arrow"), (_classnames4 = {}, _defineProperty(_classnames4, "".concat(prefixCls, "-arrow-horizontal"), arrow === "horizontal"), _defineProperty(_classnames4, "".concat(prefixCls, "-arrow-vertical"), arrow === "down" || arrow === "up"), _defineProperty(_classnames4, "".concat(prefixCls, "-arrow-vertical-up"), arrow === "up"), _classnames4));
      var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({}, otherProps, {
        onClick: function onClick(ev) {
          _this2.onClick(ev);
        },
        className: wrapCls
      }), thumb ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-thumb")
      }, typeof thumb === "string" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: thumb
      }) : thumb) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: lineCls
      }, children !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-content")
      }, children), extra !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra), arrow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: arrowCls,
        "aria-hidden": "true"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: coverRippleStyle,
        className: rippleCls
      }));
      var touchProps = {};
      Object.keys(otherProps).forEach(function (key) {
        if (/onTouch/i.test(key)) {
          touchProps[key] = otherProps[key];
          delete otherProps[key];
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](touch_effect__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, touchProps, {
        disabled: disabled || !onClick,
        activeStyle: activeStyle,
        activeClassName: "".concat(prefixCls, "-item-active")
      }), content);
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ListItem.defaultProps = {
  prefixCls: "pm-list",
  align: "middle",
  error: false,
  multipleLine: false,
  wrap: false,
  platform: "ios"
};
ListItem.Brief = Brief;
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "../../../components/list/index.tsx":
/*!****************************************************!*\
  !*** D:/PRO-github/resc/components/list/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem */ "../../../components/list/ListItem.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* tslint:disable:jsx-no-multiline-js */






var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          children = _a.children,
          className = _a.className,
          style = _a.style,
          renderHeader = _a.renderHeader,
          renderFooter = _a.renderFooter,
          restProps = __rest(_a, ["prefixCls", "children", "className", "style", "renderHeader", "renderFooter"]);

      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({
        className: wrapCls,
        style: style
      }, restProps), renderHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-header")
      }, typeof renderHeader === "function" ? renderHeader() : renderHeader) : null, children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-body")
      }, children) : null, renderFooter ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-footer")
      }, typeof renderFooter === "function" ? renderFooter() : renderFooter) : null);
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


List.Item = _ListItem__WEBPACK_IMPORTED_MODULE_2__["default"];
List.defaultProps = {
  prefixCls: "pm-list"
};

/***/ }),

/***/ "../../../components/list/style/index.less":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/components/list/style/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/list/style/index.tsx":
/*!**********************************************************!*\
  !*** D:/PRO-github/resc/components/list/style/index.tsx ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/list/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/nav-bar/index.tsx":
/*!*******************************************************!*\
  !*** D:/PRO-github/resc/components/nav-bar/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var NavBar = /*#__PURE__*/function (_React$Component) {
  _inherits(NavBar, _React$Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _super.apply(this, arguments);
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          mode = _a.mode,
          icon = _a.icon,
          onLeftClick = _a.onLeftClick,
          leftContent = _a.leftContent,
          rightContent = _a.rightContent,
          restProps = __rest(_a, ["prefixCls", "className", "children", "mode", "icon", "onLeftClick", "leftContent", "rightContent"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({}, restProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefixCls, "".concat(prefixCls, "-").concat(mode))
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-left"),
        role: "button",
        onClick: onLeftClick
      }, icon ?
      /*#__PURE__*/
      // tslint:disable-next-line:jsx-no-multiline-js
      react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "".concat(prefixCls, "-left-icon"),
        "aria-hidden": "true"
      }, icon) : null, leftContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-title")
      }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-right")
      }, rightContent));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


NavBar.defaultProps = {
  prefixCls: "pm-navbar",
  mode: "dark",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onLeftClick: function onLeftClick() {}
};

/***/ }),

/***/ "../../../components/nav-bar/style/index.less":
/*!**************************************************************!*\
  !*** D:/PRO-github/resc/components/nav-bar/style/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/nav-bar/style/index.tsx":
/*!*************************************************************!*\
  !*** D:/PRO-github/resc/components/nav-bar/style/index.tsx ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/nav-bar/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/progress/index.tsx":
/*!********************************************************!*\
  !*** D:/PRO-github/resc/components/progress/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Progress; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var Progress = /*#__PURE__*/function (_React$Component) {
  _inherits(Progress, _React$Component);

  var _super = _createSuper(Progress);

  function Progress() {
    _classCallCheck(this, Progress);

    return _super.apply(this, arguments);
  }

  _createClass(Progress, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (this.props.appearTransition) {
        setTimeout(function () {
          if (_this.barRef) {
            _this.barRef.style.width = "".concat(_this.props.percent, "%");
          }
        }, 10);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          position = _this$props.position,
          unfilled = _this$props.unfilled,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          _this$props$barStyle = _this$props.barStyle,
          barStyle = _this$props$barStyle === void 0 ? {} : _this$props$barStyle;
      var percentStyle = {
        width: !this.props.appearTransition ? "".concat(this.props.percent, "%") : 0,
        height: 0
      };
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-outer"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-fixed-outer"), position === "fixed"), _defineProperty(_classnames, "".concat(prefixCls, "-hide-outer"), !unfilled), _classnames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: style,
        className: wrapCls,
        role: "progressbar",
        "aria-valuenow": this.props.percent,
        "aria-valuemin": 0,
        "aria-valuemax": 100
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        ref: function ref(el) {
          return _this2.barRef = el;
        },
        className: "".concat(prefixCls, "-bar"),
        style: _extends(_extends({}, barStyle), percentStyle)
      }));
    }
  }]);

  return Progress;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Progress.defaultProps = {
  prefixCls: "pm-progress",
  percent: 0,
  position: "fixed",
  unfilled: true,
  appearTransition: false
};

/***/ }),

/***/ "../../../components/progress/style/index.less":
/*!***************************************************************!*\
  !*** D:/PRO-github/resc/components/progress/style/index.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/progress/style/index.tsx":
/*!**************************************************************!*\
  !*** D:/PRO-github/resc/components/progress/style/index.tsx ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/progress/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/rp-checkbox/Checkbox.tsx":
/*!**************************************************************!*\
  !*** D:/PRO-github/resc/components/rp-checkbox/Checkbox.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/prop-types */





var Checkbox = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, props);

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (disabled) {
        return;
      }

      if (!("checked" in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      if (onChange) {
        onChange({
          target: _extends(_extends({}, _this.props), {
            checked: e.target.checked
          }),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    var checked = "checked" in props ? props.checked : props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          style = _a.style,
          name = _a.name,
          id = _a.id,
          type = _a.type,
          disabled = _a.disabled,
          readOnly = _a.readOnly,
          tabIndex = _a.tabIndex,
          onClick = _a.onClick,
          onFocus = _a.onFocus,
          onBlur = _a.onBlur,
          autoFocus = _a.autoFocus,
          value = _a.value,
          required = _a.required,
          others = __rest(_a, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "autoFocus", "value", "required"]);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") {
          ;
          prev[key] = others[key];
        }

        return prev;
      }, {});
      var checked = this.state.checked;
      var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), checked), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: classString,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
        name: name,
        id: id,
        type: type,
        required: required,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: "".concat(prefixCls, "-input"),
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "".concat(prefixCls, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("checked" in nextProps && nextProps.checked !== prevState.checked) {
        return {
          checked: nextProps.checked
        };
      }

      return null;
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Checkbox.defaultProps = {
  prefixCls: "rp-checkbox",
  className: "",
  style: {},
  type: "checkbox",
  defaultChecked: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onFocus: function onFocus() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBlur: function onBlur() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "../../../components/rp-checkbox/index.tsx":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/components/rp-checkbox/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "../../../components/rp-checkbox/Checkbox.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../components/rp-checkbox/style/index.less":
/*!******************************************************************!*\
  !*** D:/PRO-github/resc/components/rp-checkbox/style/index.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/rp-checkbox/style/index.tsx":
/*!*****************************************************************!*\
  !*** D:/PRO-github/resc/components/rp-checkbox/style/index.tsx ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _list_style___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../list/style/ */ "../../../components/list/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "../../../components/rp-checkbox/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../../components/rp-swipeout/Swipeout.tsx":
/*!**************************************************************!*\
  !*** D:/PRO-github/resc/components/rp-swipeout/Swipeout.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swipeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gesture_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gesture-effect */ "../../gesture-effect/build/gesture-effect.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




 // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// http://caniuse.com/#search=match

function closest(el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }

  return null;
}

var Swipeout = /*#__PURE__*/function (_React$Component) {
  _inherits(Swipeout, _React$Component);

  var _super = _createSuper(Swipeout);

  function Swipeout(props) {
    var _this;

    _classCallCheck(this, Swipeout);

    _this = _super.call(this, props);

    _this.onCloseSwipe = function (ev) {
      if (!(_this.openedLeft || _this.openedRight)) {
        return;
      }

      var pNode = closest(ev.target, ".".concat(_this.props.prefixCls, "-actions"));

      if (!pNode) {
        ev.preventDefault();

        _this.close();
      }
    };

    _this.onPanStart = function (e) {
      var direction = e.direction,
          moveStatus = e.moveStatus;
      var deltaX = moveStatus.x; // http://hammerjs.github.io/api/#directions

      var isLeft = direction === 2;
      var isRight = direction === 4;

      if (!isLeft && !isRight) {
        return;
      }

      var _this$props = _this.props,
          left = _this$props.left,
          right = _this$props.right;
      _this.needShowRight = isLeft && right.length > 0;
      _this.needShowLeft = isRight && left.length > 0;

      if (_this.left) {
        _this.left.style.visibility = _this.needShowRight ? "hidden" : "visible";
      }

      if (_this.right) {
        _this.right.style.visibility = _this.needShowLeft ? "hidden" : "visible";
      }

      if (_this.needShowLeft || _this.needShowRight) {
        _this.swiping = true;

        _this.setState({
          swiping: _this.swiping
        });

        _this._setStyle(deltaX);
      }
    };

    _this.onPanMove = function (e) {
      var moveStatus = e.moveStatus,
          srcEvent = e.srcEvent;
      var deltaX = moveStatus.x;

      if (!_this.swiping) {
        return;
      } // fixed scroll when it's pan and moving.


      if (srcEvent && srcEvent.preventDefault) {
        srcEvent.preventDefault();
      }

      _this._setStyle(deltaX);
    };

    _this.onPanEnd = function (e) {
      if (!_this.swiping) {
        return;
      }

      var moveStatus = e.moveStatus;
      var deltaX = moveStatus.x;
      var needOpenRight = _this.needShowRight && Math.abs(deltaX) > _this.btnsRightWidth / 2;
      var needOpenLeft = _this.needShowLeft && Math.abs(deltaX) > _this.btnsLeftWidth / 2;

      if (needOpenRight) {
        _this.doOpenRight();
      } else if (needOpenLeft) {
        _this.doOpenLeft();
      } else {
        _this.close();
      }

      _this.swiping = false;

      _this.setState({
        swiping: _this.swiping
      });

      _this.needShowLeft = false;
      _this.needShowRight = false;
    };

    _this.doOpenLeft = function () {
      _this.open(_this.btnsLeftWidth, true, false);
    };

    _this.doOpenRight = function () {
      _this.open(-_this.btnsRightWidth, true, false);
    }; // set content & actions style


    _this._setStyle = function (value) {
      var limit = value > 0 ? _this.btnsLeftWidth : -_this.btnsRightWidth;

      var contentLeft = _this._getContentEasing(value, limit);

      _this.content.style.left = "".concat(contentLeft, "px");

      if (_this.cover) {
        _this.cover.style.display = Math.abs(value) > 0 ? "block" : "none";
        _this.cover.style.left = "".concat(contentLeft, "px");
      }
    };

    _this.open = function (value, openedLeft, openedRight) {
      if (!_this.openedLeft && !_this.openedRight && _this.props.onOpen) {
        _this.props.onOpen();
      }

      _this.openedLeft = openedLeft;
      _this.openedRight = openedRight;

      _this._setStyle(value);
    };

    _this.close = function () {
      if ((_this.openedLeft || _this.openedRight) && _this.props.onClose) {
        _this.props.onClose();
      }

      _this._setStyle(0);

      _this.openedLeft = false;
      _this.openedRight = false;
    };

    _this.onTouchMove = function (e) {
      if (_this.swiping) {
        e.preventDefault();
      }
    };

    _this.state = {
      swiping: false
    };
    _this.openedLeft = false;
    _this.openedRight = false;
    return _this;
  }

  _createClass(Swipeout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.btnsLeftWidth = this.left ? this.left.offsetWidth : 0;
      this.btnsRightWidth = this.right ? this.right.offsetWidth : 0;
      document.body.addEventListener("touchstart", this.onCloseSwipe, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener("touchstart", this.onCloseSwipe, true);
    } // left & right button click

  }, {
    key: "onBtnClick",
    value: function onBtnClick(ev, btn) {
      var onPress = btn.onPress;

      if (onPress) {
        onPress(ev);
      }

      if (this.props.autoClose) {
        this.close();
      }
    }
  }, {
    key: "_getContentEasing",
    value: function _getContentEasing(value, limit) {
      // limit content style left when value > actions width
      var delta = Math.abs(value) - Math.abs(limit);
      var isOverflow = delta > 0;
      var factor = limit > 0 ? 1 : -1;

      if (isOverflow) {
        value = limit + Math.pow(delta, 0.85) * factor;
        return Math.abs(value) > Math.abs(limit) ? limit : value;
      }

      return value;
    }
  }, {
    key: "renderButtons",
    value: function renderButtons(buttons, _ref) {
      var _this2 = this;

      var prefixCls = this.props.prefixCls;
      return buttons && buttons.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-actions ").concat(prefixCls, "-actions-").concat(_ref),
        ref: function ref(el) {
          return _this2[_ref] = el;
        }
      }, buttons.map(function (btn, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i // eslint-disable-next-line no-prototype-builtins
          ,
          className: "".concat(prefixCls, "-btn ").concat(btn.hasOwnProperty("className") ? btn.className : ""),
          style: btn.style,
          role: "button",
          onClick: function onClick(e) {
            return _this2.onBtnClick(e, btn);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(prefixCls, "-btn-text")
        }, btn.text || "Click"));
      })) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          left = _a.left,
          right = _a.right,
          disabled = _a.disabled,
          children = _a.children,
          restProps = __rest(_a, ["prefixCls", "left", "right", "disabled", "children"]);

      var autoClose = restProps.autoClose,
          onOpen = restProps.onOpen,
          onClose = restProps.onClose,
          divProps = __rest(restProps, ["autoClose", "onOpen", "onClose"]);

      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, _defineProperty({}, "".concat(prefixCls, "-swiping"), this.state.swiping));
      var refProps = {
        // eslint-disable-next-line react/no-find-dom-node
        ref: function ref(el) {
          return _this3.content = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(el);
        }
      };
      return (left.length || right.length) && !disabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
        className: cls
      }, divProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-cover"),
        ref: function ref(el) {
          return _this3.cover = el;
        }
      }), this.renderButtons(left, "left"), this.renderButtons(right, "right"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gesture_effect__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        onTouchMove: this.onTouchMove,
        onPanStart: this.onPanStart,
        onPanMove: this.onPanMove,
        onPanEnd: this.onPanEnd,
        onPanCancel: this.onPanEnd,
        onSwipeLeft: this.doOpenRight,
        onSwipeRight: this.doOpenLeft,
        direction: "horizontal"
      }, refProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, refProps, divProps), children);
    }
  }]);

  return Swipeout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Swipeout.defaultProps = {
  prefixCls: "rp-swipeout",
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOpen: function onOpen() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
};

/***/ }),

/***/ "../../../components/rp-swipeout/index.tsx":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/components/rp-swipeout/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Swipeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Swipeout */ "../../../components/rp-swipeout/Swipeout.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Swipeout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../components/rp-swipeout/style/index.less":
/*!******************************************************************!*\
  !*** D:/PRO-github/resc/components/rp-swipeout/style/index.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/rp-swipeout/style/index.tsx":
/*!*****************************************************************!*\
  !*** D:/PRO-github/resc/components/rp-swipeout/style/index.tsx ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _list_style___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../list/style/ */ "../../../components/list/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "../../../components/rp-swipeout/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../../components/search-bar/PropsType.tsx":
/*!**************************************************************!*\
  !*** D:/PRO-github/resc/components/search-bar/PropsType.tsx ***!
  \**************************************************************/
/*! exports provided: defaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}

var defaultProps = {
  prefixCls: "pm-search",
  placeholder: "",
  onSubmit: noop,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onClear: noop,
  showCancelButton: false,
  disabled: false
};

/***/ }),

/***/ "../../../components/search-bar/index.tsx":
/*!**********************************************************!*\
  !*** D:/PRO-github/resc/components/search-bar/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var touch_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! touch-effect */ "../../touch-effect/build/touch-effect.es.js");
/* harmony import */ var _util_getDataAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_util/getDataAttr */ "../../../components/_util/getDataAttr.tsx");
/* harmony import */ var _util_getLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/getLocale */ "../../../components/_util/getLocale.tsx");
/* harmony import */ var _PropsType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PropsType */ "../../../components/search-bar/PropsType.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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









function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }

  return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

var SearchBar = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  var _super = _createSuper(SearchBar);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _super.call(this, props);

    _this.onSubmit = function (e) {
      e.preventDefault();

      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state.value || "");
      }

      if (_this.inputRef) {
        _this.inputRef.blur();
      }
    };

    _this.onChange = function (e) {
      if (!_this.state.focus) {
        _this.setState({
          focus: true
        });
      }

      var value = e.target.value;

      if (!("value" in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    };

    _this.onFocus = function () {
      _this.setState({
        focus: true
      });

      _this.firstFocus = true;

      if (_this.props.onFocus) {
        _this.props.onFocus();
      }
    };

    _this.onBlur = function () {
      _this.onBlurTimeout = onNextFrame(function () {
        if (!_this.blurFromOnClear) {
          if (document.activeElement !== _this.inputRef) {
            _this.setState({
              focus: false
            });
          }
        }

        _this.blurFromOnClear = false;
      });

      if (_this.props.onBlur) {
        // fix autoFocus item blur with flash
        setTimeout(function () {
          // fix ios12 wechat browser click failure after input
          if (document.body) {
            // eslint-disable-next-line no-self-assign
            document.body.scrollTop = document.body.scrollTop;
          }
        }, 100);

        _this.props.onBlur();
      }
    };

    _this.onClear = function () {
      _this.doClear();
    };

    _this.doClear = function () {
      var blurFromOnClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      _this.blurFromOnClear = blurFromOnClear;

      if (!("value" in _this.props)) {
        _this.setState({
          value: ""
        });
      }

      if (_this.props.onClear) {
        _this.props.onClear("");
      }

      if (_this.props.onChange) {
        _this.props.onChange("");
      }

      if (blurFromOnClear) {
        _this.focus();
      }
    };

    _this.onCancel = function () {
      if (_this.props.onCancel) {
        _this.props.onCancel(_this.state.value || "");
      } else {
        _this.doClear(false);
      }
    };

    _this.focus = function () {
      if (_this.inputRef) {
        _this.inputRef.focus();
      }
    };

    var value;

    if ("value" in props) {
      value = props.value || "";
    } else if ("defaultValue" in props) {
      value = props.defaultValue;
    } else {
      value = "";
    }

    _this.state = {
      value: value,
      focus: false
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.rightBtnRef) {
        var initBtn = window.getComputedStyle(this.rightBtnRef);
        this.rightBtnInitMarginleft = initBtn.marginLeft;
      }

      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.syntheticPhRef) {
        if (this.inputContainerRef && this.inputContainerRef.className.indexOf("".concat(this.props.prefixCls, "-start")) > -1) {
          // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
          // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
          if (this.syntheticPhContainerRef) {
            var realWidth = this.syntheticPhContainerRef.getBoundingClientRect().width; // 包含小数

            this.syntheticPhRef.style.width = "".concat(Math.ceil(realWidth), "px");
          }

          if (!this.props.showCancelButton && this.rightBtnRef) {
            this.rightBtnRef.style.marginRight = "0";
          }
        } else {
          this.syntheticPhRef.style.width = "100%";

          if (!this.props.showCancelButton && this.rightBtnRef) {
            this.rightBtnRef.style.marginRight = "-".concat(this.rightBtnRef.offsetWidth + (this.rightBtnInitMarginleft != null ? parseInt(this.rightBtnInitMarginleft, 10) : 0), "px");
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onBlurTimeout) {
        clearNextFrameAction(this.onBlurTimeout);
        this.onBlurTimeout = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames3,
          _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          showCancelButton = _this$props.showCancelButton,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          style = _this$props.style,
          maxLength = _this$props.maxLength; // tslint:disable-next-line:variable-name

      var _locale = Object(_util_getLocale__WEBPACK_IMPORTED_MODULE_5__["getComponentLocale"])(this.props, this.context, "SearchBar", function () {
        return __webpack_require__(/*! ./locale/zh_CN */ "../../../components/search-bar/locale/zh_CN.tsx");
      });

      var cancelText = _locale.cancelText;
      var _this$state = this.state,
          value = _this$state.value,
          focus = _this$state.focus;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-start"), !!(focus || value && value.length > 0)));
      var clearCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-clear"), _defineProperty({}, "".concat(prefixCls, "-clear-show"), !!(focus && value && value.length > 0)));
      var cancelCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-cancel"), (_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefixCls, "-cancel-show"), !!(showCancelButton || focus || value && value.length > 0)), _defineProperty(_classnames3, "".concat(prefixCls, "-cancel-anim"), this.firstFocus), _classnames3));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", {
        onSubmit: this.onSubmit,
        className: wrapCls,
        style: style,
        ref: function ref(el) {
          return _this2.inputContainerRef = el;
        },
        action: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-input")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-synthetic-ph"),
        ref: function ref(el) {
          return _this2.syntheticPhRef = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "".concat(prefixCls, "-synthetic-ph-container"),
        ref: function ref(el) {
          return _this2.syntheticPhContainerRef = el;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "".concat(prefixCls, "-synthetic-ph-icon")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "".concat(prefixCls, "-synthetic-ph-placeholder") // tslint:disable-next-line:jsx-no-multiline-js
        ,
        style: {
          visibility: placeholder && !value ? "visible" : "hidden"
        }
      }, placeholder))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", _extends({
        type: "search",
        className: "".concat(prefixCls, "-value"),
        value: value,
        disabled: disabled,
        placeholder: placeholder,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        maxLength: maxLength
      }, Object(_util_getDataAttr__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](touch_effect__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activeClassName: "".concat(prefixCls, "-clear-active")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        onClick: this.onClear,
        className: clearCls
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: cancelCls,
        onClick: this.onCancel,
        ref: function ref(el) {
          return _this2.rightBtnRef = el;
        }
      }, this.props.cancelText || cancelText));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("value" in nextProps && nextProps.value !== prevState.value) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


SearchBar.defaultProps = _PropsType__WEBPACK_IMPORTED_MODULE_6__["defaultProps"];
SearchBar.contextTypes = {
  antLocale: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]
};

/***/ }),

/***/ "../../../components/search-bar/locale/zh_CN.tsx":
/*!*****************************************************************!*\
  !*** D:/PRO-github/resc/components/search-bar/locale/zh_CN.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cancelText: "取消"
});

/***/ }),

/***/ "../../../components/search-bar/style/index.less":
/*!*****************************************************************!*\
  !*** D:/PRO-github/resc/components/search-bar/style/index.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/search-bar/style/index.tsx":
/*!****************************************************************!*\
  !*** D:/PRO-github/resc/components/search-bar/style/index.tsx ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/search-bar/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/segmented-control/index.tsx":
/*!*****************************************************************!*\
  !*** D:/PRO-github/resc/components/segmented-control/index.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SegmentedControl; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var touch_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! touch-effect */ "../../touch-effect/build/touch-effect.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var SegmentedControl = /*#__PURE__*/function (_React$Component) {
  _inherits(SegmentedControl, _React$Component);

  var _super = _createSuper(SegmentedControl);

  function SegmentedControl(props) {
    var _this;

    _classCallCheck(this, SegmentedControl);

    _this = _super.call(this, props);
    _this.state = {
      selectedIndex: props.selectedIndex
    };
    return _this;
  }

  _createClass(SegmentedControl, [{
    key: "onClick",
    value: function onClick(e, index, value) {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          onValueChange = _this$props.onValueChange;

      if (!disabled && this.state.selectedIndex !== index) {
        // just do a mock so that the api to be the same as react-native
        e.nativeEvent = e.nativeEvent ? e.nativeEvent : {};
        e.nativeEvent.selectedSegmentIndex = index;
        e.nativeEvent.value = value;

        if (onChange) {
          onChange(e);
        }

        if (onValueChange) {
          onValueChange(value);
        }

        this.setState({
          selectedIndex: index
        });
      }
    }
  }, {
    key: "renderSegmentItem",
    value: function renderSegmentItem(idx, value, selected) {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          disabled = _this$props2.disabled,
          tintColor = _this$props2.tintColor;
      var itemCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-item"), _defineProperty({}, "".concat(prefixCls, "-item-selected"), selected));
      var itemStyle = {
        color: selected ? "#fff" : tintColor,
        backgroundColor: selected ? tintColor : "transparent",
        borderColor: tintColor
      };
      var activeInnerStyle = tintColor ? {
        backgroundColor: tintColor
      } : {};
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](touch_effect__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: idx,
        disabled: disabled,
        activeClassName: "".concat(prefixCls, "-item-active")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: itemCls,
        style: itemStyle,
        role: "tab",
        "aria-selected": selected && !disabled,
        "aria-disabled": disabled,
        onClick: disabled ? undefined : function (e) {
          return _this2.onClick(e, idx, value);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "".concat(prefixCls, "-item-inner"),
        style: activeInnerStyle
      }), value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          className = _this$props3.className,
          prefixCls = _this$props3.prefixCls,
          style = _this$props3.style,
          disabled = _this$props3.disabled,
          _this$props3$values = _this$props3.values,
          values = _this$props3$values === void 0 ? [] : _this$props3$values;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefixCls, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: wrapCls,
        style: style,
        role: "tablist"
      }, values.map(function (value, idx) {
        return (// tslint:disable-next-line:jsx-no-multiline-js
          _this3.renderSegmentItem(idx, value, idx === _this3.state.selectedIndex)
        );
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.selectedIndex !== prevState.selectedIndex) {
        return {
          selectedIndex: nextProps.selectedIndex
        };
      }

      return null;
    }
  }]);

  return SegmentedControl;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


SegmentedControl.defaultProps = {
  prefixCls: "pm-segment",
  selectedIndex: 0,
  disabled: false,
  values: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onValueChange: function onValueChange() {},
  style: {},
  tintColor: ""
};

/***/ }),

/***/ "../../../components/segmented-control/style/index.less":
/*!************************************************************************!*\
  !*** D:/PRO-github/resc/components/segmented-control/style/index.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/segmented-control/style/index.tsx":
/*!***********************************************************************!*\
  !*** D:/PRO-github/resc/components/segmented-control/style/index.tsx ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/segmented-control/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/style/index.less":
/*!******************************************************!*\
  !*** D:/PRO-github/resc/components/style/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/style/index.tsx":
/*!*****************************************************!*\
  !*** D:/PRO-github/resc/components/style/index.tsx ***!
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

/***/ "../../../components/swipe-action/index.tsx":
/*!************************************************************!*\
  !*** D:/PRO-github/resc/components/swipe-action/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rp_swipeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rp-swipeout */ "../../../components/rp-swipeout/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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





var SwipeAction = /*#__PURE__*/function (_React$Component) {
  _inherits(SwipeAction, _React$Component);

  var _super = _createSuper(SwipeAction);

  function SwipeAction() {
    _classCallCheck(this, SwipeAction);

    return _super.apply(this, arguments);
  }

  _createClass(SwipeAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          prefixCls = _this$props.prefixCls,
          _this$props$left = _this$props.left,
          left = _this$props$left === void 0 ? [] : _this$props$left,
          _this$props$right = _this$props.right,
          right = _this$props$right === void 0 ? [] : _this$props$right,
          autoClose = _this$props.autoClose,
          disabled = _this$props.disabled,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose,
          children = _this$props.children;
      var wrapClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className);
      return left.length || right.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        style: style,
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_rp_swipeout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        prefixCls: prefixCls,
        left: left,
        right: right,
        autoClose: autoClose,
        disabled: disabled,
        onOpen: onOpen,
        onClose: onClose
      }, children)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        style: style,
        className: wrapClass
      }, children);
    }
  }]);

  return SwipeAction;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

SwipeAction.defaultProps = {
  prefixCls: "pm-swipe",
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOpen: function onOpen() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
};
/* harmony default export */ __webpack_exports__["default"] = (SwipeAction);

/***/ }),

/***/ "../../../components/swipe-action/style/index.less":
/*!*******************************************************************!*\
  !*** D:/PRO-github/resc/components/swipe-action/style/index.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/swipe-action/style/index.tsx":
/*!******************************************************************!*\
  !*** D:/PRO-github/resc/components/swipe-action/style/index.tsx ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/swipe-action/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/switch/index.tsx":
/*!******************************************************!*\
  !*** D:/PRO-github/resc/components/switch/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Switch; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var Switch = /*#__PURE__*/function (_React$Component) {
  _inherits(Switch, _React$Component);

  var _super = _createSuper(Switch);

  function Switch() {
    var _this;

    _classCallCheck(this, Switch);

    _this = _super.apply(this, arguments);

    _this.onChange = function (e) {
      var checked = e.target.checked;

      if (_this.props.onChange) {
        _this.props.onChange(checked);
      }
    };

    _this.onClick = function (e) {
      if (_this.props.onClick) {
        var val; // tslint:disable-next-line:prefer-conditional-expression

        if (e && e.target && e.target.checked !== undefined) {
          val = e.target.checked;
        } else {
          val = _this.props.checked;
        }

        _this.props.onClick(val);
      }
    };

    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          name = _a.name,
          checked = _a.checked,
          disabled = _a.disabled,
          className = _a.className,
          platform = _a.platform,
          color = _a.color,
          restProps = __rest(_a, ["prefixCls", "name", "checked", "disabled", "className", "platform", "color"]);

      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-android"), platform === "android"));
      var fackInputCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()("checkbox", _defineProperty({}, "checkbox-disabled", disabled));
      var globalProps = Object.keys(restProps).reduce(function (prev, key) {
        if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") {
          prev[key] = restProps[key];
        }

        return prev;
      }, {});
      var style = this.props.style || {};

      if (color && checked) {
        style.backgroundColor = color;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
        className: wrapCls
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", _extends({
        type: "checkbox",
        name: name,
        className: "".concat(prefixCls, "-checkbox"),
        disabled: disabled,
        checked: checked,
        onChange: this.onChange,
        value: checked ? "on" : "off"
      }, !disabled ? {
        onClick: this.onClick
      } : {}, globalProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({
        className: fackInputCls,
        style: style
      }, disabled ? {
        onClick: this.onClick
      } : {})));
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Switch.defaultProps = {
  prefixCls: "pm-switch",
  name: "",
  checked: false,
  disabled: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {},
  platform: "ios",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};

/***/ }),

/***/ "../../../components/switch/style/index.less":
/*!*************************************************************!*\
  !*** D:/PRO-github/resc/components/switch/style/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/switch/style/index.tsx":
/*!************************************************************!*\
  !*** D:/PRO-github/resc/components/switch/style/index.tsx ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/switch/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/white-space/index.tsx":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/components/white-space/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WhiteSpace; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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




var WhiteSpace = /*#__PURE__*/function (_React$Component) {
  _inherits(WhiteSpace, _React$Component);

  var _super = _createSuper(WhiteSpace);

  function WhiteSpace() {
    _classCallCheck(this, WhiteSpace);

    return _super.apply(this, arguments);
  }

  _createClass(WhiteSpace, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          size = _this$props.size,
          className = _this$props.className,
          style = _this$props.style,
          onClick = _this$props.onClick;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, "".concat(prefixCls, "-").concat(size), className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: wrapCls,
        style: style,
        onClick: onClick
      });
    }
  }]);

  return WhiteSpace;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


WhiteSpace.defaultProps = {
  prefixCls: "pm-whitespace",
  size: "md"
};

/***/ }),

/***/ "../../../components/white-space/style/index.less":
/*!******************************************************************!*\
  !*** D:/PRO-github/resc/components/white-space/style/index.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/white-space/style/index.tsx":
/*!*****************************************************************!*\
  !*** D:/PRO-github/resc/components/white-space/style/index.tsx ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/white-space/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../components/wing-blank/index.tsx":
/*!**********************************************************!*\
  !*** D:/PRO-github/resc/components/wing-blank/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WingBlank; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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




var WingBlank = /*#__PURE__*/function (_React$Component) {
  _inherits(WingBlank, _React$Component);

  var _super = _createSuper(WingBlank);

  function WingBlank() {
    _classCallCheck(this, WingBlank);

    return _super.apply(this, arguments);
  }

  _createClass(WingBlank, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          size = _this$props.size,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style;
      var wrapCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, "".concat(prefixCls, "-").concat(size), className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: wrapCls,
        style: style
      }, children);
    }
  }]);

  return WingBlank;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


WingBlank.defaultProps = {
  prefixCls: "pm-wingblank",
  size: "lg"
};

/***/ }),

/***/ "../../../components/wing-blank/style/index.less":
/*!*****************************************************************!*\
  !*** D:/PRO-github/resc/components/wing-blank/style/index.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../../components/wing-blank/style/index.tsx":
/*!****************************************************************!*\
  !*** D:/PRO-github/resc/components/wing-blank/style/index.tsx ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/ */ "../../../components/style/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "../../../components/wing-blank/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../../index.js":
/*!***********************************!*\
  !*** D:/PRO-github/resc/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the entry file for `npm run dist`
 */

/**
 * build for `dist/react-pearls.css`
 */
var req = __webpack_require__("../../../components sync recursive ^\\.\\/[^_][\\w-]+\\/style\\/index\\.tsx?$");

req.keys().forEach(function (mod) {
  req(mod);
});
/**
 * build for `dist/react-pearls.js`
 */

module.exports = __webpack_require__(/*! ./components/index */ "../../../components/index.tsx");

/***/ }),

/***/ "../../classnames/index.js":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/node_modules/classnames/index.js ***!
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

/***/ "../../gesture-effect/build/gesture-effect.es.js":
/*!*********************************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/gesture-effect/build/gesture-effect.es.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/* tslint:disable:no-bitwise */
// http://hammerjs.github.io/api/#directions
var DIRECTION_NONE = 1; // 00001

var DIRECTION_LEFT = 2; // 00010

var DIRECTION_RIGHT = 4; // 00100

var DIRECTION_UP = 8; // 01000

var DIRECTION_DOWN = 16; // 10000

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT; // 00110 6

var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN; // 11000 24

var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL; // 11110  30
// http://hammerjs.github.io/recognizer-press/

var PRESS = {
  time: 251
}; // http://hammerjs.github.io/recognizer-swipe/

var SWIPE = {
  threshold: 10,
  velocity: 0.3
};

/* tslint:disable:no-bitwise */

function _calcTriangleDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

function _calcAngle(x, y) {
  var radian = Math.atan2(y, x);
  return 180 / (Math.PI / radian);
}

function now() {
  return Date.now();
}
function calcMutliFingerStatus(touches) {
  if (touches.length < 2) {
    return;
  }

  var _a = touches[0],
      x1 = _a.x,
      y1 = _a.y;
  var _b = touches[1],
      x2 = _b.x,
      y2 = _b.y;
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;
  return {
    x: deltaX,
    y: deltaY,
    z: _calcTriangleDistance(deltaX, deltaY),
    angle: _calcAngle(deltaX, deltaY)
  };
}
function calcMoveStatus(startTouches, touches, time) {
  var _a = startTouches[0],
      x1 = _a.x,
      y1 = _a.y;
  var _b = touches[0],
      x2 = _b.x,
      y2 = _b.y;
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;

  var deltaZ = _calcTriangleDistance(deltaX, deltaY);

  return {
    x: deltaX,
    y: deltaY,
    z: deltaZ,
    time: time,
    velocity: deltaZ / time,
    angle: _calcAngle(deltaX, deltaY)
  };
}
function calcRotation(startMutliFingerStatus, mutliFingerStatus) {
  var startAngle = startMutliFingerStatus.angle;
  var angle = mutliFingerStatus.angle;
  return angle - startAngle;
}
function getEventName(prefix, status) {
  return prefix + status[0].toUpperCase() + status.slice(1);
}
function shouldTriggerSwipe(delta, velocity) {
  return Math.abs(delta) >= SWIPE.threshold && Math.abs(velocity) > SWIPE.velocity;
}
function shouldTriggerDirection(direction, directionSetting) {
  if (directionSetting & direction) {
    return true;
  }

  return false;
}
/**
 * @private
 * get the direction between tow points when touch moving
 * Note: will change next version
 * @param {Object} point1 coordinate point, include x & y attributes
 * @param {Object} point2 coordinate point, include x & y attributes
 * @return {Number} direction
 */

function getMovingDirection(point1, point2) {
  var x1 = point1.x,
      y1 = point1.y;
  var x2 = point2.x,
      y2 = point2.y;
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;

  if (deltaX === 0 && deltaY === 0) {
    return DIRECTION_NONE;
  }

  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    return deltaX < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
  }

  return deltaY < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}
function getDirectionEventName(direction) {
  var name;

  switch (direction) {
    case DIRECTION_NONE:
      break;

    case DIRECTION_LEFT:
      name = "left";
      break;

    case DIRECTION_RIGHT:
      name = "right";
      break;

    case DIRECTION_UP:
      name = "up";
      break;

    case DIRECTION_DOWN:
      name = "down";
      break;
  }

  return name;
}

var directionMap = {
  all: DIRECTION_ALL,
  vertical: DIRECTION_VERTICAL,
  horizontal: DIRECTION_HORIZONTAL
};

var Gesture =
/** @class */
function (_super) {
  __extends(Gesture, _super);

  function Gesture(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};

    _this.triggerEvent = function (name) {
      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      var cb = _this.props[name];

      if (typeof cb === "function") {
        // always give user gesture object as first params first
        cb.apply(void 0, __spreadArrays([_this.getGestureState()], args));
      }
    };

    _this.triggerCombineEvent = function (mainEventName, eventStatus) {
      var args = [];

      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }

      _this.triggerEvent.apply(_this, __spreadArrays([mainEventName], args));

      _this.triggerSubEvent.apply(_this, __spreadArrays([mainEventName, eventStatus], args));
    };

    _this.triggerSubEvent = function (mainEventName, eventStatus) {
      var args = [];

      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }

      if (eventStatus) {
        var subEventName = getEventName(mainEventName, eventStatus);

        _this.triggerEvent.apply(_this, __spreadArrays([subEventName], args));
      }
    };

    _this.triggerPinchEvent = function (mainEventName, eventStatus) {
      var args = [];

      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }

      var scale = _this.gesture.scale;

      if (eventStatus === "move" && typeof scale === "number") {
        if (scale > 1) {
          _this.triggerEvent("onPinchOut");
        }

        if (scale < 1) {
          _this.triggerEvent("onPinchIn");
        }
      }

      _this.triggerCombineEvent.apply(_this, __spreadArrays([mainEventName, eventStatus], args));
    };

    _this.initPressTimer = function () {
      _this.cleanPressTimer();

      _this.pressTimer = setTimeout(function () {
        _this.setGestureState({
          press: true
        });

        _this.triggerEvent("onPress");
      }, PRESS.time);
    };

    _this.cleanPressTimer = function () {
      /* tslint:disable:no-unused-expression */
      _this.pressTimer && clearTimeout(_this.pressTimer);
    };

    _this.setGestureState = function (params) {
      if (!_this.gesture) {
        _this.gesture = {};
      } // cache the previous touches


      if (_this.gesture.touches) {
        _this.gesture.preTouches = _this.gesture.touches;
      }

      _this.gesture = __assign(__assign({}, _this.gesture), params);
    };

    _this.getGestureState = function () {
      if (!_this.gesture) {
        return _this.gesture;
      } else {
        // shallow copy
        return __assign({}, _this.gesture);
      }
    };

    _this.cleanGestureState = function () {
      delete _this.gesture;
    };

    _this.getTouches = function (e) {
      return Array.prototype.slice.call(e.touches).map(function (item) {
        return {
          x: item.screenX,
          y: item.screenY
        };
      });
    };

    _this.triggerUserCb = function (status, e) {
      var cbName = getEventName("onTouch", status);

      if (cbName in _this.props) {
        _this.props[cbName](e);
      }
    };

    _this._handleTouchStart = function (e) {
      _this.triggerUserCb("start", e);

      _this.event = e;

      if (e.touches.length > 1) {
        e.preventDefault();
      }

      _this.initGestureStatus(e);

      _this.initPressTimer();

      _this.checkIfMultiTouchStart();
    };

    _this.initGestureStatus = function (e) {
      _this.cleanGestureState(); // store the gesture start state


      var startTouches = _this.getTouches(e);

      var startTime = now();
      var startMutliFingerStatus = calcMutliFingerStatus(startTouches);

      _this.setGestureState({
        startTime: startTime,
        startTouches: startTouches,
        startMutliFingerStatus: startMutliFingerStatus,

        /* copy for next time touch move cala convenient*/
        time: startTime,
        touches: startTouches,
        mutliFingerStatus: startMutliFingerStatus,
        srcEvent: _this.event
      });
    };

    _this.checkIfMultiTouchStart = function () {
      var _a = _this.props,
          enablePinch = _a.enablePinch,
          enableRotate = _a.enableRotate;
      var touches = _this.gesture.touches;

      if (touches.length > 1 && (enablePinch || enableRotate)) {
        if (enablePinch) {
          var startMutliFingerStatus = calcMutliFingerStatus(touches);

          _this.setGestureState({
            startMutliFingerStatus: startMutliFingerStatus,

            /* init pinch status */
            pinch: true,
            scale: 1
          });

          _this.triggerCombineEvent("onPinch", "start");
        }

        if (enableRotate) {
          _this.setGestureState({
            /* init rotate status */
            rotate: true,
            rotation: 0
          });

          _this.triggerCombineEvent("onRotate", "start");
        }
      }
    };

    _this._handleTouchMove = function (e) {
      _this.triggerUserCb("move", e);

      _this.event = e;

      if (!_this.gesture) {
        // sometimes weird happen: touchstart -> touchmove..touchmove.. --> touchend --> touchmove --> touchend
        // so we need to skip the unnormal event cycle after touchend
        return;
      } // not a long press


      _this.cleanPressTimer();

      _this.updateGestureStatus(e);

      _this.checkIfSingleTouchMove();

      _this.checkIfMultiTouchMove();
    };

    _this.checkIfMultiTouchMove = function () {
      var _a = _this.gesture,
          pinch = _a.pinch,
          rotate = _a.rotate,
          touches = _a.touches,
          startMutliFingerStatus = _a.startMutliFingerStatus,
          mutliFingerStatus = _a.mutliFingerStatus;

      if (!pinch && !rotate) {
        return;
      }

      if (touches.length < 2) {
        _this.setGestureState({
          pinch: false,
          rotate: false
        }); // Todo: 2 finger -> 1 finger, wait to test this situation


        pinch && _this.triggerCombineEvent("onPinch", "cancel");
        rotate && _this.triggerCombineEvent("onRotate", "cancel");
        return;
      }

      if (pinch) {
        var scale = mutliFingerStatus.z / startMutliFingerStatus.z;

        _this.setGestureState({
          scale: scale
        });

        _this.triggerPinchEvent("onPinch", "move");
      }

      if (rotate) {
        var rotation = calcRotation(startMutliFingerStatus, mutliFingerStatus);

        _this.setGestureState({
          rotation: rotation
        });

        _this.triggerCombineEvent("onRotate", "move");
      }
    };

    _this.allowGesture = function () {
      return shouldTriggerDirection(_this.gesture.direction, _this.directionSetting);
    };

    _this.checkIfSingleTouchMove = function () {
      var _a = _this.gesture,
          pan = _a.pan,
          touches = _a.touches,
          moveStatus = _a.moveStatus,
          preTouches = _a.preTouches,
          _b = _a.availablePan,
          availablePan = _b === void 0 ? true : _b;

      if (touches.length > 1) {
        _this.setGestureState({
          pan: false
        }); // Todo: 1 finger -> 2 finger, wait to test this situation


        pan && _this.triggerCombineEvent("onPan", "cancel");
        return;
      } // add avilablePan condition to fix the case in scrolling, which will cause unavailable pan move.


      if (moveStatus && availablePan) {
        var direction = getMovingDirection(preTouches[0], touches[0]);

        _this.setGestureState({
          direction: direction
        });

        var eventName = getDirectionEventName(direction);

        if (!_this.allowGesture()) {
          // if the first move is unavailable, then judge all of remaining touch movings are also invalid.
          if (!pan) {
            _this.setGestureState({
              availablePan: false
            });
          }

          return;
        }

        if (!pan) {
          _this.triggerCombineEvent("onPan", "start");

          _this.setGestureState({
            pan: true,
            availablePan: true
          });
        } else {
          _this.triggerCombineEvent("onPan", eventName);

          _this.triggerSubEvent("onPan", "move");
        }
      }
    };

    _this.checkIfMultiTouchEnd = function (status) {
      var _a = _this.gesture,
          pinch = _a.pinch,
          rotate = _a.rotate;

      if (pinch) {
        _this.triggerCombineEvent("onPinch", status);
      }

      if (rotate) {
        _this.triggerCombineEvent("onRotate", status);
      }
    };

    _this.updateGestureStatus = function (e) {
      var time = now();

      _this.setGestureState({
        time: time
      });

      if (!e.touches || !e.touches.length) {
        return;
      }

      var _a = _this.gesture,
          startTime = _a.startTime,
          startTouches = _a.startTouches,
          pinch = _a.pinch,
          rotate = _a.rotate;

      var touches = _this.getTouches(e);

      var moveStatus = calcMoveStatus(startTouches, touches, time - startTime);
      var mutliFingerStatus;

      if (pinch || rotate) {
        mutliFingerStatus = calcMutliFingerStatus(touches);
      }

      _this.setGestureState({
        /* update status snapshot */
        touches: touches,
        mutliFingerStatus: mutliFingerStatus,

        /* update duration status */
        moveStatus: moveStatus
      });
    };

    _this._handleTouchEnd = function (e) {
      _this.triggerUserCb("end", e);

      _this.event = e;

      if (!_this.gesture) {
        return;
      }

      _this.cleanPressTimer();

      _this.updateGestureStatus(e);

      _this.doSingleTouchEnd("end");

      _this.checkIfMultiTouchEnd("end");
    };

    _this._handleTouchCancel = function (e) {
      _this.triggerUserCb("cancel", e);

      _this.event = e; // Todo: wait to test cancel case

      if (!_this.gesture) {
        return;
      }

      _this.cleanPressTimer();

      _this.updateGestureStatus(e);

      _this.doSingleTouchEnd("cancel");

      _this.checkIfMultiTouchEnd("cancel");
    };

    _this.triggerAllowEvent = function (type, status) {
      if (_this.allowGesture()) {
        _this.triggerCombineEvent(type, status);
      } else {
        _this.triggerSubEvent(type, status);
      }
    };

    _this.doSingleTouchEnd = function (status) {
      var _a = _this.gesture,
          moveStatus = _a.moveStatus,
          pinch = _a.pinch,
          rotate = _a.rotate,
          press = _a.press,
          pan = _a.pan,
          direction = _a.direction;

      if (pinch || rotate) {
        return;
      }

      if (moveStatus) {
        var z = moveStatus.z,
            velocity = moveStatus.velocity;
        var swipe = shouldTriggerSwipe(z, velocity);

        _this.setGestureState({
          swipe: swipe
        });

        if (pan) {
          // pan need end, it's a process
          // sometimes, start with pan left, but end with pan right....
          _this.triggerAllowEvent("onPan", status);
        }

        if (swipe) {
          var directionEvName = getDirectionEventName(direction); // swipe just need a direction, it's a endpoint

          _this.triggerAllowEvent("onSwipe", directionEvName);

          return;
        }
      }

      if (press) {
        _this.triggerEvent("onPressUp");

        return;
      }

      _this.triggerEvent("onTap");
    };

    _this.getTouchAction = function () {
      var _a = _this.props,
          enablePinch = _a.enablePinch,
          enableRotate = _a.enableRotate;
      var directionSetting = _this.directionSetting;

      if (enablePinch || enableRotate || directionSetting === DIRECTION_ALL) {
        return "pan-x pan-y";
      }

      if (directionSetting === DIRECTION_VERTICAL) {
        return "pan-x";
      }

      if (directionSetting === DIRECTION_HORIZONTAL) {
        return "pan-y";
      }

      return "auto";
    };

    _this.directionSetting = directionMap[props.direction];
    return _this;
  }

  Gesture.prototype.componentWillUnmount = function () {
    this.cleanPressTimer();
  };

  Gesture.prototype.render = function () {
    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);
    var touchAction = this.getTouchAction();
    var events = {
      onTouchStart: this._handleTouchStart,
      onTouchMove: this._handleTouchMove,
      onTouchCancel: this._handleTouchCancel,
      onTouchEnd: this._handleTouchEnd
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, __assign(__assign({}, events), {
      style: __assign({
        touchAction: touchAction
      }, child.props.style || {})
    }));
  };

  Gesture.defaultProps = {
    enableRotate: false,
    enablePinch: false,
    direction: "all"
  };
  return Gesture;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Gesture);


/***/ }),

/***/ "../../normalize.css/normalize.css":
/*!*******************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/normalize.css/normalize.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../object-assign/index.js":
/*!**************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/object-assign/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../prop-types/checkPropTypes.js":
/*!********************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/prop-types/checkPropTypes.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../prop-types/factoryWithTypeCheckers.js":
/*!*****************************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../prop-types/index.js":
/*!***********************************************************!*\
  !*** D:/PRO-github/resc/node_modules/prop-types/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../prop-types/lib/ReactPropTypesSecret.js":
/*!******************************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../react-is/cjs/react-is.development.js":
/*!****************************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/react-is/cjs/react-is.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../react-is/index.js":
/*!*********************************************************!*\
  !*** D:/PRO-github/resc/node_modules/react-is/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../react-pearls-virtual-list/build/react-pearls-virtual-list.es.js":
/*!*******************************************************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/react-pearls-virtual-list/build/react-pearls-virtual-list.es.js ***!
  \*******************************************************************************************************/
/*! exports provided: default, ScrollDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirection", function() { return DIRECTION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var _a, _b, _c, _d, _e;

var ALIGNMENT;

(function (ALIGNMENT) {
  ALIGNMENT["AUTO"] = "auto";
  ALIGNMENT["START"] = "start";
  ALIGNMENT["CENTER"] = "center";
  ALIGNMENT["END"] = "end";
})(ALIGNMENT || (ALIGNMENT = {}));

var DIRECTION;

(function (DIRECTION) {
  DIRECTION["HORIZONTAL"] = "horizontal";
  DIRECTION["VERTICAL"] = "vertical";
})(DIRECTION || (DIRECTION = {}));

var SCROLL_CHANGE_REASON;

(function (SCROLL_CHANGE_REASON) {
  SCROLL_CHANGE_REASON["OBSERVED"] = "observed";
  SCROLL_CHANGE_REASON["REQUESTED"] = "requested";
})(SCROLL_CHANGE_REASON || (SCROLL_CHANGE_REASON = {}));

var scrollProp = (_a = {}, _a[DIRECTION.VERTICAL] = "scrollTop", _a[DIRECTION.HORIZONTAL] = "scrollLeft", _a);
var sizeProp = (_b = {}, _b[DIRECTION.VERTICAL] = "height", _b[DIRECTION.HORIZONTAL] = "width", _b);
var positionProp = (_c = {}, _c[DIRECTION.VERTICAL] = "top", _c[DIRECTION.HORIZONTAL] = "left", _c);
var marginProp = (_d = {}, _d[DIRECTION.VERTICAL] = "marginTop", _d[DIRECTION.HORIZONTAL] = "marginLeft", _d);
var oppositeMarginProp = (_e = {}, _e[DIRECTION.VERTICAL] = "marginBottom", _e[DIRECTION.HORIZONTAL] = "marginRight", _e);

/* Forked from react-virtualized 💖 */

var ListManager =
/** @class */
function () {
  function ListManager(_a) {
    var itemCount = _a.itemCount,
        itemSizeGetter = _a.itemSizeGetter,
        estimatedItemSize = _a.estimatedItemSize;
    this.itemSizeGetter = itemSizeGetter;
    this.itemCount = itemCount;
    this.estimatedItemSize = estimatedItemSize; // Cache of size and position data for items, mapped by item index.

    this.itemSizeAndPositionData = {}; // Measurements for items up to this index can be trusted; items afterward should be estimated.

    this.lastMeasuredIndex = -1;
  }

  ListManager.prototype.updateConfig = function (_a) {
    var itemCount = _a.itemCount,
        itemSizeGetter = _a.itemSizeGetter,
        estimatedItemSize = _a.estimatedItemSize;

    if (itemCount != null) {
      this.itemCount = itemCount;
    }

    if (estimatedItemSize != null) {
      this.estimatedItemSize = estimatedItemSize;
    }

    if (itemSizeGetter != null) {
      this.itemSizeGetter = itemSizeGetter;
    }
  };

  ListManager.prototype.getLastMeasuredIndex = function () {
    return this.lastMeasuredIndex;
  };
  /**
   * This method returns the size and position for the item at the specified index.
   * It just-in-time calculates (or used cached values) for items leading up to the index.
   */


  ListManager.prototype.getSizeAndPositionForIndex = function (index) {
    if (index < 0 || index >= this.itemCount) {
      throw Error("Requested index " + index + " is outside of range 0.." + this.itemCount);
    }

    if (index > this.lastMeasuredIndex) {
      var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
      var offset = lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size;

      for (var i = this.lastMeasuredIndex + 1; i <= index; i++) {
        var size = this.itemSizeGetter(i);

        if (size == null || isNaN(size)) {
          throw Error("Invalid size returned for index " + i + " of value " + size);
        }

        this.itemSizeAndPositionData[i] = {
          offset: offset,
          size: size
        };
        offset += size;
      }

      this.lastMeasuredIndex = index;
    }

    return this.itemSizeAndPositionData[index];
  };

  ListManager.prototype.getSizeAndPositionOfLastMeasuredItem = function () {
    return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : {
      offset: 0,
      size: 0
    };
  };
  /**
   * Total size of all items being measured.
   * This value will be completedly estimated initially.
   * As items as measured the estimate will be updated.
   */


  ListManager.prototype.getTotalSize = function () {
    var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
    return lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize;
  };
  /**
   * Determines a new offset that ensures a certain item is visible, given the alignment.
   *
   * @param align Desired alignment within container; one of "start" (default), "center", or "end"
   * @param containerSize Size (width or height) of the container viewport
   * @return Offset to use to ensure the specified item is visible
   */


  ListManager.prototype.getUpdatedOffsetForIndex = function (_a) {
    var _b = _a.align,
        align = _b === void 0 ? ALIGNMENT.START : _b,
        containerSize = _a.containerSize,
        currentOffset = _a.currentOffset,
        targetIndex = _a.targetIndex;

    if (containerSize <= 0) {
      return 0;
    }

    var datum = this.getSizeAndPositionForIndex(targetIndex);
    var maxOffset = datum.offset;
    var minOffset = maxOffset - containerSize + datum.size;
    var idealOffset;

    switch (align) {
      case ALIGNMENT.END:
        idealOffset = minOffset;
        break;

      case ALIGNMENT.CENTER:
        idealOffset = maxOffset - (containerSize - datum.size) / 2;
        break;

      case ALIGNMENT.START:
        idealOffset = maxOffset;
        break;

      default:
        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
    }

    var totalSize = this.getTotalSize();
    return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
  };

  ListManager.prototype.getVisibleRange = function (_a) {
    var containerSize = _a.containerSize,
        offset = _a.offset,
        overscanCount = _a.overscanCount;
    var totalSize = this.getTotalSize();

    if (totalSize === 0) {
      return {};
    }

    var maxOffset = offset + containerSize;
    var start = this.findNearestItem(offset);

    if (typeof start === "undefined") {
      throw Error("Invalid offset " + offset + " specified");
    }

    var datum = this.getSizeAndPositionForIndex(start);
    offset = datum.offset + datum.size;
    var stop = start;

    while (offset < maxOffset && stop < this.itemCount - 1) {
      stop++;
      offset += this.getSizeAndPositionForIndex(stop).size;
    }

    if (overscanCount) {
      start = Math.max(0, start - overscanCount);
      stop = Math.min(stop + overscanCount, this.itemCount - 1);
    }

    return {
      start: start,
      stop: stop
    };
  };
  /**
   * Clear all cached values for items after the specified index.
   * This method should be called for any item that has changed its size.
   * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionForIndex() is called.
   */


  ListManager.prototype.resetItem = function (index) {
    this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, index - 1);
  };
  /**
   * Searches for the item (index) nearest the specified offset.
   *
   * If no exact match is found the next lowest item index will be returned.
   * This allows partially visible items (with offsets just before/above the fold) to be visible.
   */


  ListManager.prototype.findNearestItem = function (offset) {
    if (isNaN(offset)) {
      throw Error("Invalid offset " + offset + " specified");
    } // Our search algorithms find the nearest match at or below the specified offset.
    // So make sure the offset is at least 0 or no match will be found.


    offset = Math.max(0, offset);
    var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
    var lastMeasuredIndex = Math.max(0, this.lastMeasuredIndex);

    if (lastMeasuredSizeAndPosition.offset >= offset) {
      // If we've already measured items within this range just use a binary search as it's faster.
      return this.binarySearch({
        high: lastMeasuredIndex,
        low: 0,
        offset: offset
      });
    } else {
      // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
      // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
      // The overall complexity for this approach is O(log n).
      return this.exponentialSearch({
        index: lastMeasuredIndex,
        offset: offset
      });
    }
  };

  ListManager.prototype.binarySearch = function (_a) {
    var low = _a.low,
        high = _a.high,
        offset = _a.offset;
    var middle = 0;
    var currentOffset = 0;

    while (low <= high) {
      middle = low + Math.floor((high - low) / 2);
      currentOffset = this.getSizeAndPositionForIndex(middle).offset;

      if (currentOffset === offset) {
        return middle;
      } else if (currentOffset < offset) {
        low = middle + 1;
      } else if (currentOffset > offset) {
        high = middle - 1;
      }
    }

    if (low > 0) {
      return low - 1;
    }

    return 0;
  };

  ListManager.prototype.exponentialSearch = function (_a) {
    var index = _a.index,
        offset = _a.offset;
    var interval = 1;

    while (index < this.itemCount && this.getSizeAndPositionForIndex(index).offset < offset) {
      index += interval;
      interval *= 2;
    }

    return this.binarySearch({
      high: Math.min(index, this.itemCount - 1),
      low: Math.floor(index / 2),
      offset: offset
    });
  };

  return ListManager;
}();

var STYLE_WRAPPER = {
  overflow: "auto",
  willChange: "transform",
  WebkitOverflowScrolling: "touch"
};
var STYLE_INNER = {
  position: "relative",
  width: "100%",
  minHeight: "100%"
};
var STYLE_ITEM = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%"
};

var STYLE_STICKY_ITEM = __assign(__assign({}, STYLE_ITEM), {
  position: "sticky"
});

var VirtualList =
/** @class */
function (_super) {
  __extends(VirtualList, _super);

  function VirtualList() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.itemSizeGetter = function (itemSize) {
      return function (index) {
        return _this.getSize(index, itemSize);
      };
    };

    _this.listManager = new ListManager({
      itemCount: _this.props.itemCount,
      itemSizeGetter: _this.itemSizeGetter(_this.props.itemSize),
      estimatedItemSize: _this.getEstimatedItemSize()
    });
    _this.state = {
      offset: _this.props.scrollOffset || _this.props.scrollToIndex != null && _this.getOffsetForIndex(_this.props.scrollToIndex) || 0,
      scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
    };
    _this.styleCache = {};
    _this.timer = 0;

    _this.getRef = function (node) {
      _this.rootNode = node;
    };

    _this.handleScroll = function (event) {
      var _a = _this.props,
          onScroll = _a.onScroll,
          onScrollEnd = _a.onScrollEnd;

      var offset = _this.getNodeOffset();

      if (offset < 0 || _this.state.offset === offset || event.target !== _this.rootNode) {
        return;
      }

      _this.setState({
        offset: offset,
        scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
      });

      if (typeof onScroll === "function") {
        onScroll(offset, event);
      }

      if (typeof onScrollEnd === "function") {
        clearTimeout(_this.timer);
        _this.timer = setTimeout(function (event) {
          _this.handleScrollEnd(offset, event);
        }, 500);
      }
    };

    _this.handleScrollEnd = function (preoffset, event) {
      var onScrollEnd = _this.props.onScrollEnd;

      var offset = _this.getNodeOffset();

      var index = _this.listManager.getLastMeasuredIndex();

      if (offset !== preoffset) {
        clearTimeout(_this.timer);
        _this.timer = setTimeout(function (event) {
          _this.handleScrollEnd(offset, event);
        }, 300);
      }

      typeof onScrollEnd === "function" && onScrollEnd(offset, event, index);
    };

    return _this;
  }

  VirtualList.prototype.componentDidMount = function () {
    var _a = this.props,
        scrollOffset = _a.scrollOffset,
        scrollToIndex = _a.scrollToIndex;
    this.rootNode.addEventListener("scroll", this.handleScroll, {
      passive: true
    });

    if (scrollOffset != null) {
      this.scrollTo(scrollOffset);
    } else if (scrollToIndex != null) {
      this.scrollTo(this.getOffsetForIndex(scrollToIndex));
    }
  };

  VirtualList.prototype.componentWillReceiveProps = function (nextProps) {
    var _a = this.props,
        estimatedItemSize = _a.estimatedItemSize,
        itemCount = _a.itemCount,
        itemSize = _a.itemSize,
        scrollOffset = _a.scrollOffset,
        scrollToAlignment = _a.scrollToAlignment,
        scrollToIndex = _a.scrollToIndex;
    var scrollPropsHaveChanged = nextProps.scrollToIndex !== scrollToIndex || nextProps.scrollToAlignment !== scrollToAlignment;
    var itemPropsHaveChanged = nextProps.itemCount !== itemCount || nextProps.itemSize !== itemSize || nextProps.estimatedItemSize !== estimatedItemSize;

    if (nextProps.itemSize !== itemSize) {
      this.listManager.updateConfig({
        itemSizeGetter: this.itemSizeGetter(nextProps.itemSize)
      });
    }

    if (nextProps.itemCount !== itemCount || nextProps.estimatedItemSize !== estimatedItemSize) {
      this.listManager.updateConfig({
        itemCount: nextProps.itemCount,
        estimatedItemSize: this.getEstimatedItemSize(nextProps)
      });
    }

    if (itemPropsHaveChanged) {
      this.recomputeSizes();
    }

    if (nextProps.scrollOffset !== scrollOffset) {
      this.setState({
        offset: nextProps.scrollOffset || 0,
        scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
      });
    } else if (typeof nextProps.scrollToIndex === "number" && (scrollPropsHaveChanged || itemPropsHaveChanged)) {
      this.setState({
        offset: this.getOffsetForIndex(nextProps.scrollToIndex, nextProps.scrollToAlignment, nextProps.itemCount),
        scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
      });
    }
  };

  VirtualList.prototype.componentDidUpdate = function (_, prevState) {
    var _a = this.state,
        offset = _a.offset,
        scrollChangeReason = _a.scrollChangeReason;

    if (prevState.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
      this.scrollTo(offset);
    }
  };

  VirtualList.prototype.componentWillUnmount = function () {
    this.rootNode.removeEventListener("scroll", this.handleScroll);
  };

  VirtualList.prototype.scrollTo = function (value) {
    var _a = this.props.scrollDirection,
        scrollDirection = _a === void 0 ? DIRECTION.VERTICAL : _a;
    this.rootNode[scrollProp[scrollDirection]] = value;
  };

  VirtualList.prototype.getOffsetForIndex = function (index, scrollToAlignment, itemCount) {
    if (scrollToAlignment === void 0) {
      scrollToAlignment = this.props.scrollToAlignment;
    }

    if (itemCount === void 0) {
      itemCount = this.props.itemCount;
    }

    var _a = this.props.scrollDirection,
        scrollDirection = _a === void 0 ? DIRECTION.VERTICAL : _a;

    if (index < 0 || index >= itemCount) {
      index = 0;
    }

    return this.listManager.getUpdatedOffsetForIndex({
      align: scrollToAlignment,
      containerSize: this.props[sizeProp[scrollDirection]],
      currentOffset: this.state && this.state.offset || 0,
      targetIndex: index
    });
  };

  VirtualList.prototype.recomputeSizes = function (startIndex) {
    if (startIndex === void 0) {
      startIndex = 0;
    }

    this.styleCache = {};
    this.listManager.resetItem(startIndex);
  };

  VirtualList.prototype.render = function () {
    var _a;

    var _this = this;

    var _b = this.props,
        estimatedItemSize = _b.estimatedItemSize,
        height = _b.height,
        _c = _b.overscanCount,
        overscanCount = _c === void 0 ? 3 : _c,
        renderItem = _b.renderItem,
        itemCount = _b.itemCount,
        itemSize = _b.itemSize,
        onItemsRendered = _b.onItemsRendered,
        onScroll = _b.onScroll,
        onScrollEnd = _b.onScrollEnd,
        _d = _b.scrollDirection,
        scrollDirection = _d === void 0 ? DIRECTION.VERTICAL : _d,
        scrollOffset = _b.scrollOffset,
        scrollToIndex = _b.scrollToIndex,
        scrollToAlignment = _b.scrollToAlignment,
        stickyIndices = _b.stickyIndices,
        style = _b.style,
        width = _b.width,
        props = __rest(_b, ["estimatedItemSize", "height", "overscanCount", "renderItem", "itemCount", "itemSize", "onItemsRendered", "onScroll", "onScrollEnd", "scrollDirection", "scrollOffset", "scrollToIndex", "scrollToAlignment", "stickyIndices", "style", "width"]);

    var offset = this.state.offset;

    var _e = this.listManager.getVisibleRange({
      containerSize: this.props[sizeProp[scrollDirection]] || 0,
      offset: offset,
      overscanCount: overscanCount
    }),
        start = _e.start,
        stop = _e.stop;

    var items = [];

    var wrapperStyle = __assign(__assign(__assign({}, STYLE_WRAPPER), style), {
      height: height,
      width: width
    });

    var innerStyle = __assign(__assign({}, STYLE_INNER), (_a = {}, _a[sizeProp[scrollDirection]] = this.listManager.getTotalSize(), _a));

    if (stickyIndices != null && stickyIndices.length !== 0) {
      stickyIndices.forEach(function (index) {
        return items.push(renderItem({
          index: index,
          style: _this.getStyle(index, true)
        }));
      });

      if (scrollDirection === DIRECTION.HORIZONTAL) {
        innerStyle.display = "flex";
      }
    }

    if (typeof start !== "undefined" && typeof stop !== "undefined") {
      for (var index = start; index <= stop; index++) {
        if (stickyIndices != null && stickyIndices.includes(index)) {
          continue;
        }

        items.push(renderItem({
          index: index,
          style: this.getStyle(index, false)
        }));
      }

      if (typeof onItemsRendered === "function") {
        onItemsRendered({
          startIndex: start,
          stopIndex: stop
        });
      }
    }

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", __assign({
      ref: this.getRef
    }, props, {
      style: wrapperStyle
    }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: innerStyle
    }, items));
  };

  VirtualList.prototype.getNodeOffset = function () {
    var _a = this.props.scrollDirection,
        scrollDirection = _a === void 0 ? DIRECTION.VERTICAL : _a;
    return this.rootNode[scrollProp[scrollDirection]];
  };

  VirtualList.prototype.getEstimatedItemSize = function (props) {
    if (props === void 0) {
      props = this.props;
    }

    return props.estimatedItemSize || typeof props.itemSize === "number" && props.itemSize || 50;
  };

  VirtualList.prototype.getSize = function (index, itemSize) {
    if (typeof itemSize === "function") {
      return itemSize(index);
    }

    return Array.isArray(itemSize) ? itemSize[index] : itemSize;
  };

  VirtualList.prototype.getStyle = function (index, sticky) {
    var _a, _b;

    var style = this.styleCache[index];

    if (style) {
      return style;
    }

    var _c = this.props.scrollDirection,
        scrollDirection = _c === void 0 ? DIRECTION.VERTICAL : _c;

    var _d = this.listManager.getSizeAndPositionForIndex(index),
        size = _d.size,
        offset = _d.offset;

    return this.styleCache[index] = sticky ? __assign(__assign({}, STYLE_STICKY_ITEM), (_a = {}, _a[sizeProp[scrollDirection]] = size, _a[marginProp[scrollDirection]] = offset, _a[oppositeMarginProp[scrollDirection]] = -(offset + size), _a.zIndex = 1, _a)) : __assign(__assign({}, STYLE_ITEM), (_b = {}, _b[sizeProp[scrollDirection]] = size, _b[positionProp[scrollDirection]] = offset, _b));
  };

  VirtualList.defaultProps = {
    overscanCount: 3,
    scrollDirection: DIRECTION.VERTICAL,
    width: "100%"
  };
  VirtualList.propTypes = {
    estimatedItemSize: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
    height: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]).isRequired,
    itemCount: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
    itemSize: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["array"], prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]]).isRequired,
    onScroll: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
    onScrollEnd: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
    onItemsRendered: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
    overscanCount: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
    renderItem: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
    scrollOffset: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
    scrollToIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
    scrollToAlignment: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])([ALIGNMENT.AUTO, ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END]),
    scrollDirection: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])([DIRECTION.HORIZONTAL, DIRECTION.VERTICAL]),
    stickyIndices: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]),
    style: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
    width: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]])
  };
  return VirtualList;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (VirtualList);



/***/ }),

/***/ "../../touch-effect/build/touch-effect.es.js":
/*!*****************************************************************************!*\
  !*** D:/PRO-github/resc/node_modules/touch-effect/build/touch-effect.es.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

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

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var TouchEffect =
/** @class */
function (_super) {
  __extends(TouchEffect, _super);

  function TouchEffect() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

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

  TouchEffect.prototype.componentDidUpdate = function () {
    if (this.props.disabled && this.state.active) {
      this.setState({
        active: false
      });
    }
  };

  TouchEffect.prototype.triggerEvent = function (type, isActive, ev) {
    var eventType = "on" + type;
    var children = this.props.children;

    if (children.props[eventType]) {
      children.props[eventType](ev);
    }

    if (isActive !== this.state.active) {
      this.setState({
        active: isActive
      });
    }
  };

  TouchEffect.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        disabled = _a.disabled,
        activeClassName = _a.activeClassName,
        activeStyle = _a.activeStyle;
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
      var _b = child.props,
          style = _b.style,
          className = _b.className;

      if (activeStyle !== false) {
        if (typeof activeStyle === "object") {
          style = __assign(__assign({}, style), activeStyle);
        }

        className = classnames(className, activeClassName);
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, __assign({
        className: className,
        style: style
      }, events));
    }

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, events);
  };

  TouchEffect.defaultProps = {
    disabled: false
  };
  TouchEffect.propTypes = {
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
    activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
    activeStyle: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["object"], prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]]),
    children: prop_types__WEBPACK_IMPORTED_MODULE_1__["element"]
  };
  return TouchEffect;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TouchEffect);


/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi D:/PRO-github/resc/index ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PRO-github\resc\index */"../../../index.js");


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-pearls.js.map