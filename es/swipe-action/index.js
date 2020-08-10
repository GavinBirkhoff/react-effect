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

import classnames from "classnames";
import Swipeout from "../rp-swipeout";
import * as React from "react";

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
      var wrapClass = classnames(prefixCls, className);
      return left.length || right.length ? /*#__PURE__*/React.createElement("div", {
        style: style,
        className: className
      }, /*#__PURE__*/React.createElement(Swipeout, {
        prefixCls: prefixCls,
        left: left,
        right: right,
        autoClose: autoClose,
        disabled: disabled,
        onOpen: onOpen,
        onClose: onClose
      }, children)) : /*#__PURE__*/React.createElement("div", {
        style: style,
        className: wrapClass
      }, children);
    }
  }]);

  return SwipeAction;
}(React.Component);

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
export default SwipeAction;