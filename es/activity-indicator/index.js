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
import classnames from "classnames";
import * as React from "react";

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
      var wrapClass = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-lg"), size === "large"), _defineProperty(_classnames, "".concat(prefixCls, "-sm"), size === "small"), _defineProperty(_classnames, "".concat(prefixCls, "-toast"), !!toast), _classnames));
      var spinnerClass = classnames("".concat(prefixCls, "-spinner"), _defineProperty({}, "".concat(prefixCls, "-spinner-lg"), !!toast || size === "large"));

      if (animating) {
        if (toast) {
          return /*#__PURE__*/React.createElement("div", {
            className: wrapClass
          }, text ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content")
          }, /*#__PURE__*/React.createElement("span", {
            className: spinnerClass,
            "aria-hidden": "true"
          }), /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-toast")
          }, text)) : /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content")
          }, /*#__PURE__*/React.createElement("span", {
            className: spinnerClass,
            "aria-label": "Loading"
          })));
        } else {
          return text ? /*#__PURE__*/React.createElement("div", {
            className: wrapClass
          }, /*#__PURE__*/React.createElement("span", {
            className: spinnerClass,
            "aria-hidden": "true"
          }), /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-tip")
          }, text)) : /*#__PURE__*/React.createElement("div", {
            className: wrapClass
          }, /*#__PURE__*/React.createElement("span", {
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
}(React.Component);

export { ActivityIndicator as default };
ActivityIndicator.defaultProps = {
  prefixCls: "pm-activity-indicator",
  animating: true,
  size: "small",
  panelColor: "rgba(34,34,34,0.6)",
  toast: false
};