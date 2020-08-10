"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames4 = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _touchEffect = _interopRequireDefault(require("touch-effect"));

var _getDataAttr = _interopRequireDefault(require("../_util/getDataAttr"));

var _getLocale = require("../_util/getLocale");

var _PropsType = require("./PropsType");

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

function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }

  return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

var SearchBar = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  var _super = _createSuper(SearchBar);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _super.call(this, props);

    _this.onSubmit = function (e) {
      e.preventDefault();

      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state.value || "");
      }

      if (_this.inputRef) {
        _this.inputRef.blur();
      }
    };

    _this.onChange = function (e) {
      if (!_this.state.focus) {
        _this.setState({
          focus: true
        });
      }

      var value = e.target.value;

      if (!("value" in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    };

    _this.onFocus = function () {
      _this.setState({
        focus: true
      });

      _this.firstFocus = true;

      if (_this.props.onFocus) {
        _this.props.onFocus();
      }
    };

    _this.onBlur = function () {
      _this.onBlurTimeout = onNextFrame(function () {
        if (!_this.blurFromOnClear) {
          if (document.activeElement !== _this.inputRef) {
            _this.setState({
              focus: false
            });
          }
        }

        _this.blurFromOnClear = false;
      });

      if (_this.props.onBlur) {
        // fix autoFocus item blur with flash
        setTimeout(function () {
          // fix ios12 wechat browser click failure after input
          if (document.body) {
            // eslint-disable-next-line no-self-assign
            document.body.scrollTop = document.body.scrollTop;
          }
        }, 100);

        _this.props.onBlur();
      }
    };

    _this.onClear = function () {
      _this.doClear();
    };

    _this.doClear = function () {
      var blurFromOnClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      _this.blurFromOnClear = blurFromOnClear;

      if (!("value" in _this.props)) {
        _this.setState({
          value: ""
        });
      }

      if (_this.props.onClear) {
        _this.props.onClear("");
      }

      if (_this.props.onChange) {
        _this.props.onChange("");
      }

      if (blurFromOnClear) {
        _this.focus();
      }
    };

    _this.onCancel = function () {
      if (_this.props.onCancel) {
        _this.props.onCancel(_this.state.value || "");
      } else {
        _this.doClear(false);
      }
    };

    _this.focus = function () {
      if (_this.inputRef) {
        _this.inputRef.focus();
      }
    };

    var value;

    if ("value" in props) {
      value = props.value || "";
    } else if ("defaultValue" in props) {
      value = props.defaultValue;
    } else {
      value = "";
    }

    _this.state = {
      value: value,
      focus: false
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.rightBtnRef) {
        var initBtn = window.getComputedStyle(this.rightBtnRef);
        this.rightBtnInitMarginleft = initBtn.marginLeft;
      }

      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.syntheticPhRef) {
        if (this.inputContainerRef && this.inputContainerRef.className.indexOf("".concat(this.props.prefixCls, "-start")) > -1) {
          // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
          // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
          if (this.syntheticPhContainerRef) {
            var realWidth = this.syntheticPhContainerRef.getBoundingClientRect().width; // 包含小数

            this.syntheticPhRef.style.width = "".concat(Math.ceil(realWidth), "px");
          }

          if (!this.props.showCancelButton && this.rightBtnRef) {
            this.rightBtnRef.style.marginRight = "0";
          }
        } else {
          this.syntheticPhRef.style.width = "100%";

          if (!this.props.showCancelButton && this.rightBtnRef) {
            this.rightBtnRef.style.marginRight = "-".concat(this.rightBtnRef.offsetWidth + (this.rightBtnInitMarginleft != null ? parseInt(this.rightBtnInitMarginleft, 10) : 0), "px");
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onBlurTimeout) {
        clearNextFrameAction(this.onBlurTimeout);
        this.onBlurTimeout = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames3,
          _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          showCancelButton = _this$props.showCancelButton,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          style = _this$props.style,
          maxLength = _this$props.maxLength; // tslint:disable-next-line:variable-name

      var _locale = (0, _getLocale.getComponentLocale)(this.props, this.context, "SearchBar", function () {
        return require("./locale/zh_CN");
      });

      var cancelText = _locale.cancelText;
      var _this$state = this.state,
          value = _this$state.value,
          focus = _this$state.focus;
      var wrapCls = (0, _classnames4["default"])(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-start"), !!(focus || value && value.length > 0)));
      var clearCls = (0, _classnames4["default"])("".concat(prefixCls, "-clear"), _defineProperty({}, "".concat(prefixCls, "-clear-show"), !!(focus && value && value.length > 0)));
      var cancelCls = (0, _classnames4["default"])("".concat(prefixCls, "-cancel"), (_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefixCls, "-cancel-show"), !!(showCancelButton || focus || value && value.length > 0)), _defineProperty(_classnames3, "".concat(prefixCls, "-cancel-anim"), this.firstFocus), _classnames3));
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onSubmit,
        className: wrapCls,
        style: style,
        ref: function ref(el) {
          return _this2.inputContainerRef = el;
        },
        action: "#"
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-input")
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-synthetic-ph"),
        ref: function ref(el) {
          return _this2.syntheticPhRef = el;
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-synthetic-ph-container"),
        ref: function ref(el) {
          return _this2.syntheticPhContainerRef = el;
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "".concat(prefixCls, "-synthetic-ph-icon")
      }), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-synthetic-ph-placeholder") // tslint:disable-next-line:jsx-no-multiline-js
        ,
        style: {
          visibility: placeholder && !value ? "visible" : "hidden"
        }
      }, placeholder))), /*#__PURE__*/React.createElement("input", _extends({
        type: "search",
        className: "".concat(prefixCls, "-value"),
        value: value,
        disabled: disabled,
        placeholder: placeholder,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        maxLength: maxLength
      }, (0, _getDataAttr["default"])(this.props))), /*#__PURE__*/React.createElement(_touchEffect["default"], {
        activeClassName: "".concat(prefixCls, "-clear-active")
      }, /*#__PURE__*/React.createElement("a", {
        onClick: this.onClear,
        className: clearCls
      }))), /*#__PURE__*/React.createElement("div", {
        className: cancelCls,
        onClick: this.onCancel,
        ref: function ref(el) {
          return _this2.rightBtnRef = el;
        }
      }, this.props.cancelText || cancelText));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("value" in nextProps && nextProps.value !== prevState.value) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return SearchBar;
}(React.Component);

exports["default"] = SearchBar;
SearchBar.defaultProps = _PropsType.defaultProps;
SearchBar.contextTypes = {
  antLocale: PropTypes.object
};