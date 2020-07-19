"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _touchEffect = _interopRequireDefault(require("touch-effect"));

var _icon = _interopRequireDefault(require("../icon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var __rest = void 0 && (void 0).__rest || function (s, e) {
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
    return /*#__PURE__*/React.cloneElement(child, {}, child.props.children.split("").join(" "));
  }

  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split("").join(" ");
    }

    return /*#__PURE__*/React.createElement("span", null, child);
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
      var wrapCls = (0, _classnames2["default"])(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-primary"), type === "primary"), _defineProperty(_classnames, "".concat(prefixCls, "-ghost"), type === "ghost"), _defineProperty(_classnames, "".concat(prefixCls, "-warning"), type === "warning"), _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === "small"), _defineProperty(_classnames, "".concat(prefixCls, "-inline"), inline), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classnames, "".concat(prefixCls, "-icon"), !!iconType), _classnames));
      var kids = React.Children.map(children, insertSpace);
      var iconEl;

      if (typeof iconType === "string") {
        iconEl = /*#__PURE__*/React.createElement(_icon["default"], {
          "aria-hidden": "true",
          type: iconType,
          size: size === "small" ? "xxs" : "md",
          className: "".concat(prefixCls, "-icon")
        });
      } else if (iconType) {
        var rawCls = iconType.props && iconType.props.className;
        var cls = (0, _classnames2["default"])("pm-icon", "".concat(prefixCls, "-icon"), size === "small" ? "pm-icon-xxs" : "pm-icon-md");
        iconEl = /*#__PURE__*/React.cloneElement(iconType, {
          className: rawCls ? "".concat(rawCls, " ").concat(cls) : cls
        });
      } // use div, button native is buggy @yiminghe


      return /*#__PURE__*/React.createElement(_touchEffect["default"] // tslint:disable-next-line:jsx-no-multiline-js
      , {
        activeClassName: activeClassName || (activeStyle ? "".concat(prefixCls, "-active") : undefined),
        disabled: disabled,
        activeStyle: activeStyle
      }, /*#__PURE__*/React.createElement("a", _extends({
        role: "button",
        className: wrapCls
      }, restProps, {
        onClick: disabled ? undefined : onClick,
        "aria-disabled": disabled
      }), iconEl, kids));
    }
  }]);

  return Button;
}(React.Component);

Button.defaultProps = {
  prefixCls: "pm-button",
  size: "large",
  inline: false,
  disabled: false,
  loading: false,
  activeStyle: {}
};
var _default = Button;
exports["default"] = _default;