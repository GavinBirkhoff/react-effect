"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames3 = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

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

      var wrapCls = (0, _classnames3["default"])(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-android"), platform === "android"));
      var fackInputCls = (0, _classnames3["default"])("checkbox", _defineProperty({}, "checkbox-disabled", disabled));
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

      return /*#__PURE__*/React.createElement("label", {
        className: wrapCls
      }, /*#__PURE__*/React.createElement("input", _extends({
        type: "checkbox",
        name: name,
        className: "".concat(prefixCls, "-checkbox"),
        disabled: disabled,
        checked: checked,
        onChange: this.onChange,
        value: checked ? "on" : "off"
      }, !disabled ? {
        onClick: this.onClick
      } : {}, globalProps)), /*#__PURE__*/React.createElement("div", _extends({
        className: fackInputCls,
        style: style
      }, disabled ? {
        onClick: this.onClick
      } : {})));
    }
  }]);

  return Switch;
}(React.Component);

exports["default"] = Switch;
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