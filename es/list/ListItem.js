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

var __rest = this && this.__rest || function (s, e) {
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


import classnames from "classnames";
import * as React from "react";
import TouchFeedback from "touch-effect";
export var Brief = /*#__PURE__*/function (_React$Component) {
  _inherits(Brief, _React$Component);

  var _super = _createSuper(Brief);

  function Brief() {
    _classCallCheck(this, Brief);

    return _super.apply(this, arguments);
  }

  _createClass(Brief, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "pm-list-brief",
        style: this.props.style
      }, this.props.children);
    }
  }]);

  return Brief;
}(React.Component);

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
      var wrapCls = classnames("".concat(prefixCls, "-item"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-item-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-item-error"), error), _defineProperty(_classnames, "".concat(prefixCls, "-item-top"), align === "top"), _defineProperty(_classnames, "".concat(prefixCls, "-item-middle"), align === "middle"), _defineProperty(_classnames, "".concat(prefixCls, "-item-bottom"), align === "bottom"), _classnames));
      var rippleCls = classnames("".concat(prefixCls, "-ripple"), _defineProperty({}, "".concat(prefixCls, "-ripple-animate"), RippleClicked));
      var lineCls = classnames("".concat(prefixCls, "-line"), (_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefixCls, "-line-multiple"), multipleLine), _defineProperty(_classnames3, "".concat(prefixCls, "-line-wrap"), wrap), _classnames3));
      var arrowCls = classnames("".concat(prefixCls, "-arrow"), (_classnames4 = {}, _defineProperty(_classnames4, "".concat(prefixCls, "-arrow-horizontal"), arrow === "horizontal"), _defineProperty(_classnames4, "".concat(prefixCls, "-arrow-vertical"), arrow === "down" || arrow === "up"), _defineProperty(_classnames4, "".concat(prefixCls, "-arrow-vertical-up"), arrow === "up"), _classnames4));
      var content = /*#__PURE__*/React.createElement("div", _extends({}, otherProps, {
        onClick: function onClick(ev) {
          _this2.onClick(ev);
        },
        className: wrapCls
      }), thumb ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-thumb")
      }, typeof thumb === "string" ? /*#__PURE__*/React.createElement("img", {
        src: thumb
      }) : thumb) : null, /*#__PURE__*/React.createElement("div", {
        className: lineCls
      }, children !== undefined && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children), extra !== undefined && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra), arrow && /*#__PURE__*/React.createElement("div", {
        className: arrowCls,
        "aria-hidden": "true"
      })), /*#__PURE__*/React.createElement("div", {
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
      return /*#__PURE__*/React.createElement(TouchFeedback, _extends({}, touchProps, {
        disabled: disabled || !onClick,
        activeStyle: activeStyle,
        activeClassName: "".concat(prefixCls, "-item-active")
      }), content);
    }
  }]);

  return ListItem;
}(React.Component);

ListItem.defaultProps = {
  prefixCls: "pm-list",
  align: "middle",
  error: false,
  multipleLine: false,
  wrap: false,
  platform: "ios"
};
ListItem.Brief = Brief;
export default ListItem;