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
import * as React from "react";
import List from "../list/index";

var PopupList = /*#__PURE__*/function (_React$Component) {
  _inherits(PopupList, _React$Component);

  var _super = _createSuper(PopupList);

  function PopupList(props) {
    var _this;

    _classCallCheck(this, PopupList);

    _this = _super.call(this, props);
    _this.ref = /*#__PURE__*/React.createRef();
    _this.windowMouseUpEventListener = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.state = {
      selected: 0
    };
    return _this;
  }

  _createClass(PopupList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("mouseup", this.windowMouseUpEventListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("mouseup", this.windowMouseUpEventListener);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className;
      var wrapCls = classnames(prefixCls, className);
      return /*#__PURE__*/React.createElement("div", {
        className: wrapCls
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, this.props.header && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, this.props.header), /*#__PURE__*/React.createElement("div", {
        ref: this.ref,
        onMouseUp: function onMouseUp(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, /*#__PURE__*/React.createElement(List, null, this.props.content.map(function (e, i) {
        return /*#__PURE__*/React.createElement(List.Item, {
          className: "".concat(_this2.state.selected === i ? "pm-popup-list-selected" : ""),
          key: i,
          onClick: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();

            _this2.setState({
              selected: i
            });

            _this2.props.onTap(e, i, true);
          }
        }, e);
      }))), this.props.footer && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, this.props.footer)));
    }
    /**
     * Cancel:
     * detect click outside of ref element, return current selected element
     */

  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      if (this.ref == null || this.ref.current == null) {
        return;
      }

      if (event.target != null && this.ref.current.contains(event.target)) {
        return;
      }

      for (var i = 0; i < this.props.content.length; i++) {
        if (i === this.state.selected) {
          var e = this.props.content[i];
          this.props.onTap(e, i, false);
        }
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("selected" in nextProps && nextProps.selected !== prevState.selected) {
        return {
          selected: nextProps.selected
        };
      }

      return null;
    }
  }]);

  return PopupList;
}(React.Component);

PopupList.defaultProps = {
  prefixCls: "pm-popup-list"
};
export default PopupList;