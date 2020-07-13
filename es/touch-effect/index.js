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

import * as React from "react";
import classnames from "classnames";

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
      var child = React.Children.only(children);

      if (!disabled && this.state.active) {
        var _child$props = child.props,
            style = _child$props.style,
            className = _child$props.className;

        if (activeStyle !== false) {
          if (_typeof(activeStyle) === "object") {
            style = _extends(_extends({}, style), activeStyle);
          }

          className = classnames(className, activeClassName);
        }

        return /*#__PURE__*/React.cloneElement(child, _extends({
          className: className,
          style: style
        }, events));
      }

      return /*#__PURE__*/React.cloneElement(child, events);
    }
  }]);

  return TouchEffect;
}(React.Component);

export { TouchEffect as default };
TouchEffect.defaultProps = {
  disabled: false
};