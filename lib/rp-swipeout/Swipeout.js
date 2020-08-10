"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _gestureEffect = _interopRequireDefault(require("gesture-effect"));

var _classnames2 = _interopRequireDefault(require("classnames"));

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

// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// http://caniuse.com/#search=match
function closest(el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }

  return null;
}

var Swipeout = /*#__PURE__*/function (_React$Component) {
  _inherits(Swipeout, _React$Component);

  var _super = _createSuper(Swipeout);

  function Swipeout(props) {
    var _this;

    _classCallCheck(this, Swipeout);

    _this = _super.call(this, props);

    _this.onCloseSwipe = function (ev) {
      if (!(_this.openedLeft || _this.openedRight)) {
        return;
      }

      var pNode = closest(ev.target, ".".concat(_this.props.prefixCls, "-actions"));

      if (!pNode) {
        ev.preventDefault();

        _this.close();
      }
    };

    _this.onPanStart = function (e) {
      var direction = e.direction,
          moveStatus = e.moveStatus;
      var deltaX = moveStatus.x; // http://hammerjs.github.io/api/#directions

      var isLeft = direction === 2;
      var isRight = direction === 4;

      if (!isLeft && !isRight) {
        return;
      }

      var _this$props = _this.props,
          left = _this$props.left,
          right = _this$props.right;
      _this.needShowRight = isLeft && right.length > 0;
      _this.needShowLeft = isRight && left.length > 0;

      if (_this.left) {
        _this.left.style.visibility = _this.needShowRight ? "hidden" : "visible";
      }

      if (_this.right) {
        _this.right.style.visibility = _this.needShowLeft ? "hidden" : "visible";
      }

      if (_this.needShowLeft || _this.needShowRight) {
        _this.swiping = true;

        _this.setState({
          swiping: _this.swiping
        });

        _this._setStyle(deltaX);
      }
    };

    _this.onPanMove = function (e) {
      var moveStatus = e.moveStatus,
          srcEvent = e.srcEvent;
      var deltaX = moveStatus.x;

      if (!_this.swiping) {
        return;
      } // fixed scroll when it's pan and moving.


      if (srcEvent && srcEvent.preventDefault) {
        srcEvent.preventDefault();
      }

      _this._setStyle(deltaX);
    };

    _this.onPanEnd = function (e) {
      if (!_this.swiping) {
        return;
      }

      var moveStatus = e.moveStatus;
      var deltaX = moveStatus.x;
      var needOpenRight = _this.needShowRight && Math.abs(deltaX) > _this.btnsRightWidth / 2;
      var needOpenLeft = _this.needShowLeft && Math.abs(deltaX) > _this.btnsLeftWidth / 2;

      if (needOpenRight) {
        _this.doOpenRight();
      } else if (needOpenLeft) {
        _this.doOpenLeft();
      } else {
        _this.close();
      }

      _this.swiping = false;

      _this.setState({
        swiping: _this.swiping
      });

      _this.needShowLeft = false;
      _this.needShowRight = false;
    };

    _this.doOpenLeft = function () {
      _this.open(_this.btnsLeftWidth, true, false);
    };

    _this.doOpenRight = function () {
      _this.open(-_this.btnsRightWidth, true, false);
    }; // set content & actions style


    _this._setStyle = function (value) {
      var limit = value > 0 ? _this.btnsLeftWidth : -_this.btnsRightWidth;

      var contentLeft = _this._getContentEasing(value, limit);

      _this.content.style.left = "".concat(contentLeft, "px");

      if (_this.cover) {
        _this.cover.style.display = Math.abs(value) > 0 ? "block" : "none";
        _this.cover.style.left = "".concat(contentLeft, "px");
      }
    };

    _this.open = function (value, openedLeft, openedRight) {
      if (!_this.openedLeft && !_this.openedRight && _this.props.onOpen) {
        _this.props.onOpen();
      }

      _this.openedLeft = openedLeft;
      _this.openedRight = openedRight;

      _this._setStyle(value);
    };

    _this.close = function () {
      if ((_this.openedLeft || _this.openedRight) && _this.props.onClose) {
        _this.props.onClose();
      }

      _this._setStyle(0);

      _this.openedLeft = false;
      _this.openedRight = false;
    };

    _this.onTouchMove = function (e) {
      if (_this.swiping) {
        e.preventDefault();
      }
    };

    _this.state = {
      swiping: false
    };
    _this.openedLeft = false;
    _this.openedRight = false;
    return _this;
  }

  _createClass(Swipeout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.btnsLeftWidth = this.left ? this.left.offsetWidth : 0;
      this.btnsRightWidth = this.right ? this.right.offsetWidth : 0;
      document.body.addEventListener("touchstart", this.onCloseSwipe, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener("touchstart", this.onCloseSwipe, true);
    } // left & right button click

  }, {
    key: "onBtnClick",
    value: function onBtnClick(ev, btn) {
      var onPress = btn.onPress;

      if (onPress) {
        onPress(ev);
      }

      if (this.props.autoClose) {
        this.close();
      }
    }
  }, {
    key: "_getContentEasing",
    value: function _getContentEasing(value, limit) {
      // limit content style left when value > actions width
      var delta = Math.abs(value) - Math.abs(limit);
      var isOverflow = delta > 0;
      var factor = limit > 0 ? 1 : -1;

      if (isOverflow) {
        value = limit + Math.pow(delta, 0.85) * factor;
        return Math.abs(value) > Math.abs(limit) ? limit : value;
      }

      return value;
    }
  }, {
    key: "renderButtons",
    value: function renderButtons(buttons, _ref) {
      var _this2 = this;

      var prefixCls = this.props.prefixCls;
      return buttons && buttons.length ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-actions ").concat(prefixCls, "-actions-").concat(_ref),
        ref: function ref(el) {
          return _this2[_ref] = el;
        }
      }, buttons.map(function (btn, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: i // eslint-disable-next-line no-prototype-builtins
          ,
          className: "".concat(prefixCls, "-btn ").concat(btn.hasOwnProperty("className") ? btn.className : ""),
          style: btn.style,
          role: "button",
          onClick: function onClick(e) {
            return _this2.onBtnClick(e, btn);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-btn-text")
        }, btn.text || "Click"));
      })) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          left = _a.left,
          right = _a.right,
          disabled = _a.disabled,
          children = _a.children,
          restProps = __rest(_a, ["prefixCls", "left", "right", "disabled", "children"]);

      var autoClose = restProps.autoClose,
          onOpen = restProps.onOpen,
          onClose = restProps.onClose,
          divProps = __rest(restProps, ["autoClose", "onOpen", "onClose"]);

      var cls = (0, _classnames2["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-swiping"), this.state.swiping));
      var refProps = {
        // eslint-disable-next-line react/no-find-dom-node
        ref: function ref(el) {
          return _this3.content = _reactDom["default"].findDOMNode(el);
        }
      };
      return (left.length || right.length) && !disabled ? /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: cls
      }, divProps), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-cover"),
        ref: function ref(el) {
          return _this3.cover = el;
        }
      }), this.renderButtons(left, "left"), this.renderButtons(right, "right"), /*#__PURE__*/_react["default"].createElement(_gestureEffect["default"], _extends({
        onTouchMove: this.onTouchMove,
        onPanStart: this.onPanStart,
        onPanMove: this.onPanMove,
        onPanEnd: this.onPanEnd,
        onPanCancel: this.onPanEnd,
        onSwipeLeft: this.doOpenRight,
        onSwipeRight: this.doOpenLeft,
        direction: "horizontal"
      }, refProps), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children))) : /*#__PURE__*/_react["default"].createElement("div", _extends({}, refProps, divProps), children);
    }
  }]);

  return Swipeout;
}(_react["default"].Component);

exports["default"] = Swipeout;
Swipeout.defaultProps = {
  prefixCls: "rp-swipeout",
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOpen: function onOpen() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
};