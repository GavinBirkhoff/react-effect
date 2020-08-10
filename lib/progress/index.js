"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

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
      var wrapCls = (0, _classnames2["default"])("".concat(prefixCls, "-outer"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-fixed-outer"), position === "fixed"), _defineProperty(_classnames, "".concat(prefixCls, "-hide-outer"), !unfilled), _classnames));
      return /*#__PURE__*/React.createElement("div", {
        style: style,
        className: wrapCls,
        role: "progressbar",
        "aria-valuenow": this.props.percent,
        "aria-valuemin": 0,
        "aria-valuemax": 100
      }, /*#__PURE__*/React.createElement("div", {
        ref: function ref(el) {
          return _this2.barRef = el;
        },
        className: "".concat(prefixCls, "-bar"),
        style: _extends(_extends({}, barStyle), percentStyle)
      }));
    }
  }]);

  return Progress;
}(React.Component);

exports["default"] = Progress;
Progress.defaultProps = {
  prefixCls: "pm-progress",
  percent: 0,
  position: "fixed",
  unfilled: true,
  appearTransition: false
};