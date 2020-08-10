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

import classnames from "classnames";
import * as React from "react";

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

      return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
        className: classnames(className, prefixCls, "".concat(prefixCls, "-").concat(mode))
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-left"),
        role: "button",
        onClick: onLeftClick
      }, icon ?
      /*#__PURE__*/
      // tslint:disable-next-line:jsx-no-multiline-js
      React.createElement("span", {
        className: "".concat(prefixCls, "-left-icon"),
        "aria-hidden": "true"
      }, icon) : null, leftContent), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, children), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-right")
      }, rightContent));
    }
  }]);

  return NavBar;
}(React.Component);

export { NavBar as default };
NavBar.defaultProps = {
  prefixCls: "pm-navbar",
  mode: "dark",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onLeftClick: function onLeftClick() {}
};