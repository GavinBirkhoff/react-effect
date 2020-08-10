"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames3 = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _touchEffect = _interopRequireDefault(require("touch-effect"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var itemCls = (0, _classnames3["default"])("".concat(prefixCls, "-item"), _defineProperty({}, "".concat(prefixCls, "-item-selected"), selected));
      var itemStyle = {
        color: selected ? "#fff" : tintColor,
        backgroundColor: selected ? tintColor : "transparent",
        borderColor: tintColor
      };
      var activeInnerStyle = tintColor ? {
        backgroundColor: tintColor
      } : {};
      return /*#__PURE__*/React.createElement(_touchEffect["default"], {
        key: idx,
        disabled: disabled,
        activeClassName: "".concat(prefixCls, "-item-active")
      }, /*#__PURE__*/React.createElement("div", {
        className: itemCls,
        style: itemStyle,
        role: "tab",
        "aria-selected": selected && !disabled,
        "aria-disabled": disabled,
        onClick: disabled ? undefined : function (e) {
          return _this2.onClick(e, idx, value);
        }
      }, /*#__PURE__*/React.createElement("div", {
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
      var wrapCls = (0, _classnames3["default"])(className, prefixCls, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled));
      return /*#__PURE__*/React.createElement("div", {
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
}(React.Component);

exports["default"] = SegmentedControl;
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